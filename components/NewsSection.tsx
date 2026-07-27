"use client";

import { useEffect, useState } from "react";
import { getDefaultSiteContent, loadSiteContent } from "@/src/lib/site-content";

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState(getDefaultSiteContent().news);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const content = loadSiteContent();
    setNewsItems(content.news);
    setActiveIndex(0);
  }, []);

  const activeItem = newsItems[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % newsItems.length);
  };

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-amber-900">ಸುದ್ದಿಗಳು ಮತ್ತು ನವೀಕರಣಗಳು / Latest News and Updates</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
          ನಮ್ಮ ಸೇವಾ ಅನुष್ಠಾನಗಳ ಬಗ್ಗೆ ನವೀಕೃತ ವರದಿಗಳು ಮತ್ತು ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳ ಕುರಿತು ತಿಳಿಯಿರಿ.
        </p>

        {newsItems.length ? (
          <div className="mt-12 mx-auto max-w-4xl">
            <div className="flex items-center justify-between gap-3">
              <button onClick={goToPrevious} className="rounded-full border border-amber-200 bg-white px-4 py-2 text-lg font-semibold text-amber-800 shadow-sm">
                ←
              </button>
              <div className="flex-1 rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
                <h4 className="text-xl font-bold text-amber-900">{activeItem?.titleKannada}</h4>
                <p className="mt-2 text-sm font-medium text-gray-600">{activeItem?.titleEnglish}</p>
                <p className="mt-4 text-gray-700">{activeItem?.descriptionKannada}</p>
                <p className="mt-2 text-sm text-gray-500">{activeItem?.descriptionEnglish}</p>
              </div>
              <button onClick={goToNext} className="rounded-full border border-amber-200 bg-white px-4 py-2 text-lg font-semibold text-amber-800 shadow-sm">
                →
              </button>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full ${activeIndex === index ? "bg-amber-700" : "bg-amber-200"}`}
                  aria-label={`Show news item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}