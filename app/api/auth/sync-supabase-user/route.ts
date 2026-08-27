import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createSessionToken, setSessionCookie } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    const cleanEmail = email.toLowerCase().trim();
    const isAdmin = cleanEmail === "immanouelj@gmail.com";

    // Find or create user in Prisma database
    let user = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: cleanEmail,
          name: name || cleanEmail.split("@")[0],
          role: isAdmin ? "ADMIN" : "CUSTOMER",
        },
      });
    } else if (isAdmin && user.role !== "ADMIN") {
      // Ensure immanouelj@gmail.com is always ADMIN
      user = await prisma.user.update({
        where: { id: user.id },
        data: { role: "ADMIN" },
      });
    }

    // Create session token
    const token = await createSessionToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as "ADMIN" | "CUSTOMER" | "PRO",
    });

    await setSessionCookie(token);

    return NextResponse.json({ success: true, user });
  } catch (error: any) {
    console.error("Sync Supabase User error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
