import { prisma } from "@/lib/prisma";
import { AdminOrdersManager } from "@/components/admin/AdminOrdersManager";

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
          Gestion &amp; Suivi des Commandes ({orders.length})
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Suivez les expéditions en direct, générez les factures acquittées et envoyez les numéros de suivi Chronopost aux clients par email.
        </p>
      </div>

      <AdminOrdersManager initialOrders={orders as any} />
    </div>
  );
}
