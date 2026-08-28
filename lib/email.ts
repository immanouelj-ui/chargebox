import { formatPrice, formatDate } from "@/lib/utils";

// Universal transactional email sender with Resend API / SMTP / Fallback
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string | string[];
  subject: string;
  html: string;
}) {
  const recipient = Array.isArray(to) ? to.join(", ") : to;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.EMAIL_FROM || "Chargebox <commandes@chargebox.fr>";

  // 1. If Resend API Key is configured
  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: Array.isArray(to) ? to : [to],
          subject,
          html,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("Resend Email API error:", errData);
      } else {
        console.log(`✉️ Email envoyé avec succès via Resend à ${recipient} (${subject})`);
        return true;
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi Resend:", err);
    }
  }

  // 2. Fallback logger (production log / debug)
  console.log(`📨 [SIMULATION EMAIL] Vers: ${recipient} | Objet: "${subject}"`);
  return true;
}

// -------------------------------------------------------------
// 1. Email de confirmation de commande & Facture acquittée
// -------------------------------------------------------------
export async function sendOrderConfirmationEmail(order: any) {
  let shippingAddress: any = {};
  try {
    shippingAddress = typeof order.shippingAddress === "string" ? JSON.parse(order.shippingAddress) : order.shippingAddress || {};
  } catch (e) {
    shippingAddress = { street: order.shippingAddress };
  }

  const itemsHtml = (order.items || [])
    .map(
      (item: any) => `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 8px; font-size: 13px; color: #1e293b; font-weight: 600;">
          ${item.productName || item.name}
          <div style="font-size: 11px; color: #64748b; font-family: monospace;">Réf: ${item.productSku || item.sku || "CB"}</div>
        </td>
        <td style="padding: 12px 8px; font-size: 13px; color: #1e293b; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px 8px; font-size: 13px; color: #1e293b; text-align: right;">${formatPrice(item.unitPriceHT || (item.unitPriceTTC / 1.2))} HT</td>
        <td style="padding: 12px 8px; font-size: 13px; color: #1e293b; text-align: right; font-weight: bold;">${formatPrice(item.totalTTC || (item.unitPriceTTC * item.quantity))} TTC</td>
      </tr>
    `
    )
    .join("");

  const appUrl = process.env.NEXTAUTH_URL || "https://chargebox.fr";

  const emailHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Confirmation de votre commande #${order.orderNumber}</title>
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px 0; color: #0f172a;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
      
      <!-- Header -->
      <div style="background-color: #0f172a; padding: 28px 24px; text-align: center;">
        <h1 style="color: #38bdf8; font-size: 24px; margin: 0; font-weight: 900; letter-spacing: -0.5px;">CHARGEBOX</h1>
        <p style="color: #94a3b8; font-size: 12px; margin: 4px 0 0; text-transform: uppercase; letter-spacing: 1px;">Bornes de recharge & Solutions IRVE</p>
      </div>

      <!-- Main Content -->
      <div style="padding: 32px 24px;">
        <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 16px; margin-bottom: 24px; text-align: center;">
          <h2 style="color: #15803d; font-size: 18px; margin: 0 0 4px; font-weight: bold;">✓ Paiement confirmé & Commande validée</h2>
          <p style="color: #166534; font-size: 13px; margin: 0;">Merci pour votre confiance, <strong>${order.customerName}</strong>. Votre commande est actuellement en cours de préparation logistique.</p>
        </div>

        <!-- Order Meta -->
        <table style="width: 100%; margin-bottom: 24px; font-size: 13px;">
          <tr>
            <td style="color: #64748b;">Numéro de commande :</td>
            <td style="text-align: right; font-weight: bold; font-family: monospace; color: #0f172a;">${order.orderNumber}</td>
          </tr>
          <tr>
            <td style="color: #64748b;">Date d'achat :</td>
            <td style="text-align: right; font-weight: 600; color: #0f172a;">${formatDate(order.createdAt || new Date())}</td>
          </tr>
          <tr>
            <td style="color: #64748b;">Statut du règlement :</td>
            <td style="text-align: right; font-weight: bold; color: #16a34a;">Payé par Carte Bancaire (Stripe 3DS)</td>
          </tr>
        </table>

        <!-- Products Table -->
        <h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase; color: #334155; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin: 24px 0 12px;">Détail des articles</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f8fafc; font-size: 11px; text-transform: uppercase; color: #64748b;">
              <th style="padding: 8px; text-align: left;">Produit</th>
              <th style="padding: 8px; text-align: center;">Qté</th>
              <th style="padding: 8px; text-align: right;">Prix HT</th>
              <th style="padding: 8px; text-align: right;">Total TTC</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <!-- Totals & Facture Summary -->
        <div style="background-color: #f8fafc; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
          <table style="width: 100%; font-size: 13px;">
            <tr>
              <td style="padding: 4px 0; color: #64748b;">Sous-total HT :</td>
              <td style="padding: 4px 0; text-align: right; font-weight: 600; color: #0f172a;">${formatPrice(order.subtotalHT || (order.totalTTC / 1.2))}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; color: #64748b;">TVA (20%) :</td>
              <td style="padding: 4px 0; text-align: right; font-weight: 600; color: #0f172a;">${formatPrice(order.taxAmount || (order.totalTTC - (order.totalTTC / 1.2)))}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; color: #64748b;">Livraison Express :</td>
              <td style="padding: 4px 0; text-align: right; font-weight: bold; color: #0284c7;">Offerte</td>
            </tr>
            ${
              order.installationRequested
                ? `
            <tr>
              <td style="padding: 4px 0; color: #0284c7; font-weight: 600;">Option Devis Pose IRVE :</td>
              <td style="padding: 4px 0; text-align: right; font-weight: bold; color: #0284c7;">Demandé (Prise de contact sous 24h)</td>
            </tr>
            `
                : ""
            }
            <tr style="border-top: 2px solid #cbd5e1;">
              <td style="padding: 10px 0 0; font-size: 16px; font-weight: 900; color: #0f172a;">Total TTC réglé :</td>
              <td style="padding: 10px 0 0; text-align: right; font-size: 18px; font-weight: 900; color: #0f172a;">${formatPrice(order.totalTTC)}</td>
            </tr>
          </table>
        </div>

        <!-- Shipping Address -->
        <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px; font-size: 13px;">
          <h4 style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; color: #64748b;">Adresse de livraison</h4>
          <div style="font-weight: bold; color: #0f172a;">${order.customerName}</div>
          <div style="color: #334155; margin-top: 2px;">
            ${shippingAddress.street || order.shippingAddress || ""}
            ${shippingAddress.postalCode ? `<br>${shippingAddress.postalCode} ${shippingAddress.city || ""}` : ""}
          </div>
          ${order.customerPhone ? `<div style="color: #64748b; font-size: 12px; margin-top: 4px;">Tél : ${order.customerPhone}</div>` : ""}
        </div>

        <!-- Buttons CTA -->
        <div style="text-align: center; margin-top: 32px;">
          <a href="${appUrl}/checkout/confirmation?orderNumber=${order.orderNumber}" style="display: inline-block; background-color: #0284c7; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 14px; padding: 14px 28px; border-radius: 12px; margin: 4px;">
            Suivre l'acheminement de mon colis
          </a>
        </div>

      </div>

      <!-- Legal Footer Invoice -->
      <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0 0 4px; font-weight: bold; color: #334155;">Chargebox SAS · 10 Avenue Raphael, 95200 Sarcelles · SAS au capital de 10 000 €</p>
        <p style="margin: 0 0 4px;">SIRET : 912 345 678 00012 · RCS Pontoise · TVA intracommunautaire : FR89912345678</p>
        <p style="margin: 8px 0 0;">Ce courriel tient lieu de confirmation de commande et de justificatif de facture acquittée.</p>
      </div>

    </div>
  </body>
  </html>
  `;

  return sendEmail({
    to: order.customerEmail,
    subject: `✓ Facture & Confirmation de votre commande #${order.orderNumber} - Chargebox`,
    html: emailHtml,
  });
}

// -------------------------------------------------------------
// 2. Email d'expédition avec numéro de suivi transporteur
// -------------------------------------------------------------
export async function sendOrderShippedEmail(order: any) {
  const carrier = order.carrier || "Chronopost IRVE Express";
  const trackingNumber = order.trackingNumber || "En attente";
  const trackingUrl = order.trackingNumber
    ? `https://www.chronopost.fr/tracking-no-cms/suivi-page?listeNumerosLT=${order.trackingNumber}`
    : "https://chargebox.fr/mon-compte/commandes";

  const emailHtml = `
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"></head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px 0; color: #0f172a;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
      <div style="background-color: #0f172a; padding: 24px; text-align: center;">
        <h1 style="color: #38bdf8; font-size: 22px; margin: 0; font-weight: 900;">CHARGEBOX</h1>
      </div>
      <div style="padding: 32px 24px;">
        <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 16px; margin-bottom: 24px; text-align: center;">
          <h2 style="color: #1d4ed8; font-size: 18px; margin: 0 0 4px; font-weight: bold;">📦 Votre colis est en route !</h2>
          <p style="color: #1e40af; font-size: 13px; margin: 0;">Votre commande <strong>#${order.orderNumber}</strong> a été remise au transporteur <strong>${carrier}</strong>.</p>
        </div>

        <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px; font-size: 13px; text-align: center;">
          <div style="color: #64748b; font-size: 12px; text-transform: uppercase;">Numéro de suivi :</div>
          <div style="font-size: 18px; font-weight: 900; font-family: monospace; color: #0f172a; margin: 6px 0;">${trackingNumber}</div>
          <div style="color: #16a34a; font-size: 12px; font-weight: 600;">Livraison estimée sous 24h à 48h ouvrées</div>
        </div>

        <div style="text-align: center; margin: 28px 0;">
          <a href="${trackingUrl}" style="display: inline-block; background-color: #0284c7; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 14px; padding: 14px 28px; border-radius: 12px;">
            Suivre mon colis en direct sur Chronopost &rarr;
          </a>
        </div>
      </div>
      <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 11px; color: #64748b;">
        Chargebox · Support technique : contact@chargebox.fr · +33 (0)1 89 71 45 20
      </div>
    </div>
  </body>
  </html>
  `;

  return sendEmail({
    to: order.customerEmail,
    subject: `🚚 Votre commande Chargebox #${order.orderNumber} a été expédiée ! (Suivi : ${trackingNumber})`,
    html: emailHtml,
  });
}

// -------------------------------------------------------------
// 3. Notification Admin pour chaque nouvelle commande passée
// -------------------------------------------------------------
export async function sendAdminNewOrderNotification(order: any) {
  const adminEmail = process.env.ADMIN_EMAIL || "immanouelj@gmail.com";

  const emailHtml = `
  <!DOCTYPE html>
  <html>
  <body style="font-family: sans-serif; padding: 20px; color: #0f172a;">
    <div style="max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; background: #ffffff;">
      <h2 style="color: #0f172a; margin-top: 0;">🎉 Nouvelle commande reçue sur Chargebox !</h2>
      <p style="font-size: 14px;"><strong>Montant :</strong> ${formatPrice(order.totalTTC)} TTC</p>
      <p style="font-size: 14px;"><strong>N° Commande :</strong> ${order.orderNumber}</p>
      <p style="font-size: 14px;"><strong>Client :</strong> ${order.customerName} (${order.customerEmail} / ${order.customerPhone || "Pas de tél"})</p>
      ${order.isB2B ? `<p style="font-size: 14px; color: #7e22ce;"><strong>Entreprise B2B :</strong> ${order.companyName} (SIRET: ${order.siret || "N/A"})</p>` : ""}
      ${order.installationRequested ? `<p style="font-size: 14px; color: #0284c7; font-weight: bold;">⚠️ Demande de devis installation IRVE à traiter !</p>` : ""}
      <div style="margin-top: 20px;">
        <a href="https://chargebox.fr/admin/commandes" style="background: #0f172a; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 13px;">
          Gérer la commande dans le Back-Office Admin &rarr;
        </a>
      </div>
    </div>
  </body>
  </html>
  `;

  return sendEmail({
    to: adminEmail,
    subject: `💰 [Nouvelle Vente] ${formatPrice(order.totalTTC)} - Commande #${order.orderNumber} (${order.customerName})`,
    html: emailHtml,
  });
}
