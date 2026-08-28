import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { 
  CheckCircle2, Package, Truck, Download, ArrowRight, 
  ShieldCheck, Wrench, Printer, Clock, ExternalLink 
} from "lucide-react";
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

    // Send confirmation invoice email to customer and notification to admin
    try {
      const { sendOrderConfirmationEmail, sendAdminNewOrderNotification } = await import("@/lib/email");
      await sendOrderConfirmationEmail(order);
      await sendAdminNewOrderNotification(order);
    } catch (err) {
      console.error("Confirmation email error:", err);
    }
  }

  if (!order) {
    notFound();
  }

  let shippingAddr: any = {};
  try {
    shippingAddr = typeof order.shippingAddress === "string" ? JSON.parse(order.shippingAddress) : order.shippingAddress;
  } catch (e) {
    shippingAddr = { street: order.shippingAddress };
  }

  // Tracking timeline status calculation
  const isPaid = order.paymentStatus === "PAID" || order.status !== "PENDING";
  const isShipped = order.status === "SHIPPED" || order.status === "DELIVERED";
  const isDelivered = order.status === "DELIVERED";

  return (
    <div className="bg-slate-50 min-h-screen py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Success Banner */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
              Paiement 3D Secure Validé
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 pt-2">
              Merci pour votre commande {order.customerName} !
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Votre facture acquittée et confirmation de commande ont été envoyées automatiquement à <strong>{order.customerEmail}</strong>.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono font-bold">
            <span>N° de commande : {order.orderNumber}</span>
          </div>
        </div>

        {/* 4-Step Live Tracking Progress Timeline */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand-600" />
              Suivi de l'acheminement en temps réel
            </h3>
            <span className="text-xs font-bold text-brand-600">
              {order.status === "DELIVERED" ? "Colis Livré" : order.status === "SHIPPED" ? "En cours de livraison" : "En préparation"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative">
            {/* Step 1: Paid */}
            <div className="text-center space-y-2">
              <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center font-bold text-xs ${
                isPaid ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : "bg-slate-100 text-slate-400"
              }`}>
                ✓
              </div>
              <span className="block text-xs font-bold text-slate-900">1. Paiement Validé</span>
              <span className="block text-[10px] text-slate-400">Stripe 3D Secure</span>
            </div>

            {/* Step 2: Preparation */}
            <div className="text-center space-y-2">
              <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center font-bold text-xs ${
                isPaid ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : "bg-slate-100 text-slate-400"
              }`}>
                <Package className="w-5 h-5" />
              </div>
              <span className="block text-xs font-bold text-slate-900">2. Préparation</span>
              <span className="block text-[10px] text-slate-400">Entrepôt France</span>
            </div>

            {/* Step 3: Shipped */}
            <div className="text-center space-y-2">
              <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center font-bold text-xs ${
                isShipped ? "bg-sky-600 text-white shadow-md shadow-sky-600/20 animate-pulse" : "bg-slate-100 text-slate-400"
              }`}>
                <Truck className="w-5 h-5" />
              </div>
              <span className="block text-xs font-bold text-slate-900">3. Expédition</span>
              <span className="block text-[10px] text-slate-400">
                {order.trackingNumber ? `Suivi : ${order.trackingNumber}` : "Chronopost 24/48h"}
              </span>
            </div>

            {/* Step 4: Delivered */}
            <div className="text-center space-y-2">
              <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center font-bold text-xs ${
                isDelivered ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : "bg-slate-100 text-slate-400"
              }`}>
                🏡
              </div>
              <span className="block text-xs font-bold text-slate-900">4. Livraison</span>
              <span className="block text-[10px] text-slate-400">Remise en main propre</span>
            </div>
          </div>

          {/* Direct Carrier Live Tracking Link */}
          {order.trackingNumber && (
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-sky-950 block">Numéro de suivi : {order.trackingNumber}</span>
                <span className="text-sky-700">Transporteur : {order.carrier || "Chronopost IRVE Express"}</span>
              </div>
              <a
                href={`https://www.chronopost.fr/tracking-no-cms/suivi-page?listeNumerosLT=${order.trackingNumber}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm"
              >
                <span>Suivre sur Chronopost</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Order Details & Invoice Download */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Articles commandés ({order.items.length})
            </h3>
            
            <Link
              href={`/commandes/${order.id}/facture`}
              target="_blank"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-brand-400 hover:bg-slate-800 text-xs font-bold transition shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Télécharger ma Facture</span>
            </Link>
          </div>

          {order.installationRequested && (
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs flex items-start gap-3">
              <Wrench className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-blue-900 space-y-0.5">
                <span className="font-bold block">Demande de Devis Installation IRVE enregistrée</span>
                <p className="text-[11px] text-blue-700">
                  Un installateur électricien qualifié IRVE de votre secteur prendra contact avec vous sous 24h ouvrées pour établir votre devis gratuit.
                </p>
              </div>
            </div>
          )}

          {/* Items List */}
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

          {/* Pricing Totals */}
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
              <span>Livraison Express</span>
              <span className="font-bold text-emerald-700">Offerte</span>
            </div>
            <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-slate-900 font-bold">
              <span className="text-sm">Total payé TTC</span>
              <span className="text-xl font-black text-slate-900">{formatPrice(order.totalTTC)}</span>
            </div>
          </div>

          {/* Shipping Address */}
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
                Paiement &amp; Garanties
              </span>
              <p className="text-slate-800 font-medium leading-relaxed">
                Règlement : Carte Bancaire (Stripe 3DS) ✓<br />
                Statut : Payé &amp; Acquitté<br />
                Garantie : 3 ans constructeur européenne
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
            <Link href="/mon-compte/commandes" className="flex-1">
              <Button variant="primary" size="lg" className="w-full">
                <span>Accéder à mon espace client</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="/" className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                <span>Retour à la boutique</span>
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
