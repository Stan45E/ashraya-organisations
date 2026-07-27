"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getDefaultSiteContent, loadSiteContent } from "@/src/lib/site-content";

export default function OrganisationCards() {
  const [organisations, setOrganisations] = useState(Object.values(getDefaultSiteContent().organisations));

  useEffect(() => {
    setOrganisations(Object.values(loadSiteContent().organisations));
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-amber-900">ನಮ್ಮ ಸಂಸ್ಥೆಗಳು / Our Organisations</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
          ಪ್ರತಿ ಸಂಸ್ಥೆಯೂ ಧರ್ಮ, ಸೇವೆ ಮತ್ತು ಸಮಾಜಸಂಸ್ಕಾರಕ್ಕೆ ಶ್ರಮಿಸುತ್ತಿದೆ. ನಿಮ್ಮ ದಾನವು ಈ ಕಾರ್ಯಗಳಿಗೆ ಜೀವಭಾವ ನೀಡುತ್ತದೆ.
        </p>
        <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-gray-500">
          Each institution is committed to dharma, service, and social upliftment. Your donation brings strength to this mission.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {organisations.map((org) => (
            <Link
              key={org.slug}
              href={`/organisations/${org.slug}`}
              className="block rounded-3xl border border-amber-100 bg-amber-50/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-amber-900">{org.titleKannada}</h3>
              <p className="mt-2 text-sm font-medium text-gray-600">{org.titleEnglish}</p>
              <p className="mt-4 text-sm leading-7 text-gray-700">{org.descriptionKannada}</p>
              <p className="mt-2 text-sm leading-7 text-gray-500">{org.descriptionEnglish}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}