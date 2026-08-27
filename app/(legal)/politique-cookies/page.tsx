export default function PolitiqueCookiesPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Cookies &amp; Traçabilité</span>
          <h1 className="text-3xl font-black text-slate-900 mt-1">Politique d'Utilisation des Cookies</h1>
          <p className="text-xs text-slate-500 mt-1">Transparence et respect de votre vie privée</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site internet.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Cookies strictement nécessaires au fonctionnement</h2>
            <p>
              Chargebox utilise des cookies techniques essentiels pour mémoriser votre panier d'achat, maintenir votre session connectée et sécuriser le processus de paiement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
