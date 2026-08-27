import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { ArrowRight, Zap, CheckCircle2, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marques Partenaires | Teltonika, Wallbox, V2C, Schneider, Hager, Legrand | Chargebox",
  description:
    "Découvrez les marques officielles partenaires de Chargebox : Teltonika Energy, Wallbox, V2C, Schneider Electric, Hager Witty et Legrand. Spécifications réelles et garanties constructeur.",
};

export default async function MarquesPage() {
  const brands = await prisma.brand.findMany({
    orderBy: { displayOrder: "asc" },
    include: {
      products: {
        where: { isActive: true },
      },
    },
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
            Distributeur Officiel Agréé
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Nos Marques de Bornes de Recharge
          </h1>
          <p className="text-sm text-slate-600">
            Nous collaborons directement avec les meilleurs fabricants européens d'infrastructures de recharge pour vous garantir un matériel certifié, fiable et pérenne.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:border-brand-400 transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="relative h-12 w-32">
                    <Image
                      src={brand.logo || "/images/brands/teltonika.svg"}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {brand.originCountry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {brand.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {brand.description}
                </p>

                <div className="text-xs text-brand-700 font-semibold flex items-center gap-1.5 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>{brand.products.length} modèle{brand.products.length > 1 ? "s" : ""} certifié{brand.products.length > 1 ? "s" : ""} en stock</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/produits?brand=${brand.slug}`}
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-brand-500 hover:text-slate-950 text-white text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <span>Voir les bornes {brand.name}</span>
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
