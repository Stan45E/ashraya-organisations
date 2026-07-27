"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const ADMIN_AUTH_KEY = "ashraya_admin_auth";

export function isAdminAuthenticated() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

export function setAdminAuthenticated(value: boolean) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(ADMIN_AUTH_KEY, String(value));
  }
}

export default function AdminGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setReady(true);
      return;
    }

    if (!isAdminAuthenticated()) {
      router.replace("/admin/login");
      return;
    }

    setReady(true);
  }, [pathname, router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-amber-50 px-6">
        <div className="rounded-2xl border border-amber-100 bg-white px-8 py-6 text-lg font-semibold text-amber-900 shadow-sm">
          Checking admin access...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
