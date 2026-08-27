export default function RetoursPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Rétractation &amp; SAV</span>
          <h1 className="text-3xl font-black text-slate-900 mt-1">Politique de Retour &amp; Remboursement</h1>
          <p className="text-xs text-slate-500 mt-1">Satisfait ou remboursé sous 14 jours</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Droit de Retour (14 Jours)</h2>
            <p>
              Vous disposez de 14 jours calendaires après la réception de votre matériel pour nous signaler votre souhait de retour. Le produit doit être renvoyé complet dans son emballage d'origine, en parfait état de revente avec tous ses accessoires, câbles et notices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Modalités de Remboursement</h2>
            <p>
              Le remboursement intégral est effectué sous 5 jours ouvrés suivant la réception et le contrôle du matériel retourné, directement sur la carte bancaire ayant servi au paiement Stripe.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
