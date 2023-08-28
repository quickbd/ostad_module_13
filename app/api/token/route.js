import { headers } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  let headlist = headers();
  let token = headlist.get("auth_token");
  //console.log(headlist);
  let responseData = {
    message: "Bearer Authorization Token",
    auth_token: `Bearer ${token}`,
  };
  return NextResponse.json(responseData);
}
