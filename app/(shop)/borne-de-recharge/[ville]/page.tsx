import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MapPin, ShieldCheck, Zap, ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import {
  ContentPage,
  Prose,
  Section,
  Bullets,
  FaqBlock,
} from "@/components/content/ContentPage";
import { villeBySlug, VILLES } from "@/content/villes";
import { abs, orgNode, breadcrumbLd, faqLd } from "@/content/seo";

interface VillePageProps {
  params: {
    ville: string;
  };
}

export function generateStaticParams() {
  return VILLES.map((v) => ({
    ville: v.slug,
  }));
}

function getCityFaq(ville: { prep: string; nom: string; dept: string; region: string }) {
  const { prep, nom, dept, region } = ville;
  return [
    {
      q: `Combien coûte l'installation d'une borne de recharge ${prep} ?`,
      a: `Entre 990 € et 1 990 € posée pour une borne de 7,4 à 11 kW, avant déduction des aides (TVA réduite à 5,5 %, prime ADVENIR en copropriété). Le prix final dépend surtout de la distance entre le tableau électrique et l'emplacement de stationnement.`,
    },
    {
      q: `Quel électricien installateur choisir ${prep} ?`,
      a: `Faites appel exclusivement à un électricien certifié IRVE (Qualifelec / AFNOR). C'est l'obligation légale en France pour toute borne supérieure à 3,7 kW et la condition impérative pour bénéficier des assurances et garanties.`,
    },
    {
      q: `Quelles sont les aides financières disponibles ${prep} ?`,
      a: `La TVA réduite à 5,5 % s'applique directement sur votre devis. En copropriété, la prime ADVENIR finance jusqu'à 50% du montant HT (plafonné à 960 €).`,
    },
    {
      q: `Nos installateurs interviennent-ils partout ${prep} et dans le ${dept} ?`,
      a: `Oui, notre réseau d'artisans certifiés IRVE couvre l'ensemble de la commune de ${nom} ainsi que toutes les communes limitrophes dans le département ${dept} (${region}).`,
    },
  ];
}

export function generateMetadata({ params }: VillePageProps): Metadata {
  const ville = villeBySlug(params.ville);
  if (!ville) return {};

  const path = `/borne-de-recharge/${ville.slug}`;
  const title = `Borne de recharge voiture électrique ${ville.prep} : Devis Gratuit IRVE | ChoisisTaBorne`;
  const description = `Installez votre borne de recharge pour véhicule électrique ${ville.prep} avec un artisan certifié IRVE. Comparez, découvrez les tarifs locaux et recevez 3 devis gratuits sous 24h.`;

  return {
    title,
    description,
    alternates: {
      canonical: abs(path),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: abs(path),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function SingleVillePage({ params }: VillePageProps) {
  const ville = villeBySlug(params.ville);
  if (!ville) {
    notFound();
  }

  const path = `/borne-de-recharge/${ville.slug}`;
  const faq = getCityFaq(ville);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Installation de borne de recharge ${ville.prep}`,
        serviceType: "Installation de borne de recharge IRVE",
        provider: { "@id": orgNode["@id"] },
        areaServed: {
          "@type": "City",
          name: ville.nom,
          address: {
            "@type": "PostalAddress",
            addressRegion: ville.region,
            addressCountry: "FR",
          },
        },
        description: `Installation certifiée IRVE de bornes de recharge pour véhicules électriques ${ville.prep}.`,
      },
      orgNode,
      faqLd(faq),
      breadcrumbLd([
        { name: "Accueil", path: "/" },
        { name: "Villes", path: "/borne-de-recharge" },
        { name: ville.nom, path },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ContentPage
        crumbs={[
          { name: "Accueil", to: "/" },
          { name: "Villes", to: "/borne-de-recharge" },
          { name: ville.nom },
        ]}
      >
        <article className="space-y-8">
          
          {/* Header */}
          <div className="space-y-4 pb-6 border-b border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold border border-brand-500/20">
              <MapPin className="w-3.5 h-3.5" />
              {ville.dept} · {ville.region}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Installation de Borne de Recharge pour Voiture Électrique {ville.prep}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              {ville.intro}
            </p>
          </div>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block">Certifié IRVE</span>
              <span className="text-sm font-bold text-white block">Électriciens Qualifiés</span>
              <p className="text-[11px] text-slate-400">Conforme norme NF C 15-100 &amp; éligible aides</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">3 Devis Gratuits</span>
              <span className="text-sm font-bold text-white block">Sous 24h Ouvrées</span>
              <p className="text-[11px] text-slate-400">Comparaison sans engagement de prix</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">Toutes Puissances</span>
              <span className="text-sm font-bold text-white block">7,4 kW / 11 kW / 22 kW</span>
              <p className="text-[11px] text-slate-400">Mono ou triphasé avec délestage</p>
            </div>
          </div>

          {/* Local Content Sections */}
          <Prose>
            <Section h2={`Spécificités et habitat pour votre borne ${ville.prep}`}>
              <p>{ville.local}</p>
              {ville.habitat && <p>{ville.habitat}</p>}
            </Section>

            <Section h2={`Comment se déroule l'intervention d'un installateur IRVE ${ville.prep} ?`}>
              <p>
                L'installation d'une borne de recharge par un électricien qualifié IRVE respecte un protocole technique rigoureux en 4 étapes :
              </p>
              <Bullets
                items={[
                  "Diagnostic électrique : vérification de la puissance souscrite au compteur Enedis (Linky) et de la conformité de la mise à la terre.",
                  "Tirage de ligne dédiée : passage d'un câble de section adaptée (généralement 10 mm² ou 16 mm²) sous gaine ignifugée.",
                  "Pose des protections électriques : disjoncteur différentiel Type F (ou Hpi) et interrupteur différentiel 30 mA dédié.",
                  "Mise en service et configuration : paramétrage de l'application smartphone, tests de charge et réglage du délestage dynamique.",
                ]}
              />
            </Section>
          </Prose>

          {/* FAQ */}
          <FaqBlock faq={faq} />

        </article>
      </ContentPage>
    </>
  );
}
