"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";

export default function BookingHistoryPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [selectedBookingId, setSelectedBookingId] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    status: '',
    adminNotes: ''
  });

  // Check authentication
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchBookings();
    }
  }, [status]);

  useEffect(() => {
    if (selectedBookingId) {
      fetchBookingDetails(selectedBookingId);
    } else {
      setSelectedBooking(null);
    }
  }, [selectedBookingId]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/bookings");
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else if (response.status === 401) {
        console.log("User not authenticated, redirecting to login...");
        router.push("/auth/signin");
      } else {
        console.error("Failed to fetch bookings:", response.status, response.statusText);
        setBookings([]);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookingDetails = async (bookingId) => {
    try {
      setBookingLoading(true);
      const response = await fetch(`/api/bookings/${bookingId}`);
      if (response.ok) {
        const data = await response.json();
        setSelectedBooking(data);
        setEditForm({
          status: data.status,
          adminNotes: data.adminNotes || ''
        });
      } else if (response.status === 401) {
        console.log("User not authenticated, redirecting to login...");
        router.push("/auth/signin");
      } else {
        console.error("Failed to fetch booking details:", response.status, response.statusText);
        setSelectedBooking(null);
      }
    } catch (error) {
      console.error("Error fetching booking details:", error);
      setSelectedBooking(null);
    } finally {
      setBookingLoading(false);
    }
  };

  const updateBooking = async () => {
    try {
      setBookingLoading(true);
      const response = await fetch(`/api/bookings/${selectedBookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        const updatedBooking = await response.json();
        setSelectedBooking(updatedBooking);
        setIsEditing(false);
        // Refresh bookings list
        fetchBookings();
        alert('Booking berhasil diupdate!');
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error("Error updating booking:", error);
      alert('Gagal mengupdate booking');
    } finally {
      setBookingLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "APPROVED":
        return "bg-green-100 text-green-800";
      case "REJECTED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "PENDING":
        return "Menunggu";
      case "APPROVED":
        return "Disetujui";
      case "REJECTED":
        return "Ditolak";
      default:
        return status;
    }
  };

  // Show loading while checking authentication
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E] mx-auto mb-4"></div>
          <p className="text-gray-600">Memeriksa autentikasi...</p>
        </div>
      </div>
    );
  }

  // Show loading if not authenticated
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#E04E4E] to-[#c93e3e] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-[#1F1F1F]">Riwayat Booking</h1>
                    {session?.user?.role === 'ADMIN' && (
                      <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-full">
                        Admin Mode
                      </span>
                    )}
                  </div>
                  <p className="text-[#7A7A7A] mt-1">
                    {session?.user?.role === 'ADMIN' 
                      ? "Lihat dan kelola semua booking dari semua user" 
                      : "Lihat dan kelola booking yang telah Anda buat"
                    }
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Total Booking</p>
                    <p className="text-2xl font-bold">{bookings.length}</p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-100 text-sm">Menunggu</p>
                    <p className="text-2xl font-bold">{bookings.filter(b => b.status === 'PENDING').length}</p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Disetujui</p>
                    <p className="text-2xl font-bold">{bookings.filter(b => b.status === 'APPROVED').length}</p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100 text-sm">Ditolak</p>
                    <p className="text-2xl font-bold">{bookings.filter(b => b.status === 'REJECTED').length}</p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Selection */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E04E4E] to-[#c93e3e] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#1F1F1F]">Pilih Booking</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1F1F1F] mb-3">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#E04E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        ID Booking
                      </span>
                    </label>
                    <div className="relative">
                      <select
                        value={selectedBookingId}
                        onChange={(e) => setSelectedBookingId(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none transition-all appearance-none bg-white pr-10 hover:border-gray-300"
                        disabled={loading}
                      >
                        <option value="">Pilih ID Booking</option>
                        {bookings.map((booking) => (
                          <option key={booking.id} value={booking.id}>
                            {booking.id} - {booking.facility || "Fasilitas"} ({new Date(booking.startDate).toLocaleDateString('id-ID')})
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {loading && (
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#E04E4E] mx-auto"></div>
                      <p className="text-sm text-[#7A7A7A] mt-2">Memuat data booking...</p>
                    </div>
                  )}

                  {!loading && bookings.length === 0 && (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <p className="text-[#7A7A7A]">Belum ada booking</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#1F1F1F]">Detail Booking</h2>
                </div>
                
                {!selectedBookingId ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-[#7A7A7A] text-lg">Pilih ID Booking untuk melihat detail</p>
                  </div>
                ) : bookingLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E] mx-auto mb-4"></div>
                    <p className="text-[#7A7A7A]">Memuat detail booking...</p>
                  </div>
                ) : selectedBooking ? (
                  <div className="space-y-6">
                    {/* Status Badge & ID */}
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                      <div className="flex items-center gap-3">
                        {isEditing ? (
                          <select
                            value={editForm.status}
                            onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                            className="px-4 py-2 rounded-full text-sm font-medium border-2 border-blue-300 focus:border-blue-500 outline-none"
                          >
                            <option value="PENDING">Menunggu</option>
                            <option value="APPROVED">Disetujui</option>
                            <option value="REJECTED">Ditolak</option>
                          </select>
                        ) : (
                          <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedBooking.status)}`}>
                            {getStatusText(selectedBooking.status)}
                          </span>
                        )}
                        <div className="h-6 w-px bg-gray-300"></div>
                        <span className="text-sm text-[#7A7A7A] font-mono">
                          ID: {selectedBooking.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-xs text-[#7A7A7A]">Booking ID</p>
                          <p className="text-sm font-medium text-[#1F1F1F]">{selectedBooking.id}</p>
                        </div>
                        {session?.user?.role === 'ADMIN' && (
                          <div className="flex gap-2">
                            {isEditing ? (
                              <>
                                <button
                                  onClick={updateBooking}
                                  className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors"
                                >
                                  Simpan
                                </button>
                                <button
                                  onClick={() => setIsEditing(false)}
                                  className="px-3 py-1 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                  Batal
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => setIsEditing(true)}
                                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
                              >
                                Edit
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Booking Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Facility & Schedule Card */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <h3 className="font-semibold text-[#1F1F1F]">Fasilitas & Jadwal</h3>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs font-medium text-[#7A7A7A] mb-1">Fasilitas</label>
                            <p className="text-[#1F1F1F] font-medium">{selectedBooking.facility || "Tidak tersedia"}</p>
                          </div>
                          
                          <div>
                            <label className="block text-xs font-medium text-[#7A7A7A] mb-1">Tanggal Mulai</label>
                            <p className="text-[#1F1F1F]">
                              {selectedBooking.startDate ? new Date(selectedBooking.startDate).toLocaleDateString('id-ID', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              }) : "Tidak tersedia"}
                            </p>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-[#7A7A7A] mb-1">Waktu Mulai</label>
                            <p className="text-[#1F1F1F]">
                              {selectedBooking.startTime || "Tidak tersedia"}
                            </p>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-[#7A7A7A] mb-1">Durasi</label>
                            <p className="text-[#1F1F1F]">
                              {selectedBooking.duration || "Tidak tersedia"} jam
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* User & Contact Card */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <h3 className="font-semibold text-[#1F1F1F]">Pemohon & Kontak</h3>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs font-medium text-[#7A7A7A] mb-1">Nama Pemohon</label>
                            <p className="text-[#1F1F1F] font-medium">{selectedBooking.user?.name || "Tidak tersedia"}</p>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-[#7A7A7A] mb-1">Email</label>
                            <p className="text-[#1F1F1F]">{selectedBooking.user?.email || "Tidak tersedia"}</p>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-[#7A7A7A] mb-1">Tanggal Dibuat</label>
                            <p className="text-[#1F1F1F]">
                              {selectedBooking.createdAt ? new Date(selectedBooking.createdAt).toLocaleDateString('id-ID', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              }) : "Tidak tersedia"}
                            </p>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-[#7A7A7A] mb-1">Terakhir Diupdate</label>
                            <p className="text-[#1F1F1F]">
                              {selectedBooking.updatedAt ? new Date(selectedBooking.updatedAt).toLocaleDateString('id-ID', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              }) : "Tidak tersedia"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Purpose & Notes */}
                    {(selectedBooking.purpose || selectedBooking.notes || selectedBooking.adminNotes) && (
                      <div className="space-y-4">
                        {/* Purpose */}
                        {selectedBooking.purpose && (
                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                              </div>
                              <h3 className="font-semibold text-[#1F1F1F]">Tujuan Penggunaan</h3>
                            </div>
                            <p className="text-[#1F1F1F] leading-relaxed">{selectedBooking.purpose}</p>
                          </div>
                        )}

                        {/* Notes */}
                        {selectedBooking.notes && (
                          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </div>
                              <h3 className="font-semibold text-[#1F1F1F]">Catatan Pemohon</h3>
                            </div>
                            <p className="text-[#1F1F1F] leading-relaxed">{selectedBooking.notes}</p>
                          </div>
                        )}

                        {/* Admin Notes */}
                        {(selectedBooking.adminNotes || (session?.user?.role === 'ADMIN' && isEditing)) && (
                          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <h3 className="font-semibold text-[#1F1F1F]">Catatan Admin</h3>
                              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">Official</span>
                            </div>
                            {isEditing && session?.user?.role === 'ADMIN' ? (
                              <textarea
                                value={editForm.adminNotes}
                                onChange={(e) => setEditForm({...editForm, adminNotes: e.target.value})}
                                placeholder="Tambahkan catatan admin..."
                                className="w-full p-3 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
                                rows={3}
                              />
                            ) : (
                              <p className="text-[#1F1F1F] leading-relaxed">{selectedBooking.adminNotes}</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-[#7A7A7A] text-lg">Gagal memuat detail booking</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
