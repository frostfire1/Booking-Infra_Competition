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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "bg-blue-50 border-blue-200 text-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      label: "Menunggu",
      value: stats.pending,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-yellow-50 border-yellow-200 text-yellow-600",
      bgColor: "bg-yellow-500",
    },
    {
      label: "Disetujui",
      value: stats.approved,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-green-50 border-green-200 text-green-600",
      bgColor: "bg-green-500",
    },
    {
      label: "Ditolak",
      value: stats.rejected,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-red-50 border-red-200 text-red-600",
      bgColor: "bg-red-500",
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 animate-pulse shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((card) => (
        <div
          key={card.label}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${card.bgColor} rounded-xl flex items-center justify-center text-white`}>
              {card.icon}
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-[#1F1F1F]">{card.value}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-[#7A7A7A] mb-1">{card.label}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${card.bgColor} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${Math.min((card.value / Math.max(stats.total, 1)) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
