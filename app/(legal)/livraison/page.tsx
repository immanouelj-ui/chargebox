export default function LivraisonPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Expéditions &amp; Délais</span>
          <h1 className="text-3xl font-black text-slate-900 mt-1">Politique de Livraison</h1>
          <p className="text-xs text-slate-500 mt-1">Expédition rapide et sécurisée en France métropolitaine</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Frais de Port &amp; Seuil de Gratuité</h2>
            <p>
              La livraison standard est <strong>intégralement offerte</strong> pour toute commande supérieure ou égale à <strong>300,00 € TTC</strong>. Pour les paniers inférieurs à ce montant (petits accessoires, câbles ou fixations seuls), les frais de port forfaitaires s'élèvent à 14,90 € TTC.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Délais d'Expédition</h2>
            <p>
              Toute commande validée avant 13h du lundi au vendredi est préparée et expédiée le jour même depuis nos entrepôts situés en France. Le délai moyen de livraison à domicile par Chronopost / Geodis IRVE est de <strong>24 à 48 heures ouvrées</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Suivi de Colis en Direct</h2>
            <p>
              Dès la prise en charge de votre colis par le transporteur, un numéro de suivi vous est automatiquement communiqué par email et dans votre espace client Chargebox.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
