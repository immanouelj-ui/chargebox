export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Protection des Données</span>
          <h1 className="text-3xl font-black text-slate-900 mt-1">Politique de Confidentialité &amp; RGPD</h1>
          <p className="text-xs text-slate-500 mt-1">Conformité au Règlement Général sur la Protection des Données (RGPD)</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Collecte des Données Personnelles</h2>
            <p>
              Chargebox SAS collecte uniquement les données nécessaires au traitement de vos commandes de bornes de recharge, à la facturation, à la livraison des colis par nos transporteurs agréés et à la mise en relation avec nos installateurs certifiés IRVE.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Sécurité des Paiements</h2>
            <p>
              Les transactions financières sont intégralement déléguées à Stripe, certifié PCI-DSS Niveau 1. Chargebox n'a à aucun moment accès à vos numéros complets de carte bancaire ni à vos cryptogrammes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Vos Droits d'Accès et de Rectification</h2>
            <p>
              Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données personnelles sur simple demande par email à <code>dpo@chargebox.fr</code> ou depuis votre espace client.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
