import { prisma } from "@/lib/prisma";
import { Tag, Plus, CheckCircle, XCircle } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export default async function AdminCouponsPage() {
  const coupons = await prisma.coupon.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">
            Codes Promotionnels ({coupons.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Gérez les remises et offres spéciales Chargebox
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {coupons.map((c) => (
          <div
            key={c.id}
            className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-brand-400" />
                <span className="font-mono font-black text-white text-base">{c.code}</span>
              </div>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  c.isActive
                    ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                    : "bg-red-950 text-red-400 border border-red-800"
                }`}
              >
                {c.isActive ? "Actif" : "Inactif"}
              </span>
            </div>

            <p className="text-xs text-slate-400">{c.description}</p>

            <div className="pt-2 border-t border-slate-800 flex justify-between text-xs text-slate-300 font-bold">
              <span>
                Valeur : {c.discountType === "PERCENT" ? `-${c.value}%` : `-${formatPrice(c.value)}`}
              </span>
              {c.minSpend && c.minSpend > 0 && (
                <span className="text-slate-500 font-normal">Min. {formatPrice(c.minSpend)}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
