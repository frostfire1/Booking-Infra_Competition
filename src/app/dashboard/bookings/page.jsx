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

  // Temporary: Skip authentication for testing
  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/auth/signin");
  //   }
  // }, [status, router]);

  useEffect(() => {
    fetchBookings();
  }, []);

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
      } else {
        console.error("Failed to fetch bookings");
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
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
      } else {
        console.error("Failed to fetch booking details");
        setSelectedBooking(null);
      }
    } catch (error) {
      console.error("Error fetching booking details:", error);
      setSelectedBooking(null);
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-3xl font-bold text-[#1F1F1F]">Riwayat Booking</h1>
            </div>
            <p className="text-[#7A7A7A]">Lihat dan kelola semua booking yang telah dibuat</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Selection */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-[#1F1F1F] mb-4">Pilih Booking</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                      ID Booking
                    </label>
                    <select
                      value={selectedBookingId}
                      onChange={(e) => setSelectedBookingId(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none transition-all"
                      disabled={loading}
                    >
                      <option value="">Pilih ID Booking</option>
                      {bookings.map((booking) => (
                        <option key={booking.id} value={booking.id}>
                          {booking.id} - {booking.facility || "Fasilitas"} ({new Date(booking.startDate).toLocaleDateString('id-ID')})
                        </option>
                      ))}
                    </select>
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
                <h2 className="text-xl font-bold text-[#1F1F1F] mb-6">Detail Booking</h2>
                
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
                    {/* Status Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedBooking.status)}`}>
                        {getStatusText(selectedBooking.status)}
                      </span>
                      <span className="text-sm text-[#7A7A7A]">
                        ID: {selectedBooking.id}
                      </span>
                    </div>

                    {/* Booking Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[#7A7A7A] mb-1">Fasilitas</label>
                          <p className="text-[#1F1F1F] font-medium">{selectedBooking.facility || "Tidak tersedia"}</p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-[#7A7A7A] mb-1">Tanggal Mulai</label>
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
                          <label className="block text-sm font-medium text-[#7A7A7A] mb-1">Waktu Mulai</label>
                          <p className="text-[#1F1F1F]">
                            {selectedBooking.startTime || "Tidak tersedia"}
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#7A7A7A] mb-1">Durasi</label>
                          <p className="text-[#1F1F1F]">
                            {selectedBooking.duration || "Tidak tersedia"} jam
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[#7A7A7A] mb-1">Pemohon</label>
                          <p className="text-[#1F1F1F] font-medium">{selectedBooking.user?.name || "Tidak tersedia"}</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#7A7A7A] mb-1">Email</label>
                          <p className="text-[#1F1F1F]">{selectedBooking.user?.email || "Tidak tersedia"}</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#7A7A7A] mb-1">Tanggal Dibuat</label>
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
                          <label className="block text-sm font-medium text-[#7A7A7A] mb-1">Terakhir Diupdate</label>
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

                    {/* Purpose */}
                    {selectedBooking.purpose && (
                      <div>
                        <label className="block text-sm font-medium text-[#7A7A7A] mb-2">Tujuan Penggunaan</label>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-[#1F1F1F]">{selectedBooking.purpose}</p>
                        </div>
                      </div>
                    )}

                    {/* Notes */}
                    {selectedBooking.notes && (
                      <div>
                        <label className="block text-sm font-medium text-[#7A7A7A] mb-2">Catatan</label>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-[#1F1F1F]">{selectedBooking.notes}</p>
                        </div>
                      </div>
                    )}

                    {/* Admin Notes */}
                    {selectedBooking.adminNotes && (
                      <div>
                        <label className="block text-sm font-medium text-[#7A7A7A] mb-2">Catatan Admin</label>
                        <div className="bg-blue-50 rounded-xl p-4">
                          <p className="text-[#1F1F1F]">{selectedBooking.adminNotes}</p>
                        </div>
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
