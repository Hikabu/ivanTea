import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (/^\/(en|ru)(\/|$)/.test(pathname)) return NextResponse.next();
  request.nextUrl.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|images|icon.svg|favicon.ico|robots.txt|sitemap.xml).*)"],
};
