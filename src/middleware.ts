import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  if (isLoginPage) {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_token")?.value;
  const secret = process.env.JWT_SECRET;

  if (!token || !secret) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    jwt.verify(token, secret);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}

export const config = {
  matcher: "/admin/:path*",
};
