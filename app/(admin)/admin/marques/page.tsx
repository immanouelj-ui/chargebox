import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Layers, Plus, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export default async function AdminMarquesPage() {
  const brands = await prisma.brand.findMany({
    include: {
      products: true,
    },
    orderBy: { displayOrder: "asc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">
            Marques Partenaires ({brands.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Gérez les constructeurs européens présentés sur Chargebox
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((b) => (
          <div
            key={b.id}
            className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="relative h-9 w-24">
                <Image
                  src={b.logo || "/images/brands/teltonika.svg"}
                  alt={b.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                Ordre : #{b.displayOrder}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-white text-base">{b.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-2 mt-1">{b.description}</p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>{b.products.length} borne(s) active(s)</span>
              {b.website && (
                <a
                  href={b.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-400 hover:text-brand-300 flex items-center gap-1 font-semibold"
                >
                  <span>Site web</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
