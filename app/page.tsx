import { prisma } from "@/lib/prisma";
import { HeroSection } from "@/components/home/HeroSection";
import { TeltonikaSpotlight } from "@/components/home/TeltonikaSpotlight";
import { BrandCarousel } from "@/components/home/BrandCarousel";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { IrveInstallationBanner } from "@/components/home/IrveInstallationBanner";
import { FaqSection } from "@/components/home/FaqSection";
import type { ProductWithDetails } from "@/types";

export const revalidate = 60; // ISR revalidation

export default async function HomePage() {
  const products = (await prisma.product.findMany({
    where: {
      isActive: true,
    },
    include: {
      brand: true,
      category: true,
      images: {
        orderBy: { order: "asc" },
      },
      specifications: {
        orderBy: { order: "asc" },
      },
    },
    orderBy: [
      { isFeatured: "desc" },
      { isBestSeller: "desc" },
      { createdAt: "desc" },
    ],
  })) as unknown as ProductWithDetails[];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Partner Brands Strip */}
      <BrandCarousel />

      {/* 3. Main Showcase: Teltonika Energy */}
      <TeltonikaSpotlight />

      {/* 4. Products Grid */}
      <FeaturedProducts products={products} />

      {/* 5. Categories Showcase */}
      <CategoryGrid />

      {/* 6. IRVE Installation Network */}
      <IrveInstallationBanner />

      {/* 7. Guarantees & Benefits */}
      <BenefitsSection />

      {/* 8. FAQ */}
      <FaqSection />
    </div>
  );
}
