"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Navbar } from "../components/navbar";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./calendar-styles.css";
import FAQSection from "../components/faq/FAQSection";
import AskQuestionSection from "../components/chat/AskQuestionSection";

const fasilitasList = [
  "Aula",
  "Lab Cyber, Cloud & ITNSA (Lab 1)",
  "Lab Podcast dan Rapat (Lab 2)",
  "Lab Robotik (Lab 5)",
  "Ruang Gabungan (34-36)",
];

export default (props) => {
  const { data: session } = useSession();
  const router = useRouter();
  
  const [selectedFasilitas, setSelectedFasilitas] = useState("");
  const [selectedRange, setSelectedRange] = useState(undefined);
  const [scheduleDate, setScheduleDate] = useState(new Date());


  // Events state
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/events?page=${currentPage}&limit=50&status=APPROVED`);
        const data = await response.json();
        
        if (data.success) {
          // Transform API data to local format
          const transformedEvents = data.data.map(event => ({
            id: event.id,
            title: event.title,
            startDate: new Date(event.startDate),
            endDate: new Date(event.endDate),
            facility: event.facility,
            organizer: event.organizer,
          }));
          
          setEvents(transformedEvents);
          setTotalPages(data.pagination.totalPages);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [currentPage]);

  // Get all booked dates (including date ranges)
  const bookedDates = events.flatMap(event => {
    const dates = [];
    const currentDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  });

  // Filter events by selected date (check if date falls within event's date range)
  const selectedDateEvents = scheduleDate ? events.filter(event => {
    if (!event.startDate || !event.endDate) return false;
    
    const selected = new Date(scheduleDate);
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    
    // Reset time part for accurate date comparison
    selected.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    
    return selected >= start && selected <= end;
  }) : [];
  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      <div className="self-stretch bg-[#FEFEFE] min-h-screen overflow-x-hidden">
        <div className="flex flex-col self-stretch items-center relative pt-20 sm:pt-24 lg:pt-28">
          <Navbar />
        </div>
        <div className="flex flex-col items-center self-stretch bg-[url('/cloud.png')] bg-cover bg-center pt-8 sm:pt-12 md:pt-[71px] pb-12 md:pb-[58px] px-2 sm:px-4 overflow-x-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12 md:mb-[284px] gap-6 lg:gap-0 w-full max-w-7xl overflow-x-hidden">
            <div className="w-20 h-20  flex items-center justify-center hidden xl:block xl:mt-[35px] xl:mr-[132px] flex-shrink-0">
              <img src ={"/cube_bubble.png"}/>
            </div>
            <div className="flex flex-col items-center gap-6 md:gap-9 w-full lg:w-auto">
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="text-[#1F1F1F] text-2xl md:text-[42px] font-bold px-4">
                  Hai, <span className="text-[#E04E4E]">Mau Booking Apa?</span>
                </span>
                <span className="text-[#7A7A7A] text-sm md:text-base px-4">
                  {"Temukan Ruangan dan Tempat yang Cocok Untuk Acaramu!"}
                </span>
              </div>
              <form
                className="bg-[#FFF0F0] py-4 px-6 rounded-xl border border-solid border-[#E04E4E] w-full max-w-5xl mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  
                  // Check if user is logged in
                  if (!session) {
                    // Redirect to signin page
                    router.push("/auth/signin?callbackUrl=/dashboard/bookings/new");
                  } else {
                    // Redirect to booking page with data
                    const params = new URLSearchParams({
                      facility: selectedFasilitas,
                      startDate: selectedRange?.from?.toISOString() || "",
                      endDate: selectedRange?.to?.toISOString() || "",
                    });
                    router.push(`/dashboard/bookings/new?${params.toString()}`);
                  }
                }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div className="flex flex-col w-full lg:w-auto items-start gap-2">
                    <span className="text-[#1F1F1F] text-base font-medium">{"Fasilitas"}</span>
                    <div className="flex items-center bg-white py-3 px-4 rounded-lg border border-solid border-[#E04E4E] w-full lg:w-auto min-w-[220px]">
                      <svg className="w-5 h-5 mr-3 text-[#E04E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    <select
                        className="text-[#5C5C5C] text-base flex-1 bg-transparent outline-none"
                      value={selectedFasilitas}
                      onChange={(e) => {
                        setSelectedFasilitas(e.target.value);
                        setSelectedRange(undefined);
                      }}
                      required
                    >
                      <option value="" disabled>
                          Apa yang ingin dipinjam?
                      </option>
                      {fasilitasList.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                      <svg className="w-5 h-5 text-[#5C5C5C] ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                  </div>
                </div>
                  
                  <div className="flex flex-col w-full lg:w-auto items-start gap-2">
                    <span className="text-[#1F1F1F] text-base font-medium">{"Waktu"}</span>
                    <div className="flex items-center bg-white py-3 px-4 rounded-lg border border-solid border-[#E04E4E] w-full lg:w-auto min-w-[220px]">
                      <svg className="w-5 h-5 mr-3 text-[#E04E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Kapan Mau Pinjam?"
                        className="text-[#5C5C5C] text-base flex-1 bg-transparent outline-none"
                        readOnly
                        onClick={() => {
                          if (!session) {
                            router.push("/auth/signin?callbackUrl=/dashboard/bookings/new");
                          } else {
                            router.push("/dashboard/bookings/new");
                          }
                        }}
                      />
                      <svg className="w-5 h-5 text-[#5C5C5C] ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex flex-col w-full lg:w-auto items-start gap-2">
                    <span className="text-[#1F1F1F] text-base font-medium opacity-0">{"Button"}</span>
                  <button
                      className="flex items-center justify-center bg-[#E04E4E] py-3 px-6 gap-3 rounded-lg border-0 text-white w-full lg:w-auto disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#c93e3e] transition-colors text-base font-medium whitespace-nowrap"
                    type="submit"
                      disabled={!selectedFasilitas}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-white text-base font-medium">
                        Cek Ketersediaan
                    </span>
                  </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-20 h-20 flex items-center justify-center hidden xl:block flex-shrink-0">
              <img src ={"/home_bubble.png"}/>
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch">
            <img
              src={
                "/Primary-Button.png"
              }
              className="w-[52px] h-[52px] object-fill"
            />
          </div>
        </div>
        <div id="fasilitas" className="flex flex-col items-start self-stretch py-12 md:py-24 gap-8 md:gap-12 px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-center self-stretch max-w-7xl mx-auto gap-6 lg:gap-[157px]">
            <span className="text-[#E04E4E] text-2xl md:text-[42px] font-bold w-full lg:w-[483px] text-center lg:text-left">
              {"Fasilitas Lengkap untuk Setiap Kebutuhan Acara"}
            </span>
            <span className="text-[#7A7A7A] text-sm md:text-base text-center lg:text-right w-full lg:w-[544px]">
              {
                "Dari aula hingga laboratorium, setiap ruang di SMK Telkom Malang sudah lengkap dengan fasilitas, siap mendukung berbagai acara, dan bisa dipesan dengan mudah kapan saja."
              }
            </span>
          </div>
          <div className="flex items-start overflow-x-auto max-w-7xl mx-auto gap-3 md:gap-[18px] px-4 pb-2 scrollbar-hide">
            <button
              className="flex shrink-0 items-center bg-[#E04E4E] text-left py-3.5 px-4 md:px-6 gap-2 rounded-xl border-0 whitespace-nowrap"
            >
              <img
                src={
                  "/Villa_Home_Icon_UIA_white.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-white text-sm md:text-base">{"Aula"}</span>
            </button>
            <button
              className="flex shrink-0 items-center bg-[#F3F3F3] text-left py-3.5 px-4 md:px-6 gap-2 rounded-xl border-0 whitespace-nowrap"
            >
              <img
                src={
                  "/Villa_Home_Icon_UIA.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-[#5C5C5C] text-base">
                {"Lab Cyber, Cloud & ITNSA (Lab 1)"}
              </span>
            </button>
            <button
              className="flex shrink-0 items-center bg-[#F3F3F3] text-left py-3.5 px-6 gap-2 rounded-xl border-0"
            >
              <img
                src={
                  "/Villa_Home_Icon_UIA.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-[#5C5C5C] text-base">
                {"Lab Podcast dan Rapat (Lab 2)"}
              </span>
            </button>
            <button
              className="flex shrink-0 items-center bg-[#F3F3F3] text-left py-3.5 px-6 gap-2 rounded-xl border-0"

            >
              <img
                src={
                  "/Villa_Home_Icon_UIA.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-[#5C5C5C] text-base">
                {"Lab Robotik (Lab 5)"}
              </span>
            </button>
            <button
              className="flex shrink-0 items-center bg-[#F3F3F3] text-left py-3.5 px-6 gap-2 rounded-xl border-0"
            >
              <img
                src={
                  "/Villa_Home_Icon_UIA.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-[#5C5C5C] text-base">
                {"Ruang Gabungan (34-36)"}
              </span>
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between self-stretch max-w-7xl mx-auto gap-4 px-4">
            <span className="text-[#1F1F1F] text-xl md:text-[32px] font-bold">
              {"Fasilitas Aula"}
            </span>
            <button
              className="flex shrink-0 items-center bg-white text-left py-3.5 px-4 md:px-6 gap-2 rounded-xl border border-solid border-[#E04E4E]"
            >
              <img
                src={
                  "/3d-cube-scan.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-[#E04E4E] text-base">
                {"Lihat 360 View"}
              </span>
            </button>
          </div>
          <div className="flex flex-col self-stretch max-w-7xl mx-auto gap-6 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3">
              <div className="flex flex-1 justify-between items-center">
                <div className="flex flex-col shrink-0 items-start gap-1">
                  <span className="text-[#1F1F1F] text-lg md:text-2xl font-bold">
                    {"Ruang yang Luas"}
                  </span>
                  <div className="flex items-start pr-0.5 gap-3">
                    <div className="bg-[#FF6767] w-0.5 h-[21px]"></div>
                    <span className="text-[#E04E4E] text-base">
                      {"15 × 16 meter"}
                    </span>
                  </div>
                </div>
                <img
                  src={
                    "/Right-Icon.png"
                  }
                  className="w-10 h-10 md:w-[52px] md:h-[52px] object-contain flex-shrink-0"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Penerangan Cukup"}
                  </span>
                  <div className="flex items-start self-stretch gap-3">
                    <div className="bg-[#FF6767] w-0.5 h-[21px]"></div>
                    <span className="flex-1 text-[#E04E4E] text-base">
                      {"Mendukung acara siang & malam"}
                    </span>
                  </div>
                </div>
                <img
                  src={
                    "/Right-Icon1.png"
                  }
                  className="w-10 h-10 md:w-[52px] md:h-[52px] object-fill"
                />
              </div>
              <div className="flex flex-1 justify-between items-center">
                <div className="flex flex-col shrink-0 items-start gap-1">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Sound System"}
                  </span>
                  <div className="flex items-start pr-0.5 gap-3">
                    <div className="bg-[#FF6767] w-0.5 h-[21px]"></div>
                    <span className="text-[#E04E4E] text-base">
                      {"Siap digunakan"}
                    </span>
                  </div>
                </div>
                <img
                  src={
                    "/Right-Icon2.png"
                  }
                  className="w-[52px] h-[52px] object-fill"
                />
              </div>
              <div className="flex flex-1 items-center gap-3">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Area Selasar Samping"}
                  </span>
                  <div className="flex items-start self-stretch gap-3">
                    <div className="bg-[#FF6767] w-0.5 h-[21px]"></div>
                    <span className="flex-1 text-[#E04E4E] text-base">
                      {"Bisa dipakai untuk tambahan ruang dalam acara"}
                    </span>
                  </div>
                </div>
                <img
                  src={
                    "/Right-Icon3.png"
                  }
                  className="w-[52px] h-[52px] object-fill"
                />
              </div>
            </div>
            <div className="flex items-start self-stretch gap-3">
              <div className="flex flex-1 justify-between items-center">
                <div className="flex flex-col shrink-0 items-center gap-1">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Pendingin Ruangan"}
                  </span>
                  <div className="flex items-start pr-0.5 gap-3">
                    <div className="bg-[#FF6767] w-0.5 h-[21px]"></div>
                    <span className="text-[#E04E4E] text-base">
                      {"AC & kipas angin tersedia"}
                    </span>
                  </div>
                </div>
                <img
                  src={
                    "/Right-Icon4.png"
                  }
                  className="w-[52px] h-[52px] object-fill"
                />
              </div>
              <div className="flex flex-1 justify-between items-center">
                <div className="flex flex-col shrink-0 items-start gap-1">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Kapasitas Banyak"}
                  </span>
                  <div className="flex items-start pr-[3px] gap-3">
                    <div className="bg-[#FF6767] w-0.5 h-[21px]"></div>
                    <span className="text-[#E04E4E] text-base">
                      {"Dapat mencapai 600 orang"}
                    </span>
                  </div>
                </div>
                <img
                  src={
                    "/Right-Icon5.png"
                  }
                  className="w-[52px] h-[52px] object-fill"
                />
              </div>
            </div>
            <div className="flex items-start self-stretch gap-3">
              <div className="flex flex-1 justify-between items-center">
                <div className="flex flex-col shrink-0 items-start gap-1">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Kursi Lengkap"}
                  </span>
                  <div className="flex items-start pr-0.5 gap-3">
                    <div className="bg-[#FF6767] w-0.5 h-[21px]"></div>
                    <span className="text-[#E04E4E] text-base">
                      {"Siap dipakai sesuai kebutuhan"}
                    </span>
                  </div>
                </div>
                <img
                  src={
                    "/Right-Icon6.png"
                  }
                  className="w-[52px] h-[52px] object-fill"
                />
              </div>
              <div className="flex flex-1 items-center gap-3">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Security"}
                  </span>
                  <div className="flex items-start self-stretch gap-3">
                    <div className="bg-[#FF6767] w-0.5 h-[21px]"></div>
                    <span className="flex-1 text-[#E04E4E] text-base">
                      {"Siap menjaga keamanan acara & kendaraan anda"}
                    </span>
                  </div>
                </div>
                <img
                  src={
                    "/Right-Icon7.png"
                  }
                  className="w-[52px] h-[52px] object-fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch py-12 px-4">
          <div className="flex flex-col w-full max-w-7xl py-6 md:py-12 gap-8 md:gap-16">
            <div className="flex flex-col lg:flex-row items-center self-stretch gap-6 lg:gap-3">
              <div className="flex flex-col py-4 md:py-[27px] gap-4 md:gap-[18px] lg:flex-1">
                <span className="text-[#1F1F1F] text-2xl md:text-[42px] font-bold text-center lg:text-left">
                  {"Tidak Cuma Ruangan, Peralatan Pun Bisa!"}
                </span>
                <span className="text-[#7A7A7A] text-sm md:text-base text-center lg:text-left">
                  {
                    "Mulai dari microphone, sound system, kursi lipat, hingga perlengkapan tambahan lain—semuanya tersedia dan siap dipakai kapan saja. Pesan dengan mudah, tanpa ribet, langsung dari satu sistem."
                  }
                </span>
              </div>
              <div className="flex items-center gap-2.5 overflow-x-auto">
                <div className="flex flex-col shrink-0 items-center gap-2.5">
                  <img
                    src={
                      "/Mic.png"
                    }
                    className="w-[200px] md:w-[257px] h-[200px] md:h-[260px] object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-white text-2xl font-bold bg-[#FF6767] py-6 px-14 rounded-b-lg">
                      {"Microphone"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col shrink-0 items-center gap-2.5">
                  <div className="flex flex-col items-start bg-cover bg-center">
                    <span className="text-white text-2xl font-bold bg-[#FF6767] py-8 px-20 rounded-b-lg ">
                      {"Speaker"}
                    </span>
                  </div>
                  <img
                    src={
                      "/Microphone.png"
                    }
                    className="w-[257px] h-[260px] object-fill"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 self-stretch">
              <div className="flex items-start py-2 px-3 gap-3.5">
                <img
                  src={
                    "/Mic-Icon.png"
                  }
                  className="w-[58px] h-[58px] object-fill"
                />
                <div className="flex flex-col shrink-0 items-start gap-1.5">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Microphone"}
                  </span>
                  <span className="text-[#7A7A7A] text-base">
                    {"Lebih dari 16 unit"}
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 items-start gap-[13px]">
                <img
                  src={
                    "/Right-Icon2.png"
                  }
                  className="w-[58px] h-[58px] object-fill"
                />
                <div className="flex flex-col shrink-0 items-start gap-1.5">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Sound System"}
                  </span>
                  <span className="text-[#7A7A7A] text-base">
                    {"Lebih dari 5 set"}
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 items-start gap-[13px]">
                <img
                  src={
                    "/Right-Icon.png"
                  }
                  className="w-[58px] h-[58px] object-fill"
                />
                <div className="flex flex-col shrink-0 items-start gap-1.5">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Kursi Lipat"}
                  </span>
                  <span className="text-[#7A7A7A] text-base">
                    {"Lebih dari 200 unit"}
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 items-start gap-3.5">
                <img
                  src={
                    "/Right-Icon.png"
                  }
                  className="w-[58px] h-[58px] object-fill"
                />
                <div className="flex flex-col shrink-0 items-start gap-1.5">
                  <span className="text-[#1F1F1F] text-2xl font-bold">
                    {"Perlengkapan Lain"}
                  </span>
                  <span className="text-[#7A7A7A] text-base">
                    {"Dapat menunjang kelancaran acara"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch py-12 mb-12 md:mb-24 px-4">
          <div id="jadwal" className="flex flex-col w-full max-w-7xl py-6 md:py-12 gap-8 md:gap-12">
            <div className="flex flex-col lg:flex-row items-center self-stretch gap-6 lg:gap-16">
              <span className="text-[#1F1F1F] text-2xl md:text-[42px] font-bold w-full lg:w-[570px] text-center lg:text-left">
                {"Jadwal Penggunaan Fasilitas \nSMK Telkom Malang"}
              </span>
              <span className="text-[#7A7A7A] text-sm md:text-base text-center lg:text-right lg:flex-1">
              </span>
            </div>
            <div className="flex flex-col lg:flex-row items-start self-stretch gap-6 lg:gap-[78px]">
              <div className="beautiful-calendar flex flex-col items-start bg-gradient-to-br from-[#FFF0F0] to-[#FFE5E5] py-6 px-4 gap-6 rounded-2xl border-2 border-solid border-[#E04E4E] shadow-lg w-full lg:w-auto hover:shadow-xl transition-shadow duration-300">
                <DayPicker
                  mode="single"
                  selected={scheduleDate}
                  onSelect={setScheduleDate}
                  month={scheduleDate}
                  onMonthChange={setScheduleDate}
                  className="!text-[#1F1F1F]"
                  modifiers={{
                    booked: bookedDates,
                  }}
                  modifiersClassNames={{
                    booked: "booked-date",
                  }}
                />
                {loading && (
                  <div className="w-full text-center py-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="loading-spinner"></div>
                      <span className="text-[#E04E4E] text-sm font-medium">Loading events...</span>
                    </div>
                  </div>
                )}
                {!loading && events.length > 0 && (
                  <div className="w-full text-center">
                    <div className="flex items-center justify-center gap-2 text-xs text-[#7A7A7A]">
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#E04E4E] to-[#FF6767]"></span>
                        Booked
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full border-2 border-[#E04E4E]"></span>
                        Today
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-start gap-3 w-full lg:flex-1">
                <div className="flex flex-col gap-4 flex-1 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {selectedDateEvents.length > 0 ? (
                    selectedDateEvents.map((event, index) => (
                      <div 
                        key={event.id} 
                        className="event-card flex flex-col items-start self-stretch p-4 gap-2 bg-white rounded-xl border border-[#FFE5E5] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        <span className="text-[#1F1F1F] text-xl font-bold">
                          {event.title}
                        </span>
                        <div className="flex items-start pr-0.5 gap-3">
                          <div className="bg-gradient-to-b from-[#E04E4E] to-[#FF6767] w-1 h-[21px] rounded-full"></div>
                          <span className="text-[#E04E4E] text-base font-medium">
                            {event.startDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                            {event.startDate.toDateString() !== event.endDate.toDateString() && 
                              ` - ${event.endDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}`
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <button
                            className="flex items-center bg-gradient-to-r from-[#FFF0F0] to-[#FFE5E5] text-left py-1.5 px-4 rounded-full border border-[#E04E4E] hover:from-[#E04E4E] hover:to-[#FF6767] hover:text-white transition-all duration-300"
                            onClick={() => alert(`Facility: ${event.facility}`)}
                          >
                            <span className="text-sm font-semibold">{event.facility}</span>
                          </button>
                          {event.organizer && (
                            <span className="text-[#7A7A7A] text-sm">
                              📅 {event.organizer}
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center self-stretch py-12 gap-3 bg-gradient-to-br from-white to-[#FFF9F9] rounded-xl border-2 border-dashed border-[#FFE5E5]">
                      <span className="text-[#7A7A7A] text-lg font-semibold">
                        Tidak ada acara
                      </span>
                      <span className="text-[#B6B6B6] text-sm text-center px-4">
                        Tidak ada jadwal booking pada tanggal ini.<br/>
                        Silahkan untuk dapat memilih tanggal ini.
                      </span>
                    </div>
                  )}
                </div>
                <div className="bg-gradient-to-b from-[#E04E4E] to-[#FF6767] w-1 min-h-[100px] rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Galeri Kegiatan Section */}
        <div id="galeri" className="flex flex-col items-center self-stretch mb-12 px-4 md:px-32 gap-8">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6 animate-fade-in-up">
              Galeri Kegiatan
            </h2>
            <p className="text-lg md:text-xl text-[#7A7A7A] leading-relaxed animate-fade-in-up animation-delay-200">
              Dari workshop teknologi hingga acara besar, semua kegiatan bisa kalian lihat disini untuk inspirasi dan referensi acara kalian sendiri.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-[#E04E4E] to-[#FF6767] rounded-full animate-fade-in-up animation-delay-400"></div>
        </div>
          </div>
        </div>
        
        {/* Gallery Cards with Modern Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 self-stretch mb-12 md:mb-24 px-4 md:px-12">
          {/* Jobfair & Edufair Card */}
          <div className="group gallery-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/JobFair.png"
                alt="Jobfair & Edufair"
                className="gallery-image w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/placeholder-event.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-3 right-3">
                <span className="bg-[#E04E4E] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Career
            </span>
          </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-2 group-hover:text-[#E04E4E] transition-colors duration-300">
                Jobfair & Edufair
              </h3>
              <p className="text-sm text-[#7A7A7A] mb-3 line-clamp-2">
                Acara pameran kerja dan pendidikan yang menghubungkan siswa dengan perusahaan terkemuka
              </p>
              <div className="flex items-center justify-between text-xs text-[#7A7A7A]">
                <span>15 Maret 2024</span>
                <span>Aula</span>
              </div>
            </div>
          </div>

          {/* Kick-Off Cyber Heroes Card */}
          <div className="group gallery-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up animation-delay-200">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/kickoff.png"
                alt="Kick-Off Cyber Heroes"
                className="gallery-image w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/placeholder-event.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-3 right-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Technology
              </span>
            </div>
          </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-2 group-hover:text-[#E04E4E] transition-colors duration-300">
                Kick-Off Cyber Heroes
              </h3>
              <p className="text-sm text-[#7A7A7A] mb-3 line-clamp-2">
                Peluncuran program cyber security untuk membentuk generasi digital yang aman
              </p>
              <div className="flex items-center justify-between text-xs text-[#7A7A7A]">
                <span>24 Januari 2023</span>
                <span>Lab 7</span>
              </div>
            </div>
          </div>

          {/* Sosialisasi Kurikulum Card */}
          <div className="group gallery-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up animation-delay-400">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/kurikulum.png"
                alt="Sosialisasi Kurikulum"
                className="gallery-image w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/placeholder-event.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-3 right-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Education
              </span>
            </div>
          </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-2 group-hover:text-[#E04E4E] transition-colors duration-300">
                Sosialisasi Kurikulum
              </h3>
              <p className="text-sm text-[#7A7A7A] mb-3 line-clamp-2">
                Presentasi kurikulum terbaru untuk mempersiapkan siswa menghadapi era digital
              </p>
              <div className="flex items-center justify-between text-xs text-[#7A7A7A]">
                <span>24 Januari 2023</span>
                <span>Aula</span>
              </div>
            </div>
          </div>

          {/* Kunjungan Pak Onno Card */}
          <div className="group gallery-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up animation-delay-600">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/pakonno.png"
                alt="Kunjungan Pak Onno"
                className="gallery-image w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/placeholder-event.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-3 right-3">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Inspiration
            </span>
          </div>
        </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-2 group-hover:text-[#E04E4E] transition-colors duration-300">
                Kunjungan Pak Onno
              </h3>
              <p className="text-sm text-[#7A7A7A] mb-3 line-clamp-2">
                Kunjungan tokoh teknologi Indonesia untuk berbagi inspirasi dan motivasi
              </p>
              <div className="flex items-center justify-between text-xs text-[#7A7A7A]">
                <span>10 Februari 2023</span>
                <span>Aula</span>
            </div>
              </div>
              </div>

          {/* Roblox Competition Card */}
          <div className="group gallery-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up animation-delay-800">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Roblox1.png"
                alt="Roblox Competition"
                className="gallery-image w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/placeholder-event.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-3 right-3">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Competition
                  </span>
                </div>
              </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-2 group-hover:text-[#E04E4E] transition-colors duration-300">
                Roblox Competition
              </h3>
              <p className="text-sm text-[#7A7A7A] mb-3 line-clamp-2">
                Kompetisi game development menggunakan platform Roblox Studio
              </p>
              <div className="flex items-center justify-between text-xs text-[#7A7A7A]">
                <span>5 April 2024</span>
                <span>Lab 5</span>
            </div>
          </div>
        </div>
              </div>
        
        {/* FAQ Section */}
        <div id="faq">
          <FAQSection />
        </div>
        
        {/* Ask Question Section */}
        <AskQuestionSection />
        
        {/* Footer Images Section */}
        <div className="flex flex-col items-center self-stretch bg-gray-50 py-12 md:py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-8 text-center">
            Powered by
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 lg:gap-16">
            {/* Footer Image 1 */}
            <div className="flex items-center justify-center">
              <img
                src="/Footer1.jpg"
                alt="Footer Sponsor 1"
                className="w-full max-w-[300px] h-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
                  </div>
            
            {/* Footer Image 2 */}
            <div className="flex items-center justify-center">
              <img
                src="/Footer2.jpg"
                alt="Footer Sponsor 2"
                className="w-full max-w-[300px] h-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>
        
        <div id="kontak" className="flex flex-col lg:flex-row justify-between items-start self-stretch bg-white py-12 md:py-[82px] px-4 md:px-12 lg:px-32 gap-12 lg:gap-0">
          <div className="flex flex-col items-start w-full lg:w-auto">
            <div className="flex flex-col items-start mb-12 lg:mb-32 gap-3">
              <div className="flex items-center pr-[9px] gap-3.5">
                <img
                  src="/logo.png"
                  alt="Booking SMK Telkom Malang Logo"
                  className="w-[39px] h-[39px] object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-[#1F1F1F] text-base font-bold leading-tight">
                    {"Booking"}
                  </span>
                  <span className="text-[#1F1F1F] text-sm font-bold leading-tight">
                    {"SMK Telkom Malang"}
                </span>
                </div>
              </div>
              <span className="text-[#989898] text-base w-[348px]">
                {"Platform Penyewaan Fasiltas dan Peralatan SMK Telkom Malang"}
              </span>
            </div>
            <span className="text-[#7A7A7A] text-sm md:text-base">
              {"© 2024 Copyright MokletDev"}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-12 sm:gap-[269px] w-full lg:w-auto">
            <div className="flex flex-col items-start gap-[22px]">
              <span className="text-[#1F1F1F] text-base">{"Menu Utama"}</span>
              <div className="flex flex-col items-start gap-3">
                <span className="text-[#7A7A7A] text-base">{"Fasilitas"}</span>
                <span className="text-[#7A7A7A] text-base">{"Jadwal"}</span>
                <span className="text-[#7A7A7A] text-base">{"FAQ"}</span>
                <span className="text-[#7A7A7A] text-base">{"Kontak"}</span>
              </div>
            </div>
            <div className="flex flex-col shrink-0 items-start gap-[22px]">
              <div className="flex items-start gap-3">
                {/* Instagram Icon */}
                <a href="#" className="text-[#7A7A7A] hover:text-[#E04E4E] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Facebook Icon */}
                <a href="#" className="text-[#7A7A7A] hover:text-[#E04E4E] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Twitter Icon */}
                <a href="#" className="text-[#7A7A7A] hover:text-[#E04E4E] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-[11px] rounded-xl">
                <span className="text-[#1F1F1F] text-base">
                  {"booking@smktelkom-mlg.sch.id"}
                </span>
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/j1xbgzoh_expires_30_days.png"
                  }
                  className="w-6 h-6 rounded-xl object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
