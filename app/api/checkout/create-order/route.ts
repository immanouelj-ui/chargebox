import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      customerEmail,
      customerName,
      customerPhone,
      isB2B,
      companyName,
      siret,
      vatNumber,
      shippingAddress,
      billingAddress,
      items,
      subtotalHT,
      taxAmount,
      shippingCost,
      discountAmount,
      totalTTC,
      installationRequested,
    } = body;

    if (!customerEmail || !customerName || !items || items.length === 0) {
      return NextResponse.json(
        { error: "Données de commande incomplètes." },
        { status: 400 }
      );
    }

    const user = await getCurrentUser();
    const orderNumber = `CB-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: user?.id || null,
        customerEmail,
        customerName,
        customerPhone: customerPhone || null,
        isB2B: !!isB2B,
        companyName: companyName || null,
        siret: siret || null,
        vatNumber: vatNumber || null,
        shippingAddress: JSON.stringify(shippingAddress),
        billingAddress: JSON.stringify(billingAddress),
        subtotalHT: Number(subtotalHT),
        taxAmount: Number(taxAmount),
        shippingCost: Number(shippingCost),
        discountAmount: Number(discountAmount),
        totalTTC: Number(totalTTC),
        status: "PROCESSING",
        paymentStatus: "PAID",
        installationRequested: !!installationRequested,
        carrier: "Chronopost IRVE Express",
        trackingNumber: `CH${Math.floor(100000000 + Math.random() * 900000000)}FR`,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            productName: item.name,
            productSku: item.sku,
            unitPriceHT: Number(item.priceHT),
            unitPriceTTC: Number(item.priceTTC),
            vatRate: Number(item.vatRate || 20),
            quantity: Number(item.quantity),
            totalHT: Number(item.priceHT) * Number(item.quantity),
            totalTTC: Number(item.priceTTC) * Number(item.quantity),
          })),
        },
        payments: {
          create: {
            provider: "STRIPE",
            transactionId: `pi_${Math.random().toString(36).substring(2, 15)}`,
            amount: Number(totalTTC),
            currency: "EUR",
            status: "SUCCEEDED",
            paymentMethod: "card",
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      orderId: order.id,
      orderNumber: order.orderNumber,
    });
  } catch (error: any) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: error.message || "Erreur serveur lors de la création de la commande." },
      { status: 500 }
    );
  }
}
