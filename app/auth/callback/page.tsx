"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState("Finalisation de la connexion sécurisée...");

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // 1. Get session from Supabase Client (handles both PKCE code and URL tokens)
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Supabase getSession error:", error);
        }

        const user = session?.user;
        const email = user?.email;
        const name = user?.user_metadata?.full_name || user?.user_metadata?.name || email?.split("@")[0];

        if (email) {
          // 2. Sync user with database and set HTTP cookie
          const res = await fetch("/api/auth/sync-supabase-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, name }),
          });

          const syncData = await res.json();

          if (syncData?.user?.role === "ADMIN" || email === "immanouelj@gmail.com") {
            window.location.href = "/admin";
          } else {
            window.location.href = "/mon-compte";
          }
          return;
        }

        // Fallback: listen for auth state change
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
          if (session?.user?.email) {
            const uEmail = session.user.email;
            const uName = session.user.user_metadata?.full_name || uEmail.split("@")[0];

            await fetch("/api/auth/sync-supabase-user", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: uEmail, name: uName }),
            });

            if (uEmail === "immanouelj@gmail.com") {
              window.location.href = "/admin";
            } else {
              window.location.href = "/mon-compte";
            }
          }
        });

        // Timeout fallback if no session
        setTimeout(() => {
          window.location.href = "/mon-compte";
        }, 3000);

      } catch (err) {
        console.error("Auth callback error:", err);
        window.location.href = "/connexion";
      }
    };

    handleAuth();
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4">
      <div className="w-16 h-16 rounded-2xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center animate-pulse mb-4">
        <div className="w-8 h-8 rounded-full border-2 border-brand-400 border-t-transparent animate-spin" />
      </div>
      <h2 className="text-xl font-bold text-white mb-2">Authentification réussie</h2>
      <p className="text-xs text-slate-400">{status}</p>
    </div>
  );
}
