import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { GUIDES } from "@/content/guides";
import { VILLES } from "@/content/villes";
import { DEPARTEMENTS } from "@/content/departements";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chargebox.fr";

  // 1. Pages Statiques Principales & Hubs
  const staticPages = [
    "",
    "/produits",
    "/guides",
    "/borne-de-recharge",
    "/installateur-irve",
    "/marques",
    "/categories",
    "/simulateur-borne",
    "/suivi-commande",
    "/panier",
    "/contact",
    "/mentions-legales",
    "/cgv",
    "/politique-de-confidentialite",
    "/politique-cookies",
    "/livraison",
    "/retours",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. 209 Guides Piliers SEO
  const guidePages = GUIDES.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: new Date(g.updated || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 3. 104 Pages Villes Locales
  const villePages = VILLES.map((v) => ({
    url: `${baseUrl}/borne-de-recharge/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 4. 46 Hubs Départements
  const deptPages = DEPARTEMENTS.map((d) => ({
    url: `${baseUrl}/installateur-irve/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  try {
    // 5. Pages Produits Dynamiques depuis Prisma DB
    const products = await prisma.product.findMany({
      where: { isActive: true },
      select: { slug: true, updatedAt: true },
    });

    const productPages = products.map((p) => ({
      url: `${baseUrl}/produits/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "daily" as const,
      priority: 0.9,
    }));

    return [
      ...staticPages,
      ...productPages,
      ...guidePages,
      ...villePages,
      ...deptPages,
    ];
  } catch (error) {
    return [...staticPages, ...guidePages, ...villePages, ...deptPages];
  }
}
