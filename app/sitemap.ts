import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://chargebox.fr";

  // Static pages
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
    "/livraison",
    "/retours",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Product Pages
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

  return [...staticPages, ...productPages];
}
