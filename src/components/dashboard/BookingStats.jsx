"use client";
import { useEffect, useState } from "react";

export default function BookingStats() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/bookings");
      if (response.ok) {
        const bookings = await response.json();
        
        const stats = {
          total: bookings.length,
          pending: bookings.filter((b) => b.status === "PENDING").length,
          approved: bookings.filter((b) => b.status === "APPROVED").length,
          rejected: bookings.filter((b) => b.status === "REJECTED").length,
        };
        
        setStats(stats);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      label: "Total Booking",
      value: stats.total,
      icon: "📋",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      label: "Menunggu",
      value: stats.pending,
      icon: "⏳",
      color: "bg-yellow-50 border-yellow-200 text-yellow-600",
    },
    {
      label: "Disetujui",
      value: stats.approved,
      icon: "✅",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      label: "Ditolak",
      value: stats.rejected,
      icon: "❌",
      color: "bg-red-50 border-red-200 text-red-600",
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
            <div className="h-8 bg-gray-200 rounded w-16"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((card) => (
        <div
          key={card.label}
          className={`${card.color} border-2 rounded-xl p-6 transition-transform hover:scale-105`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-80">{card.label}</span>
            <span className="text-2xl">{card.icon}</span>
          </div>
          <p className="text-3xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
