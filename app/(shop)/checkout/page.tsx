"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Building2,
  User,
  CheckCircle2,
  Wrench,
  Lock,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function CheckoutPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [isB2B, setIsB2B] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  // B2B specific
  const [companyName, setCompanyName] = useState("");
  const [siret, setSiret] = useState("");
  const [vatNumber, setVatNumber] = useState("");

  // Shipping Address
  const [shippingStreet, setShippingStreet] = useState("");
  const [shippingComplement, setShippingComplement] = useState("");
  const [shippingPostalCode, setShippingPostalCode] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingCountry, setShippingCountry] = useState("France");

  // Billing Address
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [billingStreet, setBillingStreet] = useState("");
  const [billingPostalCode, setBillingPostalCode] = useState("");
  const [billingCity, setBillingCity] = useState("");

  // Payment card inputs
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const {
    items,
    appliedCoupon,
    getSubtotalHT,
    getSubtotalTTC,
    getTaxAmount,
    getShippingCost,
    getDiscountAmount,
    getInstallationCost,
    getTotalTTC,
    installationOption,
    setInstallationOption,
    clearCart,
  } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Votre panier est vide</h2>
        <p className="text-xs text-slate-500">Ajoutez des produits pour accéder au tunnel de paiement.</p>
        <Link href="/produits">
          <Button variant="primary" size="md">Retourner à la boutique</Button>
        </Link>
      </div>
    );
  }

  const subtotalHT = getSubtotalHT();
  const subtotalTTC = getSubtotalTTC();
  const taxAmount = getTaxAmount();
  const shipping = getShippingCost();
  const discount = getDiscountAmount();
  const installation = getInstallationCost();
  const total = getTotalTTC();

  const handleProcessOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic Validation
    if (!email || !firstName || !lastName || !shippingStreet || !shippingPostalCode || !shippingCity) {
      setError("Veuillez remplir tous les champs obligatoires marqués d'une astérisque (*).");
      setIsSubmitting(false);
      return;
    }

    if (isB2B && (!companyName || !siret)) {
      setError("La raison sociale et le SIRET sont obligatoires pour les professionnels.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/checkout/stripe-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerEmail: email,
          customerName: `${firstName} ${lastName}`,
          customerPhone: phone,
          isB2B,
          companyName: isB2B ? companyName : undefined,
          siret: isB2B ? siret : undefined,
          vatNumber: isB2B ? vatNumber : undefined,
          deliveryAddress: `${shippingStreet}, ${shippingPostalCode} ${shippingCity}, ${shippingCountry}`,
          items,
          subtotalHT,
          totalTTC: total,
          installationRequested: installationOption,
          couponCode: appliedCoupon?.code,
          discountAmount: discount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'initialisation du paiement Stripe avec la banque.");
      }

      if (data.url) {
        // Clear cart and redirect to official Stripe 3DS Banking Checkout
        clearCart();
        window.location.href = data.url;
      } else {
        clearCart();
        router.push(`/checkout/confirmation?orderId=${data.orderId}`);
      }
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-brand-600 font-bold uppercase tracking-wider mb-1">
              <Lock className="w-3.5 h-3.5" />
              Paiement Sécurisé SSL 256 bits
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Finaliser votre commande
            </h1>
          </div>

          <Link
            href="/panier"
            className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Modifier mon panier</span>
          </Link>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-xs font-medium text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleProcessOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Fields */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Client Type: Particulier vs Pro */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-600" />
                  1. Type de Client
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsB2B(false)}
                    className={`p-3.5 rounded-xl border-2 text-left transition flex items-center gap-3 ${
                      !isB2B
                        ? "border-brand-500 bg-brand-50/50 text-slate-900 font-bold"
                        : "border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    <User className="w-5 h-5 text-brand-600" />
                    <div>
                      <span className="block text-xs font-bold">Particulier (B2C)</span>
                      <span className="text-[10px] text-slate-500">Crédit d'impôt 500 €</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsB2B(true)}
                    className={`p-3.5 rounded-xl border-2 text-left transition flex items-center gap-3 ${
                      isB2B
                        ? "border-brand-500 bg-brand-50/50 text-slate-900 font-bold"
                        : "border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    <Building2 className="w-5 h-5 text-brand-600" />
                    <div>
                      <span className="block text-xs font-bold">Entreprise / Pro (B2B)</span>
                      <span className="text-[10px] text-slate-500">Facturation &amp; Récup. TVA</span>
                    </div>
                  </button>
                </div>

                {isB2B && (
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                      label="Raison Sociale *"
                      placeholder="Ex: SAS Logistique Express"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required={isB2B}
                    />
                    <Input
                      label="Numéro SIRET (14 chiffres) *"
                      placeholder="Ex: 84512398700024"
                      value={siret}
                      onChange={(e) => setSiret(e.target.value)}
                      required={isB2B}
                    />
                    <div className="sm:col-span-2">
                      <Input
                        label="Numéro de TVA Intracommunautaire"
                        placeholder="Ex: FR45845123987"
                        value={vatNumber}
                        onChange={(e) => setVatNumber(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-600" />
                  2. Coordonnées de Contact
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input
                    label="Prénom *"
                    placeholder="Thomas"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <Input
                    label="Nom *"
                    placeholder="Dupont"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <Input
                    label="Email de confirmation *"
                    type="email"
                    placeholder="thomas.dupont@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    label="Téléphone (pour le transporteur) *"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-brand-600" />
                  3. Adresse de Livraison
                </h3>

                <div className="space-y-3">
                  <Input
                    label="Numéro et nom de rue *"
                    placeholder="14 Rue de la République"
                    value={shippingStreet}
                    onChange={(e) => setShippingStreet(e.target.value)}
                    required
                  />
                  <Input
                    label="Complément d'adresse (Bâtiment, étage, code...)"
                    placeholder="Bâtiment B, Digicode 4521"
                    value={shippingComplement}
                    onChange={(e) => setShippingComplement(e.target.value)}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="Code Postal *"
                      placeholder="75011"
                      value={shippingPostalCode}
                      onChange={(e) => setShippingPostalCode(e.target.value)}
                      required
                    />
                    <Input
                      label="Ville *"
                      placeholder="Paris"
                      value={shippingCity}
                      onChange={(e) => setShippingCity(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sameAsShipping}
                      onChange={(e) => setSameAsShipping(e.target.checked)}
                      className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
                    />
                    <span>L'adresse de facturation est identique à l'adresse de livraison</span>
                  </label>
                </div>

                {!sameAsShipping && (
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <h4 className="text-xs font-bold text-slate-800 uppercase">Adresse de facturation spécifique</h4>
                    <Input
                      label="Rue de facturation *"
                      placeholder="5 Avenue des Champs"
                      value={billingStreet}
                      onChange={(e) => setBillingStreet(e.target.value)}
                      required={!sameAsShipping}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        label="Code Postal *"
                        placeholder="75008"
                        value={billingPostalCode}
                        onChange={(e) => setBillingPostalCode(e.target.value)}
                        required={!sameAsShipping}
                      />
                      <Input
                        label="Ville *"
                        placeholder="Paris"
                        value={billingCity}
                        onChange={(e) => setBillingCity(e.target.value)}
                        required={!sameAsShipping}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Section (Stripe 3D Secure Official Bank Validation) */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-brand-600" />
                    4. Paiement Sécurisé &amp; Validation Bancaire 3D Secure
                  </span>
                  <span className="text-[10px] bg-slate-900 text-brand-400 px-2 py-0.5 rounded font-bold">
                    CERTIFIÉ STRIPE PCI-DSS
                  </span>
                </h3>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Cartes Bancaires Acceptées</span>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600">
                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">CB</span>
                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Visa</span>
                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Mastercard</span>
                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Apple Pay</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    En cliquant sur <strong>« Valider et Payer »</strong>, vous serez automatiquement redirigé vers la passerelle chiffrée <strong>Stripe</strong> pour saisir votre carte bancaire et valider l'authentification forte <strong>3D Secure</strong> directement auprès de votre banque (application bancaire ou code SMS).
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-semibold pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Transactions chiffrées SSL 256 bits · Protection antifraude garantie</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Order Review & Submit */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-100">
                  Votre Commande ({items.length} article{items.length > 1 ? "s" : ""})
                </h3>

                {/* Items preview */}
                <div className="space-y-3 max-h-52 overflow-y-auto pr-1 divide-y divide-slate-100">
                  {items.map((item) => (
                    <div key={item.id} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-slate-700">{item.quantity}x</span>
                        <span className="font-semibold text-slate-900 line-clamp-1 max-w-[200px]">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-bold text-slate-900">
                        {formatPrice(item.priceTTC * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Costs details */}
                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Sous-total HT</span>
                    <span className="font-semibold text-slate-900">{formatPrice(subtotalHT)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVA (20%)</span>
                    <span className="font-semibold text-slate-900">{formatPrice(taxAmount)}</span>
                  </div>
                  {installationOption && (
                    <div className="flex justify-between text-brand-800 font-medium">
                      <span>Forfait Pose IRVE</span>
                      <span>{formatPrice(installation)}</span>
                    </div>
                  )}
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Remise code promo</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Livraison Express</span>
                    <span>{shipping === 0 ? <strong className="text-brand-600">Offerte</strong> : formatPrice(shipping)}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-900">Total à régler</span>
                    <span className="text-2xl font-black text-slate-900">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <Button
                  type="submit"
                  variant="electric"
                  size="xl"
                  isLoading={isSubmitting}
                  className="w-full shadow-lg text-slate-950 font-black"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  <span>Payer {formatPrice(total)} avec Stripe (3D Secure)</span>
                </Button>

                <div className="space-y-1 text-[11px] text-slate-500 pt-2 text-center">
                  <div>En validant, vous acceptez les CGV de Chargebox.</div>
                  <div className="text-emerald-700 font-semibold">Garantie 3 ans · Expédié sous 24/48h</div>
                </div>
              </div>

            </div>

          </div>
        </form>

      </div>
    </div>
  );
}
