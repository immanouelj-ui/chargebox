import { prisma } from "@/lib/prisma";
import { ShoppingBag, Truck, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { formatPrice, formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminCommandesPage() {
  const orders = await prisma.order.findMany({
    include: {
      items: true,
      payments: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">
          Gestion des Commandes ({orders.length})
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Suivez les expéditions, mettez à jour les statuts et visualisez les demandes d'installation IRVE
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-800/80 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-700">
            <tr>
              <th className="p-4">N° Commande</th>
              <th className="p-4">Date</th>
              <th className="p-4">Client</th>
              <th className="p-4">Articles</th>
              <th className="p-4">Total TTC</th>
              <th className="p-4">Forfait IRVE</th>
              <th className="p-4">Statut</th>
              <th className="p-4">Suivi Colis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {orders.map((ord) => (
              <tr key={ord.id} className="hover:bg-slate-800/40 transition">
                <td className="p-4 font-mono font-bold text-white">{ord.orderNumber}</td>
                <td className="p-4 text-slate-400">{formatDate(ord.createdAt)}</td>
                <td className="p-4">
                  <div className="font-bold text-white">{ord.customerName}</div>
                  <div className="text-[11px] text-slate-400">{ord.customerEmail}</div>
                  {ord.isB2B && (
                    <span className="text-[10px] bg-purple-950 text-purple-400 border border-purple-800 px-1.5 py-0.5 rounded font-bold">
                      PRO: {ord.companyName}
                    </span>
                  )}
                </td>
                <td className="p-4">
                  <span className="font-bold text-white">{ord.items.length} article(s)</span>
                  <div className="text-[10px] text-slate-400 line-clamp-1 max-w-[150px]">
                    {ord.items.map((i) => i.productName).join(", ")}
                  </div>
                </td>
                <td className="p-4 font-black text-white">{formatPrice(ord.totalTTC)}</td>
                <td className="p-4">
                  {ord.installationRequested ? (
                    <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-blue-950 text-blue-400 border border-blue-800">
                      Oui (IRVE)
                    </span>
                  ) : (
                    <span className="text-slate-500">Non</span>
                  )}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                      ord.status === "PROCESSING"
                        ? "bg-amber-950 text-amber-400 border border-amber-800"
                        : ord.status === "SHIPPED"
                        ? "bg-blue-950 text-blue-400 border border-blue-800"
                        : ord.status === "DELIVERED"
                        ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    {ord.status}
                  </span>
                </td>
                <td className="p-4 font-mono text-[11px] text-slate-400">
                  {ord.trackingNumber || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
