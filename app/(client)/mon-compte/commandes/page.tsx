import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Package, Truck, Printer, FileText, ArrowRight, ExternalLink } from "lucide-react";
import { formatPrice, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export default async function ClientCommandesPage() {
  const user = await getCurrentUser();

  const orders = await prisma.order.findMany({
    where: {
      OR: [
        ...(user?.id ? [{ userId: user.id }] : []),
        ...(user?.email ? [{ customerEmail: user.email }] : []),
      ],
    },
    orderBy: { createdAt: "desc" },
    include: {
      items: true,
      payments: true,
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-900">
          Historique de vos commandes ({orders.length})
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Consultez l'état d'avancement de vos livraisons, téléchargez vos factures acquittées et suivez vos colis en direct.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="p-10 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <Package className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="font-bold text-slate-800 text-sm">Aucune commande enregistrée</h3>
          <p className="text-xs text-slate-500">Explorez notre catalogue pour équiper votre véhicule électrique.</p>
          <Link href="/produits">
            <Button variant="primary" size="sm">Découvrir les bornes</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const isDelivered = order.status === "DELIVERED";
            const isShipped = order.status === "SHIPPED";

            return (
              <div
                key={order.id}
                className="rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs hover:border-brand-400 transition bg-white"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div>
                    <span className="font-mono font-bold text-base text-slate-900">{order.orderNumber}</span>
                    <div className="text-xs text-slate-500">Commandé le {formatDate(order.createdAt)}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        isDelivered
                          ? "bg-emerald-100 text-emerald-800"
                          : isShipped
                          ? "bg-sky-100 text-sky-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {isDelivered
                        ? "✓ Colis Livré"
                        : isShipped
                        ? "🚚 En cours d'acheminement"
                        : "📦 En préparation logistique"}
                    </span>
                    <span className="text-lg font-black text-slate-900">{formatPrice(order.totalTTC)}</span>
                  </div>
                </div>

                {/* Items List */}
                <div className="divide-y divide-slate-100 text-xs">
                  {order.items.map((item) => (
                    <div key={item.id} className="py-2.5 flex justify-between items-center">
                      <div>
                        <span className="font-bold text-slate-900">{item.productName}</span>
                        <span className="text-slate-400 block text-[11px]">Réf : {item.productSku} · Qté : {item.quantity}</span>
                      </div>
                      <span className="font-semibold text-slate-900">{formatPrice(item.totalTTC)}</span>
                    </div>
                  ))}
                </div>

                {/* Actions & Tracking */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  {order.trackingNumber ? (
                    <div className="flex items-center gap-2 text-slate-700">
                      <Truck className="w-4 h-4 text-brand-600" />
                      <span>
                        Colis {order.carrier || "Chronopost"} : <strong className="font-mono">{order.trackingNumber}</strong>
                      </span>
                      <a
                        href={`https://www.chronopost.fr/tracking-no-cms/suivi-page?listeNumerosLT=${order.trackingNumber}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-600 hover:text-sky-700 font-bold underline flex items-center gap-1 ml-1"
                      >
                        <span>Suivre</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ) : (
                    <div className="text-slate-500 text-[11px]">
                      Expédition sous 24h à 48h ouvrées avec numéro de suivi.
                    </div>
                  )}

                  <div className="flex gap-2 w-full sm:w-auto">
                    {/* Invoice Download */}
                    <Link href={`/commandes/${order.id}/facture`} target="_blank" className="w-full sm:w-auto">
                      <Button variant="outline" size="sm" className="w-full">
                        <Printer className="w-3.5 h-3.5 mr-1 text-slate-600" />
                        <span>Télécharger la Facture</span>
                      </Button>
                    </Link>

                    {/* Order Tracking */}
                    <Link href={`/checkout/confirmation?orderNumber=${order.orderNumber}`} className="w-full sm:w-auto">
                      <Button variant="secondary" size="sm" className="w-full">
                        <FileText className="w-3.5 h-3.5 mr-1 text-brand-600" />
                        <span>Suivi en direct</span>
                      </Button>
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
