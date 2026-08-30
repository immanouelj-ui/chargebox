import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ShieldCheck, ArrowRight, Building2 } from "lucide-react";
import { ContentPage } from "@/components/content/ContentPage";
import { DEPARTEMENTS } from "@/content/departements";
import { breadcrumbLd, abs } from "@/content/seo";

export const metadata: Metadata = {
  title: "Installateurs de Borne de Recharge IRVE par Département | ChoisisTaBorne",
  description:
    "Trouvez un installateur certifié IRVE dans votre département. Comparez jusqu'à 3 devis gratuits sous 24h pour la pose de votre borne de recharge en maison ou copropriété.",
  alternates: {
    canonical: abs("/installateur-irve"),
  },
};

export default function DepartementsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    ...breadcrumbLd([
      { name: "Accueil", path: "/" },
      { name: "Installateurs IRVE", path: "/installateur-irve" },
    ]),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContentPage crumbs={[{ name: "Accueil", to: "/" }, { name: "Installateurs IRVE par Département" }]}>
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold border border-brand-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Réseau National ({DEPARTEMENTS.length} départements)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Installateurs de Borne IRVE par Département
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Sélectionnez votre département pour découvrir les électriciens certifiés IRVE de votre secteur, les tarifs constatés et obtenir vos devis gratuits sous 24h.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {DEPARTEMENTS.map((d) => (
            <Link
              key={d.slug}
              href={`/installateur-irve/${d.slug}`}
              className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3.5 transition hover:border-brand-500/50 hover:bg-slate-900"
            >
              <div className="flex items-center gap-2.5 truncate">
                <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  {d.code}
                </span>
                <span className="font-bold text-xs sm:text-sm text-slate-200 group-hover:text-white truncate">
                  {d.nom}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </ContentPage>
    </>
  );
}
