import { NextResponse } from "next/server";
export async function middleware(res, req) {
  if (req.nextUrl.pathname.startswith("/api/token")) {
    return NextResponse.next();
  } else if (req.nextUrl.pathname.startswith("/api/myaccount")) {
    console.log(3333);
    const response = new NextResponse();
    response.redirect("/rediectpage");
    return response;
  }
}
