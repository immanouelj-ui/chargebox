"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ArrowUpDown } from "lucide-react";

export function ProductSort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "popular";

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("sort", e.target.value);
    router.push(`${pathname}?${current.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="w-4 h-4 text-slate-400" />
      <span className="text-xs font-semibold text-slate-600 hidden sm:inline">Trier par :</span>
      <select
        value={currentSort}
        onChange={handleSortChange}
        className="text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 cursor-pointer"
      >
        <option value="popular">Popularité &amp; Recommandation</option>
        <option value="price-asc">Prix croissant (du - cher au + cher)</option>
        <option value="price-desc">Prix décroissant (du + cher au - cher)</option>
        <option value="power-desc">Puissance maximale (22 kW d'abord)</option>
      </select>
    </div>
  );
}
