import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { slugify } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const body = await req.json();
    const {
      name,
      reference,
      sku,
      brandId,
      categoryId,
      shortDescription,
      description,
      priceHT,
      priceTTC,
      stock,
      powerKw,
      phaseType,
      connectorType,
      hasDynamicLoad,
      hasSolarMode,
      hasWifi,
      hasRfid,
      has4G,
      imageUrl,
    } = body;

    const slug = slugify(name);

    const product = await prisma.product.create({
      data: {
        name,
        slug,
        reference: reference || `REF-${Date.now()}`,
        sku: sku || `SKU-${Date.now()}`,
        brandId,
        categoryId,
        shortDescription: shortDescription || null,
        description: description || "",
        priceHT: Number(priceHT),
        priceTTC: Number(priceTTC),
        stock: Number(stock || 10),
        powerKw: Number(powerKw || 7.4),
        phaseType: phaseType || "MONO",
        connectorType: connectorType || "T2S",
        hasDynamicLoad: !!hasDynamicLoad,
        hasSolarMode: !!hasSolarMode,
        hasWifi: !!hasWifi,
        hasRfid: !!hasRfid,
        has4G: !!has4G,
        isActive: true,
        images: {
          create: [
            {
              url: imageUrl || "/images/products/teltonika-teltocharge.jpg",
              alt: name,
              isPrimary: true,
              order: 0,
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true, product });
  } catch (error: any) {
    console.error("Admin create product error:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de la création du produit." },
      { status: 500 }
    );
  }
}
