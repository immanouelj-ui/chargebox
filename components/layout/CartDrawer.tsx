"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    getSubtotalTTC,
    getShippingCost,
    getTotalTTC,
    getItemCount,
  } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!isDrawerOpen) return null;

  const subtotal = getSubtotalTTC();
  const shipping = getShippingCost();
  const total = getTotalTTC();
  const count = getItemCount();
  const freeShippingThreshold = 300;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-slate-900">Mon Panier</span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full">
                {count} article{count > 1 ? "s" : ""}
              </span>
            </div>
            <button
              onClick={closeDrawer}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-slate-900 p-3.5 text-white text-xs">
            <div className="flex items-center justify-between mb-1.5">
              {remainingForFreeShipping === 0 ? (
                <span className="font-semibold text-brand-400 flex items-center gap-1">
                  🎉 Félicitations ! Livraison Standard Offerte !
                </span>
              ) : (
                <span className="text-slate-300">
                  Plus que <strong className="text-white">{formatPrice(remainingForFreeShipping)}</strong> pour la livraison offerte
                </span>
              )}
              <span className="text-slate-400">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-brand-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Votre panier est vide</h4>
                  <p className="text-xs text-slate-500 mt-1">Découvrez nos bornes Teltonika et accessoires certifiés.</p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    closeDrawer();
                    router.push("/produits");
                  }}
                >
                  Découvrir les bornes
                </Button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5 items-start">
                  <div className="relative w-16 h-16 rounded-xl border border-slate-100 bg-slate-50 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/images/products/teltonika-teltocharge.jpg"}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-brand-600 uppercase tracking-wider">
                      {item.brandName}
                    </div>
                    <Link
                      href={`/produits/${item.slug}`}
                      onClick={closeDrawer}
                      className="text-xs font-bold text-slate-900 hover:text-brand-600 line-clamp-2 transition leading-tight"
                    >
                      {item.name}
                    </Link>
                    <div className="text-xs font-semibold text-slate-900 mt-1">
                      {formatPrice(item.priceTTC)}
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-red-500 transition p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Sous-total TTC</span>
                  <span className="font-semibold text-slate-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison estimée</span>
                  <span>{shipping === 0 ? <strong className="text-brand-600">Offerte</strong> : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total TTC</span>
                  <span className="text-brand-600 text-base">{formatPrice(total)}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Button
                  variant="electric"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    closeDrawer();
                    router.push("/checkout");
                  }}
                >
                  <span>Commander ({formatPrice(total)})</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    closeDrawer();
                    router.push("/panier");
                  }}
                >
                  Voir le panier complet
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                <span>Paiement 100% sécurisé Stripe · Éligible Prime Advenir</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
