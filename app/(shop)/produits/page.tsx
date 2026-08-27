import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductFilters } from "@/components/catalog/ProductFilters";
import { ProductSort } from "@/components/catalog/ProductSort";
import { Zap, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import type { ProductWithDetails } from "@/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Catalogue Bornes de Recharge | Teltonika, Wallbox, V2C, Schneider | Chargebox",
  description:
    "Découvrez notre catalogue complet de bornes de recharge pour véhicules électriques : Teltonika TeltoCharge, Wallbox Pulsar Max, V2C Trydan, Schneider Charge, Hager Witty, Legrand.",
};

interface ProduitsPageProps {
  searchParams: {
    search?: string;
    brand?: string;
    category?: string;
    power?: string;
    phase?: string;
    connector?: string;
    solar?: string;
    dynamic?: string;
    lte?: string;
    sort?: string;
  };
}

export default async function ProduitsPage({ searchParams }: ProduitsPageProps) {
  const {
    search,
    brand,
    category,
    power,
    phase,
    connector,
    solar,
    dynamic: isDynamic,
    lte,
    sort,
  } = searchParams;

  const where: any = { isActive: true };

  if (search) {
    where.OR = [
      { name: { contains: search } },
      { description: { contains: search } },
      { sku: { contains: search } },
      { reference: { contains: search } },
    ];
  }

  if (brand) where.brand = { slug: brand };
  if (category) where.category = { slug: category };
  if (power) where.powerKw = parseFloat(power);
  if (phase) where.phaseType = phase;
  if (connector) where.connectorType = connector;
  if (solar === "true") where.hasSolarMode = true;
  if (isDynamic === "true") where.hasDynamicLoad = true;
  if (lte === "true") where.has4G = true;

  let orderBy: any = [{ isFeatured: "desc" }, { isBestSeller: "desc" }];
  if (sort === "price-asc") orderBy = [{ priceTTC: "asc" }];
  else if (sort === "price-desc") orderBy = [{ priceTTC: "desc" }];
  else if (sort === "power-desc") orderBy = [{ powerKw: "desc" }, { priceTTC: "asc" }];

  let products: ProductWithDetails[] = [];
  let brands: any[] = [];
  let categories: any[] = [];

  try {
    const [prods, brs, cats] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          brand: true,
          category: true,
          images: { orderBy: { order: "asc" } },
          specifications: { orderBy: { order: "asc" } },
        },
        orderBy,
      }) as unknown as Promise<ProductWithDetails[]>,
      prisma.brand.findMany({
        select: { id: true, name: true, slug: true },
        orderBy: { displayOrder: "asc" },
      }),
      prisma.category.findMany({
        select: { id: true, name: true, slug: true },
        orderBy: { displayOrder: "asc" },
      }),
    ]);
    products = prods;
    brands = brs;
    categories = cats;
  } catch (e) {
    console.warn("Could not fetch products for catalog:", e);
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>Accueil</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">Catalogue Bornes de Recharge</span>
            {brand && (
              <>
                <span>/</span>
                <span className="text-brand-600 font-bold capitalize">{brand}</span>
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {brand
                  ? `Bornes de Recharge ${brand.toUpperCase()}`
                  : category
                  ? "Catalogue Spécialisé"
                  : "Catalogue des Bornes de Recharge"}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {products.length} produit{products.length > 1 ? "s" : ""} disponible{products.length > 1 ? "s" : ""} avec livraison rapide et éligibilité crédit d'impôt
              </p>
            </div>

            <ProductSort />
          </div>
        </div>

        {/* Layout: Sidebar Filters + Products Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex-shrink-0">
            <ProductFilters brands={brands} categories={categories} />
          </div>

          {/* Products Grid */}
          <div className="flex-1 w-full">
            {products.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Aucun produit ne correspond à vos filtres
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Essayez de réinitialiser vos critères de recherche ou explorez nos bornes Teltonika et Wallbox.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
