import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Package, Truck, Award, ShieldCheck, ArrowRight, Clock } from "lucide-react";
import { formatPrice, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default async function MonCompteDashboardPage() {
  const user = await getCurrentUser();

  const recentOrders = await prisma.order.findMany({
    where: { userId: user?.id },
    take: 3,
    orderBy: { createdAt: "desc" },
    include: {
      items: true,
    },
  });

  return (
    <div className="space-y-8">
      
      <div>
        <h2 className="text-xl font-black text-slate-900">
          Vue d'ensemble de votre compte
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Suivez l'état de vos livraisons et téléchargez vos justificatifs d'installation
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
          <span className="text-xs font-bold text-slate-500 uppercase">Commandes passées</span>
          <div className="text-2xl font-black text-slate-900">{recentOrders.length}</div>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1">
          <span className="text-xs font-bold text-emerald-800 uppercase">Assistance Technique</span>
          <div className="text-2xl font-black text-emerald-700">Prioritaire</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
          <span className="text-xs font-bold text-slate-500 uppercase">Garantie active</span>
          <div className="text-2xl font-black text-slate-900">3 Ans Constructeur</div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">
            Dernières commandes
          </h3>
          <Link
            href="/mon-compte/commandes"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 transition flex items-center gap-1"
          >
            <span>Voir tout l'historique</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentOrders.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
            <Package className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-xs text-slate-600 font-medium">Vous n'avez pas encore passé de commande.</p>
            <Link href="/produits">
              <Button variant="primary" size="sm">Découvrir les bornes Teltonika</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-brand-300 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-slate-900">{order.orderNumber}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {order.status === "PROCESSING" ? "En cours de préparation" : order.status}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">
                    Passée le {formatDate(order.createdAt)} • {order.items.length} article{order.items.length > 1 ? "s" : ""}
                  </div>
                  {order.trackingNumber && (
                    <div className="text-xs text-brand-700 font-mono font-semibold">
                      Suivi {order.carrier} : {order.trackingNumber}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="text-base font-black text-slate-900">{formatPrice(order.totalTTC)}</span>
                  <Link href={`/checkout/confirmation?orderNumber=${order.orderNumber}`}>
                    <Button variant="outline" size="sm">Détails &amp; Facture</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
