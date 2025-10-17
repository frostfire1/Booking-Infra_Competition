"use client";
import React, { useState } from 'react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set([3, 4])); // Default open items 3 and 4

  const faqData = [
    {
      id: 1,
      question: "Bagaimana cara mengajukan peminjaman ruangan?",
      answer: "Untuk mengajukan peminjaman ruangan, Anda perlu login terlebih dahulu, kemudian pilih fasilitas yang diinginkan, isi detail booking, dan submit permohonan. Admin akan meninjau dan menyetujui/menolak booking Anda."
    },
    {
      id: 2,
      question: "Berapa lama proses persetujuan peminjaman?",
      answer: "Proses persetujuan peminjaman biasanya memakan waktu 1-3 hari kerja. Anda akan menerima notifikasi melalui email atau dashboard setelah status booking diperbarui."
    },
    {
      id: 3,
      question: "Apakah saya bisa membatalkan peminjaman yang sudah diajukan?",
      answer: "Ya, Anda bisa membatalkan peminjaman yang sudah diajukan melalui dashboard, asalkan belum disetujui oleh admin. Jika sudah disetujui, silakan hubungi admin untuk pembatalan."
    },
    {
      id: 4,
      question: "Apakah Website ini bisa diakses lewat smartphone?",
      answer: "Ya! Website ini sudah mendukung tampilan responsif, sehingga bisa diakses dengan nyaman lewat laptop maupun perangkat mobile."
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="bg-[#E04E4E] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Title and Description */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Ask Question
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Beberapa pertanyaan yang sering diajukan oleh beberapa orang terkait dengan platform ini
            </p>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#E04E4E] flex items-center justify-center flex-shrink-0 shadow-lg">
                      {openItems.has(item.id) ? (
                        <svg className="w-5 h-5 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[#1F1F1F] font-bold text-lg">
                      {item.question}
                    </span>
                  </div>
                </button>
                
                {openItems.has(item.id) && (
                  <div className="px-6 pb-6">
                    <div className="ml-12 pr-8">
                      <p className="text-[#7A7A7A] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
