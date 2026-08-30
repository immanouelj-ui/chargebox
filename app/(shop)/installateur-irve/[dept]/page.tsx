import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MapPin, ShieldCheck, ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import {
  ContentPage,
  Prose,
  Section,
  Bullets,
  FaqBlock,
} from "@/components/content/ContentPage";
import { DEPARTEMENTS, departementBySlug } from "@/content/departements";
import { VILLES } from "@/content/villes";
import { abs, orgNode, breadcrumbLd, faqLd } from "@/content/seo";

interface DeptPageProps {
  params: {
    dept: string;
  };
}

export function generateStaticParams() {
  return DEPARTEMENTS.map((d) => ({
    dept: d.slug,
  }));
}

export function generateMetadata({ params }: DeptPageProps): Metadata {
  const dept = departementBySlug(params.dept);
  if (!dept) return {};

  const path = `/installateur-irve/${dept.slug}`;
  const title = `Installateur Borne de Recharge IRVE ${dept.prep} (${dept.code}) | ChoisisTaBorne`;
  const description = `Trouvez un installateur certifié IRVE ${dept.prep} (${dept.code}). Comparez les tarifs, simulez vos aides et recevez 3 devis gratuits sous 24h pour la pose de votre borne.`;

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
  };
}

export default function SingleDeptPage({ params }: DeptPageProps) {
  const dept = departementBySlug(params.dept);
  if (!dept) {
    notFound();
  }

  const path = `/installateur-irve/${dept.slug}`;
  
  // Find cities in this department
  const citiesInDept = VILLES.filter((v) =>
    v.dept.includes(`(${dept.code})`) || v.dept.toLowerCase().includes(dept.nom.toLowerCase())
  );

  const faq = [
    {
      q: `Pourquoi faire appel à un électricien qualifié IRVE ${dept.prep} ?`,
      a: `En France, la certification IRVE (Qualifelec ou AFNOR) est obligatoire pour toute pose de borne supérieure à 3,7 kW. Elle garantit la sécurité de votre réseau électrique domestique et vous ouvre droit aux aides publiques et à l'assurance habitation.`,
    },
    {
      q: `Quels sont les délais d'intervention constatés dans le ${dept.code} ?`,
      a: `Nos artisans partenaires interviennent généralement sous 7 à 15 jours ouvrés après validation de votre devis. La visite technique et le devis sont établis sous 24h à 48h.`,
    },
    {
      q: `Quelles sont les aides financières disponibles ${dept.prep} ?`,
      a: `TVA réduite à 5,5 % sur le matériel et la pose pour les logements de plus de 2 ans, et prime ADVENIR jusqu'à 960 € pour les installations en copropriété.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Installateurs de borne de recharge IRVE ${dept.prep}`,
        serviceType: "Installation de borne de recharge IRVE",
        provider: { "@id": orgNode["@id"] },
        areaServed: {
          "@type": "AdministrativeArea",
          name: dept.nom,
        },
        description: `Réseau d'artisans électriciens certifiés IRVE pour la pose de bornes ${dept.prep}.`,
      },
      orgNode,
      faqLd(faq),
      breadcrumbLd([
        { name: "Accueil", path: "/" },
        { name: "Installateurs IRVE", path: "/installateur-irve" },
        { name: `${dept.nom} (${dept.code})`, path },
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
          { name: "Installateurs IRVE", to: "/installateur-irve" },
          { name: `${dept.nom} (${dept.code})` },
        ]}
      >
        <article className="space-y-8">
          
          {/* Header */}
          <div className="space-y-4 pb-6 border-b border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold border border-brand-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Département {dept.code} · {dept.region}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Installateurs de Borne de Recharge IRVE {dept.prep} ({dept.code})
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              {dept.intro}
            </p>
          </div>

          {/* Local Content */}
          <Prose>
            <Section h2={`Contexte et habitat dans le ${dept.nom}`}>
              <p>{dept.local}</p>
            </Section>

            {/* Cities in Department */}
            {citiesInDept.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Villes couvertes dans le {dept.nom} ({citiesInDept.length})
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {citiesInDept.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/borne-de-recharge/${c.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-3 transition hover:border-brand-500/50 hover:bg-slate-900"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-brand-400" />
                        <span className="font-bold text-xs text-slate-200 group-hover:text-white truncate">
                          {c.nom}
                        </span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-brand-400 shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <Section h2="Pourquoi comparer 3 devis d'électriciens IRVE ?">
              <p>
                Les tarifs de pose d'une borne de recharge peuvent varier de 20% à 40% selon les artisans et la configuration de votre tableau électrique. Recevoir 3 devis détaillés vous permet de :
              </p>
              <Bullets
                items={[
                  "Vérifier la certification IRVE Qualifelec de chaque intervenant.",
                  "Comparer le coût de tirage de ligne selon la distance (câblage 10mm² ou 16mm²).",
                  "Vérifier l'intégration du délestage dynamique et des protections Type F.",
                  "Obtenir le tarif le plus compétitif avec application de la TVA réduite à 5,5%.",
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
