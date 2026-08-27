import { Award, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

export function IrveEligibilityNotice() {
  return (
    <div className="rounded-2xl border border-brand-200 bg-brand-50/40 p-6 space-y-4">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-brand-500 text-slate-950">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-base">
            Éligibilité aux Aides de l'État &amp; Crédit d'Impôt
          </h4>
          <p className="text-xs text-slate-600">
            Économisez jusqu'à 500 € sur votre équipement et installation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-3.5 rounded-xl bg-white border border-brand-200/80 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <span>Crédit d'Impôt 500 €</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Valable pour résidence principale ou secondaire, propriétaire ou locataire.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-brand-200/80 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <span>TVA Réduite à 5,5%</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Sur la borne et la main d'œuvre pour les logements de plus de 2 ans.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-brand-200/80 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <span>Prime Advenir (Pro / Copro)</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Financement jusqu'à 50% pour copropriétés et entreprises flottes.
          </p>
        </div>
      </div>
    </div>
  );
}
