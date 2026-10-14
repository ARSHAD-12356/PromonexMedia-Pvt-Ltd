import type { NextRequest } from "next/server";
import { handle, json, readJson } from "@/lib/server/http";
import { login, startSession, toPublicAdmin } from "@/lib/server/auth";

export const runtime = "nodejs";

export const POST = handle(async (req: NextRequest) => {
  const body = await readJson(req);
  const identifier =
    typeof body.email === "string" ? body.email : typeof body.username === "string" ? body.username : "";
  const password = typeof body.password === "string" ? body.password : "";
  const admin = await login(req, identifier, password);
  const res = json({ admin: toPublicAdmin(admin) });
  const csrfToken = await startSession(res, admin);
  // The first body is already serialised, so send one that includes the CSRF token (same cookies)
  const out = json({ admin: toPublicAdmin(admin), csrfToken });
  res.cookies.getAll().forEach((c) => out.cookies.set(c));
  return out;
});
