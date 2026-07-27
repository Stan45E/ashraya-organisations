"use client";

import { useEffect, useState } from "react";
import { getDefaultSiteContent, loadSiteContent } from "@/src/lib/site-content";

export default function Footer() {
  const [content, setContent] = useState(getDefaultSiteContent().footer);

  useEffect(() => {
    setContent(loadSiteContent().footer);
  }, []);

  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold">{content.titleKannada}</h2>
        <p className="text-gray-300">{content.titleEnglish}</p>
        <p className="mt-4 text-lg text-gray-200">{content.lineKannada}</p>
        <p className="mt-2 text-sm text-gray-400">{content.lineEnglish}</p>
      </div>
    </footer>
  );
}