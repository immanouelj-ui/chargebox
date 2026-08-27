import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Plus, Edit2, Eye, Zap } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export default async function AdminProduitsPage() {
  const products = await prisma.product.findMany({
    include: {
      brand: true,
      category: true,
      images: { orderBy: { order: "asc" } },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white">
            Gestion du Catalogue ({products.length} produits)
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Cliquez sur <strong>« Modifier »</strong> pour ajuster les prix, stocks, descriptions ou supprimer un produit
          </p>
        </div>

        <Link href="/admin/produits/nouveau">
          <Button variant="electric" size="sm">
            <Plus className="w-4 h-4 mr-1" />
            <span>Ajouter une borne ou accessoire</span>
          </Button>
        </Link>
      </div>

      {/* Products Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-800/80 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-700">
            <tr>
              <th className="p-4">Produit &amp; Marque</th>
              <th className="p-4">SKU / Réf</th>
              <th className="p-4">Puissance</th>
              <th className="p-4">Prix TTC</th>
              <th className="p-4">Prix HT</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Statut</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-slate-800/40 transition">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 p-1 flex-shrink-0">
                      <Image
                        src={p.images[0]?.url || "/images/products/teltonika-teltocharge.jpg"}
                        alt={p.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-white block max-w-xs line-clamp-1">{p.name}</span>
                      <span className="text-[10px] text-brand-400 font-semibold">{p.brand.name}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 font-mono text-slate-400">{p.sku}</td>
                <td className="p-4 font-bold text-white">{p.powerKw} kW</td>
                <td className="p-4 font-black text-white">{formatPrice(p.priceTTC)}</td>
                <td className="p-4 text-slate-400">{formatPrice(p.priceHT)}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-0.5 rounded font-bold text-[11px] ${
                      p.stock > 15
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {p.stock} unités
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      p.isActive
                        ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                        : "bg-red-950 text-red-400 border border-red-800"
                    }`}
                  >
                    {p.isActive ? "Actif" : "Désactivé"}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/produits/${p.id}`}
                      className="px-2.5 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs transition flex items-center gap-1"
                      title="Modifier prix, stock, description"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Modifier</span>
                    </Link>

                    <Link
                      href={`/produits/${p.slug}`}
                      target="_blank"
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                      title="Voir sur le site"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
