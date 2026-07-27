"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Heart,
  ChevronDown,
} from "lucide-react";

const organisations = [
  {
    name: "ಆಶ್ರಯ ಆಶ್ರಮ",
    english: "Ashraya Ashrama",
    href: "/organisations/ashraya-ashrama",
  },
  {
    name: "ಶ್ರೀಮಾತ ಟಿವಿ",
    english: "Srimata TV",
    href: "/organisations/srimata-tv",
  },
  {
    name: "ಆಶ್ರಯ ಟಿವಿ",
    english: "Ashraya TV",
    href: "/organisations/ashraya-tv",
  },
  {
    name: "ಶ್ರೀ ವಿರೂಪಾಕ್ಷ ದೇವರ ಮಠ",
    english: "Shri Virupaksha Devara Mata",
    href: "/organisations/virupaksha-mata",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orgOpen, setOrgOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">

          {/* Top Bar */}

          <div className="hidden md:flex justify-between items-center border-b border-amber-100 px-6 py-2 text-sm">

            <div className="text-amber-700 font-medium">
              ಧರ್ಮ • ಶಿಕ್ಷಣ • ಸಮಾಜ ಸೇವೆ
              <br />
              <span className="text-gray-600 font-normal">
                Religion • Education • Social Service
              </span>
            </div>

            <Link
              href="/donate"
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition"
            >
              <Heart size={18} fill="white" />
              Donate
            </Link>

          </div>

          {/* Main Navigation */}

          <div className="flex items-center justify-between px-6 py-4">

            {/* Logo */}

            <Link href="/" className="flex flex-col">

              <span className="text-2xl font-bold text-amber-800">
                ಆಶ್ರಯ ಸಂಸ್ಥೆಗಳು
              </span>

              <span className="text-gray-600 text-sm">
                Ashraya Organisations
              </span>

            </Link>

            {/* Desktop */}

            <nav className="hidden lg:flex items-center gap-8 font-medium">

              <Link
                href="/"
                className="hover:text-amber-700 transition"
              >
                ಮನೆ / Home
              </Link>

              <Link
                href="/about"
                className="hover:text-amber-700 transition"
              >
                ನಮ್ಮ ಬಗ್ಗೆ / About
              </Link>

              <div className="relative">

                <button
                  onClick={() => setOrgOpen(!orgOpen)}
                  className="flex items-center gap-1 hover:text-amber-700"
                >
                  ಸಂಸ್ಥೆಗಳು / Organisations
                  <ChevronDown size={16} />
                </button>

                {orgOpen && (
                  <div className="absolute mt-4 w-80 bg-white rounded-2xl shadow-2xl border overflow-hidden">

                    {organisations.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setOrgOpen(false);
                          setMobileOpen(false);
                        }}
                        className="block px-5 py-4 hover:bg-amber-50 border-b last:border-none"
                      >
                        <div className="font-semibold text-amber-800">
                          {item.name}
                        </div>

                        <div className="text-sm text-gray-600">
                          {item.english}
                        </div>
                      </Link>
                    ))}

                  </div>
                )}

              </div>

              <Link href="/news" className="hover:text-amber-700">
                ಸುದ್ದಿ / News
              </Link>

              <Link href="/gallery" className="hover:text-amber-700">
                ಚಿತ್ರಾಲಯ / Gallery
              </Link>

              <Link href="/events" className="hover:text-amber-700">
                ಕಾರ್ಯಕ್ರಮಗಳು / Events
              </Link>

              <Link href="/contact" className="hover:text-amber-700">
                ಸಂಪರ್ಕ / Contact
              </Link>

              <Link href="/admin/login" className="rounded-full bg-amber-700 px-4 py-2 text-white hover:bg-amber-800">
                Admin Login
              </Link>

            </nav>

            {/* Mobile */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto">

          <div className="p-6 pt-24 space-y-6">

            <Link href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setMobileOpen(false)}>
              About
            </Link>

            <div>

              <p className="font-bold mb-3 text-amber-700">
                Our Organisations
              </p>

              <div className="space-y-4 pl-3">

                {organisations.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setOrgOpen(false);
                    }}
                    className="block"
                  >
                    <div className="font-semibold">
                      {item.name}
                    </div>

                    <div className="text-sm text-gray-500">
                      {item.english}
                    </div>
                  </Link>
                ))}

              </div>

            </div>

            <Link href="/gallery">Gallery</Link>

            <Link href="/news">News</Link>

            <Link href="/events">Events</Link>

            <Link href="/contact">Contact</Link>

            <Link
              href="/admin/login"
              className="block rounded-xl border border-amber-300 py-3 text-center font-semibold text-amber-800"
            >
              Admin Login
            </Link>

            <Link
              href="/donate"
              className="block bg-gradient-to-r from-amber-600 to-orange-600 text-center text-white py-4 rounded-xl font-bold mt-10"
            >
              ❤️ Donate Now
            </Link>

          </div>

        </div>
      )}
    </>
);
}