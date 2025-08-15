import { NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest) {
  // const { fullname, email, message } = await req.json();

  return NextResponse.json({ message: "Hi from jirk24cay0988@gmail.com" });
}
