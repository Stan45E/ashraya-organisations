"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getDefaultSiteContent, loadSiteContent } from "@/src/lib/site-content";

export default function Hero() {
  const [content, setContent] = useState(getDefaultSiteContent().hero);

  useEffect(() => {
    setContent(loadSiteContent().hero);
  }, []);

  return (
    <section className="relative overflow-hidden bg-stone-950">
      <img
        src={content.imageUrl}
        alt="Ashraya Organisations activity"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            {content.eyebrowKannada}
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {content.titleKannada}
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-amber-100 sm:text-3xl">
            {content.titleEnglish}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl">
            {content.descriptionKannada}
          </p>
          <p className="mt-3 text-base leading-8 text-amber-100 sm:text-lg">
            {content.descriptionEnglish}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-red-700 px-8 py-4 font-bold text-white transition hover:bg-red-800"
            >
              {content.primaryButtonKannada} / {content.primaryButtonEnglish}
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/70 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              {content.secondaryButtonKannada} / {content.secondaryButtonEnglish}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}