"use client";
import React, { useState } from 'react';

const AskQuestionSection = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col items-center self-stretch py-12 px-4">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl py-6 md:py-12 gap-8 lg:gap-[84px]">
        <div className="flex flex-col items-start bg-white py-[26px] gap-6 rounded-[20px] border border-solid border-[#D5D5D5] w-full lg:flex-1 order-2 lg:order-1">
          <div className="flex items-center ml-[22px] gap-[9px]">
            <span className="text-[#1F1F1F] text-lg">{"Powered by"}</span>
            <img
              src="/logo.png"
              alt="Booking SMK Telkom Malang"
              className="w-[135px] h-[27px] object-contain"
            />
          </div>
          <div className="flex flex-col items-start self-stretch mx-[22px]">
            <div className="flex items-start mb-[198px] gap-4">
              <div className="w-[52px] h-[52px] rounded-full bg-[#E04E4E] flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col shrink-0 items-start gap-1.5">
                <span className="text-[#1F1F1F] text-sm font-semibold">
                  {"AgentMoklet"}
                </span>
                <div className="flex flex-col items-start bg-gray-50 text-left py-3.5 px-4 rounded-xl border border-solid border-[#D5D5D5]">
                  <span className="text-[#1F1F1F] text-base">
                    {"Halo, Aku AgentMoklet, ada yang bisa dibantu?"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start self-stretch gap-2.5">
              <input
                placeholder={"Halo Min..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 self-stretch text-[#B6B6B6] bg-transparent text-base py-[15px] pl-4 pr-8 rounded-xl border border-solid border-[#D5D5D5]"
              />
              <button className="w-[52px] h-[52px] bg-[#E04E4E] rounded-xl flex items-center justify-center hover:bg-[#c93e3e] transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2.5 w-full lg:w-auto order-1 lg:order-2">
          <span className="text-[#1F1F1F] text-2xl md:text-[42px] font-bold text-center lg:text-left w-full">
            {"Mau Tanya-Tanya?"}
          </span>
          <span className="text-[#7A7A7A] text-sm md:text-base text-center lg:text-right w-full lg:w-[456px]">
            {
              "Dari cara booking hingga fitur-fitur baru, semua pertanyaan kalian akan dijawab dengan lengkap dan mudah dipahami."
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionSection;
