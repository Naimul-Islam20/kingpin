"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccountRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 font-[family-name:var(--font-montserrat)] text-sm text-slate-500">
      <div className="text-center animate-pulse">
        <p className="font-black uppercase tracking-widest text-slate-900 mb-2">Redirecting to Premium Dashboard</p>
        <p className="text-xs">Preparing your workspace...</p>
      </div>
    </div>
  );
}
