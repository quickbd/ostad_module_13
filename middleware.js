import { NextResponse } from "next/server";
export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/token")) {
    return NextResponse.next();
  } else if (req.nextUrl.pathname.startsWith("/myaccount")) {
    //const response = new NextResponse();
    return NextResponse.redirect(new URL("/redirectpage", req.url));
  }
}
