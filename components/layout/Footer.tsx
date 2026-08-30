import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, Truck, Headphones, RotateCcw, 
  MapPin, Phone, Mail, Award, Zap, CheckCircle2, ChevronRight 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Trust Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-14 border-b border-slate-800/80">
          
          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Livraison Express 24/48h</h4>
              <p className="text-xs text-slate-400 mt-0.5">Expédition rapide et soignée avec suivi Chronopost / Geodis.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Réseau 100% Qualifié IRVE</h4>
              <p className="text-xs text-slate-400 mt-0.5">Installateurs électriciens certifiés dans 104 villes et 46 départements.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Garantie 3 Ans Constructeur</h4>
              <p className="text-xs text-slate-400 mt-0.5">Matériel européen certifié CE &amp; conforme norme NF C 15-100.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Support &amp; Conseil Gratuit</h4>
              <p className="text-xs text-slate-400 mt-0.5">Nos experts vous accompagnent au 01 89 71 45 20 (Lun-Ven 9h-18h).</p>
            </div>
          </div>

        </div>

        {/* 5 Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
          
          {/* Col 1: Brand & Contact */}
          <div className="space-y-4 lg:col-span-1">
            <div className="relative h-12 w-44">
              <Image
                src="/images/chargebox-logo.svg"
                alt="Chargebox"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              La plateforme française de référence pour l'achat de bornes de recharge et la mise en relation avec des installateurs certifiés IRVE.
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                <span className="font-bold text-white">+33 (0)1 89 71 45 20</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                <span>contact@chargebox.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                <span>10 Avenue Raphael, 95200 Sarcelles</span>
              </div>
            </div>
          </div>

          {/* Col 2: Boutique & Bornes */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Boutique Bornes</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/produits?brand=teltonika" className="hover:text-brand-400 transition font-bold text-slate-200 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-brand-400" />
                  <span>Teltonika TeltoCharge</span>
                </Link>
              </li>
              <li>
                <Link href="/produits?brand=wallbox" className="hover:text-brand-400 transition">
                  Wallbox Pulsar Max
                </Link>
              </li>
              <li>
                <Link href="/produits?brand=v2c" className="hover:text-brand-400 transition">
                  V2C Trydan (Solaire)
                </Link>
              </li>
              <li>
                <Link href="/produits?category=bornes-residentielles" className="hover:text-brand-400 transition">
                  Bornes Monophasées (7.4 kW)
                </Link>
              </li>
              <li>
                <Link href="/produits?category=bornes-professionnelles" className="hover:text-brand-400 transition">
                  Bornes Triphasées (22 kW)
                </Link>
              </li>
              <li>
                <Link href="/produits?category=protections-electriques" className="hover:text-brand-400 transition">
                  Protections Électriques IRVE
                </Link>
              </li>
              <li>
                <Link href="/produits" className="hover:text-brand-400 transition font-semibold text-brand-400">
                  Voir tout le Catalogue &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Guides & Comparatifs (209) */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Guides &amp; Conseils (209)</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/guides/prix-borne-de-recharge" className="hover:text-brand-400 transition">
                  Prix d'une borne posée en 2026
                </Link>
              </li>
              <li>
                <Link href="/guides/puissance-borne-7-11-22-kw" className="hover:text-brand-400 transition">
                  Choisir entre 7,4 kW, 11 kW et 22 kW
                </Link>
              </li>
              <li>
                <Link href="/guides/borne-recharge-copropriete-droit-prise" className="hover:text-brand-400 transition">
                  Droit à la prise en copropriété
                </Link>
              </li>
              <li>
                <Link href="/guides/delestage-dynamique-borne-recharge" className="hover:text-brand-400 transition">
                  Délestage dynamique intelligent
                </Link>
              </li>
              <li>
                <Link href="/guides/recharge-solaire-panneaux-photovoltaiques" className="hover:text-brand-400 transition">
                  Recharger avec panneaux solaires
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-brand-400 transition font-semibold text-brand-400">
                  Consulter les 209 Guides &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Installateurs IRVE (104 Villes) */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Installateurs IRVE</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/borne-de-recharge/paris" className="hover:text-brand-400 transition">
                  Installateur IRVE à Paris (75)
                </Link>
              </li>
              <li>
                <Link href="/borne-de-recharge/lyon" className="hover:text-brand-400 transition">
                  Installateur IRVE à Lyon (69)
                </Link>
              </li>
              <li>
                <Link href="/borne-de-recharge/marseille" className="hover:text-brand-400 transition">
                  Installateur IRVE à Marseille (13)
                </Link>
              </li>
              <li>
                <Link href="/borne-de-recharge/toulouse" className="hover:text-brand-400 transition">
                  Installateur IRVE à Toulouse (31)
                </Link>
              </li>
              <li>
                <Link href="/borne-de-recharge/bordeaux" className="hover:text-brand-400 transition">
                  Installateur IRVE à Bordeaux (33)
                </Link>
              </li>
              <li>
                <Link href="/borne-de-recharge" className="hover:text-brand-400 transition font-semibold text-brand-400">
                  Les 104 Villes Couvertes &rarr;
                </Link>
              </li>
              <li>
                <Link href="/installateur-irve" className="hover:text-brand-400 transition text-slate-300">
                  Les 46 Départements &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Services & Suivi */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Services &amp; Suivi</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/borne-de-recharge#devis" className="hover:text-brand-400 transition font-bold text-emerald-400">
                  ⚡ 3 Devis Gratuits sous 24h
                </Link>
              </li>
              <li>
                <Link href="/simulateur-borne" className="hover:text-brand-400 transition text-brand-400 font-semibold">
                  🧮 Simulateur de Borne
                </Link>
              </li>
              <li>
                <Link href="/suivi-commande" className="hover:text-brand-400 transition font-bold text-slate-200 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-brand-400" />
                  <span>Suivi de Commande &amp; Facture</span>
                </Link>
              </li>
              <li>
                <Link href="/livraison" className="hover:text-brand-400 transition">
                  Livraison Express &amp; Délais
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-brand-400 transition">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="hover:text-brand-400 transition">
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-brand-400 transition">
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Payments */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Chargebox SAS · ChoisisTaBorne. Tous droits réservés. Réseau national de bornes de recharge et installateurs certifiés IRVE.
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-medium">Paiements 3D Secure :</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-200">STRIPE</span>
              <span className="px-2 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-200">CB</span>
              <span className="px-2 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-200">VISA</span>
              <span className="px-2 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-200">MASTERCARD</span>
              <span className="px-2 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-200">APPLE PAY</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
