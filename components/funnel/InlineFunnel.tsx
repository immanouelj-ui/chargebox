"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, Check, Home, Building2, User, Key, Briefcase,
  Car, Upload, Loader2, PartyPopper, Shield,
} from "lucide-react";
import { initialData, type FunnelData } from "./types";
import { Field, Input, OptionCard, Pill, StepTitle } from "./ui";
import { submitLead } from "./submit";

export function InlineFunnel() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FunnelData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const autoAdvancedRef = useRef<Set<number>>(new Set());

  const isPro = data.role === "syndic";
  const steps = useMemo(() => ["Logement", "Véhicule", "Projet", "Photos", "Contact"], []);

  const canNext = (() => {
    if (step === 0) return !!data.logement && !!data.role && /^\d{5}$/.test(data.codePostal);
    if (step === 1) {
      if (isPro) return !!data.puissance && (data.nbBornes ?? 0) > 0;
      const marqueOk = !!data.marque && (data.marque !== "Autre" || data.marqueAutre.trim().length > 0);
      return !!data.vehicule && marqueOk && !!data.puissance;
    }
    if (step === 2) {
      if (isPro) return !!data.compteur && !!data.delai;
      return !!data.compteur && !!data.distance && !!data.delai;
    }
    if (step === 3) return true;
    if (step === 4)
      return data.nom.trim().length > 1 && /^[0-9 +.]{8,}$/.test(data.telephone) && /.+@.+\..+/.test(data.email) && data.rgpd;
    return false;
  })();

  const progress = ((step + (canNext ? 1 : 0)) / steps.length) * 100;
  const update = <K extends keyof FunnelData>(k: K, v: FunnelData[K]) => setData(d => ({ ...d, [k]: v }));
  const next = () => { if (step < steps.length - 1) setStep(s => s + 1); else submit(); };
  const prev = () => setStep(s => Math.max(0, s - 1));

  const submit = async () => {
    setSubmitting(true);
    try {
      await submitLead(data);
    } catch (e) {
      console.error("Erreur envoi formulaire", e);
    }
    setSubmitting(false);
    setDone(true);
  };

  useEffect(() => {
    if (!canNext || done || submitting) return;
    if (autoAdvancedRef.current.has(step)) return;
    if (step === 3) return;
    const delay = step === 4 ? 1400 : 550;
    const timer = setTimeout(() => { autoAdvancedRef.current.add(step); next(); }, delay);
    return () => clearTimeout(timer);
  }, [canNext, step, done, submitting]);

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center py-16"
      >
        <div className="mx-auto size-16 rounded-full btn-electric grid place-items-center">
          <PartyPopper className="size-7" />
        </div>
        <h3 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">Demande envoyée !</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
          Nos installateurs partenaires IRVE vont étudier votre projet et vous recontacter sous 24h ouvrées.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
          <span>Étape {step + 1} sur {steps.length} · <span className="text-foreground font-medium">{steps[step]}</span></span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full bg-electric"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Step card */}
      <div className="rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 0 && <Step1 data={data} update={update} />}
            {step === 1 && <Step2 data={data} update={update} isPro={isPro} />}
            {step === 2 && <Step3 data={data} update={update} isPro={isPro} />}
            {step === 3 && <Step4 data={data} update={update} />}
            {step === 4 && <Step5 data={data} update={update} />}
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <button onClick={prev} disabled={step === 0} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground disabled:opacity-30 hover:text-foreground transition-colors px-3 py-2">
            <ArrowLeft className="size-4" /> Retour
          </button>
          <button onClick={next} disabled={!canNext || submitting} className="btn-electric rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2 disabled:opacity-40 disabled:pointer-events-none">
            {submitting ? <><Loader2 className="size-4 animate-spin" /> Envoi…</>
              : step === steps.length - 1 ? <>Envoyer ma demande <ArrowRight className="size-4" /></>
              : <>Continuer <ArrowRight className="size-4" /></>}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Steps ---------- */

function Step1({ data, update }: { data: FunnelData; update: <K extends keyof FunnelData>(k: K, v: FunnelData[K]) => void }) {
  return (
    <div>
      <StepTitle kicker="Étape 1 · Logement" title="Où souhaitez-vous installer votre borne ?" />
      <div className="grid sm:grid-cols-2 gap-3">
        <OptionCard active={data.logement === "domicile"} onClick={() => { update("logement", "domicile"); update("role", ""); }} title="Borne à domicile" desc="Maison individuelle" icon={<Home className="size-5" />} />
        <OptionCard active={data.logement === "copropriete"} onClick={() => { update("logement", "copropriete"); update("role", ""); }} title="Copropriété" desc="Immeuble, parking commun" icon={<Building2 className="size-5" />} />
      </div>
      <AnimatePresence>
        {data.logement && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="pt-6">
              <div className="text-sm font-medium mb-2">Vous êtes…</div>
              <div className="grid sm:grid-cols-3 gap-3">
                <OptionCard active={data.role === "proprietaire"} onClick={() => update("role", "proprietaire")} title="Propriétaire" icon={<Key className="size-5" />} />
                <OptionCard active={data.role === "locataire"} onClick={() => update("role", "locataire")} title="Locataire" icon={<User className="size-5" />} />
                {data.logement === "copropriete" && <OptionCard active={data.role === "syndic"} onClick={() => update("role", "syndic")} title="Syndic" icon={<Briefcase className="size-5" />} />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="pt-6">
        <Field label="Code postal" hint="Pour identifier les installateurs près de chez vous.">
          <Input inputMode="numeric" maxLength={5} placeholder="75001" value={data.codePostal} onChange={e => update("codePostal", e.target.value.replace(/\D/g, "").slice(0, 5))} />
        </Field>
      </div>
    </div>
  );
}

const MARQUES = ["Tesla", "Renault", "Peugeot", "BMW", "Hyundai", "Kia", "Autre"];
const PUISSANCES: { v: FunnelData["puissance"]; l: string }[] = [
  { v: "7.4", l: "7,4 kW" }, { v: "11", l: "11 kW" }, { v: "22", l: "22 kW" }, { v: "unknown", l: "Je ne sais pas" },
];

function Step2({ data, update, isPro }: { data: FunnelData; update: <K extends keyof FunnelData>(k: K, v: FunnelData[K]) => void; isPro: boolean }) {
  return (
    <div>
      <StepTitle kicker={isPro ? "Étape 2 · Projet" : "Étape 2 · Véhicule"} title={isPro ? "Parlez-nous de votre projet d'installation" : "Parlez-nous de votre véhicule"} />
      {!isPro && (
        <>
          <Field label="Avez-vous un véhicule électrique ?">
            <div className="grid sm:grid-cols-3 gap-3">
              <OptionCard active={data.vehicule === "oui"} onClick={() => update("vehicule", "oui")} title="Oui, je l'ai déjà" icon={<Car className="size-5" />} />
              <OptionCard active={data.vehicule === "commande"} onClick={() => update("vehicule", "commande")} title="Commandé" icon={<Car className="size-5" />} />
              <OptionCard active={data.vehicule === "projet"} onClick={() => update("vehicule", "projet")} title="C'est un projet" icon={<Car className="size-5" />} />
            </div>
          </Field>
          <div className="pt-6">
            <Field label="Marque du véhicule">
              <div className="flex flex-wrap gap-2">
                {MARQUES.map(m => <Pill key={m} active={data.marque === m} onClick={() => update("marque", m)}>{m}</Pill>)}
              </div>
            </Field>
            <AnimatePresence>
              {data.marque === "Autre" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                  <div className="pt-4"><Input placeholder="Modèle (ex : Volkswagen ID.3)" value={data.marqueAutre} onChange={e => update("marqueAutre", e.target.value)} /></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
      <div className="pt-6">
        <Field label="Puissance souhaitée">
          <div className="flex flex-wrap gap-2">
            {PUISSANCES.map(p => <Pill key={p.v} active={data.puissance === p.v} onClick={() => update("puissance", p.v)}>{p.l}</Pill>)}
          </div>
        </Field>
      </div>
      <AnimatePresence>
        {isPro && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="pt-6">
              <Field label="Combien de bornes souhaitez-vous installer ?">
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 10, 15, 20, 21].map(n => (
                    <Pill key={n} active={data.nbBornes === n} onClick={() => update("nbBornes", n)}>{n === 21 ? "20+" : `${n} borne${n > 1 ? "s" : ""}`}</Pill>
                  ))}
                </div>
              </Field>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Step3({ data, update, isPro }: { data: FunnelData; update: <K extends keyof FunnelData>(k: K, v: FunnelData[K]) => void; isPro: boolean }) {
  return (
    <div className="space-y-6">
      <StepTitle kicker="Étape 3 · Projet" title="Précisons votre installation" />
      <Field label="Type de compteur">
        <div className="flex flex-wrap gap-2">
          {[{ v: "mono", l: "Monophasé" }, { v: "tri", l: "Triphasé" }, { v: "unknown", l: "Je ne sais pas" }].map(o => (
            <Pill key={o.v} active={data.compteur === o.v} onClick={() => update("compteur", o.v as FunnelData["compteur"])}>{o.l}</Pill>
          ))}
        </div>
      </Field>
      {!isPro && (
        <Field label="Distance entre le tableau et la borne">
          <div className="flex flex-wrap gap-2">
            {[{ v: "<5", l: "Moins de 5 m" }, { v: "5-15", l: "5 à 15 m" }, { v: ">15", l: "Plus de 15 m" }].map(o => (
              <Pill key={o.v} active={data.distance === o.v} onClick={() => update("distance", o.v as FunnelData["distance"])}>{o.l}</Pill>
            ))}
          </div>
        </Field>
      )}
      <Field label="Délai souhaité">
        <div className="flex flex-wrap gap-2">
          {[{ v: "asap", l: "Dès que possible" }, { v: "1m", l: "Sous 1 mois" }, { v: "3m", l: "Sous 3 mois" }, { v: "compare", l: "Je compare" }].map(o => (
            <Pill key={o.v} active={data.delai === o.v} onClick={() => update("delai", o.v as FunnelData["delai"])}>{o.l}</Pill>
          ))}
        </div>
      </Field>
    </div>
  );
}

const PHOTO_TARGETS = [
  { key: "tableau", label: "Tableau électrique" },
  { key: "linky", label: "Compteur Linky" },
  { key: "parking", label: "Place de parking" },
  { key: "cable", label: "Passage de câble" },
];

function Step4({ data, update }: { data: FunnelData; update: <K extends keyof FunnelData>(k: K, v: FunnelData[K]) => void }) {
  return (
    <div>
      <StepTitle kicker="Étape 4 · Photos (optionnel)" title="Ajoutez des photos pour un devis précis" sub="Plus vos photos sont précises, plus le devis sera juste." />
      <div className="grid sm:grid-cols-2 gap-3">
        {PHOTO_TARGETS.map(t => (
          <label key={t.key} className="relative cursor-pointer rounded-2xl border border-dashed border-border bg-surface hover:border-electric/60 hover:bg-electric/5 transition-colors p-5 flex flex-col items-center justify-center text-center min-h-[100px]">
            <Upload className="size-5 text-muted-foreground" />
            <div className="mt-2 text-sm font-medium">{t.label}</div>
            <div className="text-xs text-muted-foreground">Cliquer pour ajouter</div>
            <input type="file" accept="image/*" capture="environment" multiple className="absolute inset-0 opacity-0 cursor-pointer" onChange={e => { if (!e.target.files) return; update("photos", [...data.photos, ...Array.from(e.target.files)].slice(0, 8)); }} />
          </label>
        ))}
      </div>
      {data.photos.length > 0 && (
        <div className="mt-4 text-xs text-muted-foreground flex items-center gap-1.5">
          <Check className="size-3.5 text-electric" /> {data.photos.length} photo(s) ajoutée(s).
        </div>
      )}
    </div>
  );
}

function Step5({ data, update }: { data: FunnelData; update: <K extends keyof FunnelData>(k: K, v: FunnelData[K]) => void }) {
  return (
    <div>
      <StepTitle kicker="Étape 5 · Contact" title="Recevez vos devis sous 24h" sub="Vos coordonnées restent confidentielles." />
      <div className="space-y-4">
        <Field label="Nom et prénom">
          <Input autoFocus placeholder="Jean Dupont" value={data.nom} onChange={e => update("nom", e.target.value)} />
        </Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Téléphone">
            <Input inputMode="tel" placeholder="06 12 34 56 78" value={data.telephone} onChange={e => update("telephone", e.target.value)} />
          </Field>
          <Field label="Email">
            <Input inputMode="email" placeholder="jean@exemple.fr" value={data.email} onChange={e => update("email", e.target.value)} />
          </Field>
        </div>
        <OptionCard active={data.rgpd} onClick={() => update("rgpd", !data.rgpd)} title="J'accepte d'être contacté" desc="Mes données restent confidentielles — RGPD." icon={<Shield className="size-5" />} />
      </div>
    </div>
  );
}
