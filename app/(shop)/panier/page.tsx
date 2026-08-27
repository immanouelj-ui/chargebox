"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  Wrench,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { CouponForm } from "@/components/cart/CouponForm";

export default function PanierPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    getSubtotalHT,
    getSubtotalTTC,
    getTaxAmount,
    getShippingCost,
    getDiscountAmount,
    getInstallationCost,
    getTotalTTC,
    appliedCoupon,
    installationOption,
    setInstallationOption,
  } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="animate-spin h-8 w-8 border-4 border-brand-500 border-t-transparent rounded-full mx-auto" />
      </div>
    );
  }

  const subtotalHT = getSubtotalHT();
  const subtotalTTC = getSubtotalTTC();
  const taxAmount = getTaxAmount();
  const shipping = getShippingCost();
  const discount = getDiscountAmount();
  const installation = getInstallationCost();
  const total = getTotalTTC();

  const freeShippingThreshold = 300;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotalTTC);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Mon Panier
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Vérifiez vos articles avant de procéder au règlement sécurisé
            </p>
          </div>

          <Link
            href="/produits"
            className="text-xs font-bold text-slate-600 hover:text-brand-600 flex items-center gap-1 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continuer mes achats</span>
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl bg-white border border-slate-200 p-12 text-center space-y-4 max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Votre panier est vide</h2>
            <p className="text-xs text-slate-500">
              Découvrez nos bornes Teltonika, Wallbox, V2C et kits de protection certifiés NF C 15-100.
            </p>
            <div className="pt-2">
              <Link href="/produits">
                <Button variant="electric" size="lg">
                  Découvrir les bornes de recharge
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Items list */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Free Shipping Alert */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-brand-600" />
                  {remainingForFreeShipping === 0 ? (
                    <span className="font-bold text-emerald-700">
                      🎉 Livraison Standard Offerte en France métropolitaine !
                    </span>
                  ) : (
                    <span className="text-slate-600">
                      Ajoutez encore <strong>{formatPrice(remainingForFreeShipping)}</strong> pour bénéficier de la livraison gratuite !
                    </span>
                  )}
                </div>
              </div>

              {/* Items Card */}
              <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
                {items.map((item) => (
                  <div key={item.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-xl bg-slate-50 border border-slate-100 p-2 flex-shrink-0">
                        <Image
                          src={item.image || "/images/products/teltonika-teltocharge.jpg"}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600">
                          {item.brandName}
                        </span>
                        <Link
                          href={`/produits/${item.slug}`}
                          className="block font-bold text-sm text-slate-900 hover:text-brand-600 transition max-w-md line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <span className="text-xs text-slate-400 font-mono">
                          SKU : {item.sku}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-3 sm:pt-0 border-t sm:border-0 border-slate-100">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-slate-100 text-slate-600 transition"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-slate-100 text-slate-600 transition"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total Price for item */}
                      <div className="text-right">
                        <div className="text-base font-black text-slate-900">
                          {formatPrice(item.priceTTC * item.quantity)}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {formatPrice(item.priceHT * item.quantity)} HT
                        </div>
                      </div>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-red-500 transition p-1.5"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {/* Forfait Installation IRVE Option toggle */}
              <div
                onClick={() => setInstallationOption(!installationOption)}
                className={`p-5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-4 ${
                  installationOption
                    ? "border-brand-500 bg-brand-50/50 shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={installationOption}
                  onChange={(e) => setInstallationOption(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded text-brand-600 focus:ring-brand-500 cursor-pointer"
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-brand-600" />
                      Ajouter le Forfait Pose par Installateur Certifié IRVE
                    </span>
                    <span className="text-sm font-black text-brand-700">+590,00 € TTC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Installation complète conforme NF C 15-100 avec pose, raccordement au tableau et transmission de l'attestation Consuel / IRVE indispensable pour le <strong>crédit d'impôt de 500 €</strong>.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary Box */}
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Récapitulatif de la commande
                </h3>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Sous-total HT</span>
                    <span className="font-semibold text-slate-900">{formatPrice(subtotalHT)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVA (20%)</span>
                    <span className="font-semibold text-slate-900">{formatPrice(taxAmount)}</span>
                  </div>
                  
                  {installationOption && (
                    <div className="flex justify-between text-brand-800 font-medium">
                      <span>Forfait Pose IRVE</span>
                      <span>{formatPrice(installation)}</span>
                    </div>
                  )}

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Remise code promo ({appliedCoupon?.code})</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Frais de livraison</span>
                    <span>
                      {shipping === 0 ? (
                        <strong className="text-brand-600 font-bold">Offerte</strong>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-900">Total TTC</span>
                    <span className="text-2xl font-black text-slate-900">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                {/* Coupon Input Form */}
                <div className="pt-2">
                  <CouponForm />
                </div>

                {/* Checkout Button */}
                <Button
                  variant="electric"
                  size="lg"
                  className="w-full shadow-lg"
                  onClick={() => router.push("/checkout")}
                >
                  <span>Passer la commande</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span>Paiement sécurisé SSL 256 bits par Stripe</span>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
