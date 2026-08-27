"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Home, Building2, Sun, Radio, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

export default function SimulateurBornePage() {
  const [step, setStep] = useState(1);
  const [housing, setHousing] = useState<"house" | "copro" | "pro">("house");
  const [phase, setPhase] = useState<"mono" | "tri">("mono");
  const [solar, setSolar] = useState(false);
  const [modem4G, setModem4G] = useState(false);

  // Recommendations logic
  let recommendedProduct = {
    name: "Borne Teltonika TeltoCharge 7.4 kW Monophasé - Prise T2S",
    slug: "teltonika-teltocharge-7-4kw-monophase-prise-t2s",
    price: 749.00,
    image: "/images/products/teltonika-teltocharge.jpg",
    badge: "Choix Idéal pour Maison Individuelle",
    reason: "Design scandinave personnalisable, délestage dynamique intelligent et garantie constructeur 3 ans.",
  };

  if (solar) {
    recommendedProduct = {
      name: "Borne V2C Trydan 7.4 kW - Optimisation Solaire & Délestage",
      slug: "v2c-trydan-7-4kw-gestion-dynamique-solaire",
      price: 790.00,
      image: "/images/products/v2c-trydan.jpg",
      badge: "Recommandé pour Autoconsommation Solaire",
      reason: "Intégration directe avec vos panneaux solaires photovoltaïques pour recharger 100% gratuitement avec le surplus.",
    };
  } else if (housing === "pro" || phase === "tri" || modem4G) {
    recommendedProduct = {
      name: "Borne Teltonika TeltoCharge 22 kW Triphasé - Modem 4G LTE & RFID",
      slug: "teltonika-teltocharge-22kw-triphase-4g-rfid",
      price: 999.00,
      image: "/images/products/teltonika-teltocharge.jpg",
      badge: "Performance Ultime Triphasé & Supervision 4G",
      reason: "Recharge rapide 22 kW, modem 4G LTE autonome et supervision centralisée OCPP 1.6J.",
    };
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Outil d'Aide au Choix
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Simulateur de Borne de Recharge
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Répondez à 3 questions pour identifier instantanément la borne la plus performante et rentable pour votre véhicule et votre logement.
          </p>
        </div>

        {/* Wizard Steps */}
        <div className="rounded-3xl bg-slate-800/80 border border-slate-700/80 p-8 shadow-2xl backdrop-blur-md space-y-8">
          
          {/* Question 1 */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-white uppercase tracking-wider text-brand-400">
              1. Type d'habitation ou lieu d'installation :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "house", label: "Maison Individuelle", icon: Home, desc: "Garage ou extérieur privé" },
                { id: "copro", label: "Copropriété", icon: Building2, desc: "Place de parking dédiée" },
                { id: "pro", label: "Entreprise / Flotte", icon: Zap, desc: "Parking pro ou commerce" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setHousing(opt.id as any)}
                  className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                    housing === opt.id
                      ? "border-brand-500 bg-brand-500/15 text-white shadow-xs"
                      : "border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600"
                  }`}
                >
                  <opt.icon className="w-6 h-6 text-brand-400 mb-2" />
                  <div>
                    <span className="block font-bold text-sm text-white">{opt.label}</span>
                    <span className="text-xs text-slate-400">{opt.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-3 pt-6 border-t border-slate-700">
            <label className="block text-sm font-bold text-white uppercase tracking-wider text-brand-400">
              2. Alimentation de votre tableau électrique :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: "mono", label: "Monophasé (230V · 7.4 kW max)", desc: "Cas le plus fréquent en France (90% des maisons)" },
                { id: "tri", label: "Triphasé (400V · 11 à 22 kW)", desc: "Pour les grandes maisons, pompes à chaleur & entreprises" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPhase(opt.id as any)}
                  className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                    phase === opt.id
                      ? "border-brand-500 bg-brand-500/15 text-white"
                      : "border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600"
                  }`}
                >
                  <span className="font-bold text-sm text-white">{opt.label}</span>
                  <span className="text-xs text-slate-400 mt-1">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="space-y-3 pt-6 border-t border-slate-700">
            <label className="block text-sm font-bold text-white uppercase tracking-wider text-brand-400">
              3. Options spécifiques :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-4 rounded-2xl border border-slate-700 bg-slate-800 cursor-pointer hover:border-slate-600">
                <input
                  type="checkbox"
                  checked={solar}
                  onChange={(e) => setSolar(e.target.checked)}
                  className="rounded text-brand-500 focus:ring-brand-500 w-5 h-5"
                />
                <div>
                  <span className="block font-bold text-sm text-white">☀️ Panneaux Solaires Photovoltaïques</span>
                  <span className="text-xs text-slate-400">Priorité à la recharge par énergie solaire</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-4 rounded-2xl border border-slate-700 bg-slate-800 cursor-pointer hover:border-slate-600">
                <input
                  type="checkbox"
                  checked={modem4G}
                  onChange={(e) => setModem4G(e.target.checked)}
                  className="rounded text-brand-500 focus:ring-brand-500 w-5 h-5"
                />
                <div>
                  <span className="block font-bold text-sm text-white">📶 Modem 4G LTE &amp; Lecteur RFID</span>
                  <span className="text-xs text-slate-400">Pas besoin de Wi-Fi, idéal extérieur &amp; copro</span>
                </div>
              </label>
            </div>
          </div>

          {/* Recommendation Result Card */}
          <div className="pt-8 border-t border-slate-700 space-y-4">
            <div className="text-center font-bold text-sm text-brand-400">
              ✓ Résultat de la simulation :
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-brand-500 p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="relative h-40 w-40 flex-shrink-0">
                <Image
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-2 flex-1 text-center md:text-left">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-500 text-slate-950 text-[11px] font-black uppercase">
                  {recommendedProduct.badge}
                </span>

                <h3 className="text-xl font-bold text-white">
                  {recommendedProduct.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {recommendedProduct.reason}
                </p>

                <div className="text-2xl font-black text-brand-400 pt-1">
                  {formatPrice(recommendedProduct.price)} <span className="text-xs text-slate-400 font-normal">TTC</span>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <Link href={`/produits/${recommendedProduct.slug}`}>
                  <Button variant="electric" size="lg" className="w-full">
                    <span>Commander cette Borne</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
