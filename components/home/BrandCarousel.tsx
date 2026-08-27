import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function BrandCarousel() {
  const brands = [
    {
      name: "Teltonika Energy",
      slug: "teltonika",
      logo: "/images/brands/teltonika.svg",
      tagline: "Design scandinave & IoT industriel",
      badge: "Marque Principale",
    },
    {
      name: "Wallbox",
      slug: "wallbox",
      logo: "/images/brands/wallbox.svg",
      tagline: "Pulsar Max compacte & connectée",
      badge: "Best-Seller",
    },
    {
      name: "V2C Trydan",
      slug: "v2c",
      logo: "/images/brands/v2c.svg",
      tagline: "Délestage & Optimisation Solaire",
      badge: "Spécial Solaire",
    },
    {
      name: "Schneider Electric",
      slug: "schneider",
      logo: "/images/brands/schneider.svg",
      tagline: "Fiabilité & Écosystème Wiser",
      badge: "NF & ZE Ready",
    },
    {
      name: "Hager Witty",
      slug: "hager",
      logo: "/images/brands/hager.svg",
      tagline: "Made in France & Liaison TIC Linky",
      badge: "Plébiscitée IRVE",
    },
    {
      name: "Legrand Green'up",
      slug: "legrand",
      logo: "/images/brands/legrand.svg",
      tagline: "Infrastructures certifiées",
      badge: "Qualité Pro",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Partenariats Officiels
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Les Plus Grandes Marques de Bornes
            </h2>
          </div>
          <Link
            href="/marques"
            className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 transition flex items-center gap-1 mt-3 md:mt-0"
          >
            <span>Voir toutes les marques</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/produits?brand=${brand.slug}`}
              className="group p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-brand-400 hover:shadow-lg hover:shadow-slate-900/5 transition flex flex-col justify-between items-center text-center relative overflow-hidden"
            >
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 mb-3 group-hover:border-brand-300 transition">
                {brand.badge}
              </span>

              <div className="relative h-10 w-28 my-2 transition-transform group-hover:scale-105">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-[11px] text-slate-500 font-medium mt-2 leading-tight">
                {brand.tagline}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
