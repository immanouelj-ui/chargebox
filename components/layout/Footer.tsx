import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Truck, Wrench, Award, Mail, Phone, MapPin, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Trust & Guarantees Banner */}
      <div className="border-b border-slate-800/80 py-10 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-500/10 text-brand-400 rounded-2xl border border-brand-500/20">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Livraison Rapide</h4>
                <p className="text-xs text-slate-400 mt-1">Expédition sous 24/48h partout en France métropolitaine.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-electric-cyan/10 text-electric-cyan rounded-2xl border border-electric-cyan/20">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Pose Qualifiée IRVE</h4>
                <p className="text-xs text-slate-400 mt-1">Installation certifiée conforme NF C 15-100 &amp; aides Advenir.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-500/10 text-brand-400 rounded-2xl border border-brand-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Garantie 3 Ans</h4>
                <p className="text-xs text-slate-400 mt-1">Matériel garanti constructeur européen avec support dédié.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Pose IRVE sur Devis</h4>
                <p className="text-xs text-slate-400 mt-1">Mise en relation avec un électricien qualifié IRVE sur devis gratuit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-48 brightness-0 invert opacity-95">
                <Image
                  src="/images/chargebox-logo.svg"
                  alt="Chargebox"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              <strong>Chargebox</strong> est la boutique de référence pour l'achat et l'installation de bornes de recharge pour véhicules électriques en France. Particuliers &amp; Professionnels.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-brand-400" />
                <span>+33 (0)1 89 71 45 20 (Lun - Ven 9h - 18h)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-brand-400" />
                <span>contact@chargebox.fr</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>Paris, France · Livraison France &amp; Europe</span>
              </div>
            </div>
          </div>

          {/* Marques */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Marques</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/produits?brand=teltonika" className="hover:text-brand-400 transition font-semibold text-slate-300 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-brand-400" />
                  <span>Teltonika Energy</span>
                </Link>
              </li>
              <li>
                <Link href="/produits?brand=wallbox" className="hover:text-brand-400 transition">
                  Wallbox (Pulsar Max)
                </Link>
              </li>
              <li>
                <Link href="/produits?brand=v2c" className="hover:text-brand-400 transition">
                  V2C Trydan Solaire
                </Link>
              </li>
              <li>
                <Link href="/produits?brand=schneider" className="hover:text-brand-400 transition">
                  Schneider Electric
                </Link>
              </li>
              <li>
                <Link href="/produits?brand=hager" className="hover:text-brand-400 transition">
                  Hager Witty
                </Link>
              </li>
              <li>
                <Link href="/produits?brand=legrand" className="hover:text-brand-400 transition">
                  Legrand Green'up
                </Link>
              </li>
            </ul>
          </div>

          {/* Catégories */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Catalogue</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/produits?category=bornes-residentielles" className="hover:text-brand-400 transition">
                  Bornes Résidentielles (7.4 kW)
                </Link>
              </li>
              <li>
                <Link href="/produits?category=bornes-professionnelles" className="hover:text-brand-400 transition">
                  Bornes Tertiaires &amp; Flottes (22 kW)
                </Link>
              </li>
              <li>
                <Link href="/produits?category=cables-de-recharge" className="hover:text-brand-400 transition">
                  Câbles Type 2 / Type 2 (32A)
                </Link>
              </li>
              <li>
                <Link href="/produits?category=protections-electriques" className="hover:text-brand-400 transition">
                  Protections Électriques IRVE
                </Link>
              </li>
              <li>
                <Link href="/produits?category=supports-accessoires" className="hover:text-brand-400 transition">
                  Pieds &amp; Supports de Fixation
                </Link>
              </li>
              <li>
                <Link href="/simulateur-borne" className="hover:text-brand-400 transition text-brand-400 font-semibold">
                  ⚡ Simulateur de Borne
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations Légales & Service */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Informations</h4>
            <ul className="space-y-2 text-xs">
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
              <li>
                <Link href="/politique-cookies" className="hover:text-brand-400 transition">
                  Gestion des Cookies
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
                  Livraison &amp; Délais
                </Link>
              </li>
              <li>
                <Link href="/retours" className="hover:text-brand-400 transition">
                  Retours &amp; Rétractation (14j)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition">
                  Contact &amp; Devis B2B
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Payments */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Chargebox SAS. Tous droits réservés. Spécialiste français des bornes de recharge pour véhicules électriques.
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-medium">Paiements sécurisés :</span>
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
