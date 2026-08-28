import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET - Récupérer un produit pour édition
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: {
        brand: true,
        category: true,
        images: { orderBy: { order: "asc" } },
        specifications: { orderBy: { order: "asc" } },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Produit non trouvé" }, { status: 404 });
    }

    return NextResponse.json({ product });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PATCH - Mettre à jour un produit
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const body = await req.json();
    const {
      name,
      priceHT,
      priceTTC,
      compareAtPrice,
      stock,
      isActive,
      powerKw,
      phaseType,
      connectorType,
      shortDescription,
      description,
      hasDynamicLoad,
      hasSolarMode,
      hasWifi,
      hasRfid,
      has4G,
      imageUrl,
      images,
    } = body;

    const updated = await prisma.product.update({
      where: { id: params.id },
      data: {
        ...(name && { name }),
        ...(priceHT !== undefined && { priceHT: Number(priceHT) }),
        ...(priceTTC !== undefined && { priceTTC: Number(priceTTC) }),
        ...(compareAtPrice !== undefined && {
          compareAtPrice: compareAtPrice ? Number(compareAtPrice) : null,
        }),
        ...(stock !== undefined && { stock: Number(stock) }),
        ...(isActive !== undefined && { isActive: Boolean(isActive) }),
        ...(powerKw !== undefined && { powerKw: Number(powerKw) }),
        ...(phaseType && { phaseType }),
        ...(connectorType && { connectorType }),
        ...(shortDescription !== undefined && { shortDescription }),
        ...(description !== undefined && { description }),
        ...(hasDynamicLoad !== undefined && { hasDynamicLoad: Boolean(hasDynamicLoad) }),
        ...(hasSolarMode !== undefined && { hasSolarMode: Boolean(hasSolarMode) }),
        ...(hasWifi !== undefined && { hasWifi: Boolean(hasWifi) }),
        ...(hasRfid !== undefined && { hasRfid: Boolean(hasRfid) }),
        ...(has4G !== undefined && { has4G: Boolean(has4G) }),
      },
    });

    // Update images if provided
    if (Array.isArray(images) && images.length > 0) {
      await prisma.productImage.deleteMany({ where: { productId: params.id } });
      await prisma.productImage.createMany({
        data: images.map((url: string, idx: number) => ({
          productId: params.id,
          url,
          alt: `${updated.name} - Photo ${idx + 1}`,
          isPrimary: idx === 0,
          order: idx,
        })),
      });
    } else if (imageUrl) {
      await prisma.productImage.deleteMany({ where: { productId: params.id } });
      await prisma.productImage.create({
        data: {
          productId: params.id,
          url: imageUrl,
          isPrimary: true,
          order: 0,
        },
      });
    }

    return NextResponse.json({ success: true, product: updated });
  } catch (error: any) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de la mise à jour." },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un produit
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    await prisma.productSpecification.deleteMany({ where: { productId: params.id } });
    await prisma.productImage.deleteMany({ where: { productId: params.id } });
    await prisma.cartItem.deleteMany({ where: { productId: params.id } });
    await prisma.review.deleteMany({ where: { productId: params.id } });

    await prisma.product.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true, message: "Produit supprimé avec succès." });
  } catch (error: any) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de la suppression." },
      { status: 500 }
    );
  }
}
