"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: {
    id: string;
    url: string;
    alt: string | null;
  }[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const defaultImages = images.length > 0 ? images : [
    { id: "1", url: "/images/products/teltonika-teltocharge.jpg", alt: productName },
  ];
  
  const [selectedImage, setSelectedImage] = useState(defaultImages[0].url);

  return (
    <div className="space-y-4">
      {/* Main Big Display */}
      <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex items-center justify-center overflow-hidden">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          priority
          unoptimized={selectedImage.startsWith("data:") || selectedImage.startsWith("http")}
          className="object-contain p-4 drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)] transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      {defaultImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {defaultImages.map((img) => {
            const isSelected = selectedImage === img.url;
            return (
              <button
                key={img.id}
                type="button"
                onClick={() => setSelectedImage(img.url)}
                className={`relative w-20 h-20 rounded-2xl bg-slate-50 border-2 overflow-hidden flex-shrink-0 transition-all ${
                  isSelected
                    ? "border-brand-500 ring-2 ring-brand-500/20 shadow-md"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.alt || productName}
                  fill
                  unoptimized={img.url.startsWith("data:") || img.url.startsWith("http")}
                  className="object-contain p-1.5"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
