"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Truck, Package, CheckCircle2, ArrowRight, Printer, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function SuiviCommandePage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim()) return;

    window.location.href = `/checkout/confirmation?orderNumber=${encodeURIComponent(
      orderNumber.trim().toUpperCase()
    )}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-600 flex items-center justify-center mx-auto">
            <Truck className="w-7 h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Suivi de votre commande
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Saisissez votre numéro de commande reçu par email (ex: <strong>CB-2026-XXXXX</strong>) pour consulter l'acheminement et télécharger votre facture.
          </p>
        </div>

        {/* Search Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Numéro de commande *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: CB-2026-72941"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 uppercase"
              />
            </div>

            <Button type="submit" variant="electric" size="lg" className="w-full text-slate-950 font-black">
              <Search className="w-4 h-4 mr-2" />
              <span>Suivre l'acheminement en direct</span>
            </Button>
          </form>

          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Facture acquittée téléchargeable à tout moment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Expédition assurée avec prise de rendez-vous Chronopost / Geodis</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
