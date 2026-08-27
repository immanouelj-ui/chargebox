import Link from "next/link";
import { Truck, ShieldCheck, Wrench, PhoneCall } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center gap-1.5 whitespace-nowrap font-medium text-slate-200">
            <Truck className="w-3.5 h-3.5 text-brand-400" />
            <span>Livraison Express offerte dès 300 €</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 whitespace-nowrap text-slate-300">
            <Wrench className="w-3.5 h-3.5 text-electric-cyan" />
            <span>Réseau national d'installateurs qualifiés IRVE</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 whitespace-nowrap text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
            <span>Garantie constructeur jusqu'à 3 ans</span>
          </div>
        </div>

        <div className="flex items-center gap-5 font-medium ml-auto">
          <Link
            href="/simulateur-borne"
            className="text-brand-400 hover:text-brand-300 transition flex items-center gap-1"
          >
            ⚡ Simulateur de Borne
          </Link>
          <div className="hidden sm:flex items-center gap-1 text-slate-400 hover:text-white transition">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>01 89 71 45 20</span>
          </div>
          <Link href="/contact" className="hover:text-white transition">
            Aide &amp; B2B
          </Link>
        </div>
      </div>
    </div>
  );
}
