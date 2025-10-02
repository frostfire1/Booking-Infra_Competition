"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Navbar } from "../components/navbar";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./calendar-styles.css";

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

  const [input1, onChangeInput1] = useState("");
  const [input2, onChangeInput2] = useState("");
  const [input3, onChangeInput3] = useState("");

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
            <img
              src={"/cube_bubble.png"}
              className="w-[83px] h-[83px] object-contain hidden xl:block xl:mt-[35px] xl:mr-[132px] flex-shrink-0"
            />
            <div className="flex flex-col items-center gap-6 md:gap-9 w-full lg:w-auto">
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="text-[#1F1F1F] text-2xl md:text-[42px] font-bold px-4">
                  {"Hai, Mau Booking Apa?"}
                </span>
                <span className="text-[#7A7A7A] text-sm md:text-base px-4">
                  {"Temukan Ruangan dan Tempat yang Cocok Untuk Acaramu!"}
                </span>
              </div>
              <form
                className="flex flex-col lg:flex-row items-start bg-[#FFF0F0] py-3 sm:py-4 px-3 sm:px-5 gap-4 lg:gap-3 rounded-xl border border-solid border-[#E04E4E] w-full max-w-4xl overflow-x-hidden"
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
                <div className="flex flex-col w-full lg:w-auto items-start gap-2.5">
                  <span className="text-[#1F1F1F] text-lg">{"Fasilitas"}</span>
                  <div className="flex items-center bg-white py-2 sm:py-3 px-3 sm:px-[18px] rounded-xl border border-solid border-[#D5D5D5] w-full lg:w-auto">
                    <img
                      src="/home_icon.png"
                      className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-[18px] object-contain flex-shrink-0"
                    />
                    <select
                      className="text-[#5C5C5C] text-sm sm:text-base flex-1 bg-transparent outline-none min-w-0 max-w-full"
                      value={selectedFasilitas}
                      onChange={(e) => {
                        setSelectedFasilitas(e.target.value);
                        setSelectedRange(undefined);
                      }}
                      required
                    >
                      <option value="" disabled>
                        Pilih Fasilitas
                      </option>
                      {fasilitasList.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {selectedFasilitas && (
                  <div className="flex flex-col w-full lg:w-auto items-start gap-2.5 lg:ml-6">
                    <span className="text-[#1F1F1F] text-base sm:text-lg">{"Waktu"}</span>
                    <div className="beautiful-calendar bg-white py-2 sm:py-3 px-2 sm:px-[18px] rounded-xl border border-solid border-[#D5D5D5] w-full lg:w-auto overflow-x-auto">
                      <DayPicker
                        mode="range"
                        selected={selectedRange}
                        onSelect={setSelectedRange}
                        className="!text-[#5C5C5C]"
                        required
                        modifiersClassNames={{
                          selected: "bg-[#E04E4E]",
                          range_start: "bg-[#E04E4E] text-white rounded-l-full",
                          range_end: "bg-[#E04E4E] text-white rounded-r-full",
                          range_middle: "bg-[#FFF0F0] text-[#E04E4E]",
                          today: "text-black font-bold",
                        }}
                      />
                    </div>
                  </div>
                )}
                <div className="flex flex-col w-full lg:w-auto items-center lg:pt-[30px] mt-2">
                  <button
                    className="flex items-center justify-center bg-[#E04E4E] py-3 sm:py-3.5 px-4 sm:px-6 gap-2 sm:gap-3 rounded-xl border-0 text-white w-full lg:w-auto disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#c93e3e] transition-colors text-sm sm:text-base"
                    type="submit"
                    disabled={
                      !selectedFasilitas ||
                      !selectedRange?.from ||
                      !selectedRange?.to
                    }
                  >
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/lkqxj5gn_expires_30_days.png"
                      className="w-6 h-6 rounded-xl object-fill"
                    />
                    <span className="text-white text-base">
                      {"Cek Ketersediaan"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <img
              src={
                "/home_bubble.png"
              }
              className="w-[86px] h-[86px] object-contain hidden xl:block flex-shrink-0"
            />
          </div>
          <div className="flex flex-col items-center self-stretch">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/pngtu9qt_expires_30_days.png"
              }
              className="w-[52px] h-[52px] object-fill"
            />
          </div>
        </div>
        <div className="flex flex-col items-start self-stretch py-12 md:py-24 gap-8 md:gap-12 px-4">
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
              onClick={() => alert("Pressed!")}
            >
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/a4k44sdc_expires_30_days.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-white text-sm md:text-base">{"Aula"}</span>
            </button>
            <button
              className="flex shrink-0 items-center bg-[#F3F3F3] text-left py-3.5 px-4 md:px-6 gap-2 rounded-xl border-0 whitespace-nowrap"
              onClick={() => alert("Pressed!")}
            >
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/y897qdz8_expires_30_days.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-[#5C5C5C] text-base">
                {"Lab Cyber, Cloud & ITNSA (Lab 1)"}
              </span>
            </button>
            <button
              className="flex shrink-0 items-center bg-[#F3F3F3] text-left py-3.5 px-6 gap-2 rounded-xl border-0"
              onClick={() => alert("Pressed!")}
            >
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/wwn84hrf_expires_30_days.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-[#5C5C5C] text-base">
                {"Lab Podcast dan Rapat (Lab 2)"}
              </span>
            </button>
            <button
              className="flex shrink-0 items-center bg-[#F3F3F3] text-left py-3.5 px-6 gap-2 rounded-xl border-0"
              onClick={() => alert("Pressed!")}
            >
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/ayti04qm_expires_30_days.png"
                }
                className="w-6 h-6 rounded-xl object-fill"
              />
              <span className="text-[#5C5C5C] text-base">
                {"Lab Robotik (Lab 5)"}
              </span>
            </button>
            <button
              className="flex shrink-0 items-center bg-[#F3F3F3] text-left py-3.5 px-6 gap-2 rounded-xl border-0"
              onClick={() => alert("Pressed!")}
            >
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/7xy85rye_expires_30_days.png"
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
              onClick={() => alert("Pressed!")}
            >
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/6lqyugt6_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/j1a1et3d_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/dpwg4k68_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/qdgsrs4l_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/xhue71fc_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/bwxiku31_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/39sgmga4_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/l6aujw9g_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/k5eior8v_expires_30_days.png"
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
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/moijxyov_expires_30_days.png"
                    }
                    className="w-[200px] md:w-[257px] h-[200px] md:h-[260px] object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex flex-col items-start bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/d370p2x8_expires_30_days.png')] bg-cover bg-center py-[47px] px-[59px]">
                    <span className="text-white text-2xl font-bold">
                      {"Microphone"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col shrink-0 items-center gap-2.5">
                  <div className="flex flex-col items-start bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/j8qz4du3_expires_30_days.png')] bg-cover bg-center py-[47px] px-[81px]">
                    <span className="text-white text-2xl font-bold">
                      {"Speaker"}
                    </span>
                  </div>
                  <img
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/uh34d89h_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/qot682tt_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/joz5takd_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/jxy6msv0_expires_30_days.png"
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
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/in73w3wn_expires_30_days.png"
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
          <div className="flex flex-col w-full max-w-7xl py-6 md:py-12 gap-8 md:gap-12">
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
        <div className="flex flex-col items-center self-stretch mb-12 px-4 md:px-32 gap-2.5">
          <span className="text-[#1F1F1F] text-[42px] font-bold">
            {"Galeri Kegiatan"}
          </span>
          <span className="text-[#7A7A7A] text-sm md:text-base text-center">
            {
              "Dari workshop teknologi hingga acara besar, semua kegiatan bisa kalian lihat disini untuk inspirasi dan referensi acara kalian sendiri."
            }
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 self-stretch mb-12 md:mb-24 px-4 md:px-12">
          <div className="flex flex-col shrink-0 items-center mt-[50px] mr-12 gap-5">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/e3ts3kzf_expires_30_days.png"
              }
              className="w-full h-[193px] object-cover rounded-lg flex-shrink-0"
              loading="lazy"
            />
            <span className="text-[#1F1F1F] text-2xl font-bold">
              {"Jobfair & Edufair"}
            </span>
          </div>
          <div className="flex flex-col shrink-0 items-center mt-[50px] mr-12">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/sv9nf7cu_expires_30_days.png"
              }
              className="w-[319px] h-[193px] mb-5 object-fill"
            />
            <span className="text-[#1F1F1F] text-2xl font-bold mb-2">
              {"Kick-Off Cyber Heroes"}
            </span>
            <span className="text-[#5C5C5C] text-sm mb-2">
              {"24 Januari 2023"}
            </span>
            <button
              className="flex flex-col items-start bg-[#FFF0F0] text-left py-1 px-3 rounded-[9999px] border-0"
              onClick={() => alert("Pressed!")}
            >
              <span className="text-[#E04E4E] text-base">{"Lab7"}</span>
            </button>
          </div>
          <div className="flex flex-1 flex-col mr-3 gap-5">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/7nwpn1me_expires_30_days.png"
              }
              className="self-stretch h-[279px] object-fill"
            />
            <div className="flex flex-col items-center self-stretch mx-[70px] gap-2">
              <span className="text-[#1F1F1F] text-[32px] font-bold">
                {"Sosialisasi Kurikulum"}
              </span>
              <span className="text-[#5C5C5C] text-base mx-[101px]">
                {"24 Januari 2023"}
              </span>
              <button
                className="flex flex-col items-start bg-[#FFF0F0] text-left py-1 px-3 rounded-[9999px] border-0"
                onClick={() => alert("Pressed!")}
              >
                <span className="text-[#E04E4E] text-base">{"Aula"}</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col shrink-0 items-center mt-[50px] mr-12 gap-5">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/ktuklsbd_expires_30_days.png"
              }
              className="w-[319px] h-[193px] object-fill"
            />
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#1F1F1F] text-2xl font-bold">
                {"Kunjungan Pak Onno"}
              </span>
              <span className="text-[#5C5C5C] text-sm">
                {"10 Februari 2023"}
              </span>
              <button
                className="flex flex-col items-start bg-[#FFF0F0] text-left py-1 px-3 rounded-[9999px] border-0"
                onClick={() => alert("Pressed!")}
              >
                <span className="text-[#E04E4E] text-base">{"Aula"}</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col shrink-0 items-start mt-[50px] gap-5">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/61uhmts7_expires_30_days.png"
              }
              className="w-[319px] h-[193px] object-fill"
            />
            <span className="text-[#1F1F1F] text-2xl font-bold ml-[45px]">
              {"Roblox Competition"}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch bg-[#E04E4E] py-12 md:py-[67px] px-4">
          <div className="flex flex-col lg:flex-row items-start w-full max-w-7xl py-6 md:py-12 gap-8 lg:gap-[135px]">
            <div className="flex flex-col items-start gap-2.5 w-full lg:w-auto">
              <span className="text-white text-2xl md:text-[42px] font-bold w-full lg:w-[302px] text-center lg:text-left">
                {"Frequently Ask Question"}
              </span>
              <span className="text-white text-sm md:text-base w-full lg:w-[423px] text-center lg:text-left">
                {
                  "Beberapa pertanyaan yang sering diajukan oleh beberapa orang terkait dengan platform ini"
                }
              </span>
            </div>
            <div className="flex flex-col gap-2.5 w-full lg:flex-1">
              <div
                className="flex justify-between items-center self-stretch bg-white py-6 pl-6 pr-[109px] rounded-xl border border-solid border-gray-200"
                style={{
                  boxShadow: "0px 4px 15px #0000001A",
                }}
              >
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/3m4zwn50_expires_30_days.png"
                  }
                  className="w-7 h-7 rounded-xl object-fill"
                />
                <input
                  placeholder={"Bagaimana cara mengajukan peminjaman ruangan?"}
                  value={input1}
                  onChange={(event) => onChangeInput1(event.target.value)}
                  className="flex-1 self-stretch text-[#1F1F1F] bg-transparent text-xl font-bold border-0"
                />
              </div>
              <div
                className="flex justify-between items-center self-stretch bg-white py-6 pl-6 pr-[62px] rounded-xl border border-solid border-gray-200"
                style={{
                  boxShadow: "0px 4px 15px #0000001A",
                }}
              >
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/1sah9yx0_expires_30_days.png"
                  }
                  className="w-7 h-7 rounded-xl object-fill"
                />
                <input
                  placeholder={"Berapa lama proses persetujuan peminjaman?"}
                  value={input2}
                  onChange={(event) => onChangeInput2(event.target.value)}
                  className="flex-1 self-stretch text-[#1F1F1F] bg-transparent text-xl font-bold py-[1px] border-0"
                />
              </div>
              <button
                className="flex items-start self-stretch bg-white text-left p-6 gap-8 rounded-xl border border-solid border-gray-200"
                style={{
                  boxShadow: "0px 4px 15px #0000001A",
                }}
                onClick={() => alert("Pressed!")}
              >
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/i8td3w0g_expires_30_days.png"
                  }
                  className="w-7 h-7 rounded-xl object-fill"
                />
                <span className="flex-1 text-[#1F1F1F] text-xl font-bold">
                  {
                    "Apakah saya bisa membatalkan peminjaman yang sudah diajukan?"
                  }
                </span>
              </button>
              <div
                className="flex flex-col items-start self-stretch bg-white py-6 gap-5 rounded-xl border border-solid border-gray-200"
                style={{
                  boxShadow: "0px 4px 15px #0000001A",
                }}
              >
                <div className="flex items-start ml-6 gap-8">
                  <img
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/c9qjvfme_expires_30_days.png"
                    }
                    className="w-7 h-7 rounded-xl object-fill"
                  />
                  <span className="text-[#1F1F1F] text-xl font-bold w-[362px]">
                    {"Apakah Website ini bisa diakses lewat smartphone?"}
                  </span>
                </div>
                <span className="text-[#7A7A7A] text-base ml-[84px] mr-[45px]">
                  {
                    "Ya! Website ini sudah mendukung tampilan responsif, sehingga bisa diakses dengan nyaman lewat laptop maupun perangkat mobile."
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch py-12 px-4">
          <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl py-6 md:py-12 gap-8 lg:gap-[84px]">
            <div className="flex flex-col items-start bg-white py-[26px] gap-6 rounded-[20px] border border-solid border-[#D5D5D5] w-full lg:flex-1 order-2 lg:order-1">
              <div className="flex items-center ml-[22px] gap-[9px]">
                <span className="text-[#1F1F1F] text-lg">{"Powered by"}</span>
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/76q0z6q8_expires_30_days.png"
                  }
                  className="w-[135px] h-[27px] object-fill"
                />
              </div>
              <div className="flex flex-col items-start self-stretch mx-[22px]">
                <div className="flex items-start mb-[198px] gap-4">
                  <img
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/fh4msvpm_expires_30_days.png"
                    }
                    className="w-[52px] h-[52px] object-fill"
                  />
                  <div className="flex flex-col shrink-0 items-start gap-1.5">
                    <span className="text-[#1F1F1F] text-sm">
                      {"AgentMoklet"}
                    </span>
                    <button
                      className="flex flex-col items-start bg-white text-left py-3.5 px-4 rounded-xl border border-solid border-[#D5D5D5]"
                      onClick={() => alert("Pressed!")}
                    >
                      <span className="text-[#1F1F1F] text-base">
                        {"Halo, Aku AgentMoklet, ada yang bisa dibantu?"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex items-start self-stretch gap-2.5">
                  <input
                    placeholder={"Halo Min..."}
                    value={input3}
                    onChange={(event) => onChangeInput3(event.target.value)}
                    className="flex-1 self-stretch text-[#B6B6B6] bg-transparent text-base py-[15px] pl-4 pr-8 rounded-xl border border-solid border-[#D5D5D5]"
                  />
                  <img
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/7nvspfsw_expires_30_days.png"
                    }
                    className="w-[52px] h-[52px] object-fill"
                  />
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
        <div className="flex flex-col lg:flex-row justify-between items-start self-stretch bg-white py-12 md:py-[82px] px-4 md:px-12 lg:px-32 gap-12 lg:gap-0">
          <div className="flex flex-col items-start w-full lg:w-auto">
            <div className="flex flex-col items-start mb-12 lg:mb-32 gap-3">
              <div className="flex items-center pr-[9px] gap-3.5">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/0my4fxbr_expires_30_days.png"
                  }
                  className="w-[39px] h-[39px] object-fill"
                />
                <span className="text-[#1F1F1F] text-base font-bold w-[142px]">
                  {"Booking\nSMK Telkom Malang"}
                </span>
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
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/2crgat1a_expires_30_days.png"
                  }
                  className="w-6 h-6 object-fill"
                />
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/d3z7etj5_expires_30_days.png"
                  }
                  className="w-6 h-6 object-fill"
                />
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bY5eFE0JJD/dl9zg9t7_expires_30_days.png"
                  }
                  className="w-6 h-6 object-fill"
                />
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
