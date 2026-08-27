export default function MentionsLegalesPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Informations Légales</span>
          <h1 className="text-3xl font-black text-slate-900 mt-1">Mentions Légales</h1>
          <p className="text-xs text-slate-500 mt-1">Dernière mise à jour : 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Éditeur du Site</h2>
            <p>
              Le site internet <strong>Chargebox</strong> (accessible à l'adresse <code>https://chargebox.fr</code>) est édité par la société <strong>Chargebox SAS</strong>, Société par Actions Simplifiée au capital social de 50 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro RCS 912 345 678.
            </p>
            <p>
              <strong>Siège social :</strong> 14 Rue de la République, 75011 Paris, France.<br />
              <strong>Numéro de TVA intracommunautaire :</strong> FR89912345678.<br />
              <strong>Directeur de la publication :</strong> Alexandre Martin.<br />
              <strong>Email de contact :</strong> contact@chargebox.fr<br />
              <strong>Téléphone :</strong> +33 (0)1 89 71 45 20
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Hébergement</h2>
            <p>
              Le site est hébergé sur une infrastructure cloud sécurisée haute disponibilité basée dans l'Union Européenne (France/Allemagne).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Propriété Intellectuelle &amp; Marques</h2>
            <p>
              L'ensemble des éléments constituant le site Chargebox (textes, graphismes, logiciels, photographies, logos Chargebox, architecture) est la propriété exclusive de Chargebox SAS. Les marques et logos des constructeurs tiers (Teltonika Energy, Wallbox, V2C, Schneider Electric, Hager, Legrand) sont la propriété respective de leurs titulaires légaux.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
