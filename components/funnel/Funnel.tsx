"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, Check, Home, Building2, User, Key, Briefcase,
  Car, Upload, X, Loader2, PartyPopper, Shield,
} from "lucide-react";
import { initialData, type FunnelData } from "./types";
import { submitLead } from "./submit";
import { Field, Input, OptionCard, Pill, StepTitle } from "./ui";

export function Funnel({ open, onClose, initial }: { open: boolean; onClose: () => void; initial?: Partial<FunnelData> }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FunnelData>(initialData);

  // Pré-remplit le funnel (ex : puissance choisie dans le comparateur) à l'ouverture
  useEffect(() => {
    if (open && initial) setData(d => ({ ...d, ...initial }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [autoCount, setAutoCount] = useState(0); // countdown for auto-advance indicator
  const autoAdvancedRef = useRef<Set<number>>(new Set());

const isPro = data.role === "syndic";
const isParticulier =
  data.role === "proprietaire" || data.role === "locataire";
  const steps = useMemo(() => ["Logement", "Véhicule", "Projet", "Photos", "Contact"], []);

 const canNext = (() => {
  if (step === 0) {
    return (
      !!data.logement &&
      !!data.role &&
      /^\d{5}$/.test(data.codePostal)
    );
  }

if (step === 1) {
  if (isPro) {
    return !!data.puissance && (data.nbBornes ?? 0) > 0;
  }

    const marqueOk =
      !!data.marque &&
      (data.marque !== "Autre" ||
        data.marqueAutre.trim().length > 0);

    return (
      !!data.vehicule &&
      marqueOk &&
      !!data.puissance
    );
  }

if (step === 2) {
  if (isPro) {
    return !!data.compteur && !!data.delai;
  }

  return (
    !!data.compteur &&
    !!data.distance &&
    !!data.delai
  );
}
  if (step === 3) return true;

  if (step === 4)
    return (
      data.nom.trim().length > 1 &&
      /^[0-9 +.]{8,}$/.test(data.telephone) &&
      /.+@.+\..+/.test(data.email) &&
      data.rgpd
    );

  return false;
})();

  const progress = ((step + (canNext ? 1 : 0)) / steps.length) * 100;

  const update = <K extends keyof FunnelData>(k: K, v: FunnelData[K]) =>
    setData(d => ({ ...d, [k]: v }));

  const next = () => {
    if (step < steps.length - 1) setStep(s => s + 1);
    else submit();
  };
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
  const reset = () => {
    setStep(0);
    setData(initialData);
    setDone(false);
    setAutoCount(0);
    autoAdvancedRef.current.clear();
    onClose();
  };

  // Auto-advance when step is complete
  useEffect(() => {
    if (!canNext || done || submitting) return;
    if (autoAdvancedRef.current.has(step)) return;
    // Exception : étape Photos (index 3) → on attend que l'utilisateur clique Continuer
    if (step === 3) return;

    const delay = step === 4 ? 1400 : 550; // contact medium, sinon rapide & fluide
    let count = Math.ceil(delay / 100);
    setAutoCount(count);

    const countdown = setInterval(() => {
      count -= 1;
      setAutoCount(c => Math.max(0, c - 1));
      if (count <= 0) clearInterval(countdown);
    }, 100);

    const timer = setTimeout(() => {
      autoAdvancedRef.current.add(step);
      next();
    }, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, [canNext, step, done, submitting, steps.length]);

  // Clear auto-advance flag when user goes back
  useEffect(() => {
    // When step changes backwards, remove flags for future steps so they can auto-advance again
  }, [step]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-md p-0 sm:p-6 flex items-stretch sm:items-center justify-center"
        onClick={reset}
      >
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={e => e.stopPropagation()}
          className="relative w-full sm:max-w-xl bg-background sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[100dvh] sm:h-auto sm:max-h-[92vh]"
        >
          {/* Header */}
          <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground flex items-center gap-2 min-w-0">
                <span className="shrink-0">
                  {done ? "Demande envoyée" : `Étape ${step + 1} sur ${steps.length} · ${steps[step]}`}
                </span>
                {!done && data.borneModele && (
                  <span className="truncate rounded-full bg-electric/10 text-electric px-2.5 py-0.5 font-medium">
                    {data.borneModele}
                  </span>
                )}
              </div>
              <button
                onClick={reset}
                className="size-9 rounded-full hover:bg-muted grid place-items-center text-muted-foreground"
                aria-label="Fermer"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-3 h-1 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-electric"
                initial={{ width: 0 }}
                animate={{ width: done ? "100%" : `${progress}%` }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-6 sm:py-8">
            {done ? (
              <Success onClose={reset} />
            ) : (
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
                  {step === 2 && (
                  <Step3
                  data={data}
                  update={update}
                  isPro={isPro}
                />
             )}
                  {step === 3 && <Step4 data={data} update={update} />}
                  {step === 4 && <Step5 data={data} update={update} />}
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Footer */}
          {!done && (
             <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-3 border-b border-border">
              <button
                onClick={prev}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground disabled:opacity-30 hover:text-foreground transition-colors px-3 py-2"
              >
                <ArrowLeft className="size-4" /> Retour
              </button>
              <div className="flex items-center gap-3">
                <button
                  onClick={next}
                  disabled={!canNext || submitting}
                  className="btn-electric rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2 disabled:opacity-40 disabled:pointer-events-none"
                >
                  {submitting ? (
                    <><Loader2 className="size-4 animate-spin" /> Envoi…</>
                  ) : step === steps.length - 1 ? (
                    <>Envoyer ma demande <ArrowRight className="size-4" /></>
                  ) : (
                    <>Continuer <ArrowRight className="size-4" /></>
                  )}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ---------- Steps ---------- */

function Step1({ data, update }: { data: FunnelData; update: <K extends keyof FunnelData>(k: K, v: FunnelData[K]) => void }) {
  return (
    <div>
      <StepTitle kicker="Étape 1 · Logement" title="Où souhaitez-vous installer votre borne ?" sub="Ces informations nous permettent de qualifier votre projet en quelques secondes." />
      <div className="grid sm:grid-cols-2 gap-3">
        <OptionCard active={data.logement === "domicile"} onClick={() => { update("logement", "domicile"); update("role", ""); }} title="Borne à domicile" desc="Maison individuelle" icon={<Home className="size-5" />} />
        <OptionCard active={data.logement === "copropriete"} onClick={() => { update("logement", "copropriete"); update("role", ""); }} title="Copropriété" desc="Immeuble, parking commun" icon={<Building2 className="size-5" />} />
      </div>

      <AnimatePresence>
        {data.logement && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <div className="text-sm font-medium mb-2">Vous êtes…</div>
              <div className="grid sm:grid-cols-3 gap-3">
                <OptionCard active={data.role === "proprietaire"} onClick={() => update("role", "proprietaire")} title="Propriétaire" icon={<Key className="size-5" />} />
                <OptionCard active={data.role === "locataire"} onClick={() => update("role", "locataire")} title="Locataire" icon={<User className="size-5" />} />
                {data.logement === "copropriete" && (
                  <OptionCard active={data.role === "syndic"} onClick={() => update("role", "syndic")} title="Syndic" icon={<Briefcase className="size-5" />} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-6">
        <Field label="Code postal" hint="Pour identifier les installateurs près de chez vous.">
          <Input
            inputMode="numeric"
            maxLength={5}
            placeholder="75001"
            value={data.codePostal}
            onChange={e => update("codePostal", e.target.value.replace(/\D/g, "").slice(0, 5))}
          />
        </Field>
      </div>
    </div>
  );
}

const MARQUES = ["Tesla", "Renault", "Peugeot", "BMW", "Hyundai", "Kia", "Autre"];
const PUISSANCES: { v: FunnelData["puissance"]; l: string }[] = [
  { v: "7.4", l: "7,4 kW" }, { v: "11", l: "11 kW" }, { v: "22", l: "22 kW" }, { v: "unknown", l: "Je ne sais pas" },
];

function Step2({
  data,
  update,
  isPro,
}: {
  data: FunnelData;
  update: <K extends keyof FunnelData>(k: K, v: FunnelData[K]) => void;
  isPro: boolean;
}) {
  return (
    <div>
      <StepTitle
        kicker={isPro ? "Étape 2 · Projet" : "Étape 2 · Véhicule"}
        title={
          isPro
            ? "Parlez-nous de votre projet d'installation"
            : "Parlez-nous de votre véhicule"
        }
        sub={
          isPro
            ? "Indiquez le nombre de bornes et la puissance souhaitée."
            : "Ces informations nous aident à dimensionner votre installation."
        }
      />

      {!isPro && (
        <>
          <Field label="Avez-vous un véhicule électrique ?">
            <div className="grid sm:grid-cols-3 gap-3">
              <OptionCard
                active={data.vehicule === "oui"}
                onClick={() => update("vehicule", "oui")}
                title="Oui, je l'ai déjà"
                icon={<Car className="size-5" />}
              />
              <OptionCard
                active={data.vehicule === "commande"}
                onClick={() => update("vehicule", "commande")}
                title="Commandé"
                icon={<Car className="size-5" />}
              />
              <OptionCard
                active={data.vehicule === "projet"}
                onClick={() => update("vehicule", "projet")}
                title="C'est un projet"
                icon={<Car className="size-5" />}
              />
            </div>
          </Field>

          <div className="pt-6">
            <Field label="Marque du véhicule">
              <div className="flex flex-wrap gap-2">
                {MARQUES.map((m) => (
                  <Pill
                    key={m}
                    active={data.marque === m}
                    onClick={() => update("marque", m)}
                  >
                    {m}
                  </Pill>
                ))}
              </div>
            </Field>

            <AnimatePresence>
              {data.marque === "Autre" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4">
                    <Input
                      placeholder="Modèle (ex : Volkswagen ID.3)"
                      value={data.marqueAutre}
                      onChange={(e) =>
                        update("marqueAutre", e.target.value)
                      }
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}

      <div className="pt-6">
        <Field label="Puissance souhaitée">
          <div className="flex flex-wrap gap-2">
            {PUISSANCES.map((p) => (
              <Pill
                key={p.v}
                active={data.puissance === p.v}
                onClick={() => update("puissance", p.v)}
              >
                {p.l}
              </Pill>
            ))}
          </div>
        </Field>
      </div>

      <AnimatePresence>
        {isPro && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <Field label="Combien de bornes souhaitez-vous installer ?">
  <div className="flex flex-wrap gap-2">
    {[1, 2, 3, 4, 5, 10, 15, 20, 21].map((n) => (
  <Pill
    key={n}
    active={data.nbBornes === n}
    onClick={() => update("nbBornes", n)}
  >
    {n === 21 ? "20+" : `${n} borne${n > 1 ? "s" : ""}`}
  </Pill>
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
function Step3({
  data,
  update,
  isPro,
}: {
  data: FunnelData;
  update: <K extends keyof FunnelData>(
    k: K,
    v: FunnelData[K]
  ) => void;
  isPro: boolean;
}) {
  return (
    <div className="space-y-6">
      <StepTitle kicker="Étape 3 · Projet" title="Précisons votre installation" />

      <Field label="Type de compteur">
        <div className="flex flex-wrap gap-2">
          {[{v:"mono",l:"Monophasé"},{v:"tri",l:"Triphasé"},{v:"unknown",l:"Je ne sais pas"}].map(o => (
            <Pill key={o.v} active={data.compteur === o.v} onClick={() => update("compteur", o.v as FunnelData["compteur"])}>{o.l}</Pill>
          ))}
        </div>
      </Field>

      {!isPro && (
  <Field label="Distance entre le tableau et la borne">
    <div className="flex flex-wrap gap-2">
      {[{v:"<5",l:"Moins de 5 m"},{v:"5-15",l:"5 à 15 m"},{v:">15",l:"Plus de 15 m"}].map(o => (
        <Pill
          key={o.v}
          active={data.distance === o.v}
          onClick={() => update("distance", o.v as FunnelData["distance"])}
        >
          {o.l}
        </Pill>
      ))}
    </div>
  </Field>
)}

      <Field label="Délai souhaité">
        <div className="flex flex-wrap gap-2">
          {[{v:"asap",l:"Dès que possible"},{v:"1m",l:"Sous 1 mois"},{v:"3m",l:"Sous 3 mois"},{v:"compare",l:"Je compare"}].map(o => (
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
  const onPick = (files: FileList | null) => {
    if (!files) return;
    const next = [...data.photos, ...Array.from(files)].slice(0, 8);
    update("photos", next);
  };
  return (
    <div>
      <StepTitle kicker="Étape 4 · Photos (optionnel)" title="Ajoutez des photos pour un devis précis" sub="Plus vos photos sont précises, plus le devis sera juste — gain de temps assuré." />
      <div className="grid sm:grid-cols-2 gap-3">
        {PHOTO_TARGETS.map(t => (
          <label key={t.key} className="relative cursor-pointer rounded-2xl border border-dashed border-border bg-surface hover:border-electric/60 hover:bg-electric/5 transition-colors p-5 flex flex-col items-center justify-center text-center min-h-[120px]">
            <Upload className="size-5 text-muted-foreground" />
            <div className="mt-2 text-sm font-medium">{t.label}</div>
            <div className="text-xs text-muted-foreground">Cliquer pour ajouter</div>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              multiple
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={e => onPick(e.target.files)}
            />
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
        <OptionCard
          active={data.rgpd}
          onClick={() => update("rgpd", !data.rgpd)}
          title="J'accepte d'être contacté"
          desc="Mes données restent confidentielles — RGPD."
          icon={<Shield className="size-5" />}
        />
      </div>
    </div>
  );
}

function Success({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-8">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto size-16 rounded-full btn-electric grid place-items-center"
      >
        <PartyPopper className="size-7" />
      </motion.div>
      <h3 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">Demande envoyée !</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
        Nos installateurs partenaires IRVE vont étudier votre projet et vous recontacter sous 24h ouvrées.
      </p>
      <button
        onClick={onClose}
        className="mt-7 btn-electric rounded-full px-6 py-3 text-sm font-medium"
      >
        Parfait, merci !
      </button>
    </div>
  );
}
