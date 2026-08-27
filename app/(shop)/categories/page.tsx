import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Home, Building2, Cable, ShieldAlert, Wrench, ArrowRight, Zap } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Catégories de Bornes & Équipements IRVE | Chargebox",
  description:
    "Explorez nos gammes de bornes résidentielles 7.4kW, bornes professionnelles 22kW, câbles de recharge Type 2 et coffrets de protection différentiels certifiés NF C 15-100.",
};

export default async function CategoriesPage() {
  let categories: any[] = [];

  try {
    categories = await prisma.category.findMany({
      include: {
        products: {
          where: { isActive: true },
        },
      },
      orderBy: { displayOrder: "asc" },
    });
  } catch (e) {
    console.warn("Could not fetch categories:", e);
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
            Catalogue Structuré
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Toutes les Catégories de Recharge
          </h1>
          <p className="text-sm text-slate-600">
            Trouvez les équipements adaptés à votre besoin résidentiel, copropriété ou entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-brand-400 transition flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {cat.products?.length || 0} produit{cat.products?.length > 1 ? "s" : ""}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{cat.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  href={`/produits?category=${cat.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-brand-500 hover:text-slate-950 text-white text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <span>Explorer la catégorie</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
