"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lock, Mail, User, Phone, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GoogleAuthButton } from "@/components/auth/GoogleAuthButton";

export default function InscriptionPage() {
  const router = useRouter();
  const [isB2B, setIsB2B] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // B2B specific
  const [companyName, setCompanyName] = useState("");
  const [siret, setSiret] = useState("");
  const [vatNumber, setVatNumber] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          isB2B,
          companyName: isB2B ? companyName : undefined,
          siret: isB2B ? siret : undefined,
          vatNumber: isB2B ? vatNumber : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de la création du compte");
      }

      router.push("/mon-compte");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Erreur de création de compte");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-4">
        <Link href="/" className="inline-block">
          <div className="relative h-12 w-48 mx-auto">
            <Image
              src="/images/chargebox-logo.svg"
              alt="Chargebox"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Créer un compte Chargebox
        </h2>
        <p className="text-xs text-slate-500">
          Commandez vos bornes et accédez à vos garanties et attestations IRVE
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-xl rounded-3xl border border-slate-200/80 sm:px-10 space-y-6">
          
          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
              {error}
            </div>
          )}

          {/* Type Toggle */}
          <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setIsB2B(false)}
              className={`py-2 text-xs font-bold rounded-lg transition ${
                !isB2B ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
              }`}
            >
              Particulier (B2C)
            </button>
            <button
              type="button"
              onClick={() => setIsB2B(true)}
              className={`py-2 text-xs font-bold rounded-lg transition ${
                isB2B ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
              }`}
            >
              Professionnel (B2B)
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <Input
              label="Nom Complet *"
              placeholder="Thomas Dupont"
              leftIcon={<User className="w-4 h-4" />}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              label="Adresse Email *"
              type="email"
              placeholder="thomas@email.com"
              leftIcon={<Mail className="w-4 h-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Téléphone"
              type="tel"
              placeholder="06 12 34 56 78"
              leftIcon={<Phone className="w-4 h-4" />}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {isB2B && (
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <Input
                  label="Raison Sociale *"
                  placeholder="SAS Transport & Co"
                  leftIcon={<Building2 className="w-4 h-4" />}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required={isB2B}
                />
                <Input
                  label="Numéro SIRET *"
                  placeholder="84512398700024"
                  value={siret}
                  onChange={(e) => setSiret(e.target.value)}
                  required={isB2B}
                />
                <Input
                  label="Numéro TVA Intracommunautaire"
                  placeholder="FR45845123987"
                  value={vatNumber}
                  onChange={(e) => setVatNumber(e.target.value)}
                />
              </div>
            )}

            <Input
              label="Mot de passe (8 caractères min) *"
              type="password"
              placeholder="••••••••"
              leftIcon={<Lock className="w-4 h-4" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />

            <Button
              type="submit"
              variant="electric"
              size="lg"
              isLoading={isLoading}
              className="w-full shadow-lg mt-2"
            >
              <span>Créer mon compte</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>

          {/* Social Divider */}
          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              ou
            </span>
            <div className="border-t border-slate-200 w-full" />
          </div>

          <GoogleAuthButton label="S'inscrire avec Google" />

          <div className="text-center text-xs text-slate-600">
            Déjà inscrit ?{" "}
            <Link href="/connexion" className="font-bold text-brand-600 hover:text-brand-700">
              Se connecter
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
