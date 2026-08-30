import React from "react";
import Link from "next/link";
import { ChevronRight, Zap, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { InlineFunnel } from "@/components/funnel/InlineFunnel";

type Crumb = { name: string; to?: string };

export function ContentPage({
  crumbs,
  children,
}: {
  crumbs: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-brand-500 selection:text-slate-950">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="mx-auto max-w-4xl px-4 sm:px-6 pt-8 pb-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
          {crumbs.map((c, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {c.to ? (
                <Link href={c.to} className="hover:text-brand-400 transition-colors">
                  {c.name}
                </Link>
              ) : (
                <span className="text-slate-200 font-medium truncate max-w-[280px] sm:max-w-md">{c.name}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="w-3 h-3 text-slate-600" />}
            </li>
          ))}
        </ol>
      </nav>

      {/* Main Content Area */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6">{children}</main>

      {/* Cross-Selling Banner: Shop Bornes */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-950/80 via-slate-900 to-slate-900 border border-brand-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-brand-400" />
              Boutique Chargebox Officielle
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Besoin d'une borne livrée en 48h ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Découvrez nos bornes connectées Teltonika, Wallbox et V2C au meilleur prix avec garantie 3 ans constructeur.
            </p>
          </div>
          <Link
            href="/produits"
            className="px-6 py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-2 shadow-lg shadow-brand-500/20 flex-shrink-0"
          >
            <span>Voir le Catalogue Bornes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA + Funnel IRVE */}
      <section id="devis" className="border-t border-slate-800/80 bg-slate-900/90 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              Réseau National Qualifié IRVE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Recevez 3 devis gratuits sous <span className="text-brand-400">24h</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Décrivez votre projet en 2 minutes. Installateurs électriciens certifiés IRVE dans votre département, sans aucun engagement.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <InlineFunnel />
          </div>
        </div>
      </section>

    </div>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 space-y-8">{children}</div>;
}

export function Section({ h2, children }: { h2: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{h2}</h2>
      <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-300">
        {children}
      </div>
    </section>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 pt-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
          <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-brand-400 shadow-xs shadow-brand-400" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqBlock({ faq }: { faq: { q: string; a: string }[] }) {
  if (!faq || faq.length === 0) return null;
  return (
    <section className="mt-12 pt-8 border-t border-slate-800">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Questions fréquentes</h2>
      <div className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
        {faq.map((f, i) => (
          <details key={i} className="group px-6 py-4 transition hover:bg-slate-800/30">
            <summary className="cursor-pointer list-none font-bold text-sm text-white flex items-center justify-between gap-4">
              <span>{f.q}</span>
              <ChevronRight className="w-4 h-4 shrink-0 text-brand-400 transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
