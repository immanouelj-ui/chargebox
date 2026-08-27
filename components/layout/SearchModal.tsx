"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, X, Zap, ChevronRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const quickLinks = [
    { label: "Teltonika TeltoCharge 7.4kW", href: "/produits/teltonika-teltocharge-7-4kw-monophase-prise-t2s" },
    { label: "Teltonika 22kW Triphasé 4G", href: "/produits/teltonika-teltocharge-22kw-triphase-4g-rfid" },
    { label: "V2C Trydan Solaire", href: "/produits/v2c-trydan-7-4kw-gestion-dynamique-solaire" },
    { label: "Wallbox Pulsar Max", href: "/produits/wallbox-pulsar-max-22kw-coul-noir" },
    { label: "Kits de protection IRVE", href: "/produits?category=protections-electriques" },
    { label: "Câbles Type 2 32A", href: "/produits?category=cables-de-recharge" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/produits?search=${encodeURIComponent(query.trim())}`);
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl z-10 border border-slate-200">
        <form onSubmit={handleSearchSubmit} className="relative mb-6">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une borne (Teltonika, 22kW, solaire, câble...)"
            autoFocus
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-10 text-base text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Recherches populaires &amp; Meilleures ventes
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => {
                  router.push(link.href);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-brand-50/60 hover:border-brand-200 transition text-left group"
              >
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-brand-500 group-hover:scale-110 transition" />
                  <span className="text-sm font-medium text-slate-800 group-hover:text-brand-900">
                    {link.label}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Appuyez sur <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-mono">Entrée</kbd> pour valider</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-mono">Échap</kbd> pour fermer</span>
        </div>
      </div>
    </div>
  );
}
