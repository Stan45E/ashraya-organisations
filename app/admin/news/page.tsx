"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getDefaultSiteContent, loadSiteContent, saveSiteContent } from "@/src/lib/site-content";

export default function NewsAdminPage() {
  const [form, setForm] = useState({
    kannadaTitle: "",
    englishTitle: "",
    kannadaContent: "",
    englishContent: "",
  });
  const [newsItems, setNewsItems] = useState(getDefaultSiteContent().news);
  const [status, setStatus] = useState("Add a new news item.");

  useEffect(() => {
    setNewsItems(loadSiteContent().news);
  }, []);

  const saveNews = (e: React.FormEvent) => {
    e.preventDefault();

    const content = loadSiteContent();
    const nextNews = [
      {
        titleKannada: form.kannadaTitle,
        titleEnglish: form.englishTitle,
        descriptionKannada: form.kannadaContent,
        descriptionEnglish: form.englishContent,
      },
      ...content.news,
    ];

    content.news = nextNews;
    saveSiteContent(content);
    setNewsItems(nextNews);
    setForm({ kannadaTitle: "", englishTitle: "", kannadaContent: "", englishContent: "" });
    setStatus("News item added.");
  };

  const removeNews = (index: number) => {
    const content = loadSiteContent();
    const nextNews = content.news.filter((_, itemIndex) => itemIndex !== index);
    content.news = nextNews;
    saveSiteContent(content);
    setNewsItems(nextNews);
    setStatus("News item removed.");
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-amber-900">Manage News</h1>
          <p className="mt-2 text-gray-600">Add or remove news entries that appear on the homepage.</p>
        </div>
        <Link href="/admin" className="text-sm font-semibold text-amber-700">← Back to admin</Link>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-900">{status}</div>

      <form onSubmit={saveNews} className="mt-8 space-y-4 rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
        <input className="w-full rounded-2xl border p-3" placeholder="Kannada Title" value={form.kannadaTitle} onChange={(e) => setForm({ ...form, kannadaTitle: e.target.value })} />
        <input className="w-full rounded-2xl border p-3" placeholder="English Title" value={form.englishTitle} onChange={(e) => setForm({ ...form, englishTitle: e.target.value })} />
        <textarea className="w-full rounded-2xl border p-3" placeholder="Kannada Content" value={form.kannadaContent} onChange={(e) => setForm({ ...form, kannadaContent: e.target.value })} />
        <textarea className="w-full rounded-2xl border p-3" placeholder="English Content" value={form.englishContent} onChange={(e) => setForm({ ...form, englishContent: e.target.value })} />
        <button type="submit" className="rounded-full bg-amber-700 px-6 py-3 font-semibold text-white">Add News</button>
      </form>

      <div className="mt-8 space-y-4">
        {newsItems.map((item, index) => (
          <div key={`${item.titleEnglish}-${index}`} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-amber-900">{item.titleKannada}</h2>
                <p className="mt-1 text-sm text-gray-600">{item.titleEnglish}</p>
              </div>
              <button onClick={() => removeNews(index)} className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600">Remove</button>
            </div>
            <p className="mt-4 text-gray-700">{item.descriptionKannada}</p>
            <p className="mt-2 text-sm text-gray-500">{item.descriptionEnglish}</p>
          </div>
        ))}
      </div>
    </main>
  );
}