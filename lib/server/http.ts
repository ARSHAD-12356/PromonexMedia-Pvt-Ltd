import "server-only";
import { NextResponse, type NextRequest } from "next/server";

/** Error with an HTTP status that route handlers turn into a JSON response. */
export class ApiError extends Error {
  constructor(
    message: string,
    public status = 400,
    public extra: Record<string, unknown> = {}
  ) {
    super(message);
  }
}

export function json(data: Record<string, unknown>, status = 200, headers: Record<string, string> = {}) {
  return NextResponse.json({ ok: status < 400, ...data }, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

/** Wrap a handler: ApiError → its status, anything else → logged 500 (no internals leaked). */
export function handle<A extends unknown[]>(fn: (...args: A) => Promise<Response>) {
  return async (...args: A): Promise<Response> => {
    try {
      return await fn(...args);
    } catch (err) {
      if (err instanceof ApiError) {
        return json({ error: err.message, ...err.extra }, err.status);
      }
      console.error("[api]", err);
      return json({ error: "Internal server error." }, 500);
    }
  };
}

export async function readJson(req: NextRequest): Promise<Record<string, unknown>> {
  const text = await req.text();
  if (text.length > 2 * 1024 * 1024) throw new ApiError("Request body too large.", 413);
  if (!text) return {};
  try {
    const data = JSON.parse(text);
    if (data && typeof data === "object" && !Array.isArray(data)) return data;
  } catch {
    /* fall through */
  }
  throw new ApiError("Invalid JSON body.", 400);
}

/** State-changing requests must come from this site (blocks cross-site form/fetch attacks). */
export function requireSameOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin) throw new ApiError("Request origin not allowed.", 403);
  let host: string;
  try {
    host = new URL(origin).host;
  } catch {
    throw new ApiError("Request origin not allowed.", 403);
  }
  const expected = req.headers.get("x-forwarded-host") || req.headers.get("host") || req.nextUrl.host;
  if (host !== expected) throw new ApiError("Request origin not allowed.", 403);
}

export function clientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "local";
}
