"use client";

import React, { useState, useRef } from "react";
import { Upload, X, Star, Plus, Loader2, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MultiImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
}

// Client-side image compressor: scales down 4K/10MB camera photos to lightweight web formats (~250KB)
async function compressImage(file: File, maxWidth = 1600, quality = 0.85): Promise<File> {
  // If not an image or SVG, return original
  if (!file.type.startsWith("image/") || file.type === "image/svg+xml") {
    return file;
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = document.createElement("img");
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxWidth) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxWidth) / height);
            height = maxWidth;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, ".jpg"), {
                  type: "image/jpeg",
                  lastModified: Date.now(),
                });
                resolve(compressedFile);
              } else {
                resolve(file);
              }
            },
            "image/jpeg",
            quality
          );
        } else {
          resolve(file);
        }
      };
      img.onerror = () => resolve(file);
    };
    reader.onerror = () => resolve(file);
  });
}

export function MultiImageUploader({ images, onChange }: MultiImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress("Optimisation des photos...");

    try {
      const newUrls: string[] = [];

      // Process and upload each file individually to stay well within limits
      for (let i = 0; i < files.length; i++) {
        setUploadProgress(`Téléversement de la photo ${i + 1}/${files.length}...`);
        const originalFile = files[i];
        const optimizedFile = await compressImage(originalFile);

        const formData = new FormData();
        formData.append("file", optimizedFile);

        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        const textResponse = await res.text();
        let data: any = {};
        try {
          data = JSON.parse(textResponse);
        } catch {
          throw new Error("Le serveur a refusé le fichier (trop volumineux ou format non supporté).");
        }

        if (!res.ok) {
          throw new Error(data.error || "Erreur lors de l'envoi de l'image");
        }

        if (data.url) {
          newUrls.push(data.url);
        } else if (data.urls && data.urls.length > 0) {
          newUrls.push(...data.urls);
        }
      }

      if (newUrls.length > 0) {
        onChange([...images, ...newUrls]);
      }
    } catch (err: any) {
      alert(err.message || "Erreur lors de l'upload des images");
    } finally {
      setIsUploading(false);
      setUploadProgress("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleAddUrl = () => {
    if (!urlInput.trim()) return;
    onChange([...images, urlInput.trim()]);
    setUrlInput("");
    setShowUrlInput(false);
  };

  const handleRemove = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onChange(newImages);
  };

  const handleSetPrimary = (index: number) => {
    if (index === 0) return;
    const selected = images[index];
    const newImages = [selected, ...images.filter((_, i) => i !== index)];
    onChange(newImages);
  };

  return (
    <div className="space-y-4">
      
      {/* Upload Dropzone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
          dragOver
            ? "border-brand-500 bg-brand-50/50"
            : "border-slate-300 bg-slate-50 hover:bg-slate-100/80 hover:border-slate-400"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files) handleFiles(e.target.files);
          }}
        />

        {isUploading ? (
          <div className="flex flex-col items-center justify-center py-4 space-y-2 text-brand-600">
            <Loader2 className="w-8 h-8 animate-spin" />
            <span className="text-xs font-bold text-slate-700">{uploadProgress}</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-brand-600">
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 block">
                Cliquez pour importer ou glissez vos photos ici
              </span>
              <span className="text-xs text-slate-500">
                Sélectionnez une ou plusieurs photos (PNG, JPG, WEBP, SVG)
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Alternative: Add Image by URL */}
      <div className="flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={() => setShowUrlInput(!showUrlInput)}
          className="text-brand-600 hover:text-brand-700 font-bold flex items-center gap-1"
        >
          <LinkIcon className="w-3.5 h-3.5" />
          <span>{showUrlInput ? "Masquer l'ajout par URL" : "+ Ajouter via une URL web"}</span>
        </button>
        <span className="text-slate-400 font-medium">
          {images.length} photo{images.length > 1 ? "s" : ""}
        </span>
      </div>

      {showUrlInput && (
        <div className="flex gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
          <input
            type="url"
            placeholder="https://exemple.com/image.jpg"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="flex-1 text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <Button type="button" size="sm" variant="electric" onClick={handleAddUrl}>
            <Plus className="w-4 h-4 mr-1" />
            <span>Ajouter</span>
          </Button>
        </div>
      )}

      {/* Image Gallery Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`relative group rounded-2xl border-2 overflow-hidden bg-white shadow-xs transition-all ${
                idx === 0
                  ? "border-brand-500 ring-2 ring-brand-500/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative h-32 w-full bg-slate-50 p-2">
                <img
                  src={imgUrl}
                  alt={`Photo produit ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Primary Badge */}
              {idx === 0 ? (
                <div className="absolute top-2 left-2 bg-brand-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-slate-950" />
                  <span>Principale</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSetPrimary(idx)}
                  className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1"
                  title="Définir comme image principale"
                >
                  <Star className="w-3 h-3" />
                  <span>Mettre en 1er</span>
                </button>
              )}

              {/* Delete Button */}
              <button
                type="button"
                onClick={() => handleRemove(idx)}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition-all"
                title="Supprimer cette photo"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Order number */}
              <div className="p-1.5 text-center bg-slate-50 border-t border-slate-100 text-[10px] font-bold text-slate-500">
                Photo #{idx + 1}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
