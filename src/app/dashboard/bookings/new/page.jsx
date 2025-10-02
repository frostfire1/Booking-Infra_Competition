"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function NewBookingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [facilities, setFacilities] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    facilityId: "",
    title: "",
    description: "",
    startDate: undefined,
    endDate: undefined,
    equipment: [],
  });

  const [selectedRange, setSelectedRange] = useState(undefined);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedRange?.from && selectedRange?.to) {
      setFormData((prev) => ({
        ...prev,
        startDate: selectedRange.from,
        endDate: selectedRange.to,
      }));
    }
  }, [selectedRange]);

  const fetchData = async () => {
    try {
      const [facilitiesRes, equipmentRes] = await Promise.all([
        fetch("/api/facilities"),
        fetch("/api/equipment"),
      ]);

      if (facilitiesRes.ok) {
        const facilitiesData = await facilitiesRes.json();
        setFacilities(facilitiesData);
      }

      // Note: You'll need to create this endpoint
      if (equipmentRes.ok) {
        const equipmentData = await equipmentRes.json();
        setEquipment(equipmentData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEquipmentChange = (equipmentId, quantity) => {
    setFormData((prev) => {
      const existingIndex = prev.equipment.findIndex(
        (e) => e.equipmentId === equipmentId
      );

      if (quantity === 0 || quantity === "") {
        // Remove equipment
        return {
          ...prev,
          equipment: prev.equipment.filter((e) => e.equipmentId !== equipmentId),
        };
      }

      if (existingIndex >= 0) {
        // Update quantity
        const newEquipment = [...prev.equipment];
        newEquipment[existingIndex].quantity = parseInt(quantity);
        return { ...prev, equipment: newEquipment };
      } else {
        // Add new equipment
        return {
          ...prev,
          equipment: [
            ...prev.equipment,
            { equipmentId, quantity: parseInt(quantity) },
          ],
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const booking = await response.json();
        alert("Booking berhasil dibuat!");
        router.push(`/dashboard/bookings/${booking.id}`);
      } else {
        const error = await response.json();
        alert(error.error || "Gagal membuat booking");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Terjadi kesalahan saat membuat booking");
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
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#1F1F1F]">Buat Booking Baru</h1>
          <p className="text-[#7A7A7A] mt-2">
            Isi form di bawah untuk membuat booking fasilitas
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
              Nama Kegiatan *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none"
              placeholder="Contoh: Workshop Robotik"
            />
          </div>

          {/* Facility */}
          <div>
            <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
              Pilih Fasilitas *
            </label>
            <select
              required
              value={formData.facilityId}
              onChange={(e) => setFormData({ ...formData, facilityId: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none"
            >
              <option value="">Pilih Fasilitas</option>
              {facilities.map((facility) => (
                <option key={facility.id} value={facility.id}>
                  {facility.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
              Pilih Tanggal *
            </label>
            <div className="bg-[#FFF0F0] border-2 border-[#E04E4E] rounded-lg p-4 inline-block">
              <DayPicker
                mode="range"
                selected={selectedRange}
                onSelect={setSelectedRange}
                disabled={{ before: new Date() }}
                className="!text-[#5C5C5C]"
                modifiersClassNames={{
                  selected: "bg-[#E04E4E]",
                  range_start: "bg-[#E04E4E] text-white rounded-l-full",
                  range_end: "bg-[#E04E4E] text-white rounded-r-full",
                  range_middle: "bg-[#FFF0F0] text-[#E04E4E]",
                  today: "text-black font-bold",
                }}
              />
            </div>
            {selectedRange?.from && selectedRange?.to && (
              <p className="mt-2 text-sm text-[#7A7A7A]">
                Dari: {selectedRange.from.toLocaleDateString()} - Sampai:{" "}
                {selectedRange.to.toLocaleDateString()}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
              Deskripsi
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none resize-none"
              placeholder="Jelaskan detail kegiatan Anda..."
            />
          </div>

          {/* Equipment */}
          {equipment.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-2">
                Peralatan Tambahan (Opsional)
              </label>
              <div className="space-y-3">
                {equipment.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#E04E4E] transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-[#1F1F1F]">{item.name}</p>
                      <p className="text-sm text-[#7A7A7A]">
                        Tersedia: {item.available} dari {item.quantity}
                      </p>
                    </div>
                    <input
                      type="number"
                      min="0"
                      max={item.available}
                      placeholder="0"
                      className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none"
                      onChange={(e) =>
                        handleEquipmentChange(item.id, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={submitting || !formData.facilityId || !selectedRange?.from || !selectedRange?.to}
              className="flex-1 px-6 py-3 bg-[#E04E4E] text-white rounded-lg font-medium hover:bg-[#c93e3e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submitting ? "Memproses..." : "Buat Booking"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
