import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 403 });
    }

    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      const singleFile = formData.get("file") as File;
      if (singleFile) files.push(singleFile);
    }

    if (files.length === 0) {
      return NextResponse.json({ error: "Aucun fichier reçu" }, { status: 400 });
    }

    const uploadedUrls: string[] = [];

    for (const file of files) {
      if (!file || typeof file === "string") continue;

      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const cleanFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;

      let fileUrl = "";

      // 1. Try uploading to Supabase Storage "products" bucket
      try {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("products")
          .upload(cleanFileName, fileBuffer, {
            contentType: file.type || "image/jpeg",
            upsert: true,
          });

        if (!uploadError && uploadData) {
          const { data: publicUrlData } = supabase.storage
            .from("products")
            .getPublicUrl(cleanFileName);

          if (publicUrlData?.publicUrl) {
            fileUrl = publicUrlData.publicUrl;
          }
        }
      } catch (storageErr) {
        console.warn("Supabase Storage bucket upload attempt:", storageErr);
      }

      // 2. Fallback: If storage bucket not yet public, encode as high-performance Data URL or use blob
      if (!fileUrl) {
        const base64 = fileBuffer.toString("base64");
        fileUrl = `data:${file.type || "image/jpeg"};base64,${base64}`;
      }

      uploadedUrls.push(fileUrl);
    }

    return NextResponse.json({
      success: true,
      urls: uploadedUrls,
      url: uploadedUrls[0],
    });
  } catch (error: any) {
    console.error("Admin upload error:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de l'upload des images" },
      { status: 500 }
    );
  }
}
