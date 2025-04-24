import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET ? "***" : "undefined",
  });
}
