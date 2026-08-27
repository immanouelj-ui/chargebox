"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  Zap,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Plus,
  Minus,
  Wrench,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { ProductWithDetails } from "@/types";

interface ProductBuyBoxProps {
  product: ProductWithDetails;
}

export function ProductBuyBox({ product }: ProductBuyBoxProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [withInstallation, setWithInstallation] = useState(false);
  const { addItem, setInstallationOption, openDrawer } = useCartStore();

  const handleAddToCart = () => {
    addItem(
      {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        reference: product.reference,
        sku: product.sku,
        brandName: product.brand.name,
        priceHT: product.priceHT,
        priceTTC: product.priceTTC,
        vatRate: product.vatRate,
        image: product.images[0]?.url || "/images/products/teltonika-teltocharge.jpg",
        powerKw: product.powerKw,
      },
      quantity
    );

    if (withInstallation) {
      setInstallationOption(true);
    }
  };

  const handleDirectBuy = () => {
    handleAddToCart();
    router.push("/checkout");
  };

  return (
    <div className="space-y-6">
      
      {/* Brand & Reference */}
      <div>
        <div className="flex items-center justify-between">
          <Link
            href={`/produits?brand=${product.brand.slug}`}
            className="text-xs font-black uppercase tracking-wider text-brand-600 hover:text-brand-700 transition"
          >
            {product.brand.name}
          </Link>
          <span className="text-xs text-slate-400 font-mono">
            Réf : {product.reference}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 leading-tight">
          {product.name}
        </h1>

        {/* Rating and review count */}
        <div className="flex items-center gap-2 mt-2 text-xs">
          <div className="flex text-amber-400">
            {"★".repeat(5)}
          </div>
          <span className="font-bold text-slate-700">4.9 / 5</span>
          <span className="text-slate-400">(Avis vérifiés Chargebox)</span>
        </div>
      </div>

      {/* Pricing Box */}
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-black text-slate-900">
            {formatPrice(product.priceTTC)}
          </span>
          <span className="text-xs font-semibold text-slate-500">TTC (TVA 20%)</span>
          {product.compareAtPrice && product.compareAtPrice > product.priceTTC && (
            <span className="text-sm text-slate-400 line-through ml-auto">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
        <div className="text-xs text-slate-500">
          Soit <strong className="text-slate-800">{formatPrice(product.priceHT)} HT</strong> (Particuliers &amp; Entreprises)
        </div>
      </div>

      {/* Stock & Delivery status */}
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2 font-bold text-emerald-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>En Stock · Expédié sous {product.leadTimeDays * 24}h en France Métropolitaine</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Truck className="w-4 h-4 text-brand-600" />
          <span>Livraison Express sécurisée avec prise de rendez-vous</span>
        </div>
      </div>

      {/* Option Demande de Devis Installation IRVE */}
      <div
        onClick={() => setWithInstallation(!withInstallation)}
        className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
          withInstallation
            ? "border-brand-500 bg-brand-50/40 shadow-sm"
            : "border-slate-200 bg-white hover:border-slate-300"
        }`}
      >
        <input
          type="checkbox"
          checked={withInstallation}
          onChange={(e) => setWithInstallation(e.target.checked)}
          className="mt-1 h-4 w-4 rounded text-brand-600 focus:ring-brand-500 cursor-pointer"
        />
        <div className="flex-1 text-xs space-y-1">
          <div className="flex items-center justify-between font-bold text-slate-900">
            <span className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-brand-600" />
              Demander un devis d'installation certifiée IRVE
            </span>
            <span className="text-emerald-700 text-xs font-black bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              Devis Gratuit
            </span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Mise en relation gratuite avec un électricien qualifié IRVE de votre secteur pour une visite technique et un devis de pose personnalisé.
          </p>
        </div>
      </div>

      {/* Quantity & Action Buttons */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center border-2 border-slate-200 rounded-xl bg-white p-1">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 text-sm font-bold text-slate-900">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <Button
            variant="electric"
            size="lg"
            onClick={handleAddToCart}
            className="flex-1 shadow-lg"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            <span>Ajouter au panier</span>
          </Button>
        </div>

        <Button
          variant="secondary"
          size="lg"
          onClick={handleDirectBuy}
          className="w-full bg-slate-900 hover:bg-slate-800"
        >
          <span>Commander immédiatement</span>
        </Button>
      </div>

      {/* Reassurance Grid */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span>Garantie 3 ans constructeur</span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span>Paiement sécurisé 3x / 4x CB</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span>Conforme NF C 15-100</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span>Support technique en France</span>
        </div>
      </div>

    </div>
  );
}
