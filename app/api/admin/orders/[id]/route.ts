import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { sendOrderShippedEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const { status, trackingNumber, carrier, sendEmailNotification } = await req.json();

    const previousOrder = await prisma.order.findUnique({
      where: { id: params.id },
      include: { items: true },
    });

    const order = await prisma.order.update({
      where: { id: params.id },
      data: {
        ...(status && { status }),
        ...(trackingNumber !== undefined && { trackingNumber }),
        ...(carrier !== undefined && { carrier }),
      },
      include: {
        items: true,
        payments: true,
      },
    });

    // If status changed to SHIPPED or sendEmailNotification requested, send shipment email with tracking
    if (
      (status === "SHIPPED" && previousOrder?.status !== "SHIPPED") ||
      sendEmailNotification
    ) {
      await sendOrderShippedEmail(order).catch((err) => {
        console.error("Erreur envoi email expédition:", err);
      });
    }

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    console.error("Order status update error:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de la mise à jour." },
      { status: 500 }
    );
  }
}
