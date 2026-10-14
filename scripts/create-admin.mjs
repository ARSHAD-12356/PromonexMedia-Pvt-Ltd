#!/usr/bin/env node
/**
 * Create or reset an admin account in MongoDB.
 *
 *   npm run create-admin -- --email admin@promonexmedia.com --username promonex_admin --name "Promonex Admin"
 *
 * The password is asked for interactively (never pass it on the command line).
 * Reads MONGODB_URI / MONGODB_DB / MONGODB_DNS_SERVERS from .env.local or the environment.
 */
import { readFileSync, existsSync } from "node:fs";
import { randomBytes, scrypt } from "node:crypto";
import { promisify } from "node:util";
import dns from "node:dns";
import readline from "node:readline";
import { MongoClient } from "mongodb";

for (const file of [".env.local", ".env"]) {
  if (!existsSync(file)) continue;
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, all) => {
    if (cur.startsWith("--")) acc.push([cur.slice(2), all[i + 1]]);
    return acc;
  }, [])
);
const email = (args.email || "").trim().toLowerCase();
const username = (args.username || "").trim().toLowerCase();
const name = (args.name || "Promonex Admin").trim();

if (!email && !username) {
  console.error("Usage: npm run create-admin -- --email <email> [--username <id>] [--name <name>]");
  process.exit(1);
}
if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is not set (.env.local).");
  process.exit(1);
}
if (process.env.MONGODB_DNS_SERVERS) {
  const servers = process.env.MONGODB_DNS_SERVERS.split(",").map((s) => s.trim()).filter(Boolean);
  dns.setServers(servers);
  dns.promises.setServers(servers);
}

function askHidden(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    rl._writeToOutput = (s) => rl.output.write(s.startsWith(question) ? s : "");
    rl.question(question, (answer) => {
      rl.close();
      process.stdout.write("\n");
      resolve(answer);
    });
  });
}

const password = await askHidden("New admin password (min 10 chars): ");
if (password.length < 10) {
  console.error("Password too short.");
  process.exit(1);
}
if ((await askHidden("Repeat password: ")) !== password) {
  console.error("Passwords do not match.");
  process.exit(1);
}

const salt = randomBytes(16);
const hash = await promisify(scrypt)(password, salt, 64);
const passwordHash = `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;

const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 15000 });
try {
  await client.connect();
  const admins = client.db(process.env.MONGODB_DB || "promonex").collection("admins");
  const match = [email && { email }, username && { username }].filter(Boolean);
  const now = new Date();
  const set = { name, passwordHash, role: "admin", isActive: true, updatedAt: now };
  if (email) set.email = email;
  if (username) set.username = username;
  const res = await admins.updateOne({ $or: match }, { $set: set, $setOnInsert: { createdAt: now } }, { upsert: true });
  console.log(res.upsertedCount ? "Admin created." : "Admin updated (password reset).");
  // Clear any login lockout for this account
  await client
    .db(process.env.MONGODB_DB || "promonex")
    .collection("login_attempts")
    .deleteMany({ key: { $in: [email, username].filter(Boolean).map((k) => `acct:${k}`) } });
} catch (err) {
  console.error("Failed:", err.message);
  process.exitCode = 1;
} finally {
  await client.close();
}
