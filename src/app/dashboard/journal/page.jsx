"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function JournalPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    bookingId: "",
    activityDate: "",
    content: "",
    participants: "",
    notes: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    } else if (status === "authenticated") {
      fetchJournals();
    }
  }, [status, router]);

  const fetchJournals = async () => {
    try {
      const response = await fetch("/api/journals");
      if (response.ok) {
        const data = await response.json();
        setJournals(data);
      }
    } catch (error) {
      console.error("Error fetching journals:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/journals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Jurnal berhasil ditambahkan!");
        setShowForm(false);
        setFormData({
          bookingId: "",
          activityDate: "",
          content: "",
          participants: "",
          notes: "",
        });
        fetchJournals();
      } else {
        const error = await response.json();
        alert(error.error || "Gagal menambahkan jurnal");
      }
    } catch (error) {
      console.error("Error creating journal:", error);
      alert("Terjadi kesalahan");
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E]"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1F1F1F]">Jurnal Kegiatan</h1>
            <p className="text-[#7A7A7A] mt-2">
              Catat aktivitas dan kegiatan selama penggunaan fasilitas
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-[#E04E4E] text-white rounded-lg font-medium hover:bg-[#c93e3e] transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tambah Jurnal
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-[#1F1F1F] mb-4">Tambah Jurnal Baru</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                    ID Booking *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.bookingId}
                    onChange={(e) => setFormData({ ...formData, bookingId: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none"
                    placeholder="Masukkan ID booking"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                    Tanggal Kegiatan *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.activityDate}
                    onChange={(e) => setFormData({ ...formData, activityDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                  Isi Kegiatan *
                </label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none resize-none"
                  placeholder="Jelaskan kegiatan yang dilakukan..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                  Peserta
                </label>
                <input
                  type="text"
                  value={formData.participants}
                  onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none"
                  placeholder="Nama peserta (pisahkan dengan koma)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                  Catatan Tambahan
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none resize-none"
                  placeholder="Catatan atau kendala yang dihadapi..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-[#E04E4E] text-white rounded-lg font-medium hover:bg-[#c93e3e] disabled:opacity-50 transition-colors"
                >
                  {submitting ? "Menyimpan..." : "Simpan Jurnal"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Journal List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {journals.length === 0 ? (
            <div className="col-span-full bg-white rounded-xl border border-gray-200 p-12 text-center">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p className="text-[#7A7A7A] text-lg">Belum ada jurnal kegiatan</p>
              <p className="text-[#B6B6B6] text-sm mt-2">
                Tambahkan jurnal pertama Anda dengan mengklik tombol di atas
              </p>
            </div>
          ) : (
            journals.map((journal) => (
              <div
                key={journal.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#1F1F1F]">
                      {journal.booking?.title || "Kegiatan"}
                    </h3>
                    <p className="text-sm text-[#7A7A7A]">
                      {new Date(journal.activityDate).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[#FFF0F0] text-[#E04E4E] text-xs font-semibold rounded-full">
                    Jurnal
                  </span>
                </div>

                <p className="text-[#1F1F1F] mb-3 line-clamp-3">{journal.content}</p>

                {journal.participants && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-[#7A7A7A] mb-1">Peserta:</p>
                    <p className="text-sm text-[#1F1F1F]">{journal.participants}</p>
                  </div>
                )}

                {journal.notes && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-xs font-medium text-yellow-800 mb-1">Catatan:</p>
                    <p className="text-sm text-yellow-900">{journal.notes}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
