"use client";

import React, { useState } from "react";
import { Tag, Check, X } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";

export function CouponForm() {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { appliedCoupon, applyCoupon, removeCoupon, getSubtotalTTC } = useCartStore();

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const cleanCode = code.trim().toUpperCase();

    // Client/Server mock coupon validation
    if (cleanCode === "BIENVENUE50") {
      if (getSubtotalTTC() < 500) {
        setError("Ce code nécessite un panier minimum de 500 €.");
        setIsLoading(false);
        return;
      }
      applyCoupon({
        code: "BIENVENUE50",
        description: "50 € de remise de bienvenue",
        discountType: "FIXED",
        value: 50.0,
      });
      setSuccess("Code promo appliqué (-50 €) !");
      setCode("");
    } else if (cleanCode === "CHARGEBOX10") {
      applyCoupon({
        code: "CHARGEBOX10",
        description: "10% de remise exceptionnelle",
        discountType: "PERCENT",
        value: 10.0,
      });
      setSuccess("Code promo appliqué (-10%) !");
      setCode("");
    } else if (cleanCode === "PROIRVE2026") {
      applyCoupon({
        code: "PROIRVE2026",
        description: "15% de remise installateur IRVE",
        discountType: "PERCENT",
        value: 15.0,
      });
      setSuccess("Remise pro IRVE appliquée (-15%) !");
      setCode("");
    } else {
      setError("Code promotionnel invalide ou expiré.");
    }

    setIsLoading(false);
  };

  if (appliedCoupon) {
    return (
      <div className="p-3 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-brand-600" />
          <span className="font-bold text-brand-900">{appliedCoupon.code}</span>
          <span className="text-brand-700">({appliedCoupon.description})</span>
        </div>
        <button
          type="button"
          onClick={removeCoupon}
          className="text-slate-400 hover:text-red-500 transition p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleApply} className="space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Tag className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code promo (ex: BIENVENUE50)"
            className="w-full pl-9 pr-3 py-2 text-xs uppercase font-semibold text-slate-900 bg-white border border-slate-200 rounded-xl focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !code.trim()}
          className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50 text-xs font-bold rounded-xl transition"
        >
          Appliquer
        </button>
      </div>
      {error && <p className="text-[11px] text-red-600 font-medium">{error}</p>}
      {success && <p className="text-[11px] text-brand-700 font-medium">{success}</p>}
    </form>
  );
}
