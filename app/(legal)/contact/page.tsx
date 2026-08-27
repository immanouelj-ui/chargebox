"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Devis borne + installation IRVE");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            Support Client &amp; Devis Professionnel
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Contactez les Experts Chargebox
          </h1>
          <p className="text-sm text-slate-600">
            Une question technique, une demande de devis B2B ou un accompagnement pour le choix de votre borne ? Nous vous répondons sous 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-8 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Nos Coordonnées</h3>
                <p className="text-xs text-slate-300">Notre équipe basée en France est disponible pour vous conseiller.</p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-sm">+33 (0)1 89 71 45 20</span>
                    <span className="text-slate-400 text-[11px]">Du lundi au vendredi : 9h00 - 18h30</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-sm">contact@chargebox.fr</span>
                    <span className="text-slate-400 text-[11px]">Réponse sous 24h ouvrées</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-sm">Chargebox SAS</span>
                    <span className="text-slate-400 text-[11px]">14 Rue de la République, 75011 Paris</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-brand-400">
                <Headphones className="w-4 h-4" />
                <span>Service Installateurs &amp; Flottes Pro</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Vous êtes électricien IRVE ou gestionnaire de flotte ? Demandez notre grille tarifaire revendeur et grossiste.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message envoyé avec succès !</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Merci {name}. Un conseiller Chargebox a bien reçu votre demande et vous répondra à <strong>{email}</strong> sous 24h.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Envoyez-nous un message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Votre Nom Complet *"
                    placeholder="Marc Dupont"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    label="Votre Email *"
                    type="email"
                    placeholder="marc.dupont@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">
                    Objet de votre demande
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Devis borne + installation IRVE">Devis borne + installation certifiée IRVE</option>
                    <option value="Question technique borne Teltonika">Question technique sur une borne (Teltonika, V2C, Wallbox)</option>
                    <option value="Demande compte professionnel / Électricien">Demande compte professionnel / Électricien IRVE</option>
                    <option value="Suivi de commande &amp; livraison">Suivi de commande &amp; livraison</option>
                    <option value="Autre demande">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">
                    Votre Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Précisez votre modèle de véhicule, la configuration électrique de votre domicile ou vos questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <Button variant="electric" size="lg" type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  <span>Envoyer ma demande</span>
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
