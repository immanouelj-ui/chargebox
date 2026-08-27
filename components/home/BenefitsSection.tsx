import { ShieldCheck, Zap, Award, BadgePercent, Wrench, Headphones, Truck } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Spécialiste Indépendant",
      description: "Nous sélectionnons rigoureusement les meilleures bornes du marché sans compromis sur la fiabilité et la sécurité.",
    },
    {
      icon: ShieldCheck,
      title: "Garantie Constructeur 3 Ans",
      description: "Toutes nos bornes bénéficient de la garantie européenne constructeur de 3 ans avec support technique réactif.",
    },
    {
      icon: Wrench,
      title: "Pose IRVE sur Devis Gratuit",
      description: "Mise en relation directe avec notre réseau d'électriciens qualifiés IRVE partout en France pour une visite et un devis personnalisé.",
    },
    {
      icon: BadgePercent,
      title: "TVA Réduite à 5,5%",
      description: "Bénéficiez de la TVA à taux réduit de 5,5% sur le matériel et la pose pour tout logement achevé depuis plus de 2 ans.",
    },
    {
      icon: Truck,
      title: "Stock Réel & Expédition 24/48h",
      description: "Notre centre logistique basé en France expédie vos bornes et kits de protection sous 24 à 48 heures avec suivi en direct.",
    },
    {
      icon: Headphones,
      title: "Support Technique Dédié",
      description: "Une équipe d'experts en électromobilité à votre écoute du lundi au vendredi pour configurer vos bornes et applications.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
            Pourquoi choisir Chargebox ?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Vos Garanties pour une Recharge Sereine
          </h2>
          <p className="text-sm text-slate-300">
            De l'achat en ligne jusqu'au raccordement à votre tableau électrique, nous simplifions chaque étape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-brand-500/40 hover:bg-slate-800 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
