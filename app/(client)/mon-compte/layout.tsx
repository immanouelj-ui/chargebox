import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { Package, MapPin, User, LogOut, LayoutDashboard, Shield } from "lucide-react";
import { LogoutButton } from "@/components/auth/LogoutButton";

export default async function ClientAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/connexion");
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* User Greeting Bar */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 mb-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-brand-400 font-black text-xl flex items-center justify-center shadow-sm">
              {user.name ? user.name.slice(0, 2).toUpperCase() : "CB"}
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900">
                Bonjour, {user.name || "Client"}
              </h1>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                <span>{user.email}</span>
                <span>•</span>
                <span className="px-2 py-0.5 bg-brand-50 text-brand-800 font-bold rounded">
                  {user.role === "PRO" ? "Compte Professionnel" : user.role === "ADMIN" ? "Administrateur" : "Compte Particulier"}
                </span>
              </div>
            </div>
          </div>

          {user.role === "ADMIN" && (
            <Link
              href="/admin"
              className="py-2.5 px-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-brand-400" />
              <span>Accéder au Back-Office Admin</span>
            </Link>
          )}
        </div>

        {/* Sidebar Nav + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Links */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-1">
            <Link
              href="/mon-compte"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <LayoutDashboard className="w-4 h-4 text-brand-600" />
              <span>Tableau de bord</span>
            </Link>
            <Link
              href="/mon-compte/commandes"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <Package className="w-4 h-4 text-brand-600" />
              <span>Mes Commandes &amp; Factures</span>
            </Link>
            <Link
              href="/mon-compte/adresses"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <MapPin className="w-4 h-4 text-brand-600" />
              <span>Carnet d'Adresses</span>
            </Link>
            <Link
              href="/mon-compte/profil"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <User className="w-4 h-4 text-brand-600" />
              <span>Profil &amp; Mot de Passe</span>
            </Link>

            <div className="pt-2 border-t border-slate-100 mt-2">
              <LogoutButton />
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {children}
          </div>

        </div>

      </div>
    </div>
  );
}
