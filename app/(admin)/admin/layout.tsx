import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Tag,
  Layers,
  Users,
  LogOut,
  ShieldAlert,
  ArrowUpRight,
  PlusCircle,
  ExternalLink,
} from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    redirect("/connexion");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Top Admin Bar */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="relative h-9 w-36 brightness-0 invert">
              <Image
                src="/images/chargebox-logo.svg"
                alt="Chargebox"
                fill
                className="object-contain"
              />
            </div>
            <span className="px-2 py-0.5 rounded bg-brand-500 text-slate-950 text-[10px] font-black tracking-wider">
              ADMIN BACK-OFFICE
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition"
          >
            <span>Voir la boutique</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <div className="h-4 w-px bg-slate-800" />
          <div className="text-slate-300 font-semibold">{user.name || user.email}</div>
        </div>
      </header>

      {/* Main Admin Body: Sidebar + Main Content */}
      <div className="flex-1 flex">
        
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900/90 border-r border-slate-800 p-4 space-y-1 hidden md:block">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 py-2">
            Gestion Générale
          </div>

          <Link
            href="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <LayoutDashboard className="w-4 h-4 text-brand-400" />
            <span>Tableau de bord</span>
          </Link>

          <Link
            href="/admin/commandes"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <ShoppingBag className="w-4 h-4 text-brand-400" />
            <span>Commandes &amp; Statuts</span>
          </Link>

          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 py-2 pt-4">
            Catalogue Produits
          </div>

          <Link
            href="/admin/produits"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <Package className="w-4 h-4 text-brand-400" />
            <span>Tous les Produits</span>
          </Link>

          <Link
            href="/admin/produits/nouveau"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-brand-400 hover:bg-slate-800 transition"
          >
            <PlusCircle className="w-4 h-4 text-brand-400" />
            <span>Ajouter une Borne</span>
          </Link>

          <Link
            href="/admin/marques"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <Layers className="w-4 h-4 text-brand-400" />
            <span>Marques Partenaires</span>
          </Link>

          <Link
            href="/admin/coupons"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <Tag className="w-4 h-4 text-brand-400" />
            <span>Codes Promo</span>
          </Link>

          <div className="pt-8 mt-8 border-t border-slate-800">
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-red-400 hover:bg-red-500/10 transition text-left"
              >
                <LogOut className="w-4 h-4" />
                <span>Quitter l'Admin</span>
              </button>
            </form>
          </div>
        </aside>

        {/* Dynamic Admin View */}
        <main className="flex-1 bg-slate-950 p-6 sm:p-8 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}
