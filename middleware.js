import { NextResponse } from "next/server";
export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/token")) {
    return NextResponse.next();
  } else if (req.nextUrl.pathname.startsWith("/myaccount")) {
    console.log(3333);
    const response = new NextResponse();
    response.redirect("/rediectpage");
    return response;
  }
}
