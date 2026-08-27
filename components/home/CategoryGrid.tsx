import Link from "next/link";
import { Home, Building2, Cable, ShieldAlert, Wrench, ArrowRight } from "lucide-react";

export function CategoryGrid() {
  const categories = [
    {
      title: "Bornes Résidentielles",
      slug: "bornes-residentielles",
      description: "Puissances 7.4 kW et 11 kW idéales pour maisons et copropriétés avec délestage intelligent.",
      icon: Home,
      count: "6 modèles",
      gradient: "from-emerald-500/10 to-teal-500/10",
      accent: "text-emerald-600",
    },
    {
      title: "Bornes Professionnelles & Tertiaires",
      slug: "bornes-professionnelles",
      description: "Puissances 22 kW triphasées avec protocole OCPP 1.6J, RFID et supervision de flotte.",
      icon: Building2,
      count: "4 modèles",
      gradient: "from-blue-500/10 to-cyan-500/10",
      accent: "text-blue-600",
    },
    {
      title: "Câbles de Recharge Type 2",
      slug: "cables-de-recharge",
      description: "Câbles monophasés et triphasés 32A 22kW ultra-résistants en 5m et 7.5m.",
      icon: Cable,
      count: "Disponibles 24h",
      gradient: "from-amber-500/10 to-orange-500/10",
      accent: "text-amber-600",
    },
    {
      title: "Protections Électriques IRVE",
      slug: "protections-electriques",
      description: "Kits complets disjoncteur + différentiel 30mA Type F obligatoires NF C 15-100.",
      icon: ShieldAlert,
      count: "Norme NF C 15-100",
      gradient: "from-purple-500/10 to-indigo-500/10",
      accent: "text-purple-600",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
            Explorez par besoin
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Toutes les Catégories de Recharge
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Trouvez rapidement l'équipement adapté à votre configuration électrique et votre véhicule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/produits?category=${cat.slug}`}
                className="group relative rounded-2xl bg-white p-6 border border-slate-200/80 hover:border-brand-500/50 hover:shadow-xl hover:shadow-slate-900/5 transition flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} ${cat.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {cat.count}
                  </span>
                  
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition mt-1 mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-brand-600 transition">
                  <span>Voir les produits</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
