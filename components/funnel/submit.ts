import type { FunnelData } from "./types";

async function uploadPhotos(photos: File[]): Promise<string[]> {
  const urls: string[] = [];
  for (const photo of photos) {
    try {
      const formData = new FormData();
      formData.append("UPLOADCARE_PUB_KEY", "482ddcbf9c71fdf5fd89");
      formData.append("UPLOADCARE_STORE", "1");
      formData.append("file", photo);
      const res = await fetch("https://upload.uploadcare.com/base/", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (json.file) urls.push("https://2cbbtu0mnx.ucarecd.net/" + json.file + "/" + photo.name);
    } catch (e) {
      console.error("Erreur upload photo", e);
    }
  }
  return urls;
}

export async function submitLead(data: FunnelData): Promise<void> {
  const photoUrls = await uploadPhotos(data.photos);
  const { photos: _photos, rgpd: _rgpd, ...rest } = data;

  const res = await fetch("/api/leads/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...rest, photoUrls }),
  });

  if (!res.ok) {
    throw new Error("Erreur lors de l'envoi de votre demande de devis.");
  }
}
