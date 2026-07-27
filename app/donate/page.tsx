"use client";

import { useState, type FormEvent } from "react";
import PageLayout from "@/components/PageLayout";

export default function DonatePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Support the Work"
      subtitle="Your contribution helps sustain annadana, education, temple services, and community initiatives."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">How your donation helps</h2>
          <ul className="mt-6 space-y-4 text-lg text-gray-700">
            <li>• Food distribution and annadana programs</li>
            <li>• Educational support for students and learners</li>
            <li>• Temple and spiritual service activities</li>
            <li>• Community welfare and outreach programs</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-amber-700 to-orange-600 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Make a contribution</h2>
          <p className="mt-4 text-lg text-amber-100">
            Share your details below and we will connect with you about the preferred donation channel.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input required className="w-full rounded-2xl border border-white/30 bg-white/90 px-4 py-3 text-gray-800" placeholder="Full name" />
            <input required className="w-full rounded-2xl border border-white/30 bg-white/90 px-4 py-3 text-gray-800" placeholder="Phone number" />
            <input className="w-full rounded-2xl border border-white/30 bg-white/90 px-4 py-3 text-gray-800" placeholder="Email (optional)" />
            <input required className="w-full rounded-2xl border border-white/30 bg-white/90 px-4 py-3 text-gray-800" placeholder="Donation amount" />
            <textarea className="w-full rounded-2xl border border-white/30 bg-white/90 px-4 py-3 text-gray-800" rows={3} placeholder="Message (optional)" />
            <button type="submit" className="w-full rounded-full bg-white px-6 py-3 font-semibold text-amber-900">
              Submit donation request
            </button>
          </form>

          {submitted ? (
            <div className="mt-4 rounded-2xl border border-white/30 bg-white/10 p-4 text-sm text-amber-50">
              Thank you. Your donation request has been recorded and our team will contact you shortly.
            </div>
          ) : null}
        </div>
      </div>
    </PageLayout>
  );
}
