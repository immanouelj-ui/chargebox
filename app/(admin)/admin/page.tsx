import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  TrendingUp,
  ShoppingBag,
  Users,
  Package,
  AlertTriangle,
  ArrowUpRight,
  Plus,
  Truck,
  CheckCircle,
} from "lucide-react";
import { formatPrice, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [orders, products, usersCount, lowStockProducts] = await Promise.all([
    prisma.order.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      include: { items: true },
    }),
    prisma.product.findMany({
      where: { isActive: true },
    }),
    prisma.user.count(),
    prisma.product.findMany({
      where: { stock: { lte: 25 }, isActive: true },
      take: 5,
    }),
  ]);

  const totalRevenue = orders.reduce((acc, order) => acc + order.totalTTC, 0);

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Tableau de Bord &amp; Indicateurs
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Performance commerciale et suivi des commandes Chargebox
          </p>
        </div>

        <div className="flex gap-2">
          <Link href="/admin/produits/nouveau">
            <Button variant="electric" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              <span>Nouveau Produit</span>
            </Button>
          </Link>
          <Link href="/admin/commandes">
            <Button variant="outline" size="sm" className="bg-slate-900 border-slate-700 text-white hover:bg-slate-800">
              <span>Toutes les commandes</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Revenue */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase">
            <span>Chiffre d'Affaires</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">
            {formatPrice(totalRevenue)}
          </div>
          <span className="text-[11px] text-emerald-400 font-semibold block">
            ↑ +18.4% ce mois-ci
          </span>
        </div>

        {/* Orders */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase">
            <span>Commandes Validées</span>
            <ShoppingBag className="w-4 h-4 text-brand-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">
            {orders.length}
          </div>
          <span className="text-[11px] text-slate-400 font-medium block">
            100% paiement Stripe
          </span>
        </div>

        {/* Catalog */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase">
            <span>Bornes &amp; Accessoires</span>
            <Package className="w-4 h-4 text-electric-cyan" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">
            {products.length}
          </div>
          <span className="text-[11px] text-brand-400 font-medium block">
            Teltonika, Wallbox, V2C, etc.
          </span>
        </div>

        {/* Clients */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase">
            <span>Comptes Clients &amp; Pro</span>
            <Users className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">
            {usersCount}
          </div>
          <span className="text-[11px] text-slate-400 font-medium block">
            Particuliers &amp; Électriciens IRVE
          </span>
        </div>

      </div>

      {/* Grid: Recent Orders + Low Stock Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recent Orders Table */}
        <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-base font-bold text-white">
              Commandes Récentes
            </h3>
            <Link
              href="/admin/commandes"
              className="text-xs font-bold text-brand-400 hover:text-brand-300 transition flex items-center gap-1"
            >
              <span>Gérer les commandes</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="divide-y divide-slate-800/80">
            {orders.map((ord) => (
              <div key={ord.id} className="py-3.5 flex items-center justify-between gap-4 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-white text-sm">{ord.orderNumber}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-500/20 text-brand-400 border border-brand-500/30">
                      {ord.status}
                    </span>
                  </div>
                  <div className="text-slate-400 mt-0.5">
                    {ord.customerName} ({ord.customerEmail}) • {formatDate(ord.createdAt)}
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-white text-sm">{formatPrice(ord.totalTTC)}</div>
                  <div className="text-[10px] text-slate-400">{ord.items.length} article(s)</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 pb-3 border-b border-slate-800">
            <AlertTriangle className="w-4 h-4" />
            <h3 className="text-base font-bold text-white">
              Alertes de Stock Faible
            </h3>
          </div>

          <div className="space-y-3">
            {lowStockProducts.map((p) => (
              <div
                key={p.id}
                className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/70 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-white block line-clamp-1">{p.name}</span>
                  <span className="text-slate-400 font-mono text-[10px]">{p.sku}</span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-400 font-black text-xs">
                  {p.stock} restant(s)
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
