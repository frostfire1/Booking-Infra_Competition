"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingStats from "@/components/dashboard/BookingStats";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E]"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#1F1F1F]">
            Selamat Datang, {session.user?.name || "User"}!
          </h1>
          <p className="text-[#7A7A7A] mt-2">
            Kelola booking fasilitas dan peralatan SMK Telkom Malang
          </p>
        </div>

        <BookingStats />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button
            onClick={() => router.push("/dashboard/bookings/new")}
            className="flex flex-col items-center justify-center bg-[#FFF0F0] border-2 border-[#E04E4E] rounded-xl p-8 hover:bg-[#FFE5E5] transition-colors"
          >
            <svg
              className="w-16 h-16 text-[#E04E4E] mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-xl font-bold text-[#E04E4E]">
              Buat Booking Baru
            </span>
          </button>

          <button
            onClick={() => router.push("/dashboard/bookings")}
            className="flex flex-col items-center justify-center bg-white border-2 border-[#D5D5D5] rounded-xl p-8 hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-16 h-16 text-[#E04E4E] mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="text-xl font-bold text-[#1F1F1F]">
              Riwayat Booking
            </span>
          </button>

          <button
            onClick={() => router.push("/dashboard/documentation")}
            className="flex flex-col items-center justify-center bg-white border-2 border-[#D5D5D5] rounded-xl p-8 hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-16 h-16 text-[#E04E4E] mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xl font-bold text-[#1F1F1F]">
              Dokumentasi
            </span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
