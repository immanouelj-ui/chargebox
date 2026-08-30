import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import { ContentPage } from "@/components/content/ContentPage";
import { VILLES } from "@/content/villes";
import { breadcrumbLd, abs } from "@/content/seo";

export const metadata: Metadata = {
  title: "Installation Borne de Recharge par Ville : 104 Villes Couvertes IRVE | ChoisisTaBorne",
  description:
    "Trouvez un électricien installateur de borne de recharge certifié IRVE près de chez vous. 3 devis gratuits sous 24h à Paris, Lyon, Marseille, Toulouse, Bordeaux et dans 104 villes en France.",
  alternates: {
    canonical: abs("/borne-de-recharge"),
  },
};

export default function VillesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    ...breadcrumbLd([
      { name: "Accueil", path: "/" },
      { name: "Villes", path: "/borne-de-recharge" },
    ]),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContentPage crumbs={[{ name: "Accueil", to: "/" }, { name: "Trouver un Installateur par Ville" }]}>
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold border border-brand-500/20">
            <MapPin className="w-3.5 h-3.5" />
            Couverture Nationale IRVE ({VILLES.length} villes)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Installation de Borne de Recharge par Ville
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Nos électriciens partenaires certifiés IRVE interviennent dans toute la France. Sélectionnez votre ville pour consulter les tarifs locaux, les spécificités d'habitat et recevoir 3 devis gratuits sans engagement.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {VILLES.map((v) => (
            <Link
              key={v.slug}
              href={`/borne-de-recharge/${v.slug}`}
              className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 transition hover:border-brand-500/50 hover:bg-slate-900"
            >
              <div className="flex items-center gap-2 truncate">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-brand-400" />
                <span className="font-bold text-xs sm:text-sm text-slate-200 group-hover:text-white truncate">
                  {v.nom}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono shrink-0 ml-1">
                {v.dept.replace(/^[^(]*\(([^)]+)\)$/, "$1")}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span className="font-bold text-white block text-sm">Votre commune n'est pas dans la liste ?</span>
            <span className="text-slate-400">Notre réseau certifié IRVE couvre 100% du territoire métropolitain.</span>
          </div>
          <a
            href="#devis"
            className="px-5 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-black hover:bg-brand-400 transition whitespace-nowrap shadow-md shadow-brand-500/10"
          >
            Demander mon devis local &rarr;
          </a>
        </div>
      </ContentPage>
    </>
  );
}
