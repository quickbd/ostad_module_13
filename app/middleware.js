import { NextResponse } from "next/server";

export async function middleware(res, req) {
  
  return NextResponse.redirect('/home');
}
