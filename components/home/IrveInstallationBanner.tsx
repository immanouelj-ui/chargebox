import Link from "next/link";
import { Wrench, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function IrveInstallationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-600 to-electric-blue text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              Service Clé en Main
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Besoin d'un Installateur Électricien Qualifié IRVE ?
            </h2>

            <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
              En France, toute borne supérieure à 3.7 kW doit obligatoirement être posée par un professionnel qualifié IRVE pour bénéficier du <strong>crédit d'impôt de 500 €</strong> et être couvert par votre assurance habitation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Attestation Consuel &amp; IRVE</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Intervention sous 10 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Forfait standard dès 590 €</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch">
            <Link href="/simulateur-borne">
              <Button variant="secondary" size="lg" className="w-full bg-slate-950 text-white hover:bg-slate-900 border-0">
                <Sparkles className="w-4 h-4 text-brand-400 mr-2" />
                <span>Simuler mon installation</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full border-white/40 text-white hover:bg-white/10">
                <span>Demander un devis B2B / Pro</span>
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
