"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function DocumentationPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  const [formData, setFormData] = useState({
    bookingId: "",
    title: "",
    description: "",
    documentType: "photo",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    } else if (status === "authenticated") {
      fetchDocuments();
    }
  }, [status, router]);

  const fetchDocuments = async () => {
    try {
      const response = await fetch("/api/documentation");
      if (response.ok) {
        const data = await response.json();
        setDocuments(data);
      }
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (selectedFiles.length === 0) {
      alert("Pilih file terlebih dahulu");
      return;
    }

    setUploading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("bookingId", formData.bookingId);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("documentType", formData.documentType);
      
      selectedFiles.forEach((file) => {
        formDataToSend.append("files", file);
      });

      const response = await fetch("/api/documentation", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Dokumentasi berhasil diupload!");
        setFormData({
          bookingId: "",
          title: "",
          description: "",
          documentType: "photo",
        });
        setSelectedFiles([]);
        fetchDocuments();
      } else {
        const error = await response.json();
        alert(error.error || "Gagal mengupload dokumentasi");
      }
    } catch (error) {
      console.error("Error uploading documentation:", error);
      alert("Terjadi kesalahan saat mengupload");
    } finally {
      setUploading(false);
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
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#1F1F1F]">Dokumentasi Kegiatan</h1>
          <p className="text-[#7A7A7A] mt-2">
            Upload foto, video, dan dokumen pendukung kegiatan
          </p>
        </div>

        {/* Upload Form */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-[#1F1F1F] mb-4">Upload Dokumentasi</h2>
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
                  Tipe Dokumen *
                </label>
                <select
                  required
                  value={formData.documentType}
                  onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none"
                >
                  <option value="photo">Foto</option>
                  <option value="video">Video</option>
                  <option value="document">Dokumen</option>
                  <option value="report">Laporan</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                Judul Dokumentasi *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none"
                placeholder="Contoh: Dokumentasi Workshop Robotik"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                Deskripsi
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none resize-none"
                placeholder="Jelaskan detail dokumentasi..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                Upload File *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#E04E4E] transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*,.pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <svg
                    className="w-12 h-12 text-gray-400 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="text-[#E04E4E] font-medium mb-1">
                    Klik untuk upload file
                  </span>
                  <span className="text-sm text-[#7A7A7A]">
                    Foto, Video, atau Dokumen (Max 10MB per file)
                  </span>
                </label>
              </div>
              {selectedFiles.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-[#1F1F1F] mb-2">
                    File terpilih: {selectedFiles.length}
                  </p>
                  <ul className="space-y-1">
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="text-sm text-[#7A7A7A]">
                        • {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={uploading || selectedFiles.length === 0}
              className="w-full px-6 py-3 bg-[#E04E4E] text-white rounded-lg font-medium hover:bg-[#c93e3e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {uploading ? "Mengupload..." : "Upload Dokumentasi"}
            </button>
          </form>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.length === 0 ? (
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
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p className="text-[#7A7A7A] text-lg">Belum ada dokumentasi</p>
              <p className="text-[#B6B6B6] text-sm mt-2">
                Upload dokumentasi pertama Anda menggunakan form di atas
              </p>
            </div>
          ) : (
            documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {doc.fileUrl && doc.documentType === "photo" && (
                  <img
                    src={doc.fileUrl}
                    alt={doc.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                {doc.documentType === "video" && (
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                )}
                {doc.documentType === "document" && (
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                )}

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#1F1F1F] line-clamp-1">
                      {doc.title}
                    </h3>
                    <span className="px-2 py-1 bg-[#FFF0F0] text-[#E04E4E] text-xs font-semibold rounded">
                      {doc.documentType}
                    </span>
                  </div>
                  {doc.description && (
                    <p className="text-sm text-[#7A7A7A] line-clamp-2 mb-3">
                      {doc.description}
                    </p>
                  )}
                  <p className="text-xs text-[#B6B6B6]">
                    {new Date(doc.createdAt).toLocaleDateString("id-ID")}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
