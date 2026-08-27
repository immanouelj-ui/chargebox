export default function CgvPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Conditions Contractuelles</span>
          <h1 className="text-3xl font-black text-slate-900 mt-1">Conditions Générales de Vente (CGV)</h1>
          <p className="text-xs text-slate-500 mt-1">Applicables aux clients particuliers (B2C) et professionnels (B2B)</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">Article 1 - Objet et Champ d'Application</h2>
            <p>
              Les présentes Conditions Générales de Vente régissent de manière exclusive les relations contractuelles entre Chargebox SAS et toute personne physique ou morale procédant à l'achat de bornes de recharge pour véhicules électriques et accessoires associés sur le site Chargebox.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">Article 2 - Prix et Modalités de Paiement</h2>
            <p>
              Les prix de nos produits sont indiqués en euros toutes taxes comprises (€ TTC) et hors taxes (€ HT). Le taux de TVA appliqué est de 20% pour le matériel seul, ou 5,5% lorsque le matériel est commandé avec le forfait d'installation certifié IRVE pour un logement de plus de 2 ans.
            </p>
            <p>
              Le règlement s'effectue en ligne de manière sécurisée via notre partenaire certifié Stripe par carte bancaire (Visa, MasterCard, CB) ou virement bancaire SEPA.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">Article 3 - Livraison &amp; Délais</h2>
            <p>
              Les livraisons sont opérées en France métropolitaine sous 24 à 48 heures ouvrées pour tout article en stock. Les frais de port standard sont offerts dès 300 € d'achat TTC.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">Article 4 - Droit de Rétractation (14 Jours)</h2>
            <p>
              Conformément à l'article L. 221-18 du Code de la consommation, les clients particuliers disposent d'un délai légal de quatorze (14) jours calendaires à compter de la réception du colis pour exercer leur droit de rétractation sans avoir à justifier de motif.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">Article 5 - Garanties Constructeur &amp; SAV</h2>
            <p>
              Toutes les bornes Teltonika Energy, Wallbox, V2C, Schneider, Hager et Legrand bénéficient de la garantie légale de conformité ainsi que de la garantie constructeur européenne de 3 ans.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
