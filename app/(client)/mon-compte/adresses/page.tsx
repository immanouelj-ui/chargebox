import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { MapPin, Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default async function ClientAdressesPage() {
  const user = await getCurrentUser();

  const addresses = await prisma.address.findMany({
    where: { userId: user?.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900">
            Carnet d'Adresses
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Gérez vos adresses de livraison et de facturation
          </p>
        </div>
      </div>

      {addresses.length === 0 ? (
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <MapPin className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-xs text-slate-600 font-medium">Vos adresses de livraison seront automatiquement enregistrées lors de votre prochaine commande.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {addr.type === "SHIPPING" ? "Livraison" : "Facturation"}
                </span>
                {addr.isDefault && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Par défaut
                  </span>
                )}
              </div>

              <div className="text-xs text-slate-700 leading-relaxed font-medium">
                <strong className="block text-slate-900 font-bold text-sm mb-1">{addr.firstName} {addr.lastName}</strong>
                {addr.company && <div className="text-slate-500">{addr.company}</div>}
                <div>{addr.street}</div>
                {addr.complement && <div>{addr.complement}</div>}
                <div>{addr.postalCode} {addr.city}</div>
                <div>{addr.country}</div>
                {addr.phone && <div className="text-slate-500 mt-1">Tél : {addr.phone}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
