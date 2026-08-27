import Link from "next/link";
import Image from "next/image";
import { Zap, ShieldCheck, Wifi, Radio, Cpu, Sparkles, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function TeltonikaSpotlight() {
  const highlights = [
    {
      icon: Sparkles,
      title: "Design Personnalisable & Élégant",
      description: "Façades interchangeables en bois noble, ardoise naturelle ou blanc laqué avec bandeau LED dynamique.",
    },
    {
      icon: Radio,
      title: "Connectivité Sans Faille",
      description: "Wi-Fi, Bluetooth 5.0, Ethernet et modem 4G LTE en option pour une supervision OCPP 1.6J autonome.",
    },
    {
      icon: ShieldCheck,
      title: "Robustesse Industrielle Européenne",
      description: "Boîtier certifié IP55 (étanchéité totale pluie/poussière) et résistance aux chocs maximale IK10.",
    },
    {
      icon: Cpu,
      title: "Délestage Dynamique Intelligent",
      description: "Module de gestion de charge en temps réel pour éviter tout dépassement de votre abonnement électrique.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-brand-400" />
            Marque Partenaire Principale
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Découvrez l'Excellence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-electric-cyan">
              Teltonika TeltoCharge
            </span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Conçue et fabriquée en Europe par Teltonika Energy, la gamme TeltoCharge allie la robustesse du matériel industriel de pointe à une esthétique raffinée pour sublimer votre habitation ou vos locaux professionnels.
          </p>
        </div>

        {/* Feature Grid & Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-slate-800/80 border border-slate-700 p-8 shadow-2xl flex flex-col items-center">
              <div className="absolute top-4 left-4">
                <Badge variant="brand" size="sm">Made in Europe · Garantie 3 ans</Badge>
              </div>

              <div className="relative h-80 w-full max-w-xs my-6">
                <Image
                  src="/images/products/teltonika-teltocharge.jpg"
                  alt="Borne Teltonika TeltoCharge"
                  fill
                  className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                />
              </div>

              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-700">
                <div className="text-center sm:text-left">
                  <div className="text-xs text-slate-400">Disponible en 7.4 kW (Mono) &amp; 22 kW (Tri)</div>
                  <div className="text-lg font-black text-white">À partir de 749,00 € TTC</div>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <Link href="/produits/teltonika-teltocharge-7-4kw-monophase-prise-t2s" className="w-full sm:w-auto">
                    <Button variant="electric" size="sm" className="w-full">
                      Commander 7.4 kW
                    </Button>
                  </Link>
                  <Link href="/produits/teltonika-teltocharge-22kw-triphase-4g-rfid" className="w-full sm:w-auto">
                    <Button variant="secondary" size="sm" className="w-full bg-slate-700 hover:bg-slate-600">
                      Version 22 kW 4G
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights List */}
          <div className="lg:col-span-6 space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-brand-500/40 hover:bg-slate-800/80 transition"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <Link href="/produits?brand=teltonika">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-slate-600 hover:bg-slate-800">
                  <span>Voir toutes les configurations Teltonika</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-brand-400" />
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
