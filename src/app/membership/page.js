"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function RedirectionLogic() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const tier = searchParams.get("tier");
    const query = tier ? `?tier=${tier}` : "";
    router.replace(`/${query}`);
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-[family-name:var(--font-montserrat)]">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-xs font-black uppercase tracking-widest text-gray-500">Redirecting to Rewards...</p>
      </div>
    </div>
  );
}

export default function MembershipPage() {
  return (
    <Suspense>
      <RedirectionLogic />
    </Suspense>
  );
}
