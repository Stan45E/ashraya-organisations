"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingWhatsapp() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg transition hover:bg-green-700"
        aria-label="Contact on WhatsApp"
      >
        <span className="text-2xl">💬</span>
        <span className="hidden font-semibold sm:inline">WhatsApp</span>
      </Link>
    </div>
  );
}
