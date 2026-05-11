import { NextResponse, type NextRequest } from "next/server";
import { buildCheckPath } from "@/lib/channelRoutes";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
  matcher: ["/check/:handle"],
};
