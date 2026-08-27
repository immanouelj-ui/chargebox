"use client";

import React from "react";
import { LogOut } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

interface LogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function LogoutButton({ className, children }: LogoutButtonProps) {
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.warn("Supabase signOut error:", e);
    }

    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (e) {
      console.warn("API logout error:", e);
    }

    window.location.href = "/connexion";
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={
        className ||
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition text-left"
      }
    >
      {children || (
        <>
          <LogOut className="w-4 h-4" />
          <span>Déconnexion</span>
        </>
      )}
    </button>
  );
}
