import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, BookOpen, Search, Sparkles } from "lucide-react";
import { ContentPage } from "@/components/content/ContentPage";
import { GUIDES } from "@/content/guides";
import { breadcrumbLd, abs } from "@/content/seo";

export const metadata: Metadata = {
  title: "Guides Borne de Recharge : Prix, Aides, Puissance & Comparatifs 2026",
  description:
    "Tous nos 209 guides pour bien choisir et installer votre borne de recharge : prix réels, aides, puissance 7,4 / 11 / 22 kW, copropriété et comparatifs.",
  alternates: {
    canonical: abs("/guides"),
  },
};

export default function GuidesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    ...breadcrumbLd([
      { name: "Accueil", path: "/" },
      { name: "Guides", path: "/guides" },
    ]),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContentPage crumbs={[{ name: "Accueil", to: "/" }, { name: "Guides & Comparatifs" }]}>
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold border border-brand-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            Centre de Ressources &amp; Guides ({GUIDES.length} articles)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Guides Borne de Recharge &amp; Électromobilité
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Tout ce qu'il faut savoir avant d'acheter ou faire poser une borne : prix réels 2026, normes IRVE, aides financières, puissance (7,4 / 11 / 22 kW) et comparatifs complets.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-1">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-900 p-6 transition-all hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/5 block"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center justify-between gap-4 group-hover:text-brand-400 transition-colors">
                <span>{g.h1}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-brand-400" />
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                {g.lede}
              </p>
            </Link>
          ))}
        </div>
      </ContentPage>
    </>
  );
}
