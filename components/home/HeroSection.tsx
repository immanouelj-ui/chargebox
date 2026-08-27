import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Zap, Shield, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Tech Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-electric-cyan/15 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-brand-400 backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
              <Zap className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
              <span>Distributeur Spécialiste Teltonika &amp; Bornes IRVE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              La recharge électrique <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-electric-cyan">
                performante, intelligente
              </span>{" "}
              &amp; certifiée.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Achetez votre borne de recharge résidentielle ou professionnelle parmi les plus grandes marques européennes : <strong>Teltonika Energy</strong>, Wallbox, V2C, Schneider, Hager et Legrand.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Garantie 3 ans constructeur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Installation IRVE sur devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Délestage dynamique &amp; Solaire</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Livraison Express 24/48h</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link href="/produits">
                <Button variant="electric" size="xl" className="w-full sm:w-auto group">
                  <span>Explorer le Catalogue</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/simulateur-borne">
                <Button variant="outline" size="xl" className="w-full sm:w-auto bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600">
                  <Sparkles className="w-4 h-4 text-brand-400 mr-2" />
                  <span>Simuler ma Borne Idéale</span>
                </Button>
              </Link>
            </div>

            {/* Mini Trust Stats */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-8 text-xs text-slate-400">
              <div>
                <strong className="block text-lg font-black text-white">+5 000</strong>
                <span>Bornes installées</span>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <strong className="block text-lg font-black text-brand-400">4.9 / 5</strong>
                <span>Avis clients vérifiés</span>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <strong className="block text-lg font-black text-white">100% IRVE</strong>
                <span>Conforme NF C 15-100</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card - Spotlight Teltonika TeltoCharge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 p-6 border border-slate-700/80 shadow-2xl backdrop-blur-md">
              
              {/* Top Floating Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-200">Recommandation Chargebox</span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-brand-500/20 text-brand-400 border border-brand-500/30">
                  En Stock (48h)
                </span>
              </div>

              {/* Product Visual */}
              <div className="relative h-64 w-full my-4 flex items-center justify-center">
                <Image
                  src="/images/products/teltonika-teltocharge.jpg"
                  alt="Borne Teltonika TeltoCharge 7.4kW"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Product Quick Specs */}
              <div className="space-y-3 pt-2">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-400">
                    Teltonika Energy
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    TeltoCharge 7.4 kW / 22 kW
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Façade ardoise &amp; bois · Connectée WiFi / BLE / 4G · OCPP 1.6J
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-700/60">
                  <div>
                    <div className="text-[11px] text-slate-400">À partir de</div>
                    <div className="text-2xl font-black text-white">
                      749,00 € <span className="text-xs font-normal text-slate-400">TTC</span>
                    </div>
                  </div>

                  <Link href="/produits/teltonika-teltocharge-7-4kw-monophase-prise-t2s">
                    <Button variant="primary" size="sm">
                      Découvrir
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
