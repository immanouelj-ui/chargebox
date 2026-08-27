import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  const webhookSecret =
    process.env.STRIPE_WEBHOOK_SECRET ||
    process.env.STRIPE_WEBHOOK_KEY;

  let event: any;

  try {
    if (webhookSecret && signature) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      // Fallback if webhook secret is not set yet in test mode
      event = JSON.parse(body);
    }
  } catch (err: any) {
    console.error("⚠️ Stripe Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle Stripe events
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const orderId = session.metadata?.orderId || session.client_reference_id;

      if (orderId) {
        try {
          await prisma.order.update({
            where: { id: orderId },
            data: {
              status: "PROCESSING",
              paymentStatus: "PAID",
            },
          });

          // Record payment details
          await prisma.payment.create({
            data: {
              orderId,
              provider: "STRIPE",
              transactionId: session.payment_intent || session.id,
              amount: (session.amount_total || 0) / 100,
              currency: session.currency?.toUpperCase() || "EUR",
              status: "SUCCEEDED",
              paymentMethod: "card",
            },
          });

          console.log(`✅ Commande #${orderId} marquée comme PAYÉE via Stripe Webhook.`);
        } catch (dbError) {
          console.error("Erreur lors de la mise à jour de la commande via Webhook:", dbError);
        }
      }
      break;
    }

    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      console.log(`💰 Paiement réussi pour PaymentIntent: ${paymentIntent.id}`);
      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      console.warn(`❌ Échec de paiement pour: ${paymentIntent.id}`);
      break;
    }

    default:
      console.log(`Événement Stripe non géré: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
