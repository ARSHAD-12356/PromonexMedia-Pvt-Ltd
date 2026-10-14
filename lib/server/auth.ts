import "server-only";
import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import type { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import { ApiError, clientIp, requireSameOrigin } from "./http";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE,
  createSessionToken,
  csrfForSession,
  verifySessionToken,
} from "@/lib/session";

const scryptAsync = promisify(scrypt) as (password: string, salt: Buffer, keylen: number) => Promise<Buffer>;

export interface AdminDoc {
  _id: ObjectId;
  name?: string;
  email?: string;
  username?: string;
  passwordHash: string; // scrypt$<saltHex>$<hashHex>
  role?: "admin" | "editor";
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  lastLoginAt?: Date;
}

export interface PublicAdmin {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function toPublicAdmin(a: AdminDoc): PublicAdmin {
  return {
    id: a._id.toHexString(),
    name: a.name || a.username || "Admin",
    email: a.email || a.username || "",
    role: a.role || "admin",
  };
}

// ── Passwords ──────────────────────────────────────────────────────────────
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const hash = await scryptAsync(password, salt, 64);
  return `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;
}

async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [algo, saltHex, hashHex] = stored.split("$");
  if (algo !== "scrypt" || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = await scryptAsync(password, Buffer.from(saltHex, "hex"), expected.length);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

// Same cost as a real check, so unknown accounts can't be detected by timing
const DUMMY_HASH = `scrypt$${"0".repeat(32)}$${"0".repeat(128)}`;

// ── Login rate limiting (stored in MongoDB so it works across serverless instances) ──
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_ACCOUNT = 5;
const MAX_PER_IP = 20;

async function assertNotLimited(keys: { key: string; max: number }[]) {
  const col = (await getDb()).collection<{ key: string; count: number; expiresAt: Date }>("login_attempts");
  const docs = await col.find({ key: { $in: keys.map((k) => k.key) }, expiresAt: { $gt: new Date() } }).toArray();
  for (const { key, max } of keys) {
    const doc = docs.find((d) => d.key === key);
    if (doc && doc.count >= max) {
      const mins = Math.max(1, Math.ceil((doc.expiresAt.getTime() - Date.now()) / 60000));
      throw new ApiError(`Too many failed login attempts. Try again in ${mins} minute(s).`, 429);
    }
  }
}

async function recordFailure(keys: string[]) {
  const col = (await getDb()).collection<{ key: string; count: number; expiresAt: Date }>("login_attempts");
  const now = new Date();
  for (const key of keys) {
    // Reset expired windows, then count
    await col.deleteOne({ key, expiresAt: { $lte: now } });
    await col.updateOne(
      { key },
      { $inc: { count: 1 }, $setOnInsert: { expiresAt: new Date(now.getTime() + WINDOW_MS) } },
      { upsert: true }
    );
  }
}

async function clearFailures(keys: string[]) {
  await (await getDb()).collection("login_attempts").deleteMany({ key: { $in: keys } });
}

// ── Sessions ───────────────────────────────────────────────────────────────
/** Verify credentials (email or legacy username) and return the admin. Throws on failure. */
export async function login(req: NextRequest, identifier: string, password: string): Promise<AdminDoc> {
  requireSameOrigin(req);
  const id = identifier.trim().toLowerCase();
  if (!id || !password || password.length > 200) {
    throw new ApiError("Please enter your admin email and password.", 422);
  }
  const accountKey = `acct:${id}`;
  const ipKey = `ip:${clientIp(req)}`;
  await assertNotLimited([
    { key: accountKey, max: MAX_PER_ACCOUNT },
    { key: ipKey, max: MAX_PER_IP },
  ]);

  const admins = (await getDb()).collection<AdminDoc>("admins");
  const admin = await admins.findOne({ $or: [{ email: id }, { username: id }] });
  const valid = await verifyPassword(password, admin?.passwordHash || DUMMY_HASH);
  if (!admin || !valid || admin.isActive === false) {
    await recordFailure([accountKey, ipKey]);
    throw new ApiError("Invalid email or password.", 401);
  }
  await clearFailures([accountKey]);
  await admins.updateOne({ _id: admin._id }, { $set: { lastLoginAt: new Date() } });
  return admin;
}

export async function startSession(res: NextResponse, admin: AdminDoc): Promise<string> {
  const token = await createSessionToken(admin._id.toHexString());
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return csrfForSession(token);
}

export function endSession(res: NextResponse) {
  res.cookies.set(SESSION_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
}

/** Current admin from the session cookie, or null. */
export async function currentAdmin(req: NextRequest): Promise<{ admin: AdminDoc; csrf: string } | null> {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifySessionToken(token);
  if (!session || !token || !ObjectId.isValid(session.sub)) return null;
  const admin = await (await getDb())
    .collection<AdminDoc>("admins")
    .findOne({ _id: new ObjectId(session.sub) });
  if (!admin || admin.isActive === false) return null;
  return { admin, csrf: await csrfForSession(token) };
}

/** Guard for admin endpoints: valid session; writes also need same-origin + CSRF header. */
export async function requireAdmin(req: NextRequest): Promise<AdminDoc> {
  const current = await currentAdmin(req);
  if (!current) throw new ApiError("Not authenticated.", 401);
  if (!["GET", "HEAD"].includes(req.method)) {
    requireSameOrigin(req);
    const sent = req.headers.get("x-csrf-token") || "";
    const a = Buffer.from(sent);
    const b = Buffer.from(current.csrf);
    if (a.length !== b.length || !timingSafeEqual(a, b)) {
      throw new ApiError("Invalid or missing CSRF token. Please reload the page.", 403);
    }
  }
  return current.admin;
}
