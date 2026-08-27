import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/catalog/ProductCard";
import type { ProductWithDetails } from "@/types";

interface FeaturedProductsProps {
  products: ProductWithDetails[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Sélection Chargebox
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Nos Bornes de Recharge Populaires
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Découvrez les modèles plébiscités par nos clients particuliers et électriciens IRVE.
            </p>
          </div>

          <Link
            href="/produits"
            className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 transition flex items-center gap-1 mt-4 md:mt-0"
          >
            <span>Voir tout le catalogue ({products.length} produits)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
