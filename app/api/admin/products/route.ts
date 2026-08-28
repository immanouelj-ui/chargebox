import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { slugify } from "@/lib/utils";

export const dynamic = "force-dynamic";

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
      compareAtPrice,
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
      images,
    } = body;

    if (!name || !priceTTC) {
      return NextResponse.json({ error: "Le nom et le prix TTC sont obligatoires." }, { status: 400 });
    }

    const slug = `${slugify(name)}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Prepare images array
    const imageList: string[] = Array.isArray(images) && images.length > 0
      ? images
      : imageUrl
      ? [imageUrl]
      : ["/images/products/teltonika-teltocharge.jpg"];

    const product = await prisma.product.create({
      data: {
        name,
        slug,
        reference: reference || `REF-${Date.now()}`,
        sku: sku || `SKU-${Date.now()}`,
        brandId: brandId || (await prisma.brand.findFirst())?.id || "cmmockbrandid",
        categoryId: categoryId || (await prisma.category.findFirst())?.id || "cmmockcatid",
        shortDescription: shortDescription || null,
        description: description || "",
        priceHT: Number(priceHT || (Number(priceTTC) / 1.2)),
        priceTTC: Number(priceTTC),
        compareAtPrice: compareAtPrice ? Number(compareAtPrice) : null,
        stock: Number(stock || 10),
        powerKw: Number(powerKw || 7.4),
        phaseType: phaseType || "MONO",
        connectorType: connectorType || "T2S",
        hasDynamicLoad: Boolean(hasDynamicLoad),
        hasSolarMode: Boolean(hasSolarMode),
        hasWifi: Boolean(hasWifi),
        hasRfid: Boolean(hasRfid),
        has4G: Boolean(has4G),
        isActive: true,
        images: {
          create: imageList.map((url, index) => ({
            url,
            alt: `${name} - Photo ${index + 1}`,
            isPrimary: index === 0,
            order: index,
          })),
        },
      },
      include: {
        images: true,
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
