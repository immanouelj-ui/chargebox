import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

const MAKE_WEBHOOK = "https://hook.eu1.make.com/7c7yt2mqc1eqy13ilp4xb41l7kyn5ic9";
const CRM_ENDPOINT = "https://crm-zeta-two-60.vercel.app/api/public/leads";
const CRM_API_KEY = "b0b84ca9fd93429d993e4fae3b3322e77a783593e0184b90939abeeda87ae2e7";
const NOTIFY_EMAIL = process.env.ADMIN_EMAIL || "immanouelj@gmail.com";

const LABELS: Record<string, Record<string, string>> = {
  logement: { domicile: "Maison individuelle", copropriete: "Copropriété" },
  role: { proprietaire: "Propriétaire", locataire: "Locataire", syndic: "Syndic" },
  vehicule: { oui: "Déjà équipé", commande: "Véhicule commandé", projet: "En projet d'achat" },
  puissance: { "7.4": "7,4 kW", "11": "11 kW", "22": "22 kW", unknown: "Ne sait pas" },
  compteur: { mono: "Monophasé", tri: "Triphasé", unknown: "Ne sait pas" },
  distance: { "<5": "Moins de 5 m", "5-15": "5 à 15 m", ">15": "Plus de 15 m" },
  delai: { asap: "Dès que possible", "1m": "Sous 1 mois", "3m": "Sous 3 mois", compare: "Compare les offres" },
};

const label = (key: keyof typeof LABELS, value: string) => LABELS[key]?.[value] || value || "—";

const CRM_MAP: Record<string, Record<string, string>> = {
  statut_du_bien: { proprietaire: "Propriétaire", locataire: "Locataire", syndic: "Syndic" },
  logement: { domicile: "Maison individuelle", copropriete: "Copropriété" },
  vehicule: { oui: "oui", commande: "Commandé", projet: "Projet" },
  puissance: { "7.4": "7,4 KW", "11": "11 KW", "22": "22 KW" },
  compteur: { mono: "Monophasé", tri: "Triphasé" },
  distance: { "<5": "5 M", "5-15": "5 a 15 M", ">15": "15 et plus" },
  dlai: { asap: "Urgent", "1m": "1 mois", "3m": "3 mois", compare: "ne sais pas" },
};

const crmVal = (key: keyof typeof CRM_MAP, value: string) => CRM_MAP[key]?.[value] || "";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const marque = data.marque === "Autre" ? data.marqueAutre : data.marque;
    const isPro = data.role === "syndic";
    const photoUrls: string[] = data.photoUrls || [];

    const details = [
      `Logement : ${label("logement", data.logement)} (${label("role", data.role)}) — CP ${data.codePostal}`,
      isPro
        ? `Projet pro : ${data.nbBornes === 21 ? "20+" : data.nbBornes} borne(s)`
        : `Véhicule : ${label("vehicule", data.vehicule)}${marque ? ` — ${marque}` : ""}`,
      `Puissance : ${label("puissance", data.puissance)}${data.borneModele ? ` — Modèle choisi : ${data.borneModele}` : ""}`,
      `Compteur : ${label("compteur", data.compteur)}${!isPro && data.distance ? ` · Distance tableau-borne : ${label("distance", data.distance)}` : ""}`,
      `Délai : ${label("delai", data.delai)}`,
      photoUrls.length ? `Photos (${photoUrls.length}) : ${photoUrls.join(" | ")}` : "Photos : aucune",
    ];

    const notes = `🌐 Lead devis ChoisisTaBorne / Chargebox\n${details.join("\n")}`;

    const crmBody: Record<string, any> = {
      nom: data.nom,
      email: data.email,
      phone: data.telephone,
      statut: "Lead",
      source: "choisistaborne.fr",
      notes,
      statut_du_bien: crmVal("statut_du_bien", data.role),
      logement: crmVal("logement", data.logement),
      cp: data.codePostal,
      puissance: crmVal("puissance", data.puissance),
      compteur: crmVal("compteur", data.compteur),
      dlai: crmVal("dlai", data.delai),
      ...(isPro
        ? {}
        : {
            vehicule: crmVal("vehicule", data.vehicule),
            marque: marque || "",
            distance: crmVal("distance", data.distance),
          }),
      photos: photoUrls,
    };

    for (const k of Object.keys(crmBody)) {
      if (!crmBody[k] && crmBody[k] !== 0) delete crmBody[k];
    }

    // Dispatch concurrently
    await Promise.allSettled([
      // 1. Webhook Make
      fetch(MAKE_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: data.nom,
          email: data.email,
          telephone: data.telephone,
          logement: data.logement,
          role: data.role,
          codePostal: data.codePostal,
          vehicule: data.vehicule,
          marque,
          puissance: data.puissance,
          borneModele: data.borneModele,
          nbBornes: data.nbBornes,
          compteur: data.compteur,
          distance: data.distance,
          delai: data.delai,
          photos: photoUrls,
        }),
      }),

      // 2. CRM endpoint
      fetch(CRM_ENDPOINT, {
        method: "POST",
        headers: { "X-API-Key": CRM_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify(crmBody),
      }),

      // 3. Email Notification to Admin
      sendEmail({
        to: NOTIFY_EMAIL,
        subject: `⚡ Nouveau Lead Devis Borne IRVE — ${data.nom} (${data.codePostal})`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #0f172a;">
            <h2>⚡ Nouvelle demande de 3 devis gratuits IRVE</h2>
            <p><strong>Nom :</strong> ${data.nom}</p>
            <p><strong>Email :</strong> ${data.email}</p>
            <p><strong>Téléphone :</strong> ${data.telephone}</p>
            <p><strong>Code Postal :</strong> ${data.codePostal}</p>
            <p><strong>Logement :</strong> ${label("logement", data.logement)} (${label("role", data.role)})</p>
            <p><strong>Puissance :</strong> ${label("puissance", data.puissance)}</p>
            <p><strong>Compteur :</strong> ${label("compteur", data.compteur)}</p>
            <p><strong>Délai :</strong> ${label("delai", data.delai)}</p>
            ${photoUrls.length ? `<p><strong>Photos jointes :</strong> ${photoUrls.join(", ")}</p>` : ""}
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Lead quote dispatch error:", error);
    return NextResponse.json({ error: error.message || "Erreur" }, { status: 500 });
  }
}
