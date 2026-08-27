import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CheckCircle2, Package, Truck, Download, ArrowRight, ShieldCheck, Wrench, Printer } from "lucide-react";
import { formatPrice, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface ConfirmationPageProps {
  searchParams: {
    orderId?: string;
    order_id?: string;
    orderNumber?: string;
    session_id?: string;
  };
}

export const dynamic = "force-dynamic";

export default async function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const targetId = searchParams.orderId || searchParams.order_id;
  const { orderNumber, session_id } = searchParams;

  if (!targetId && !orderNumber && !session_id) {
    notFound();
  }

  let order = await prisma.order.findFirst({
    where: {
      OR: [
        ...(targetId ? [{ id: targetId }] : []),
        ...(orderNumber ? [{ orderNumber }] : []),
      ],
    },
    include: {
      items: true,
      payments: true,
    },
  });

  if (order && order.status === "PENDING") {
    order = await prisma.order.update({
      where: { id: order.id },
      data: {
        status: "PROCESSING",
        paymentStatus: "PAID",
      },
      include: {
        items: true,
        payments: true,
      },
    });
  }

  if (!order) {
    notFound();
  }

  let shippingAddr: any = {};
  try {
    shippingAddr = JSON.parse(order.shippingAddress);
  } catch (e) {}

  return (
    <div className="bg-slate-50 min-h-screen py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Banner */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm text-center space-y-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Commande validée &amp; Paiement reçu
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Merci pour votre commande {order.customerName} !
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Un email de confirmation contenant votre facture a été envoyé à <strong>{order.customerEmail}</strong>.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono font-bold">
            <span>Numéro de commande : {order.orderNumber}</span>
          </div>
        </div>

        {/* Order Details Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm space-y-6">
          
          {/* Tracking & Status */}
          <div className="p-4 rounded-2xl bg-brand-50/60 border border-brand-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-brand-600 flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-900 block">Transporteur : {order.carrier}</span>
                <span className="text-slate-600 font-mono text-[11px]">N° de suivi : {order.trackingNumber}</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-emerald-600 text-white rounded-full font-bold text-[11px]">
              En cours de préparation (24/48h)
            </span>
          </div>

          {order.installationRequested && (
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs flex items-start gap-3">
              <Wrench className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-blue-900 space-y-0.5">
                <span className="font-bold block">Forfait Installation Qualifiée IRVE activé</span>
                <p className="text-[11px] text-blue-700">
                  Notre coordinateur technique vous contactera sous 24h ouvrées pour fixer le rendez-vous d'intervention de l'électricien certifié IRVE.
                </p>
              </div>
            </div>
          )}

          {/* Items Table */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Articles commandés
            </h3>
            <div className="divide-y divide-slate-100 text-xs">
              {order.items.map((item) => (
                <div key={item.id} className="py-3 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900">{item.productName}</span>
                    <span className="text-slate-400 block text-[11px]">Réf/SKU : {item.productSku} · Qté : {item.quantity}</span>
                  </div>
                  <span className="font-black text-slate-900">{formatPrice(item.totalTTC)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary totals */}
          <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Sous-total HT</span>
              <span className="font-semibold text-slate-900">{formatPrice(order.subtotalHT)}</span>
            </div>
            <div className="flex justify-between">
              <span>TVA (20%)</span>
              <span className="font-semibold text-slate-900">{formatPrice(order.taxAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Frais de port</span>
              <span>{order.shippingCost === 0 ? <strong className="text-brand-600">Offerts</strong> : formatPrice(order.shippingCost)}</span>
            </div>
            <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-slate-900 font-bold">
              <span className="text-sm">Total payé TTC</span>
              <span className="text-xl font-black text-slate-900">{formatPrice(order.totalTTC)}</span>
            </div>
          </div>

          {/* Shipping Address Snapshot */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block uppercase font-bold text-[10px] mb-1">
                Adresse de livraison
              </span>
              <p className="text-slate-800 font-medium leading-relaxed">
                {order.customerName}<br />
                {shippingAddr.street}<br />
                {shippingAddr.postalCode} {shippingAddr.city}<br />
                {shippingAddr.country}
              </p>
            </div>
            <div>
              <span className="text-slate-400 block uppercase font-bold text-[10px] mb-1">
                Mode de paiement
              </span>
              <p className="text-slate-800 font-medium leading-relaxed">
                Carte Bancaire (Stripe)<br />
                Statut : Payé ✓<br />
                Garantie : 3 ans constructeur
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
            <Link href="/mon-compte/commandes" className="flex-1">
              <Button variant="primary" size="md" className="w-full">
                <span>Voir mes commandes</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="/" className="flex-1">
              <Button variant="outline" size="md" className="w-full">
                <span>Retour à l'accueil</span>
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
