import Link from "next/link";
import { AlertTriangle, ArrowLeft, RefreshCw, CreditCard, Headphones, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paiement Échoué ou Annulé | Chargebox",
  description: "Votre paiement n'a pas pu être finalisé. Aucun montant n'a été débité.",
};

interface EchecPageProps {
  searchParams: {
    reason?: string;
    order_id?: string;
  };
}

export default function CheckoutEchecPage({ searchParams }: EchecPageProps) {
  const { reason, order_id } = searchParams;

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm text-center space-y-6">
          
          {/* Warning Icon */}
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
            <AlertTriangle className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
              Paiement Non Finalisé
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 pt-1">
              Votre paiement n'a pas pu aboutir
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Rassurez-vous, <strong>aucun prélèvement n'a été effectué</strong> sur votre compte bancaire et les articles de votre commande sont conservés.
            </p>
          </div>

          {/* Possible Reasons */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 text-xs text-slate-700">
            <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider">
              Causes possibles du refus :
            </span>
            <ul className="space-y-2 list-disc list-inside text-slate-600 text-xs">
              <li>L'authentification <strong>3D Secure</strong> n'a pas été validée à temps sur votre application bancaire.</li>
              <li>Le plafond d'autorisation de votre carte bancaire a été atteint.</li>
              <li>La transaction a été interrompue ou annulée manuellement.</li>
              <li>Les coordonnées bancaires saisies comportent une erreur.</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link href="/checkout" className="flex-1">
              <Button variant="electric" size="lg" className="w-full text-slate-950 font-black">
                <RefreshCw className="w-4 h-4 mr-2" />
                <span>Réessayer le paiement</span>
              </Button>
            </Link>

            <Link href="/panier" className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                <ShoppingBag className="w-4 h-4 mr-2" />
                <span>Retour au panier</span>
              </Button>
            </Link>
          </div>

          {/* Support Helpline */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Headphones className="w-4 h-4 text-brand-600" />
            <span>
              Un problème ? Notre équipe est disponible au <strong>+33 (0)1 89 71 45 20</strong> ou par <Link href="/contact" className="text-brand-600 font-bold underline">message</Link>.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
