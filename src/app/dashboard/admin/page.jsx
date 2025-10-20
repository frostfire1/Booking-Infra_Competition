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
    <div className="pt-32 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#E04E4E] to-[#c93e3e] rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">⚙️</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
              <p className="text-gray-600">Kelola sistem booking SMK Telkom Malang</p>
            </div>
            <div className="ml-auto">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Admin Mode
              </span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalUsers}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalBookings}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-gray-800">{stats.pendingBookings}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Approved</p>
                <p className="text-3xl font-bold text-gray-800">{stats.approvedBookings}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminFeatures.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-[#E04E4E]"
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-3xl">{feature.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#E04E4E] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#E04E4E] font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    <span>Kelola Sekarang</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-[#E04E4E] to-[#c93e3e] rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => router.push("/dashboard/admin/users")}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 text-left transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="font-medium">User Management</p>
                  <p className="text-sm opacity-90">Kelola pengguna</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => router.push("/dashboard/bookings")}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 text-left transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-medium">Booking History</p>
                  <p className="text-sm opacity-90">Lihat semua booking</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => router.push("/dashboard/admin/bulk-operations")}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 text-left transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🗑️</span>
                <div>
                  <p className="font-medium">Bulk Delete</p>
                  <p className="text-sm opacity-90">Hapus riwayat</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
