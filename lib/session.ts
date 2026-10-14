/*
 * Admin session tokens: base64url(payload).base64url(HMAC-SHA256(payload)).
 * Web Crypto only, so it works in middleware (edge) and route handlers (node).
 */

export const SESSION_COOKIE = "promonex_admin_session";
export const SESSION_MAX_AGE = 60 * 60 * 12; // 12 hours

export interface SessionPayload {
  sub: string; // admin id
  exp: number; // unix seconds
}

const encoder = new TextEncoder();

function toBase64Url(bytes: Uint8Array): string {
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(s: string): Uint8Array {
  const bin = atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

async function hmacKey(): Promise<CryptoKey> {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET is missing or too short (min 32 characters).");
  }
  return crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
    "verify",
  ]);
}

export async function hmac(value: string): Promise<string> {
  return toBase64Url(new Uint8Array(await crypto.subtle.sign("HMAC", await hmacKey(), encoder.encode(value))));
}

export async function createSessionToken(adminId: string): Promise<string> {
  const payload: SessionPayload = { sub: adminId, exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE };
  const body = toBase64Url(encoder.encode(JSON.stringify(payload)));
  return `${body}.${await hmac(body)}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<SessionPayload | null> {
  if (!token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  try {
    const ok = await crypto.subtle.verify(
      "HMAC",
      await hmacKey(),
      fromBase64Url(sig) as unknown as ArrayBuffer,
      encoder.encode(body)
    );
    if (!ok) return null;
    const payload = JSON.parse(new TextDecoder().decode(fromBase64Url(body))) as SessionPayload;
    if (!payload.sub || payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

/** CSRF token bound to the session token (sent back by the client in X-CSRF-Token). */
export function csrfForSession(sessionToken: string): Promise<string> {
  return hmac(`csrf:${sessionToken}`);
}
