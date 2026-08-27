import Link from "next/link";
import { Wrench, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function IrveInstallationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-600 to-electric-blue text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              Installation sur Devis Gratuit
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Besoin d'un Électricien Qualifié IRVE pour votre Pose ?
            </h2>

            <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
              En France, toute borne supérieure à 3.7 kW doit obligatoirement être raccordée par un électricien qualifié IRVE selon la norme NF C 15-100 pour être couverte par votre assurance habitation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Artisans certifiés IRVE</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Norme NF C 15-100</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Devis gratuit sous 24h</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full bg-slate-950 text-white hover:bg-slate-900 border-0 shadow-lg">
                <Send className="w-4 h-4 text-brand-400 mr-2" />
                <span>Demander mon devis de pose</span>
              </Button>
            </Link>
            <Link href="/simulateur-borne">
              <Button variant="outline" size="lg" className="w-full border-white/40 text-white hover:bg-white/10">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Simulateur de borne</span>
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
