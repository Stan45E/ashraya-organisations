"use client";

import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { getDefaultSiteContent, loadSiteContent } from "@/src/lib/site-content";

export default function ContactPage() {
  const [contact, setContact] = useState(getDefaultSiteContent().contact);

  useEffect(() => {
    setContact(loadSiteContent().contact);
  }, []);

  return (
    <PageLayout title={contact.titleKannada} subtitle={contact.titleEnglish}>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">{contact.titleKannada}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">{contact.titleEnglish}</p>
          <div className="mt-6 space-y-3 text-lg text-gray-700">
            <p>📧 {contact.email}</p>
            <p>📍 {contact.locationKannada}</p>
            <p>📞 {contact.phone}</p>
          </div>
        </div>

        <div className="rounded-3xl bg-amber-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Location / ಸ್ಥಳ</h2>
          <p className="mt-4 text-lg text-amber-100">
            {contact.locationEnglish}
          </p>
          {contact.mapEmbedUrl ? (
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/20">
              <iframe
                src={contact.mapEmbedUrl}
                title="Location map"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : null}
          <a href={`mailto:${contact.email}`} className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-amber-900">
            Send an email
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
