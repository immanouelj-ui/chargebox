"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Sparkles, Package } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { MultiImageUploader } from "@/components/admin/MultiImageUploader";

export default function AdminNouveauProduitPage() {
  const router = useRouter();
  const [brands, setBrands] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [priceHT, setPriceHT] = useState("624.17");
  const [priceTTC, setPriceTTC] = useState("749.00");
  const [stock, setStock] = useState("20");
  const [powerKw, setPowerKw] = useState("7.4");
  const [phaseType, setPhaseType] = useState("MONO");
  const [connectorType, setConnectorType] = useState("T2S");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([
    "/images/products/teltonika-teltocharge.jpg",
  ]);

  // Options
  const [hasDynamicLoad, setHasDynamicLoad] = useState(true);
  const [hasSolarMode, setHasSolarMode] = useState(false);
  const [hasWifi, setHasWifi] = useState(true);
  const [hasRfid, setHasRfid] = useState(true);
  const [has4G, setHas4G] = useState(false);

  useEffect(() => {
    // Fetch initial brands and categories
    fetch("/api/products")
      .then((r) => r.json())
      .catch(() => {});
  }, []);

  const handlePriceTTCChange = (val: string) => {
    setPriceTTC(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setPriceHT((num / 1.2).toFixed(2));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          brandId: brandId || "cmmockbrandid",
          categoryId: categoryId || "cmmockcatid",
          priceHT,
          priceTTC,
          stock,
          powerKw,
          phaseType,
          connectorType,
          shortDescription,
          description,
          images,
          hasDynamicLoad,
          hasSolarMode,
          hasWifi,
          hasRfid,
          has4G,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'enregistrement");

      router.push("/admin/produits");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/produits"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-black text-white">Ajouter une nouvelle borne</h1>
            <p className="text-xs text-slate-400">Remplissez les caractéristiques et les tarifs</p>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-red-950/80 border border-red-800 text-xs text-red-300 font-semibold">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Basic Information */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 pb-2 border-b border-slate-800">
            1. Informations Principales
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Nom du produit *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Borne Teltonika TeltoCharge 7.4 kW - Façade Bois"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Marque
              </label>
              <select
                value={brandId}
                onChange={(e) => setBrandId(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Sélectionner une marque...</option>
                <option value="teltonika">Teltonika Energy</option>
                <option value="wallbox">Wallbox</option>
                <option value="v2c">V2C Trydan</option>
                <option value="schneider">Schneider Electric</option>
                <option value="hager">Hager</option>
                <option value="legrand">Legrand</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Catégorie
              </label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Sélectionner une catégorie...</option>
                <option value="bornes-residentielles">Bornes Résidentielles</option>
                <option value="bornes-professionnelles">Bornes Professionnelles (22kW)</option>
                <option value="cables-de-recharge">Câbles de recharge</option>
                <option value="protections-electriques">Protections Électriques IRVE</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing & Stock */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 pb-2 border-b border-slate-800">
            2. Tarification &amp; Stocks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Prix TTC (€) *
              </label>
              <input
                type="number"
                step="0.01"
                required
                value={priceTTC}
                onChange={(e) => handlePriceTTCChange(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Prix HT (€)
              </label>
              <input
                type="number"
                step="0.01"
                value={priceHT}
                onChange={(e) => setPriceHT(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Stock initial (unités)
              </label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 pb-2 border-b border-slate-800">
            3. Spécifications Électriques &amp; Connectivité
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Puissance (kW)
              </label>
              <select
                value={powerKw}
                onChange={(e) => setPowerKw(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="7.4">7.4 kW (Monophasé 32A)</option>
                <option value="11.0">11.0 kW (Triphasé 16A)</option>
                <option value="22.0">22.0 kW (Triphasé 32A)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Raccordement
              </label>
              <select
                value={phaseType}
                onChange={(e) => setPhaseType(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="MONO">Monophasé (230V)</option>
                <option value="TRI">Triphasé (400V)</option>
                <option value="MONO_TRI">Mono / Triphasé</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Type de Connecteur
              </label>
              <select
                value={connectorType}
                onChange={(e) => setConnectorType(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="T2S">Prise T2S avec obturateurs</option>
                <option value="ATTACHED_CABLE">Câble attaché (5m/7.5m)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={hasDynamicLoad}
                onChange={(e) => setHasDynamicLoad(e.target.checked)}
                className="rounded text-brand-500"
              />
              <span>Délestage dynamique</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={hasSolarMode}
                onChange={(e) => setHasSolarMode(e.target.checked)}
                className="rounded text-brand-500"
              />
              <span>Mode Solaire</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={has4G}
                onChange={(e) => setHas4G(e.target.checked)}
                className="rounded text-brand-500"
              />
              <span>Modem 4G LTE</span>
            </label>
          </div>
        </div>

        {/* Descriptions */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 pb-2 border-b border-slate-800">
            4. Textes &amp; Image
          </h3>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Description Courte
              </label>
              <input
                type="text"
                placeholder="Ex: Borne de recharge connectée premium avec délestage dynamique."
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Description Complète
              </label>
              <textarea
                rows={4}
                placeholder="Détails, avantages, garanties..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase">
                Photos du Produit (Galerie Multi-Images)
              </label>
              <MultiImageUploader images={images} onChange={setImages} />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Link href="/admin/produits">
            <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              Annuler
            </Button>
          </Link>
          <Button variant="electric" size="lg" type="submit" isLoading={isLoading}>
            <Save className="w-4 h-4 mr-2" />
            <span>Enregistrer la Borne</span>
          </Button>
        </div>

      </form>

    </div>
  );
}
