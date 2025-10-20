"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminPanel() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBookings: 0,
    pendingBookings: 0,
    approvedBookings: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    } else if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      router.push("/dashboard");
    }
  }, [status, session, router]);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.role === "ADMIN") {
      fetchStats();
    }
  }, [status, session]);

  const fetchStats = async () => {
    try {
      const [usersRes, bookingsRes] = await Promise.all([
        fetch("/api/admin/users"),
        fetch("/api/bookings"),
      ]);

      if (usersRes.ok && bookingsRes.ok) {
        const users = await usersRes.json();
        const bookings = await bookingsRes.json();

        const pendingCount = bookings.filter(b => b.status === "PENDING").length;
        const approvedCount = bookings.filter(b => b.status === "APPROVED").length;

        setStats({
          totalUsers: users.length,
          totalBookings: bookings.length,
          pendingBookings: pendingCount,
          approvedBookings: approvedCount,
        });
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E] mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat Admin Panel...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E] mx-auto mb-4"></div>
          <p className="text-gray-600">Mengalihkan ke halaman login...</p>
        </div>
      </div>
    );
  }

  if (session?.user?.role !== "ADMIN") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Akses Ditolak</h1>
          <p className="text-gray-600">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
          <Link href="/dashboard" className="text-[#E04E4E] hover:text-[#c93e3e] font-medium mt-4 inline-block">
            ← Kembali ke Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const adminFeatures = [
    {
      title: "User Management",
      description: "Kelola pengguna, edit profil, dan reset password",
      icon: "👥",
      href: "/dashboard/admin/users",
      color: "bg-blue-500",
    },
    {
      title: "Booking Management",
      description: "Kelola semua booking dan riwayat transaksi",
      icon: "📅",
      href: "/dashboard/bookings",
      color: "bg-green-500",
    },
    {
      title: "Reset Password",
      description: "Reset password pengguna yang lupa",
      icon: "🔑",
      href: "/dashboard/admin/reset-password",
      color: "bg-yellow-500",
    },
    {
      title: "Bulk Operations",
      description: "Hapus riwayat booking dalam jumlah besar",
      icon: "🗑️",
      href: "/dashboard/admin/bulk-operations",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="pt-8 pb-8 px-4 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#E04E4E] to-[#c93e3e] rounded-3xl p-8 text-white shadow-2xl">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative flex items-center gap-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white border-opacity-30">
                <span className="text-white text-3xl">⚙️</span>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">Admin Panel</h1>
                <p className="text-white text-opacity-90 text-lg">Kelola sistem booking SMK Telkom Malang</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white border-opacity-30">
                  Admin Mode
                </span>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-white text-3xl">👥</span>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Total Users</p>
                  <p className="text-5xl font-black text-gray-800 group-hover:text-blue-600 transition-colors duration-500">{stats.totalUsers}</p>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          </div>

          <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl p-6 border border-gray-100 hover:border-green-200 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-white text-3xl">📅</span>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Total Bookings</p>
                  <p className="text-5xl font-black text-gray-800 group-hover:text-green-600 transition-colors duration-500">{stats.totalBookings}</p>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-green-500 via-green-400 to-green-600 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          </div>

          <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl p-6 border border-gray-100 hover:border-yellow-200 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-white text-3xl">⏳</span>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Pending</p>
                  <p className="text-5xl font-black text-gray-800 group-hover:text-yellow-600 transition-colors duration-500">{stats.pendingBookings}</p>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          </div>

          <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl p-6 border border-gray-100 hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-white text-3xl">✅</span>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Approved</p>
                  <p className="text-5xl font-black text-gray-800 group-hover:text-purple-600 transition-colors duration-500">{stats.approvedBookings}</p>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Admin Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {adminFeatures.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 ${feature.color} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <span className="text-white text-5xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-gray-800 mb-4 group-hover:text-[#E04E4E] transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#E04E4E] font-bold text-lg group-hover:text-[#c93e3e] transition-colors duration-500">
                    <span className="mr-3">Kelola Sekarang</span>
                    <svg className="w-6 h-6 transform group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className={`h-3 ${feature.color} rounded-full w-24 group-hover:w-32 transition-all duration-500 shadow-lg`}></div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#E04E4E] to-[#c93e3e] rounded-3xl p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative">
            <h3 className="text-4xl font-black mb-10 text-center">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <button
                onClick={() => router.push("/dashboard/admin/users")}
                className="group bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 text-left transition-all duration-500 border border-white border-opacity-30 hover:border-opacity-50 transform hover:-translate-y-3 hover:scale-105"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <span className="text-4xl">👥</span>
                  </div>
                  <div>
                    <p className="font-black text-xl mb-2">User Management</p>
                    <p className="text-sm opacity-90">Kelola pengguna sistem</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => router.push("/dashboard/bookings")}
                className="group bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 text-left transition-all duration-500 border border-white border-opacity-30 hover:border-opacity-50 transform hover:-translate-y-3 hover:scale-105"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <span className="text-4xl">📅</span>
                  </div>
                  <div>
                    <p className="font-black text-xl mb-2">Booking History</p>
                    <p className="text-sm opacity-90">Lihat riwayat booking</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => router.push("/dashboard/admin/bulk-operations")}
                className="group bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 text-left transition-all duration-500 border border-white border-opacity-30 hover:border-opacity-50 transform hover:-translate-y-3 hover:scale-105"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <span className="text-4xl">🗑️</span>
                  </div>
                  <div>
                    <p className="font-black text-xl mb-2">Bulk Delete</p>
                    <p className="text-sm opacity-90">Hapus data massal</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
