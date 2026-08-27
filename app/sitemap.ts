import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chargebox.fr";

  // 1. Pages Statiques Principales & Légales
  const staticPages = [
    "",
    "/produits",
    "/marques",
    "/categories",
    "/simulateur-borne",
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

  try {
    // 2. Pages Produits Dynamiques (générées en direct depuis la base de données)
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

    // 3. Pages Marques Dynamiques
    const brands = await prisma.brand.findMany({
      select: { slug: true, updatedAt: true },
    });

    const brandPages = brands.map((b) => ({
      url: `${baseUrl}/produits?brand=${b.slug}`,
      lastModified: b.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    // 4. Pages Catégories Dynamiques
    const categories = await prisma.category.findMany({
      select: { slug: true, updatedAt: true },
    });

    const categoryPages = categories.map((c) => ({
      url: `${baseUrl}/produits?category=${c.slug}`,
      lastModified: c.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    return [...staticPages, ...productPages, ...brandPages, ...categoryPages];
  } catch (error) {
    return staticPages;
  }
}
