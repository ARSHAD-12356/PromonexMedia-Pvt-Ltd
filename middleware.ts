import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/session";

/*
 * First line of defence for the admin area (signature + expiry only; the API routes also
 * check the admin still exists and enforce CSRF on writes).
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await verifySessionToken(req.cookies.get(SESSION_COOKIE)?.value);

  if (pathname.startsWith("/api/admin")) {
    if (!session) {
      return NextResponse.json({ ok: false, error: "Not authenticated." }, { status: 401 });
    }
    return NextResponse.next();
  }

  if (pathname === "/admin/login") {
    return session ? NextResponse.redirect(new URL("/admin/blog", req.url)) : NextResponse.next();
  }

  if (!session) {
    const url = new URL("/admin/login", req.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
