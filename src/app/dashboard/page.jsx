"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookingStats from "@/components/dashboard/BookingStats";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Temporary: Skip authentication for testing
  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/auth/signin");
  //   }
  // }, [status, router]);

  // if (status === "loading") {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-50">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E]"></div>
  //     </div>
  //   );
  // }

  // if (!session) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-50">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E] mx-auto mb-4"></div>
  //         <p className="text-gray-600">Memuat...</p>
  //       </div>
  //     </div>
  //   );
  // }

  useEffect(() => {
    fetchRecentBookings();
  }, []);

  const fetchRecentBookings = async () => {
    try {
      const response = await fetch("/api/bookings?limit=5");
      if (response.ok) {
        const bookings = await response.json();
        setRecentBookings(bookings);
      }
    } catch (error) {
      console.error("Error fetching recent bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-pink-100 rounded-full opacity-20"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Logo SMK Telkom Malang" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#1F1F1F] font-medium text-sm leading-tight">
                  Booking
                </span>
                <span className="text-[#1F1F1F] font-medium text-xs leading-tight whitespace-nowrap">
                  SMK Telkom Malang
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/dashboard" className="text-[#E04E4E] font-medium">Dashboard</a>
              <a href="/dashboard/bookings/new" className="text-[#7A7A7A] hover:text-[#E04E4E] font-medium">Booking Baru</a>
              <a href="/dashboard/bookings" className="text-[#7A7A7A] hover:text-[#E04E4E] font-medium">Riwayat</a>
              <a href="/dashboard/journal" className="text-[#7A7A7A] hover:text-[#E04E4E] font-medium">Jurnal</a>
              <a href="/dashboard/documentation" className="text-[#7A7A7A] hover:text-[#E04E4E] font-medium">Dokumentasi</a>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E04E4E] flex items-center justify-center text-white font-bold text-sm">
                  {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-[#1F1F1F]">{session?.user?.name || "User"}</p>
                  {session?.user?.role === "ADMIN" && (
                    <span className="text-xs text-[#E04E4E] font-semibold">ADMIN</span>
                  )}
                </div>
              </div>
              {session ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-[#7A7A7A] hover:text-[#E04E4E] font-medium"
                >
                  Logout
                </button>
              ) : (
                <div className="flex gap-2">
                  <a
                    href="/auth/signin"
                    className="bg-[#E04E4E] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#c93e3e] transition-colors"
                  >
                    Masuk
                  </a>
                  <a
                    href="/auth/register"
                    className="border-2 border-[#E04E4E] text-[#E04E4E] px-4 py-2 rounded-lg font-medium hover:bg-[#FFF0F0] transition-colors"
                  >
                    Daftar
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#E04E4E] to-[#c93e3e] text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Selamat Datang, {session?.user?.name || "User"}! 👋
                </h1>
                <p className="text-xl opacity-90">
                  Kelola booking fasilitas dengan mudah dan efisien
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => router.push("/dashboard/bookings/new")}
                  className="bg-white text-[#E04E4E] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Booking Baru
                </button>
                <button
                  onClick={() => router.push("/dashboard/bookings")}
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#E04E4E] transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Lihat Semua
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-12 px-4 -mt-8">
          <div className="max-w-7xl mx-auto">
            <BookingStats />
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Bookings */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#1F1F1F]">Booking Terbaru</h2>
                    <button
                      onClick={() => router.push("/dashboard/bookings")}
                      className="text-[#E04E4E] hover:text-[#c93e3e] font-medium flex items-center gap-1"
                    >
                      Lihat Semua
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {loading ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse">
                          <div className="h-16 bg-gray-200 rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                  ) : recentBookings.length > 0 ? (
                    <div className="space-y-4">
                      {recentBookings.map((booking, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#FFF0F0] rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-[#E04E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-semibold text-[#1F1F1F]">{booking.facility || "Fasilitas"}</h3>
                              <p className="text-sm text-[#7A7A7A]">
                                {booking.startDate ? new Date(booking.startDate).toLocaleDateString('id-ID') : "Tanggal tidak tersedia"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                              booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                              booking.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {booking.status === 'APPROVED' ? 'Disetujui' :
                               booking.status === 'PENDING' ? 'Menunggu' :
                               booking.status === 'REJECTED' ? 'Ditolak' : 'Unknown'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">Belum ada booking</h3>
                      <p className="text-[#7A7A7A] mb-4">Mulai buat booking pertama Anda</p>
                      <button
                        onClick={() => router.push("/dashboard/bookings/new")}
                        className="bg-[#E04E4E] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c93e3e] transition-colors"
                      >
                        Buat Booking
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-[#1F1F1F] mb-4">Aksi Cepat</h2>
                  <div className="space-y-3">
                    <button
                      onClick={() => router.push("/dashboard/bookings/new")}
                      className="w-full flex items-center gap-3 p-4 bg-[#FFF0F0] hover:bg-[#FFE5E5] rounded-xl transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#E04E4E] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-[#1F1F1F]">Buat Booking Baru</p>
                        <p className="text-sm text-[#7A7A7A]">Pesan fasilitas baru</p>
                      </div>
                    </button>

                    <button
                      onClick={() => router.push("/dashboard/bookings")}
                      className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-[#1F1F1F]">Riwayat Booking</p>
                        <p className="text-sm text-[#7A7A7A]">Lihat semua booking</p>
                      </div>
                    </button>

                    <button
                      onClick={() => router.push("/dashboard/journal")}
                      className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-[#1F1F1F]">Jurnal</p>
                        <p className="text-sm text-[#7A7A7A]">Catatan aktivitas</p>
                      </div>
                    </button>

                    <button
                      onClick={() => router.push("/dashboard/documentation")}
                      className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-[#1F1F1F]">Dokumentasi</p>
                        <p className="text-sm text-[#7A7A7A]">Panduan sistem</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Calendar Widget */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-[#1F1F1F] mb-4">Kalender</h2>
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#FFF0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#E04E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-[#7A7A7A] mb-4">Kalender akan segera hadir</p>
                    <button className="text-[#E04E4E] hover:text-[#c93e3e] font-medium text-sm">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#E04E4E] mb-4">
                Fasilitas Lengkap untuk Setiap Kebutuhan Acara
              </h2>
              <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto">
                Dari aula hingga laboratorium, setiap ruang di SMK Telkom Malang sudah lengkap dengan fasilitas, siap mendukung berbagai acara, dan bisa dipesan dengan mudah kapan saja.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFF0F0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#E04E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">Aula & Ruang Rapat</h3>
                <p className="text-[#7A7A7A]">Ruang besar untuk acara formal dan presentasi</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFF0F0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#E04E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">Laboratorium</h3>
                <p className="text-[#7A7A7A]">Lab Cyber, Cloud, ITNSA, Podcast, dan Robotik</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFF0F0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#E04E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">Dokumentasi</h3>
                <p className="text-[#7A7A7A]">Panduan lengkap dan dokumentasi sistem</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
