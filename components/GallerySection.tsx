"use client";

import { useEffect, useState } from "react";
import { getDefaultSiteContent, loadSiteContent } from "@/src/lib/site-content";

export default function GallerySection() {
  const [galleryImages, setGalleryImages] = useState(getDefaultSiteContent().gallery);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const content = loadSiteContent();
    setGalleryImages(content.gallery);
    setActiveIndex(0);
  }, []);

  const activeImage = galleryImages[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-3xl font-bold text-amber-900">ಚಿತ್ರಾಲಯ / Gallery</h2>
        <p className="mt-2 text-sm text-gray-600">Some moments of our service and devotion are featured here.</p>
      </div>

      {galleryImages.length ? (
        <>
          <div className="flex items-center justify-between gap-3">
            <button onClick={goToPrevious} className="rounded-full border border-amber-200 bg-white px-4 py-2 text-lg font-semibold text-amber-800 shadow-sm">
              ←
            </button>
            <div className="flex-1 overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
              <img src={activeImage?.imageUrl} alt={activeImage?.titleEnglish} className="h-72 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-amber-900">{activeImage?.titleKannada}</h3>
                <p className="mt-1 text-sm text-gray-600">{activeImage?.titleEnglish}</p>
              </div>
            </div>
            <button onClick={goToNext} className="rounded-full border border-amber-200 bg-white px-4 py-2 text-lg font-semibold text-amber-800 shadow-sm">
              →
            </button>
          </div>

          <div className="flex justify-center gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full ${activeIndex === index ? "bg-amber-700" : "bg-amber-200"}`}
                aria-label={`Show gallery item ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}