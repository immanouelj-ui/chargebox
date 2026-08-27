"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { SlidersHorizontal, RotateCcw, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandOption {
  id: string;
  name: string;
  slug: string;
}

interface CategoryOption {
  id: string;
  name: string;
  slug: string;
}

interface ProductFiltersProps {
  brands: BrandOption[];
  categories: CategoryOption[];
}

export function ProductFilters({ brands, categories }: ProductFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Helper to update query string
  const updateFilter = (key: string, value: string | null) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (!value) {
      current.delete(key);
    } else {
      current.set(key, value);
    }
    // Reset to page 1 on filter change
    current.delete("page");
    const query = current.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}`);
  };

  const currentBrand = searchParams.get("brand");
  const currentCategory = searchParams.get("category");
  const currentPower = searchParams.get("power");
  const currentPhase = searchParams.get("phase");
  const currentConnector = searchParams.get("connector");
  const currentSolar = searchParams.get("solar") === "true";
  const currentDynamic = searchParams.get("dynamic") === "true";
  const current4G = searchParams.get("lte") === "true";

  const handleReset = () => {
    router.push("/produits");
  };

  const hasActiveFilters =
    !!currentBrand ||
    !!currentCategory ||
    !!currentPower ||
    !!currentPhase ||
    !!currentConnector ||
    currentSolar ||
    currentDynamic ||
    current4G;

  return (
    <aside className="w-full lg:w-64 space-y-6">
      
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <SlidersHorizontal className="w-4 h-4 text-brand-600" />
          <span>Filtres</span>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Réinitialiser</span>
          </button>
        )}
      </div>

      {/* 1. Marques */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
          Marques
        </h4>
        <div className="space-y-1.5">
          <button
            type="button"
            onClick={() => updateFilter("brand", null)}
            className={cn(
              "w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition flex items-center justify-between",
              !currentBrand
                ? "bg-slate-900 text-white font-bold"
                : "text-slate-700 hover:bg-slate-100"
            )}
          >
            <span>Toutes les marques</span>
            {!currentBrand && <Check className="w-3.5 h-3.5" />}
          </button>
          {brands.map((brand) => {
            const isSelected = currentBrand === brand.slug;
            return (
              <button
                key={brand.id}
                type="button"
                onClick={() => updateFilter("brand", isSelected ? null : brand.slug)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition flex items-center justify-between",
                  isSelected
                    ? "bg-brand-500 text-slate-950 font-bold shadow-xs"
                    : "text-slate-700 hover:bg-slate-100"
                )}
              >
                <span>{brand.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Puissance */}
      <div className="space-y-3 pt-4 border-t border-slate-200">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
          Puissance
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "7.4 kW (Mono)", value: "7.4" },
            { label: "11 kW (Tri)", value: "11" },
            { label: "22 kW (Tri)", value: "22" },
          ].map((pow) => {
            const isSelected = currentPower === pow.value;
            return (
              <button
                key={pow.value}
                type="button"
                onClick={() => updateFilter("power", isSelected ? null : pow.value)}
                className={cn(
                  "py-2 px-2.5 rounded-xl border text-xs font-bold text-center transition",
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                )}
              >
                {pow.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Type de Raccordement */}
      <div className="space-y-3 pt-4 border-t border-slate-200">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
          Raccordement Électrique
        </h4>
        <div className="space-y-1.5">
          {[
            { label: "Monophasé 230V", value: "MONO" },
            { label: "Triphasé 400V", value: "TRI" },
          ].map((phase) => {
            const isSelected = currentPhase === phase.value;
            return (
              <button
                key={phase.value}
                type="button"
                onClick={() => updateFilter("phase", isSelected ? null : phase.value)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition flex items-center justify-between",
                  isSelected
                    ? "bg-slate-900 text-white font-bold"
                    : "text-slate-700 hover:bg-slate-100"
                )}
              >
                <span>{phase.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Type de Connecteur */}
      <div className="space-y-3 pt-4 border-t border-slate-200">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
          Type de Connecteur
        </h4>
        <div className="space-y-1.5">
          {[
            { label: "Prise T2S (avec obturateurs)", value: "T2S" },
            { label: "Câble attaché 5m / 7.5m", value: "ATTACHED_CABLE" },
          ].map((conn) => {
            const isSelected = currentConnector === conn.value;
            return (
              <button
                key={conn.value}
                type="button"
                onClick={() => updateFilter("connector", isSelected ? null : conn.value)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition flex items-center justify-between",
                  isSelected
                    ? "bg-slate-900 text-white font-bold"
                    : "text-slate-700 hover:bg-slate-100"
                )}
              >
                <span>{conn.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Fonctionnalités Spéciales */}
      <div className="space-y-3 pt-4 border-t border-slate-200">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
          Fonctionnalités &amp; Options
        </h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={currentSolar}
              onChange={(e) => updateFilter("solar", e.target.checked ? "true" : null)}
              className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
            />
            <span>☀️ Compatible Solaire Photovoltaïque</span>
          </label>
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={currentDynamic}
              onChange={(e) => updateFilter("dynamic", e.target.checked ? "true" : null)}
              className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
            />
            <span>⚡ Délestage dynamique (anti-coupure)</span>
          </label>
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={current4G}
              onChange={(e) => updateFilter("lte", e.target.checked ? "true" : null)}
              className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
            />
            <span>📶 Modem 4G LTE &amp; RFID Pro</span>
          </label>
        </div>
      </div>

    </aside>
  );
}
