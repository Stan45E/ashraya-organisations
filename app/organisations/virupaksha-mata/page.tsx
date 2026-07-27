"use client";

import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { getDefaultSiteContent, loadSiteContent } from "@/src/lib/site-content";

export default function VirupakshaPage() {
  const [content, setContent] = useState(getDefaultSiteContent().organisationPages["virupaksha-mata"]);

  useEffect(() => {
    setContent(loadSiteContent().organisationPages["virupaksha-mata"]);
  }, []);

  return (
    <PageLayout title={content.titleKannada} subtitle={`${content.titleEnglish} — ${content.subtitleKannada}`}>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">ಪೂಜಾ ಸೇವೆ / Temple Service</h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">{content.bodyKannada}</p>
          <p className="mt-3 text-lg leading-8 text-gray-600">{content.bodyEnglish}</p>
          <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-amber-900">{content.highlightKannada}</p>
          <p className="mt-2 text-sm text-gray-600">{content.highlightEnglish}</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
          <img src={content.imageUrl} alt={content.titleEnglish} className="h-72 w-full object-cover" />
        </div>
      </div>
    </PageLayout>
  );
}