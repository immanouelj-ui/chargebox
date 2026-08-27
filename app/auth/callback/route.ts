import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createSessionToken, setSessionCookie } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const origin = url.origin;

  if (code) {
    try {
      // Exchange code via Supabase auth API
      const supabaseUrl =
        process.env.NEXT_PUBLIC_SUPABASE_URL || "https://gidcbpqeqwgmuihpfmus.supabase.co";
      const supabaseAnonKey =
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
        "sb_publishable_WSZ8DuIF9gyzxy-I79M85w_1KVwrmjK";

      const tokenRes = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=pkce`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseAnonKey,
        },
        body: JSON.stringify({ auth_code: code }),
      });

      if (tokenRes.ok) {
        const tokenData = await tokenRes.json();
        const email = tokenData.user?.email;
        const fullName =
          tokenData.user?.user_metadata?.full_name ||
          tokenData.user?.user_metadata?.name ||
          email?.split("@")[0] ||
          "Utilisateur";

        if (email) {
          // Find or create user in Prisma database
          let user = await prisma.user.findUnique({
            where: { email },
          });

          if (!user) {
            const isAdmin = email === "immanouelj@gmail.com";
            user = await prisma.user.create({
              data: {
                email,
                name: fullName,
                role: isAdmin ? "ADMIN" : "CUSTOMER",
              },
            });
          }

          // Create secure session JWT
          const sessionToken = await createSessionToken({
            id: user.id,
            email: user.email,
            role: user.role as "ADMIN" | "CUSTOMER" | "PRO",
            name: user.name,
          });

          await setSessionCookie(sessionToken);

          // Redirect to admin if admin, else client portal
          if (user.role === "ADMIN") {
            return NextResponse.redirect(`${origin}/admin`);
          }
          return NextResponse.redirect(`${origin}/mon-compte`);
        }
      }
    } catch (error) {
      console.error("Erreur dans auth/callback:", error);
    }
  }

  return NextResponse.redirect(`${origin}/mon-compte`);
}
