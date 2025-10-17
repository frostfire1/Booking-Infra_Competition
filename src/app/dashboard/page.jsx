"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookingStats from "@/components/dashboard/BookingStats";
import { Navbar } from "@/components/navbar";

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
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <div className="text-center py-16 px-4 relative">
          {/* Decorative Icons */}
          <div className="absolute left-6 md:left-12 top-32 md:top-40 z-20">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#FFF0F0] border-2 border-[#E04E4E] flex items-center justify-center shadow-sm">
              <svg
                className="w-10 h-10 md:w-14 md:h-14 text-[#E04E4E]"
                viewBox="0 0 120 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M30 50L60 25L90 50V85H30V50Z" />
                <rect x="70" y="35" width="8" height="15" rx="2" />
                <rect x="40" y="60" width="8" height="8" rx="1" />
                <rect x="72" y="60" width="8" height="8" rx="1" />
                <path d="M52 85V70C52 68 54 66 56 66H64C66 66 68 68 68 70V85" />
              </svg>
            </div>
          </div>

          <div className="absolute right-6 md:right-12 top-24 md:top-32 z-20">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#FFF0F0] border-2 border-[#E04E4E] flex items-center justify-center shadow-sm">
              <svg
                className="w-10 h-10 md:w-14 md:h-14 text-[#E04E4E]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 px-4">
              Hai, <span className="text-[#E04E4E]">Mau Booking Apa?</span>
          </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-gray-600 text-center mb-12 px-4 max-w-2xl mx-auto">
              Temukan Ruangan dan Tempat yang Cocok Untuk Acara Anda!
            </p>

            {/* Booking Form */}
            <div className="w-full max-w-4xl px-4 mx-auto">
              <div className="bg-[#FFF0F0] border-2 border-[#E04E4E] rounded-3xl p-8 md:p-10 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Fasilitas Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Fasilitas
                    </label>
                    <div className="relative">
                      <svg className="absolute left-3 top-3.5 w-5 h-5 text-[#E04E4E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 3h-2a2 2 0 0 0-2 2v2"></path><path d="M10 3H8a2 2 0 0 0-2 2v2"></path></svg>
                      <select
                        className="w-full pl-10 pr-4 py-3 border-2 border-[#E04E4E] rounded-xl focus:outline-none focus:border-[#E04E4E] text-gray-700 appearance-none bg-white"
                        onChange={() => router.push("/dashboard/bookings/new")}
                      >
                        <option value="">Apa yang ingin dipinjam?</option>
                        <option value="aula">Aula</option>
                        <option value="lab">Laboratorium</option>
                        <option value="ruang-rapat">Ruang Rapat</option>
                      </select>
                      <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
        </div>

                  {/* Waktu Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Waktu
                    </label>
                    <div className="relative">
                      <svg className="absolute left-3 top-3.5 w-5 h-5 text-[#E04E4E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 border-2 border-[#E04E4E] rounded-xl focus:outline-none focus:border-[#E04E4E] text-gray-700"
                        onClick={() => router.push("/dashboard/bookings/new")}
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex items-end">
          <button
            onClick={() => router.push("/dashboard/bookings/new")}
                      className="w-full bg-[#E04E4E] hover:bg-[#d93d3d] text-white font-semibold py-3 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2"
          >
            <svg
                        className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
                      Cek Ketersediaan
                    </button>
                  </div>
                </div>
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

                {/* Calendar Widget - Full Width Below Booking Terbaru */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mt-12">
                  <h2 className="text-xl font-bold text-[#1F1F1F] mb-6">Jadwal Penggunaan Fasilitas</h2>
                  
                  <div className="flex gap-6">
                    {/* Calendar */}
                    <div className="bg-[#FFF0F0] border-2 border-[#E04E4E] rounded-2xl p-6 flex-1">
                      <div className="flex items-center justify-between mb-6">
                        <button className="text-[#E04E4E] hover:text-[#c93e3e] p-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <h3 className="text-xl font-bold text-[#1F1F1F]">October 2025</h3>
                        <button className="text-[#E04E4E] hover:text-[#c93e3e] p-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Days of week */}
                      <div className="grid grid-cols-7 gap-2 mb-4">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                          <div key={day} className="text-center text-sm font-medium text-gray-600 py-3">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      {/* Calendar grid */}
                      <div className="grid grid-cols-7 gap-2">
                        {/* Empty cells for start of month */}
                        {Array.from({ length: 1 }, (_, i) => (
                          <div key={`empty-${i}`} className="h-10"></div>
                        ))}
                        
                        {/* Days */}
                        {Array.from({ length: 31 }, (_, i) => {
                          const day = i + 1;
                          const isToday = day === 17; // Highlight day 17 as example
                          return (
                            <button
                              key={day}
                              className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors ${
                                isToday
                                  ? 'bg-[#E04E4E] text-white'
                                  : 'text-[#1F1F1F] hover:bg-[#FFE5E5]'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Event Info */}
                    <div className="bg-[#FFF0F0] border-2 border-dashed border-[#E04E4E] rounded-2xl p-6 flex-1">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-[#1F1F1F] mb-4">Tidak ada acara</h3>
                        <p className="text-base text-[#7A7A7A] leading-relaxed">
                          Tidak ada jadwal booking pada tanggal ini.<br />
                          Silahkan untuk dapat memilih tanggal ini.
                        </p>
                      </div>
                    </div>
                  </div>
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
