"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, ShoppingBag, Check, ShieldCheck, Sun, Radio } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store/useCartStore";
import { Badge } from "@/components/ui/Badge";
import type { ProductWithDetails } from "@/types";

interface ProductCardProps {
  product: ProductWithDetails;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
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
    });
  };

  const primaryImage = product.images[0]?.url || "/images/products/teltonika-teltocharge.jpg";

  return (
    <div className="group relative rounded-2xl bg-white border border-slate-200/80 hover:border-brand-500/40 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-200 flex flex-col justify-between overflow-hidden">
      
      {/* Top Tag Badges */}
      <div className="p-4 pb-0 flex items-start justify-between z-10">
        <div className="flex flex-wrap gap-1.5">
          {product.isBestSeller && (
            <Badge variant="brand" size="sm">
              Meilleure Vente
            </Badge>
          )}
          {product.hasSolarMode && (
            <Badge variant="warning" size="sm">
              <Sun className="w-3 h-3 text-amber-600" />
              Solaire
            </Badge>
          )}
          {product.has4G && (
            <Badge variant="cyan" size="sm">
              <Radio className="w-3 h-3 text-cyan-700" />
              4G LTE
            </Badge>
          )}
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {product.brand.name}
        </span>
      </div>

      {/* Product Image */}
      <Link href={`/produits/${product.slug}`} className="block relative h-52 w-full p-4 group-hover:scale-105 transition-transform duration-300">
        <Image
          src={primaryImage}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </Link>

      {/* Info & Specs */}
      <div className="p-5 pt-0 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Key Specs Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-bold text-slate-700">
              ⚡ {product.powerKw} kW
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600">
              {product.phaseType === "TRI" ? "Triphasé" : product.phaseType === "MONO" ? "Monophasé" : "Mono / Tri"}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600">
              {product.connectorType === "T2S" ? "Prise T2S" : "Câble attaché"}
            </span>
          </div>

          <Link href={`/produits/${product.slug}`} className="block">
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>
          
          {product.shortDescription && (
            <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
              {product.shortDescription}
            </p>
          )}
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="text-lg font-black text-slate-900">
                {formatPrice(product.priceTTC)}
              </div>
              <div className="text-[10px] text-slate-400">
                {formatPrice(product.priceHT)} HT · TVA 20%
              </div>
            </div>

            {product.compareAtPrice && product.compareAtPrice > product.priceTTC && (
              <span className="text-xs text-slate-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-brand-500 hover:text-slate-950 text-white text-xs font-bold transition-all shadow-sm active:scale-98"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Ajouter</span>
            </button>

            <Link
              href={`/produits/${product.slug}`}
              className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition text-center"
            >
              Détails
            </Link>
          </div>

          {/* Stock & Advenir indicator */}
          <div className="flex items-center justify-between pt-2.5 text-[11px] text-slate-500">
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              En Stock (24/48h)
            </span>
            {product.isAdvenirEligible && (
              <span className="text-brand-700 font-medium">Prime Advenir ✓</span>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
