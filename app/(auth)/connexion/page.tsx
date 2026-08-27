"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ConnexionPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Identifiants invalides");
      }

      if (data.user?.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/mon-compte");
      }
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Erreur de connexion");
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
          Espace Client &amp; Professionnel
        </h2>
        <p className="text-xs text-slate-500">
          Accédez à vos commandes, factures et suivi d'installation
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-xl rounded-3xl border border-slate-200/80 sm:px-10 space-y-6">
          
          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email *"
              type="email"
              placeholder="thomas.dupont@email.com"
              leftIcon={<Mail className="w-4 h-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Mot de passe *"
              type="password"
              placeholder="••••••••"
              leftIcon={<Lock className="w-4 h-4" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-brand-600" />
                <span>Se souvenir de moi</span>
              </label>
              <Link
                href="/mot-de-passe-oublie"
                className="font-bold text-brand-600 hover:text-brand-700 transition"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            <Button
              type="submit"
              variant="electric"
              size="lg"
              isLoading={isLoading}
              className="w-full shadow-lg"
            >
              <span>Se connecter</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>

          {/* Demo Logins Info */}
          <div className="pt-4 border-t border-slate-100 bg-slate-50 p-3.5 rounded-2xl text-[11px] text-slate-600 space-y-1">
            <span className="font-bold text-slate-900 block">Comptes de démonstration :</span>
            <div>👑 <strong>Admin :</strong> admin@chargebox.fr (AdminChargebox2026!)</div>
            <div>👤 <strong>Client :</strong> client.demo@chargebox.fr (Chargebox2026!)</div>
          </div>

          <div className="pt-2 text-center text-xs text-slate-600">
            Vous n'avez pas encore de compte ?{" "}
            <Link href="/inscription" className="font-bold text-brand-600 hover:text-brand-700">
              Créer un compte
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
