import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      items,
      customerEmail,
      customerName,
      customerPhone,
      deliveryAddress,
      installationRequested,
      isB2B,
      companyName,
      siret,
      vatNumber,
      couponCode,
      discountAmount = 0,
      totalTTC,
    } = body;

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "https://chargebox.fr";

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Votre panier est vide." }, { status: 400 });
    }

    const orderNumber = `CB-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    // Calculate line items for Stripe Checkout
    const stripeLineItems = items.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          description: `Réf: ${item.reference || item.sku || "Chargebox"} · Marque: ${item.brandName || "IRVE"}`,
          images: item.image?.startsWith("http")
            ? [item.image]
            : [`${origin}${item.image || "/images/products/teltonika-teltocharge.jpg"}`],
        },
        unit_amount: Math.round(item.priceTTC * 100), // in cents
      },
      quantity: item.quantity,
    }));

    const user = await getCurrentUser();
    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: user?.id || null,
        customerEmail: customerEmail || user?.email || "client@chargebox.fr",
        customerName: customerName || user?.name || "Client Chargebox",
        customerPhone: customerPhone || "",
        status: "PENDING",
        subtotalHT: totalTTC / 1.2,
        totalTTC: totalTTC,
        taxAmount: totalTTC - totalTTC / 1.2,
        shippingAddress: typeof deliveryAddress === "string" ? deliveryAddress : JSON.stringify(deliveryAddress || {}),
        billingAddress: typeof deliveryAddress === "string" ? deliveryAddress : JSON.stringify(deliveryAddress || {}),
        isB2B: Boolean(isB2B),
        companyName: companyName || null,
        siret: siret || null,
        vatNumber: vatNumber || null,
        installationRequested: Boolean(installationRequested),
        discountAmount: discountAmount || 0,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            productName: item.name,
            productSku: item.sku || item.reference || "SKU-CB",
            unitPriceHT: Number(item.priceHT || item.priceTTC / 1.2),
            unitPriceTTC: Number(item.priceTTC),
            vatRate: Number(item.vatRate || 20.0),
            quantity: Number(item.quantity),
            totalHT: Number(item.priceHT || item.priceTTC / 1.2) * Number(item.quantity),
            totalTTC: Number(item.priceTTC) * Number(item.quantity),
          })),
        },
      },
    });

    // Create real Stripe Checkout session with 3D Secure bank validation
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: stripeLineItems,
      mode: "payment",
      customer_email: customerEmail || user?.email,
      client_reference_id: order.id,
      metadata: {
        orderId: order.id,
        orderNumber: order.orderNumber,
        installationRequested: String(Boolean(installationRequested)),
      },
      success_url: `${origin}/checkout/confirmation?session_id={CHECKOUT_SESSION_ID}&order_id=${order.id}`,
      cancel_url: `${origin}/checkout/echec?order_id=${order.id}`,
    });

    return NextResponse.json({
      success: true,
      url: session.url,
      sessionId: session.id,
      orderId: order.id,
    });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de l'initialisation du paiement Stripe avec la banque." },
      { status: 500 }
    );
  }
}
