"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Trash2, Eye, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MultiImageUploader } from "@/components/admin/MultiImageUploader";

interface EditProductPageProps {
  params: {
    id: string;
  };
}

export default function AdminEditProductPage({ params }: EditProductPageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [sku, setSku] = useState("");
  const [priceHT, setPriceHT] = useState("");
  const [priceTTC, setPriceTTC] = useState("");
  const [compareAtPrice, setCompareAtPrice] = useState("");
  const [stock, setStock] = useState("");
  const [powerKw, setPowerKw] = useState("7.4");
  const [phaseType, setPhaseType] = useState("MONO");
  const [connectorType, setConnectorType] = useState("T2S");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(true);

  // Features
  const [hasDynamicLoad, setHasDynamicLoad] = useState(false);
  const [hasSolarMode, setHasSolarMode] = useState(false);
  const [hasWifi, setHasWifi] = useState(true);
  const [hasRfid, setHasRfid] = useState(false);
  const [has4G, setHas4G] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/products/${params.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Produit non trouvé");
        return res.json();
      })
      .then((data) => {
        const p = data.product;
        setName(p.name || "");
        setSlug(p.slug || "");
        setSku(p.sku || "");
        setPriceHT(p.priceHT?.toString() || "");
        setPriceTTC(p.priceTTC?.toString() || "");
        setCompareAtPrice(p.compareAtPrice?.toString() || "");
        setStock(p.stock?.toString() || "0");
        setPowerKw(p.powerKw?.toString() || "7.4");
        setPhaseType(p.phaseType || "MONO");
        setConnectorType(p.connectorType || "T2S");
        setShortDescription(p.shortDescription || "");
        setDescription(p.description || "");
        setImages(
          Array.isArray(p.images) && p.images.length > 0
            ? p.images.map((img: any) => img.url)
            : []
        );
        setIsActive(p.isActive ?? true);
        setHasDynamicLoad(p.hasDynamicLoad ?? false);
        setHasSolarMode(p.hasSolarMode ?? false);
        setHasWifi(p.hasWifi ?? true);
        setHasRfid(p.hasRfid ?? false);
        setHas4G(p.has4G ?? false);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [params.id]);

  const handlePriceTTCChange = (val: string) => {
    setPriceTTC(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setPriceHT((num / 1.2).toFixed(2));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(`/api/admin/products/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          priceHT,
          priceTTC,
          compareAtPrice,
          stock,
          powerKw,
          phaseType,
          connectorType,
          shortDescription,
          description,
          images,
          isActive,
          hasDynamicLoad,
          hasSolarMode,
          hasWifi,
          hasRfid,
          has4G,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de la sauvegarde.");

      setSuccess("✓ Produit mis à jour avec succès !");
      setIsSaving(false);
    } catch (err: any) {
      setError(err.message);
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm(`Êtes-vous sûr de vouloir définitivement supprimer le produit "${name}" ?`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/admin/products/${params.id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Erreur lors de la suppression.");

      router.push("/admin/produits");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center text-slate-400">
        Chargement des données du produit...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Action Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/produits"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-black text-white">Modifier la borne</h1>
            <p className="text-xs text-slate-400 font-mono">SKU : {sku}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/produits/${slug}`}
            target="_blank"
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-bold transition flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Voir sur la boutique</span>
          </Link>

          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="px-3.5 py-2 rounded-xl bg-red-950/80 border border-red-800 hover:bg-red-900 text-red-300 text-xs font-bold transition flex items-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{isDeleting ? "Suppression..." : "Supprimer"}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-red-950/80 border border-red-800 text-xs text-red-300 font-semibold">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-xs text-emerald-300 font-semibold">
          {success}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Basic Information */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400">
              1. Informations Générales &amp; Visibilité
            </h3>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="rounded text-brand-500 w-4 h-4"
              />
              <span>Produit Actif (Visible sur le site)</span>
            </label>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Nom du produit *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-bold"
              />
            </div>
          </div>
        </div>

        {/* Pricing & Stock */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 pb-2 border-b border-slate-800">
            2. Prix &amp; Quantité en Stock
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
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
                Prix barré (€)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="Facultatif"
                value={compareAtPrice}
                onChange={(e) => setCompareAtPrice(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Stock (unités)
              </label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-bold"
              />
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 pb-2 border-b border-slate-800">
            3. Puissance &amp; Options
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
                <option value="7.4">7.4 kW (Monophasé)</option>
                <option value="11.0">11.0 kW (Triphasé)</option>
                <option value="22.0">22.0 kW (Triphasé)</option>
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
                <option value="MONO_TRI">Mono / Tri</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Connecteur
              </label>
              <select
                value={connectorType}
                onChange={(e) => setConnectorType(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="T2S">Prise T2S avec obturateurs</option>
                <option value="ATTACHED_CABLE">Câble attaché</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
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
                checked={hasWifi}
                onChange={(e) => setHasWifi(e.target.checked)}
                className="rounded text-brand-500"
              />
              <span>Wi-Fi / App</span>
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
            4. Textes &amp; Présentation
          </h3>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Description Courte (Catalogue)
              </label>
              <input
                type="text"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase">
                Description Complète (Fiche Produit)
              </label>
              <textarea
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>

        {/* Photos & Multi-Images Gallery */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 pb-2 border-b border-slate-800">
            5. Photos du Produit &amp; Galerie Multi-Images
          </h3>

          <div>
            <MultiImageUploader images={images} onChange={setImages} />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end gap-3 pt-4">
          <Link href="/admin/produits">
            <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              Annuler
            </Button>
          </Link>
          <Button variant="electric" size="lg" type="submit" isLoading={isSaving}>
            <Save className="w-4 h-4 mr-2" />
            <span>Enregistrer les modifications</span>
          </Button>
        </div>

      </form>

    </div>
  );
}
