"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quelle est la différence entre une borne 7.4 kW et 22 kW ?",
      answer:
        "Une borne de 7.4 kW fonctionne en courant monophasé 230V (32A) et convient à 95% des habitations individuelles en France. Elle permet de recharger une batterie de 60 kWh en environ 7 à 8 heures (la nuit). Une borne de 22 kW fonctionne en triphasé 400V (32A) et recharge la même batterie en moins de 3 heures si le chargeur embarqué de votre véhicule accepte le triphasé.",
    },
    {
      question: "Pourquoi choisir la borne Teltonika TeltoCharge ?",
      answer:
        "Teltonika Energy est un constructeur européen réputé pour sa robustesse industrielle et ses finitions haut de gamme (façades en bois ou ardoise). La borne TeltoCharge intègre nativement le WiFi, Bluetooth, NFC, et supporte en option la 4G et le protocole OCPP 1.6J pour une supervision complète avec une application mobile intuitive.",
    },
    {
      question: "Comment fonctionne le délestage dynamique (gestion de puissance) ?",
      answer:
        "Le délestage dynamique permet à la borne de mesurer en direct la consommation totale de votre logement via une pince ampèremétrique ou la télé-information Linky (TIC). Si un four ou une pompe à chaleur s'allume, la borne réduit automatiquement sa vitesse de charge pour éviter que votre disjoncteur général ne disjoncte.",
    },
    {
      question: "Comment bénéficier du crédit d'impôt de 500 € pour l'installation d'une borne ?",
      answer:
        "Le crédit d'impôt pour la transition énergétique est ouvert à tous les particuliers (propriétaires, locataires ou occupants à titre gratuit) pour leur résidence principale ou secondaire. La borne doit être installée par un professionnel certifié IRVE et doit être pilotable (connectée / programmable). Chargebox vous fournit une facture conforme pour votre déclaration fiscale.",
    },
    {
      question: "Quelle protection électrique est obligatoire pour une borne de recharge ?",
      answer:
        "Selon la norme NF C 15-100, une borne de recharge de véhicule électrique doit obligatoirement être alimentée par une ligne dédiée protégée par un interrupteur ou disjoncteur différentiel 30mA Type F (ou Type A-EV / Type B) haute immunité ainsi qu'un disjoncteur divisionnaire calibré à la puissance de la borne (ex: 40A pour 7.4 kW).",
    },
    {
      question: "Puis-je recharger ma voiture avec mes panneaux solaires photovoltaïques ?",
      answer:
        "Absolument ! Des modèles comme la V2C Trydan ou la Wallbox Pulsar Max avec pince de mesure intelligente permettent le mode 'Eco-Smart' : la borne module sa puissance pour utiliser exclusivement l'énergie solaire excédentaire produite par vos panneaux.",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Questions Fréquentes
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Tout ce qu'il faut savoir sur les bornes de recharge
          </h2>
          <p className="text-sm text-slate-600">
            Une question technique sur votre installation ? Nos réponses claires et précises.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "rounded-2xl border transition-all overflow-hidden",
                  isOpen
                    ? "border-brand-500/40 bg-brand-50/20 shadow-sm"
                    : "border-slate-200/80 bg-white hover:border-slate-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "p-1.5 rounded-lg text-slate-400 transition-transform duration-200 flex-shrink-0",
                      isOpen && "rotate-180 text-brand-600 bg-brand-100"
                    )}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-100/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
