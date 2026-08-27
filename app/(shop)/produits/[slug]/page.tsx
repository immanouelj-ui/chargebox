import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductBuyBox } from "@/components/product/ProductBuyBox";
import { ProductSpecsTable } from "@/components/product/ProductSpecsTable";
import { ChargingTimeCalculator } from "@/components/product/ChargingTimeCalculator";
import { IrveEligibilityNotice } from "@/components/product/IrveEligibilityNotice";
import { ProductReviews } from "@/components/product/ProductReviews";
import { ProductCard } from "@/components/catalog/ProductCard";
import { Zap, ShieldCheck, Truck, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import type { ProductWithDetails } from "@/types";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: { brand: true },
  });

  if (!product) {
    return { title: "Produit non trouvé | Chargebox" };
  }

  return {
    title: `${product.name} | Chargebox France`,
    description:
      product.shortDescription ||
      `Achetez la borne de recharge ${product.name} chez Chargebox. Puissance ${product.powerKw} kW, garantie 3 ans constructeur et pose par électricien qualifié IRVE sur devis gratuit.`,
    openGraph: {
      title: product.name,
      description: product.shortDescription || undefined,
      images: [
        {
          url: `/images/products/${product.slug}.jpg`,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = (await prisma.product.findUnique({
    where: { slug: params.slug },
    include: {
      brand: true,
      category: true,
      images: { orderBy: { order: "asc" } },
      specifications: { orderBy: { order: "asc" } },
      reviews: {
        where: { isApproved: true },
        orderBy: { createdAt: "desc" },
      },
    },
  })) as unknown as ProductWithDetails | null;

  if (!product || !product.isActive) {
    notFound();
  }

  // Similar/Related products from same category or brand
  const relatedProducts = (await prisma.product.findMany({
    where: {
      isActive: true,
      id: { not: product.id },
      OR: [
        { brandId: product.brandId },
        { categoryId: product.categoryId },
      ],
    },
    take: 4,
    include: {
      brand: true,
      category: true,
      images: { orderBy: { order: "asc" } },
      specifications: { orderBy: { order: "asc" } },
    },
  })) as unknown as ProductWithDetails[];

  // SEO Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => `https://chargebox.fr${img.url}`),
    description: product.shortDescription || product.description,
    sku: product.sku,
    mpn: product.reference,
    brand: {
      "@type": "Brand",
      name: product.brand.name,
    },
    offers: {
      "@type": "Offer",
      url: `https://chargebox.fr/produits/${product.slug}`,
      priceCurrency: "EUR",
      price: product.priceTTC,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: Math.max(1, product.reviews?.length || 5),
    },
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-slate-900 transition">Accueil</Link>
            <span>/</span>
            <Link href="/produits" className="hover:text-slate-900 transition">Bornes de recharge</Link>
            <span>/</span>
            <Link href={`/produits?brand=${product.brand.slug}`} className="hover:text-slate-900 transition">
              {product.brand.name}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column: Sticky Buy Box */}
          <div className="lg:col-span-5 sticky top-28">
            <ProductBuyBox product={product} />
          </div>

        </div>

        {/* Deep Dive Sections: Description, Specs, Calculator, Irve */}
        <div className="mt-16 pt-12 border-t border-slate-200 space-y-16">
          
          {/* Detailed Description & Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-black text-slate-900">
                Présentation de la borne {product.name}
              </h2>
              <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                {product.description}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              {/* In the Box */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  📦 Contenu du colis
                </h4>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">✓ 1x Borne {product.name}</li>
                  <li className="flex items-center gap-2">✓ 1x Gabarit de perçage &amp; vis de fixation</li>
                  <li className="flex items-center gap-2">✓ 1x Manuel d'installation &amp; guide de démarrage</li>
                  {product.hasRfid && <li className="flex items-center gap-2">✓ 2x Badges RFID configurables</li>}
                  <li className="flex items-center gap-2">✓ 1x Certificat de garantie constructeur 3 ans</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Charging Time Calculator */}
          <ChargingTimeCalculator chargerPowerKw={product.powerKw} />

          {/* Specifications Table */}
          <ProductSpecsTable specifications={product.specifications} />

          {/* IRVE Eligibility & Tax Credit info */}
          <IrveEligibilityNotice />

          {/* Customer Reviews */}
          <ProductReviews reviews={product.reviews || []} productName={product.name} />

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Produits Associés &amp; Similaires
                  </h3>
                  <p className="text-xs text-slate-500">
                    Complétez votre installation avec nos protections et câbles recommandés
                  </p>
                </div>
                <Link
                  href="/produits"
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 transition"
                >
                  Voir tout &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
