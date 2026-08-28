import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatPrice, formatDate } from "@/lib/utils";
import { Printer, ArrowLeft, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

interface InvoicePageProps {
  params: {
    id: string;
  };
}

export default async function InvoicePage({ params }: InvoicePageProps) {
  const order = await prisma.order.findFirst({
    where: {
      OR: [{ id: params.id }, { orderNumber: params.id }],
    },
    include: {
      items: true,
      payments: true,
    },
  });

  if (!order) {
    notFound();
  }

  let shippingAddress: any = {};
  let billingAddress: any = {};
  try {
    shippingAddress = typeof order.shippingAddress === "string" ? JSON.parse(order.shippingAddress) : order.shippingAddress;
  } catch (e) {
    shippingAddress = { street: order.shippingAddress };
  }

  try {
    billingAddress = typeof order.billingAddress === "string" ? JSON.parse(order.billingAddress) : order.billingAddress;
  } catch (e) {
    billingAddress = shippingAddress;
  }

  const subtotalHT = order.subtotalHT || order.totalTTC / 1.2;
  const taxAmount = order.taxAmount || order.totalTTC - subtotalHT;

  return (
    <div className="min-h-screen bg-slate-100 py-8 print:py-0 print:bg-white text-slate-900">
      
      {/* Top Action Bar (Hidden on print) */}
      <div className="max-w-4xl mx-auto px-4 mb-6 print:hidden flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition">
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à la boutique</span>
        </Link>

        <div className="flex gap-2">
          <button
            onClick={() => {}}
            // @ts-ignore
            className="print-trigger px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md"
          >
            <Printer className="w-4 h-4 text-brand-400" />
            <span>Imprimer / Télécharger en PDF</span>
          </button>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('click', function(e) {
              if (e.target && e.target.closest('.print-trigger')) {
                window.print();
              }
            });
          `,
        }}
      />

      {/* Invoice Sheet */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl print:rounded-none border border-slate-200 print:border-none p-8 sm:p-12 shadow-xl print:shadow-none">
        
        {/* Header: Company + Invoice ID */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-8 border-b-2 border-slate-900">
          <div>
            <div className="relative h-12 w-48 mb-3">
              <Image
                src="/images/chargebox-logo.svg"
                alt="Chargebox"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="text-xs text-slate-600 space-y-0.5">
              <div className="font-bold text-slate-900">Chargebox SAS · Solutions de Recharge IRVE</div>
              <div>10 Avenue Raphael, 95200 Sarcelles, France</div>
              <div>SIRET : 912 345 678 00012 · RCS Pontoise</div>
              <div>N° TVA Intracommunautaire : FR89912345678</div>
              <div>contact@chargebox.fr · +33 (0)1 89 71 45 20</div>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-black rounded-full uppercase tracking-wider mb-2">
              Facture Acquittée
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              FACTURE N° FAC-{order.orderNumber}
            </h1>
            <div className="text-xs text-slate-500 mt-1 space-y-0.5 font-medium">
              <div>Date de facturation : <strong>{formatDate(order.createdAt)}</strong></div>
              <div>Réf. Commande : <strong className="font-mono">{order.orderNumber}</strong></div>
              <div>Mode de règlement : <strong>Carte Bancaire (Stripe 3DS)</strong></div>
            </div>
          </div>
        </div>

        {/* Client & Shipping Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-b border-slate-200 text-xs">
          
          {/* Facturé à */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold uppercase tracking-wider text-slate-500 text-[10px] mb-2">
              Facturé à :
            </h3>
            <div className="font-bold text-slate-900 text-sm">{order.customerName}</div>
            {order.isB2B && (
              <div className="font-semibold text-purple-700 mt-0.5">
                {order.companyName} {order.siret ? `(SIRET: ${order.siret})` : ""}
                {order.vatNumber ? ` · TVA: ${order.vatNumber}` : ""}
              </div>
            )}
            <div className="text-slate-600 mt-1">
              {billingAddress.street || order.shippingAddress}<br />
              {billingAddress.postalCode ? `${billingAddress.postalCode} ${billingAddress.city || ""}` : ""}
            </div>
            <div className="text-slate-500 mt-2 font-mono">{order.customerEmail}</div>
            {order.customerPhone && <div className="text-slate-500">{order.customerPhone}</div>}
          </div>

          {/* Livré à */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold uppercase tracking-wider text-slate-500 text-[10px] mb-2">
              Adresse de livraison :
            </h3>
            <div className="font-bold text-slate-900 text-sm">{order.customerName}</div>
            <div className="text-slate-600 mt-1">
              {shippingAddress.street || order.shippingAddress}<br />
              {shippingAddress.postalCode ? `${shippingAddress.postalCode} ${shippingAddress.city || ""}` : ""}
            </div>
            <div className="mt-3 text-slate-500 text-[11px]">
              Transporteur : <strong>{order.carrier || "Chronopost IRVE Express"}</strong><br />
              {order.trackingNumber ? `N° Suivi : ${order.trackingNumber}` : "Préparation en entrepôt"}
            </div>
          </div>

        </div>

        {/* Products Table */}
        <div className="py-8">
          <table className="w-full text-left text-xs">
            <thead className="border-b-2 border-slate-900 bg-slate-50 text-slate-700 font-bold uppercase text-[11px]">
              <tr>
                <th className="py-3 px-2">Désignation</th>
                <th className="py-3 px-2">Réf / SKU</th>
                <th className="py-3 px-2 text-center">Qté</th>
                <th className="py-3 px-2 text-right">Prix Unit. HT</th>
                <th className="py-3 px-2 text-center">TVA</th>
                <th className="py-3 px-2 text-right">Total HT</th>
                <th className="py-3 px-2 text-right">Total TTC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {order.items.map((item) => {
                const uHT = item.unitPriceHT || item.unitPriceTTC / 1.2;
                const totHT = item.totalHT || uHT * item.quantity;
                return (
                  <tr key={item.id}>
                    <td className="py-4 px-2 font-bold text-slate-900">
                      {item.productName}
                    </td>
                    <td className="py-4 px-2 font-mono text-slate-500 text-[11px]">
                      {item.productSku}
                    </td>
                    <td className="py-4 px-2 text-center font-bold">
                      {item.quantity}
                    </td>
                    <td className="py-4 px-2 text-right">
                      {formatPrice(uHT)}
                    </td>
                    <td className="py-4 px-2 text-center font-mono">
                      {item.vatRate || 20}%
                    </td>
                    <td className="py-4 px-2 text-right font-medium">
                      {formatPrice(totHT)}
                    </td>
                    <td className="py-4 px-2 text-right font-bold text-slate-900">
                      {formatPrice(item.totalTTC)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Totals & VAT Breakdown */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 pt-4 pb-8 border-t-2 border-slate-900">
          
          <div className="text-xs text-slate-500 space-y-2 max-w-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Règlement Effectué :</span>
              Paiement intégral validé le {formatDate(order.createdAt)} via la passerelle bancaire chiffrée Stripe 3D Secure.
            </div>
            {order.installationRequested && (
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-sky-900">
                <span className="font-bold block mb-1">Option Pose IRVE :</span>
                Demande de devis enregistrée. Un électricien qualifié IRVE vous contactera sous 24h.
              </div>
            )}
          </div>

          <div className="w-full sm:w-80 space-y-2.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Total Hors Taxes (HT) :</span>
              <span className="font-bold text-slate-900">{formatPrice(subtotalHT)}</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>TVA (20,00 %) :</span>
              <span className="font-bold text-slate-900">{formatPrice(taxAmount)}</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Livraison Express :</span>
              <span className="font-bold text-emerald-700">Offerte</span>
            </div>

            <div className="flex justify-between items-baseline pt-3 border-t-2 border-slate-900 text-slate-900">
              <span className="text-base font-black uppercase">Net à Payer (TTC) :</span>
              <span className="text-2xl font-black text-slate-900">{formatPrice(order.totalTTC)}</span>
            </div>
          </div>

        </div>

        {/* Legal Footer */}
        <div className="pt-8 border-t border-slate-200 text-center text-[10px] text-slate-400 space-y-1">
          <p>Chargebox SAS au capital de 10 000 € · 10 Avenue Raphael 95200 Sarcelles · SIRET 912 345 678 00012 · RCS Pontoise</p>
          <p>Conformément aux articles L. 441-6 et D. 441-5 du Code de commerce, tout retard de paiement entraîne l'application d'une indemnité forfaitaire de 40 €.</p>
        </div>

      </div>

    </div>
  );
}
