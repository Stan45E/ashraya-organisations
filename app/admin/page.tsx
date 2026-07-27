"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { setAdminAuthenticated } from "@/components/AdminGate";
import { getDefaultSiteContent, loadSiteContent, saveSiteContent, type SiteContent } from "@/src/lib/site-content";

type StatusTone = "info" | "success";

function ImageField({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
}) {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      onValueChange(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="md:col-span-2 rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
      <label className="mb-2 block text-sm font-semibold text-gray-700">{label}</label>
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <input type="file" accept="image/*" onChange={handleFileUpload} className="w-full rounded-2xl border border-dashed border-amber-300 bg-white px-4 py-3" />
        <input value={value} onChange={(e) => onValueChange(e.target.value)} className="w-full rounded-2xl border px-4 py-3" placeholder="Image path or uploaded image" />
        <button type="button" onClick={() => onValueChange("")} className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600">
          Remove
        </button>
      </div>
      {value ? (
        <div className="mt-3 overflow-hidden rounded-2xl border border-amber-100 bg-white">
          <img src={value} alt={label} className="h-40 w-full object-cover" />
        </div>
      ) : null}
    </div>
  );
}

export default function AdminPage() {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(getDefaultSiteContent());
  const [status, setStatus] = useState("Ready to save changes.");
  const [statusTone, setStatusTone] = useState<StatusTone>("info");

  useEffect(() => {
    setContent(loadSiteContent());
  }, []);

  const updateContent = (updater: (prev: SiteContent) => SiteContent) => {
    setContent((prev) => updater(prev));
    setStatus("Unsaved changes. Save when ready.");
    setStatusTone("info");
  };

  const handleSave = () => {
    saveSiteContent(content);
    setStatus("Saved successfully.");
    setStatusTone("success");
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    router.push("/admin/login");
  };

  const sectionLinks = [
    { id: "hero", label: "Hero" },
    { id: "org-cards", label: "Organisations" },
    { id: "org-pages", label: "Org Pages" },
    { id: "news-gallery", label: "News & Gallery" },
    { id: "videos-contact", label: "Videos & Contact" },
    { id: "footer", label: "Footer" },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col gap-4 rounded-3xl border border-amber-100 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-amber-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">Control the homepage, organisation pages, news, gallery, videos, contact, and footer content from here.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/news" className="rounded-full border border-amber-300 px-5 py-2 font-semibold text-amber-800 transition hover:bg-amber-50">
            Manage News
          </Link>
          <button onClick={handleLogout} className="rounded-full border border-amber-300 px-5 py-2 font-semibold text-amber-800 transition hover:bg-amber-50">
            Logout
          </button>
        </div>
      </div>

      <div className="sticky top-3 z-20 mt-6 rounded-2xl border border-amber-100 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center gap-2">
          {sectionLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-100">
              {item.label}
            </a>
          ))}
          <div className="ml-auto">
            <button onClick={handleSave} className="rounded-full bg-amber-700 px-5 py-2 font-semibold text-white transition hover:bg-amber-800">
              Save all changes
            </button>
          </div>
        </div>
      </div>

      <div className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${statusTone === "success" ? "border-green-200 bg-green-50 text-green-800" : "border-amber-100 bg-amber-50 text-amber-900"}`}>
        {status}
      </div>

      <div className="mt-8 space-y-8">
        <section id="hero" className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">Homepage Hero</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input value={content.hero.titleKannada} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, titleKannada: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="Kannada title" />
            <input value={content.hero.titleEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, titleEnglish: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="English title" />
            <input value={content.hero.eyebrowKannada} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, eyebrowKannada: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="Kannada eyebrow" />
            <input value={content.hero.eyebrowEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, eyebrowEnglish: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="English eyebrow" />
            <textarea value={content.hero.descriptionKannada} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, descriptionKannada: e.target.value } }))} className="rounded-2xl border px-4 py-3 md:col-span-2" rows={3} placeholder="Kannada description" />
            <textarea value={content.hero.descriptionEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, descriptionEnglish: e.target.value } }))} className="rounded-2xl border px-4 py-3 md:col-span-2" rows={3} placeholder="English description" />
            <input value={content.hero.primaryButtonKannada} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, primaryButtonKannada: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="Primary button Kannada" />
            <input value={content.hero.primaryButtonEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, primaryButtonEnglish: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="Primary button English" />
            <input value={content.hero.secondaryButtonKannada} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, secondaryButtonKannada: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="Secondary button Kannada" />
            <input value={content.hero.secondaryButtonEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, secondaryButtonEnglish: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="Secondary button English" />
            <ImageField label="Hero image" value={content.hero.imageUrl} onValueChange={(value) => updateContent((prev) => ({ ...prev, hero: { ...prev.hero, imageUrl: value } }))} />
          </div>
        </section>

        <section id="org-cards" className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">Organisation Cards</h2>
          <div className="mt-6 space-y-6">
            {Object.entries(content.organisations).map(([slug, org]) => (
              <div key={slug} className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5">
                <h3 className="text-lg font-semibold text-amber-900">{org.titleKannada}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <input value={org.titleKannada} onChange={(e) => updateContent((prev) => ({ ...prev, organisations: { ...prev.organisations, [slug]: { ...org, titleKannada: e.target.value } } }))} className="rounded-2xl border px-4 py-3" placeholder="Kannada title" />
                  <input value={org.titleEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, organisations: { ...prev.organisations, [slug]: { ...org, titleEnglish: e.target.value } } }))} className="rounded-2xl border px-4 py-3" placeholder="English title" />
                  <textarea value={org.descriptionKannada} onChange={(e) => updateContent((prev) => ({ ...prev, organisations: { ...prev.organisations, [slug]: { ...org, descriptionKannada: e.target.value } } }))} className="rounded-2xl border px-4 py-3" rows={3} placeholder="Kannada description" />
                  <textarea value={org.descriptionEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, organisations: { ...prev.organisations, [slug]: { ...org, descriptionEnglish: e.target.value } } }))} className="rounded-2xl border px-4 py-3" rows={3} placeholder="English description" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="org-pages" className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">Organisation Detail Pages</h2>
          <div className="mt-6 space-y-6">
            {Object.entries(content.organisationPages).map(([slug, page]) => (
              <div key={slug} className="rounded-2xl border border-amber-100 bg-white p-5">
                <h3 className="text-lg font-semibold text-amber-900">{page.titleKannada}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <input value={page.titleKannada} onChange={(e) => updateContent((prev) => ({ ...prev, organisationPages: { ...prev.organisationPages, [slug]: { ...page, titleKannada: e.target.value } } }))} className="rounded-2xl border px-4 py-3" placeholder="Kannada heading" />
                  <input value={page.titleEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, organisationPages: { ...prev.organisationPages, [slug]: { ...page, titleEnglish: e.target.value } } }))} className="rounded-2xl border px-4 py-3" placeholder="English heading" />
                  <input value={page.subtitleKannada} onChange={(e) => updateContent((prev) => ({ ...prev, organisationPages: { ...prev.organisationPages, [slug]: { ...page, subtitleKannada: e.target.value } } }))} className="rounded-2xl border px-4 py-3" placeholder="Kannada subtitle" />
                  <input value={page.subtitleEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, organisationPages: { ...prev.organisationPages, [slug]: { ...page, subtitleEnglish: e.target.value } } }))} className="rounded-2xl border px-4 py-3" placeholder="English subtitle" />
                  <textarea value={page.bodyKannada} onChange={(e) => updateContent((prev) => ({ ...prev, organisationPages: { ...prev.organisationPages, [slug]: { ...page, bodyKannada: e.target.value } } }))} className="rounded-2xl border px-4 py-3" rows={3} placeholder="Kannada body" />
                  <textarea value={page.bodyEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, organisationPages: { ...prev.organisationPages, [slug]: { ...page, bodyEnglish: e.target.value } } }))} className="rounded-2xl border px-4 py-3" rows={3} placeholder="English body" />
                  <textarea value={page.highlightKannada} onChange={(e) => updateContent((prev) => ({ ...prev, organisationPages: { ...prev.organisationPages, [slug]: { ...page, highlightKannada: e.target.value } } }))} className="rounded-2xl border px-4 py-3" rows={3} placeholder="Kannada callout" />
                  <textarea value={page.highlightEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, organisationPages: { ...prev.organisationPages, [slug]: { ...page, highlightEnglish: e.target.value } } }))} className="rounded-2xl border px-4 py-3" rows={3} placeholder="English callout" />
                  <ImageField label={`${page.titleKannada} image`} value={page.imageUrl} onValueChange={(value) => updateContent((prev) => ({ ...prev, organisationPages: { ...prev.organisationPages, [slug]: { ...page, imageUrl: value } } }))} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="news-gallery" className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">News and Gallery</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-amber-900">News items</h3>
              <div className="mt-4 space-y-4">
                {content.news.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
                    <input value={item.titleKannada} onChange={(e) => { const next = [...content.news]; next[index] = { ...item, titleKannada: e.target.value }; updateContent((prev) => ({ ...prev, news: next })); }} className="mb-3 w-full rounded-2xl border px-4 py-3" placeholder="Kannada title" />
                    <input value={item.titleEnglish} onChange={(e) => { const next = [...content.news]; next[index] = { ...item, titleEnglish: e.target.value }; updateContent((prev) => ({ ...prev, news: next })); }} className="mb-3 w-full rounded-2xl border px-4 py-3" placeholder="English title" />
                    <textarea value={item.descriptionKannada} onChange={(e) => { const next = [...content.news]; next[index] = { ...item, descriptionKannada: e.target.value }; updateContent((prev) => ({ ...prev, news: next })); }} className="mb-3 w-full rounded-2xl border px-4 py-3" rows={2} placeholder="Kannada description" />
                    <textarea value={item.descriptionEnglish} onChange={(e) => { const next = [...content.news]; next[index] = { ...item, descriptionEnglish: e.target.value }; updateContent((prev) => ({ ...prev, news: next })); }} className="w-full rounded-2xl border px-4 py-3" rows={2} placeholder="English description" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-amber-900">Gallery items</h3>
              <div className="mt-4 space-y-4">
                {content.gallery.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-amber-100 bg-white p-4">
                    <input value={item.titleKannada} onChange={(e) => { const next = [...content.gallery]; next[index] = { ...item, titleKannada: e.target.value }; updateContent((prev) => ({ ...prev, gallery: next })); }} className="mb-3 w-full rounded-2xl border px-4 py-3" placeholder="Kannada title" />
                    <input value={item.titleEnglish} onChange={(e) => { const next = [...content.gallery]; next[index] = { ...item, titleEnglish: e.target.value }; updateContent((prev) => ({ ...prev, gallery: next })); }} className="mb-3 w-full rounded-2xl border px-4 py-3" placeholder="English title" />
                    <ImageField label={`Gallery image ${index + 1}`} value={item.imageUrl} onValueChange={(value) => { const next = [...content.gallery]; next[index] = { ...item, imageUrl: value }; updateContent((prev) => ({ ...prev, gallery: next })); }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="videos-contact" className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">Videos and Contact</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-amber-900">Video links</h3>
                <button
                  type="button"
                  onClick={() => updateContent((prev) => ({ ...prev, videos: [...prev.videos, { titleKannada: "", titleEnglish: "", youtubeUrl: "" }] }))}
                  className="rounded-full border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-50"
                >
                  Add video
                </button>
              </div>
              <div className="mt-4 space-y-4">
                {content.videos.map((video, index) => (
                  <div key={index} className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-amber-900">Video {index + 1}</span>
                      <button
                        type="button"
                        onClick={() => updateContent((prev) => ({ ...prev, videos: prev.videos.filter((_, itemIndex) => itemIndex !== index) }))}
                        className="rounded-full border border-red-200 px-3 py-1 text-sm font-semibold text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                    <input value={video.titleKannada} onChange={(e) => { const next = [...content.videos]; next[index] = { ...video, titleKannada: e.target.value }; updateContent((prev) => ({ ...prev, videos: next })); }} className="mb-3 w-full rounded-2xl border px-4 py-3" placeholder="Kannada title" />
                    <input value={video.titleEnglish} onChange={(e) => { const next = [...content.videos]; next[index] = { ...video, titleEnglish: e.target.value }; updateContent((prev) => ({ ...prev, videos: next })); }} className="mb-3 w-full rounded-2xl border px-4 py-3" placeholder="English title" />
                    <input value={video.youtubeUrl} onChange={(e) => { const next = [...content.videos]; next[index] = { ...video, youtubeUrl: e.target.value }; updateContent((prev) => ({ ...prev, videos: next })); }} className="w-full rounded-2xl border px-4 py-3" placeholder="YouTube link" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-amber-900">Contact details</h3>
              <div className="mt-4 space-y-4">
                <input value={content.contact.titleKannada} onChange={(e) => updateContent((prev) => ({ ...prev, contact: { ...prev.contact, titleKannada: e.target.value } }))} className="w-full rounded-2xl border px-4 py-3" placeholder="Kannada contact title" />
                <input value={content.contact.titleEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, contact: { ...prev.contact, titleEnglish: e.target.value } }))} className="w-full rounded-2xl border px-4 py-3" placeholder="English contact title" />
                <input value={content.contact.email} onChange={(e) => updateContent((prev) => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))} className="w-full rounded-2xl border px-4 py-3" placeholder="Email" />
                <input value={content.contact.phone} onChange={(e) => updateContent((prev) => ({ ...prev, contact: { ...prev.contact, phone: e.target.value } }))} className="w-full rounded-2xl border px-4 py-3" placeholder="Phone" />
                <input value={content.contact.locationKannada} onChange={(e) => updateContent((prev) => ({ ...prev, contact: { ...prev.contact, locationKannada: e.target.value } }))} className="w-full rounded-2xl border px-4 py-3" placeholder="Kannada location" />
                <input value={content.contact.locationEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, contact: { ...prev.contact, locationEnglish: e.target.value } }))} className="w-full rounded-2xl border px-4 py-3" placeholder="English location" />
                <textarea value={content.contact.mapEmbedUrl} onChange={(e) => updateContent((prev) => ({ ...prev, contact: { ...prev.contact, mapEmbedUrl: e.target.value } }))} className="w-full rounded-2xl border px-4 py-3" rows={4} placeholder="Google Maps embed URL" />
              </div>
            </div>
          </div>
        </section>

        <section id="footer" className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">Footer</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input value={content.footer.titleKannada} onChange={(e) => updateContent((prev) => ({ ...prev, footer: { ...prev.footer, titleKannada: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="Kannada footer title" />
            <input value={content.footer.titleEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, footer: { ...prev.footer, titleEnglish: e.target.value } }))} className="rounded-2xl border px-4 py-3" placeholder="English footer title" />
            <textarea value={content.footer.lineKannada} onChange={(e) => updateContent((prev) => ({ ...prev, footer: { ...prev.footer, lineKannada: e.target.value } }))} className="rounded-2xl border px-4 py-3" rows={3} placeholder="Kannada footer line" />
            <textarea value={content.footer.lineEnglish} onChange={(e) => updateContent((prev) => ({ ...prev, footer: { ...prev.footer, lineEnglish: e.target.value } }))} className="rounded-2xl border px-4 py-3" rows={3} placeholder="English footer line" />
          </div>
        </section>
      </div>

      <div className="mt-10 flex justify-end">
        <button onClick={handleSave} className="rounded-full bg-amber-700 px-8 py-3 font-semibold text-white transition hover:bg-amber-800">
          Save all changes
        </button>
      </div>
    </main>
  );
}