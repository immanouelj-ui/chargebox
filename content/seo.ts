// Helpers SEO partagés — URL canonique, JSON-LD Organization, fil d'Ariane.
// Utilisés par la page d'accueil et les pages de contenu (guides + villes).

export const SITE_URL = "https://choisistaborne.fr";

/** Construit une URL absolue à partir d'un chemin (avec slash de tête). */
export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Nœud Organization réutilisable, référencé par @id dans les autres schémas. */
export const orgNode = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Choisis Ta borne",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og.png`,
  description:
    "Réseau national d'installateurs certifiés IRVE. Comparez et recevez 3 devis gratuits sous 24h pour l'installation de votre borne de recharge.",
  areaServed: { "@type": "Country", name: "France" },
  email: "contact@irvohm.fr",
};

/** Génère un BreadcrumbList JSON-LD à partir d'une liste { name, path }. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

/** Génère un FAQPage JSON-LD à partir d'une liste { q, a }. */
export function faqLd(faq: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Construit le tableau `meta` standard pour une page (title, description, OG, Twitter, canonical géré à part).
 * Garde une cohérence stricte avec la home.
 */
export function pageMeta(opts: { title: string; description: string; path: string }) {
  const url = abs(opts.path);
  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    { property: "og:site_name", content: "Choisis Ta borne" },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:locale", content: "fr_FR" },
    { property: "og:image", content: `${SITE_URL}/og.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: `${SITE_URL}/og.png` },
  ];
}
