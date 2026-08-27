import { Award, ShieldCheck, FileCheck, CheckCircle2, Wrench } from "lucide-react";

export function IrveEligibilityNotice() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-slate-900 text-brand-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-base">
            Conformité NF C 15-100 &amp; Installation IRVE sur Devis
          </h4>
          <p className="text-xs text-slate-600">
            Faites installer votre borne par un électricien qualifié IRVE pour une sécurité et une garantie optimales.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <span>Devis Gratuit sous 24h</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Visite technique et proposition chiffrée sans aucun engagement.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <span>TVA Réduite à 5,5%</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Applicable sur la prestation de pose pour les logements de plus de 2 ans.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <span>Garantie 3 Ans Matériel</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Assurance décennale de l'artisan poseur et garantie constructeur européenne.
          </p>
        </div>
      </div>
    </div>
  );
}
