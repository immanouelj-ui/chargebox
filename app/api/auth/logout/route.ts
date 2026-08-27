import { NextResponse } from "next/server";
import { deleteSessionCookie } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST() {
  await deleteSessionCookie();
  return NextResponse.json({ success: true });
}

export async function GET(req: Request) {
  await deleteSessionCookie();
  const url = new URL(req.url);
  return NextResponse.redirect(`${url.origin}/connexion`);
}
