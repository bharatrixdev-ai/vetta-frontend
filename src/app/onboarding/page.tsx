"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/app");
  }, [router]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-bg text-ink">
      <div className="text-[14px] text-mute animate-pulse">Redirecting to Vetta…</div>
    </div>
  );
}
