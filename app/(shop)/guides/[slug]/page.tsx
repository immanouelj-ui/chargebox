import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowRight, BookOpen, Clock, Calendar, CheckCircle2 } from "lucide-react";
import {
  ContentPage,
  Prose,
  Section,
  Bullets,
  FaqBlock,
} from "@/components/content/ContentPage";
import { guideBySlug, GUIDES } from "@/content/guides";
import { abs, orgNode, breadcrumbLd, faqLd } from "@/content/seo";

interface GuidePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return GUIDES.map((g) => ({
    slug: g.slug,
  }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const guide = guideBySlug(params.slug);
  if (!guide) return {};

  const path = `/guides/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: abs(path),
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: "article",
      url: abs(path),
      publishedTime: guide.updated,
      modifiedTime: guide.updated,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default function SingleGuidePage({ params }: GuidePageProps) {
  const guide = guideBySlug(params.slug);
  if (!guide) {
    notFound();
  }

  const path = `/guides/${guide.slug}`;
  const related = (guide.related || [])
    .map((s) => GUIDES.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.h1,
        description: guide.metaDescription,
        inLanguage: "fr-FR",
        datePublished: guide.updated,
        dateModified: guide.updated,
        author: { "@id": orgNode["@id"] },
        publisher: { "@id": orgNode["@id"] },
        mainEntityOfPage: abs(path),
      },
      orgNode,
      faqLd(guide.faq),
      breadcrumbLd([
        { name: "Accueil", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: guide.h1, path },
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
          { name: "Guides", to: "/guides" },
          { name: guide.h1 },
        ]}
      >
        <article className="space-y-6">
          
          {/* Header */}
          <div className="space-y-3 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3 text-xs text-brand-400 font-bold">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Mis à jour en 2026
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Lecture 4 min
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {guide.h1}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              {guide.lede}
            </p>
          </div>

          {/* Body Sections */}
          <Prose>
            {guide.sections.map((s, i) => (
              <Section key={i} h2={s.h2}>
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {s.list && <Bullets items={s.list} />}
              </Section>
            ))}
          </Prose>

          {/* FAQ Accordion */}
          <FaqBlock faq={guide.faq} />

          {/* Related Guides */}
          {related.length > 0 && (
            <section className="mt-14 pt-8 border-t border-slate-800 space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                À lire également sur le même sujet
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/guides/${r.slug}`}
                    className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-brand-500/50 hover:bg-slate-900 block"
                  >
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-400 transition-colors flex items-center justify-between gap-2">
                      <span className="line-clamp-2">{r.h1}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-brand-400 transition-transform group-hover:translate-x-0.5" />
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </article>
      </ContentPage>
    </>
  );
}
