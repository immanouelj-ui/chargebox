"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, ShoppingBag, User, Menu, X, ChevronDown, Zap, ShieldAlert } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { SearchModal } from "./SearchModal";
import { formatPrice } from "@/lib/utils";
import { supabase } from "@/lib/supabaseClient";

interface HeaderProps {
  user?: {
    id: string;
    name: string | null;
    email: string;
    role: string;
  } | null;
}

export function Header({ user }: HeaderProps) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(user);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { openDrawer, getItemCount, getSubtotalTTC } = useCartStore();

  useEffect(() => {
    setMounted(true);

    // 1. Fetch current backend session
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((d) => {
        if (d.user) setCurrentUser(d.user);
        else if (user) setCurrentUser(user);
      })
      .catch(() => {});

    // 2. Listen to Supabase Google OAuth live events in the browser
    const { data: authSub } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user?.email) {
        const uEmail = session.user.email;
        const uName = session.user.user_metadata?.full_name || uEmail.split("@")[0];

        try {
          const res = await fetch("/api/auth/sync-supabase-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: uEmail, name: uName }),
          });
          const d = await res.json();
          if (d.user) setCurrentUser(d.user);
        } catch (e) {}
      } else if (event === "SIGNED_OUT") {
        setCurrentUser(null);
      }
    });

    return () => {
      authSub?.subscription?.unsubscribe();
    };
  }, [user]);

  const itemCount = mounted ? getItemCount() : 0;
  const subtotal = mounted ? getSubtotalTTC() : 0;

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setCurrentUser(null);
    window.location.href = "/";
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Logo Chargebox */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="relative h-12 w-48 transition-transform group-hover:scale-[1.02]">
                  <Image
                    src="/images/chargebox-logo.svg"
                    alt="Chargebox - Bornes de recharge pour véhicules électriques"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/produits"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:text-brand-600 hover:bg-slate-50 transition"
              >
                Toutes les Bornes
              </Link>

              {/* Teltonika Highlight */}
              <Link
                href="/produits?brand=teltonika"
                className="px-3.5 py-2 rounded-xl text-sm font-bold text-slate-900 bg-brand-50/70 border border-brand-200/70 text-brand-800 hover:bg-brand-100 transition flex items-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
                <span>Teltonika</span>
              </Link>

              {/* Dropdown Marques */}
              <div className="relative group">
                <Link
                  href="/marques"
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:text-brand-600 hover:bg-slate-50 transition flex items-center gap-1"
                >
                  <span>Marques</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute left-0 top-full mt-1 w-64 rounded-2xl bg-white p-3 shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Marques Partenaires
                  </div>
                  <Link
                    href="/produits?brand=teltonika"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-brand-50/80 transition"
                  >
                    <span className="text-sm font-bold text-slate-900">Teltonika Energy</span>
                    <span className="text-[10px] font-bold bg-brand-500 text-slate-950 px-1.5 py-0.5 rounded">Vedette</span>
                  </Link>
                  <Link
                    href="/produits?brand=wallbox"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-800"
                  >
                    Wallbox
                  </Link>
                  <Link
                    href="/produits?brand=v2c"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-800"
                  >
                    V2C Trydan (Solaire)
                  </Link>
                  <Link
                    href="/produits?brand=schneider"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-800"
                  >
                    Schneider Electric
                  </Link>
                  <Link
                    href="/produits?brand=hager"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-800"
                  >
                    Hager Witty
                  </Link>
                  <Link
                    href="/produits?brand=legrand"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-800"
                  >
                    Legrand Green'up
                  </Link>
                </div>
              </div>

              {/* Categories */}
              <Link
                href="/categories"
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:text-brand-600 hover:bg-slate-50 transition"
              >
                Catégories
              </Link>

              <Link
                href="/produits?category=protections-electriques"
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:text-brand-600 hover:bg-slate-50 transition"
              >
                Protections IRVE
              </Link>

              <Link
                href="/simulateur-borne"
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:text-brand-600 hover:bg-slate-50 transition"
              >
                Simulateur
              </Link>
            </nav>

            {/* Right Action Icons: Search, Account, Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Search button trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 bg-slate-100/80 hover:bg-slate-200/70 hover:text-slate-900 transition text-xs font-medium"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Rechercher...</span>
                <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded font-mono text-slate-500 shadow-2xs">
                  ⌘K
                </kbd>
              </button>

              {/* Account Dropdown */}
              <div className="relative group">
                {currentUser ? (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center gap-2 p-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-900 transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-900 text-brand-400 font-black text-xs flex items-center justify-center shadow-xs">
                        {currentUser.name ? currentUser.name.slice(0, 2).toUpperCase() : "CB"}
                      </div>
                      <div className="hidden xl:flex flex-col text-left pr-1">
                        <span className="text-[11px] font-bold text-slate-900 max-w-[110px] truncate leading-tight">
                          {currentUser.name || currentUser.email.split("@")[0]}
                        </span>
                        <span className="text-[9px] font-semibold text-brand-600 uppercase">
                          {currentUser.role === "ADMIN" ? "Administrateur" : "Mon Compte"}
                        </span>
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white p-2.5 shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="px-3 py-2 border-b border-slate-100 mb-1">
                        <span className="text-xs font-bold text-slate-900 block truncate">
                          {currentUser.name || "Client"}
                        </span>
                        <span className="text-[10px] text-slate-400 block truncate">
                          {currentUser.email}
                        </span>
                      </div>

                      {currentUser.role === "ADMIN" && (
                        <Link
                          href="/admin"
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-brand-400 hover:bg-slate-800 text-xs font-bold transition mb-1"
                        >
                          <span>👑 Tableau de Bord Admin</span>
                        </Link>
                      )}

                      <Link
                        href="/mon-compte"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 text-xs font-semibold transition"
                      >
                        <span>📦 Mes Commandes</span>
                      </Link>

                      <Link
                        href="/mon-compte/adresses"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 text-xs font-semibold transition"
                      >
                        <span>📍 Mes Adresses</span>
                      </Link>

                      <Link
                        href="/mon-compte/profil"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 text-xs font-semibold transition"
                      >
                        <span>👤 Mon Profil</span>
                      </Link>

                      <div className="border-t border-slate-100 mt-1 pt-1">
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="w-full text-left px-3 py-2 rounded-xl text-red-600 hover:bg-red-50 text-xs font-bold transition"
                        >
                          Déconnexion
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/connexion"
                    className="flex items-center gap-1.5 p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition text-xs font-semibold"
                  >
                    <User className="w-5 h-5 text-slate-700" />
                    <span className="hidden sm:inline">Connexion</span>
                  </Link>
                )}
              </div>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={openDrawer}
                className="relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10 transition active:scale-95"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-brand-400" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2.5 -right-2.5 w-4 h-4 bg-brand-500 text-slate-950 text-[10px] font-black rounded-full flex items-center justify-center shadow-xs animate-pulse">
                      {itemCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-xs font-bold text-slate-100">
                  {subtotal > 0 ? formatPrice(subtotal) : "Panier"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white p-4 space-y-3 shadow-lg">
            <Link
              href="/produits"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Toutes les Bornes de Recharge
            </Link>
            <Link
              href="/produits?brand=teltonika"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-sm font-bold text-slate-900 bg-brand-50 border border-brand-200 text-brand-900"
            >
              <span>Teltonika Energy</span>
              <Zap className="w-4 h-4 text-brand-500 fill-brand-500" />
            </Link>
            <Link
              href="/marques"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Toutes les Marques (Wallbox, V2C, Schneider, Hager, Legrand)
            </Link>
            <Link
              href="/categories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Catégories de Produits
            </Link>
            <Link
              href="/produits?category=protections-electriques"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Protections Électriques IRVE
            </Link>
            <Link
              href="/simulateur-borne"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-sm font-semibold text-brand-700 bg-brand-50/50 hover:bg-brand-50"
            >
              ⚡ Simulateur de Borne
            </Link>
            <div className="pt-3 border-t border-slate-100 flex gap-2">
              {user ? (
                <Link
                  href={user.role === "ADMIN" ? "/admin" : "/mon-compte"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  Mon Espace ({user.name || user.email})
                </Link>
              ) : (
                <>
                  <Link
                    href="/connexion"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-1/2 text-center py-2 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold"
                  >
                    Connexion
                  </Link>
                  <Link
                    href="/inscription"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-1/2 text-center py-2 rounded-xl bg-brand-500 text-slate-950 text-xs font-bold"
                  >
                    Créer un compte
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
