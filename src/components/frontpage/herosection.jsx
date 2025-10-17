"use client";

import Image from "next/image";
import { useState } from "react";

export const HeroSecton = () => {
  const [selectedFacility, setSelectedFacility] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const facilityOptions = [
    { value: "meeting-room", label: "Meeting Room" },
    { value: "conference-hall", label: "Conference Hall" },
    { value: "auditorium", label: "Auditorium" },
    { value: "classroom", label: "Classroom" },
  ];

  const handleFacilityChange = (value) => {
    setSelectedFacility(value);
  };

  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

  const handleCheckAvailability = () => {
    console.log("Check availability for:", { selectedFacility, selectedDate });
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Pink gradient background */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-pink-50 via-pink-50 to-transparent pointer-events-none"></div>

      {/* Left Icon - Home Bubble */}
      <div className="absolute left-6 md:left-12 top-32 md:top-40 z-20">
        <Image
          src="/home_bubble.png"
          alt="Home Bubble Decoration"
          width={120}
          height={120}
          className="w-20 h-20 md:w-28 md:h-28 opacity-80"
        />
      </div>

      {/* Right Icon - Cube Bubble */}
      <div className="absolute right-6 md:right-12 top-24 md:top-32 z-20">
        <Image
          src="/cube_bubble.png"
          alt="Cube Bubble Decoration"
          width={120}
          height={120}
          className="w-20 h-20 md:w-28 md:h-28 opacity-80"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 md:pt-28 pb-40">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 px-4">
          Hai, Mau <span className="text-[#E04E4E]">Booking</span> Apa?
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-600 text-center mb-12 px-4 max-w-2xl">
          Temukan Ruangan dan Tempat yang Cocok Untuk Acara Anda!
        </p>

        {/* Booking Form */}
        <div className="w-full max-w-4xl px-4">
          <div className="bg-white border-2 border-[#E04E4E]/30 rounded-3xl p-8 md:p-10 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Fasilitas Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Fasilitas
                </label>
                <div className="relative">
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-[#E04E4E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 3h-2a2 2 0 0 0-2 2v2"></path><path d="M10 3H8a2 2 0 0 0-2 2v2"></path></svg>
                  <select
                    value={selectedFacility}
                    onChange={(e) => handleFacilityChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-[#E04E4E]/30 rounded-xl focus:outline-none focus:border-[#E04E4E] text-gray-700 appearance-none bg-white"
                  >
                    <option value="">Apa yang ingin dipinjam?</option>
                    {facilityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
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
                    value={selectedDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-[#E04E4E]/30 rounded-xl focus:outline-none focus:border-[#E04E4E] text-gray-700"
                  />
                </div>
              </div>

              {/* Button */}
              <div className="flex items-end">
                <button
                  onClick={handleCheckAvailability}
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

      {/* Bottom Decoration - Home Bubble */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-15">
        <Image
          src="/home_bubble.png"
          alt="Home Bubble Bottom Decoration"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20 opacity-60"
        />
      </div>

      {/* Cloud Background - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-5">
        <Image
          src="/cloud.png"
          alt="Cloud Background"
          width={1400}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};
