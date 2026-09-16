import { NextResponse, type NextRequest } from "next/server";
import { buildCheckPath } from "@/lib/channelRoutes";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const forwardedHost = request.headers.get("x-forwarded-host");
  const requestHost = forwardedHost ?? request.headers.get("host") ?? request.nextUrl.hostname;
  const hostname = requestHost.split(":")[0].toLowerCase();

  if (hostname === "www.ismonetized.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = "ismonetized.com";
    url.port = "";

    return NextResponse.redirect(url, 308);
  }

  if (!pathname.startsWith("/check/")) {
    return NextResponse.next();
  }

  const rawHandle = pathname.slice("/check/".length);
  const canonicalPath = buildCheckPath(rawHandle);

  if (!canonicalPath || canonicalPath === pathname) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = canonicalPath;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
