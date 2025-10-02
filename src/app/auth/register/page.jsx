"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  useEffect(() => {
    // Redirect to unified auth page
    router.push(`/auth?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  }, [router, callbackUrl]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E]"></div>
      <p className="ml-4 text-[#7A7A7A]">Redirecting...</p>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E]"></div>
        </div>
      }
    >
      <RegisterContent />
    </Suspense>
  );
}
