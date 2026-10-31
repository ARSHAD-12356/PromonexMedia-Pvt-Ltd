import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/session";

/*
 * Promonex Media Middleware:
 * 1. Global SEO Canonicalization & Preferred Domain (HTTPS + www.promonexmedia.com, 301 permanent)
 * 2. Route Normalization (/blogs -> /blog, remove trailing slashes)
 * 3. Admin Authentication & Session Protection
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = (
    req.headers.get("x-forwarded-host") || req.headers.get("host") || req.nextUrl.host
  )
    .split(",")[0]
    .trim()
    .toLowerCase();
  const hostname = host.replace(/:\d+$/, "");
  const forwardedProto = req.headers.get("x-forwarded-proto")?.split(",")[0].trim().toLowerCase();
  const redirectUrl = new URL(req.url);
  const protocol = forwardedProto || redirectUrl.protocol.replace(":", "").toLowerCase();
  let shouldRedirect = false;

  // Normalize protocol and host while preserving path and query parameters.
  // Preview deployments and localhost are not redirected.
  if (
    (hostname === "promonexmedia.com" || hostname === "www.promonexmedia.com") &&
    (hostname !== "www.promonexmedia.com" || protocol !== "https")
  ) {
    redirectUrl.protocol = "https:";
    redirectUrl.hostname = "www.promonexmedia.com";
    redirectUrl.port = "";
    shouldRedirect = true;
  }

  // Map the legacy /blogs alias and strip trailing slashes in the same
  // response, preventing multi-hop redirects for older URLs.
  let normalizedPathname = pathname;
  if (pathname === "/blogs" || pathname.startsWith("/blogs/")) {
    normalizedPathname = `/blog${pathname.slice("/blogs".length)}`;
  }
  if (normalizedPathname.length > 1 && normalizedPathname.endsWith("/")) {
    normalizedPathname = normalizedPathname.slice(0, -1);
  }
  if (normalizedPathname !== pathname) {
    redirectUrl.pathname = normalizedPathname;
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // Admin Route Authentication
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
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
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Keep public files in the matcher so host normalization also applies to
     * sitemap.xml, robots.txt, and public assets.
     */
    "/((?!_next/static|_next/image|_next/data).*)",
  ],
};
