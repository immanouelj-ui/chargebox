"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShoppingBag, Truck, CheckCircle2, Clock, AlertCircle, 
  Send, ExternalLink, Printer, Search, FileText, ChevronRight 
} from "lucide-react";
import { formatPrice, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface OrderItemType {
  id: string;
  productName: string;
  productSku: string;
  quantity: number;
  unitPriceTTC: number;
  totalTTC: number;
}

interface OrderType {
  id: string;
  orderNumber: string;
  createdAt: string | Date;
  customerName: string;
  customerEmail: string;
  customerPhone?: string | null;
  isB2B: boolean;
  companyName?: string | null;
  siret?: string | null;
  totalTTC: number;
  status: string;
  paymentStatus: string;
  installationRequested: boolean;
  carrier?: string | null;
  trackingNumber?: string | null;
  shippingAddress: string;
  items: OrderItemType[];
}

interface AdminOrdersManagerProps {
  initialOrders: OrderType[];
}

export function AdminOrdersManager({ initialOrders }: AdminOrdersManagerProps) {
  const [orders, setOrders] = useState<OrderType[]>(initialOrders);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [editingTracking, setEditingTracking] = useState<{ [id: string]: { carrier: string; trackingNumber: string } }>({});

  const filteredOrders = orders.filter((ord) => {
    const matchesSearch =
      ord.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.customerEmail.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" ? true : ord.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleUpdateStatus = async (orderId: string, newStatus: string, sendEmail = true) => {
    setUpdatingId(orderId);
    try {
      const trackingData = editingTracking[orderId] || {};
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus,
          carrier: trackingData.carrier,
          trackingNumber: trackingData.trackingNumber,
          sendEmailNotification: sendEmail && newStatus === "SHIPPED",
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur mise à jour");

      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, ...data.order } : o))
      );
      alert(`✓ Statut mis à jour : ${newStatus}${newStatus === "SHIPPED" ? " (Email d'expédition avec suivi envoyé au client !)" : ""}`);
    } catch (err: any) {
      alert(err.message || "Erreur");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
          <input
            type="text"
            placeholder="Rechercher par n° de commande, client ou email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { id: "ALL", label: "Toutes" },
            { id: "PROCESSING", label: "À Préparer" },
            { id: "SHIPPED", label: "Expédiées" },
            { id: "DELIVERED", label: "Livrées" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setStatusFilter(f.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                statusFilter === f.id
                  ? "bg-brand-500 text-slate-950 shadow-xs"
                  : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

      </div>

      {/* Orders Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-800/80 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-700">
              <tr>
                <th className="p-4">N° Commande &amp; Date</th>
                <th className="p-4">Client</th>
                <th className="p-4">Articles &amp; Devis</th>
                <th className="p-4">Montant TTC</th>
                <th className="p-4">Statut &amp; Suivi Colis</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">
                    Aucune commande trouvée pour ces critères.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((ord) => {
                  const tracking = editingTracking[ord.id] || {
                    carrier: ord.carrier || "Chronopost IRVE Express",
                    trackingNumber: ord.trackingNumber || "",
                  };

                  return (
                    <tr key={ord.id} className="hover:bg-slate-800/40 transition items-center">
                      
                      {/* Order Number & Date */}
                      <td className="p-4">
                        <div className="font-mono font-bold text-white text-sm">
                          {ord.orderNumber}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {formatDate(ord.createdAt)}
                        </div>
                        <span className="inline-block mt-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                          Payé (Stripe 3DS)
                        </span>
                      </td>

                      {/* Customer Info */}
                      <td className="p-4">
                        <div className="font-bold text-white text-sm">{ord.customerName}</div>
                        <div className="text-[11px] text-slate-400">{ord.customerEmail}</div>
                        {ord.customerPhone && (
                          <div className="text-[11px] text-slate-500">{ord.customerPhone}</div>
                        )}
                        {ord.isB2B && (
                          <span className="inline-block mt-1 text-[10px] bg-purple-950 text-purple-300 border border-purple-800 px-1.5 py-0.5 rounded font-bold">
                            PRO : {ord.companyName}
                          </span>
                        )}
                      </td>

                      {/* Items & IRVE Quote */}
                      <td className="p-4 max-w-xs">
                        <div className="font-bold text-white">
                          {ord.items?.length || 0} article(s)
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {ord.items?.map((i) => `${i.quantity}x ${i.productName}`).join(", ")}
                        </div>
                        {ord.installationRequested && (
                          <span className="inline-block mt-1 text-[10px] font-bold text-sky-400 bg-sky-950 border border-sky-800 px-2 py-0.5 rounded">
                            ⚡ Devis Pose IRVE demandé
                          </span>
                        )}
                      </td>

                      {/* Total */}
                      <td className="p-4">
                        <div className="font-black text-white text-sm">
                          {formatPrice(ord.totalTTC)}
                        </div>
                      </td>

                      {/* Status & Carrier Tracking Form */}
                      <td className="p-4 space-y-2 min-w-[220px]">
                        
                        {/* Status Select */}
                        <div className="flex items-center gap-2">
                          <select
                            value={ord.status}
                            disabled={updatingId === ord.id}
                            onChange={(e) => handleUpdateStatus(ord.id, e.target.value)}
                            className={`text-xs font-bold rounded-xl px-2.5 py-1.5 border focus:outline-none ${
                              ord.status === "PROCESSING"
                                ? "bg-amber-950/80 text-amber-300 border-amber-800"
                                : ord.status === "SHIPPED"
                                ? "bg-sky-950/80 text-sky-300 border-sky-800"
                                : ord.status === "DELIVERED"
                                ? "bg-emerald-950/80 text-emerald-300 border-emerald-800"
                                : "bg-slate-800 text-slate-300 border-slate-700"
                            }`}
                          >
                            <option value="PROCESSING">📦 En préparation (À expédier)</option>
                            <option value="SHIPPED">🚚 Expédiée (Colis en route)</option>
                            <option value="DELIVERED">✓ Livrée au client</option>
                            <option value="CANCELLED">✕ Annulée</option>
                          </select>
                        </div>

                        {/* Tracking Input */}
                        <div className="flex gap-1.5">
                          <input
                            type="text"
                            placeholder="N° Suivi Chronopost..."
                            value={tracking.trackingNumber}
                            onChange={(e) =>
                              setEditingTracking({
                                ...editingTracking,
                                [ord.id]: { ...tracking, trackingNumber: e.target.value },
                              })
                            }
                            className="w-full bg-slate-800 border border-slate-700 text-[11px] px-2 py-1 rounded-lg text-white font-mono placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                          />
                          <button
                            type="button"
                            onClick={() => handleUpdateStatus(ord.id, "SHIPPED", true)}
                            title="Enregistrer et envoyer l'email d'expédition au client"
                            className="px-2 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-[10px] font-bold transition flex items-center gap-1 flex-shrink-0"
                          >
                            <Send className="w-3 h-3" />
                            <span>Envoyer</span>
                          </button>
                        </div>

                      </td>

                      {/* Actions */}
                      <td className="p-4 text-right space-x-2 whitespace-nowrap">
                        
                        {/* Printable Invoice */}
                        <Link
                          href={`/commandes/${ord.id}/facture`}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition"
                        >
                          <Printer className="w-3.5 h-3.5 text-brand-400" />
                          <span>Facture</span>
                        </Link>

                        {/* Public Tracking Link */}
                        <Link
                          href={`/checkout/confirmation?orderNumber=${ord.orderNumber}`}
                          target="_blank"
                          className="inline-flex items-center gap-1 p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                          title="Voir la page de confirmation client"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>

                      </td>

                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
