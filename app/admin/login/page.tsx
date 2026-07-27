"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setAdminAuthenticated } from "@/components/AdminGate";

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const expectedUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin";
    const expectedPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "ashraya2026";

    if (form.username === expectedUsername && form.password === expectedPassword) {
      setAdminAuthenticated(true);
      router.push("/admin");
      return;
    }

    setError("Invalid username or password.");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 px-6 py-20">
      <div className="mx-auto max-w-md rounded-3xl border border-amber-200 bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-amber-900">Admin Login</h1>
        <p className="mt-3 text-gray-600">Sign in to manage news and site content.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Username</label>
            <input
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-600"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-600"
              placeholder="••••••••"
            />
          </div>

          {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

          <button type="submit" className="w-full rounded-2xl bg-amber-700 px-4 py-3 font-semibold text-white transition hover:bg-amber-800">
            Log in
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Default login: username <span className="font-semibold text-gray-700">admin</span> and password <span className="font-semibold text-gray-700">ashraya2026</span>
        </p>

        <Link href="/" className="mt-6 inline-block text-sm font-semibold text-amber-700">
          ← Back to homepage
        </Link>
      </div>
    </main>
  );
}
