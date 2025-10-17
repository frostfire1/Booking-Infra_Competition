"use client";
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';

// Data galeri kegiatan
const galleryData = [
  {
    id: 1,
    title: "Jobfair & Edufair",
    description: "Acara pameran kerja dan pendidikan yang menghubungkan siswa dengan perusahaan terkemuka",
    image: "/JobFair.png",
    date: "15 Maret 2024",
    location: "Aula",
    category: "Career",
    featured: true
  },
  {
    id: 2,
    title: "Kick-Off Cyber Heroes",
    description: "Peluncuran program cyber security untuk membentuk generasi digital yang aman",
    image: "/kickoff.png",
    date: "24 Januari 2023",
    location: "Lab 7",
    category: "Technology",
    featured: true
  },
  {
    id: 3,
    title: "Sosialisasi Kurikulum",
    description: "Presentasi kurikulum terbaru untuk mempersiapkan siswa menghadapi era digital",
    image: "/kurikulum.png",
    date: "24 Januari 2023",
    location: "Aula",
    category: "Education",
    featured: false
  },
  {
    id: 4,
    title: "Kunjungan Pak Onno",
    description: "Kunjungan tokoh teknologi Indonesia untuk berbagi inspirasi dan motivasi",
    image: "/pakonno.png",
    date: "10 Februari 2023",
    location: "Aula",
    category: "Inspiration",
    featured: false
  },
  {
    id: 5,
    title: "Roblox Competition",
    description: "Kompetisi game development menggunakan platform Roblox Studio",
    image: "/Roblox1.png",
    date: "5 April 2024",
    location: "Lab 5",
    category: "Competition",
    featured: false
  },
  {
    id: 6,
    title: "Workshop AI & Machine Learning",
    description: "Pelatihan intensif tentang kecerdasan buatan dan pembelajaran mesin",
    image: "/workshop-ai.png",
    date: "20 Maret 2024",
    location: "Lab 1",
    category: "Technology",
    featured: false
  },
  {
    id: 7,
    title: "Hackathon 2024",
    description: "Kompetisi coding 24 jam untuk mengembangkan solusi inovatif",
    image: "/hackathon.png",
    date: "12 Mei 2024",
    location: "Lab Gabungan",
    category: "Competition",
    featured: true
  },
  {
    id: 8,
    title: "Seminar Digital Marketing",
    description: "Pembelajaran strategi pemasaran digital untuk era modern",
    image: "/seminar-digital.png",
    date: "8 Juni 2024",
    location: "Lab 2",
    category: "Business",
    featured: false
  }
];

const categoryColors = {
  Career: "bg-blue-100 text-blue-800",
  Technology: "bg-purple-100 text-purple-800",
  Education: "bg-green-100 text-green-800",
  Inspiration: "bg-yellow-100 text-yellow-800",
  Competition: "bg-red-100 text-red-800",
  Business: "bg-indigo-100 text-indigo-800"
};

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(galleryData.map(item => item.category))];
  const featuredEvents = galleryData.filter(item => item.featured);
  const filteredEvents = selectedCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#E04E4E] mx-auto"></div>
            <p className="mt-4 text-[#1F1F1F] text-lg">Memuat galeri...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#E04E4E] to-[#c93e3e]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Galeri Kegiatan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Dari workshop teknologi hingga acara besar, semua kegiatan bisa kalian lihat disini untuk inspirasi dan referensi acara kalian sendiri.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-white/30 rounded-full animate-fade-in-up animation-delay-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4">
              Acara Unggulan
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-2xl mx-auto">
              Kegiatan-kegiatan terbaik yang telah berhasil diselenggarakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div
                key={event.id}
                className="group gallery-card relative bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="gallery-image w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder-event.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#E04E4E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[event.category]}`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#E04E4E] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-[#7A7A7A] text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-[#7A7A7A]">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-[#E04E4E]/90 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredCard === event.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white text-[#E04E4E] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events with Filter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4">
              Semua Kegiatan
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-2xl mx-auto mb-8">
              Jelajahi semua kegiatan yang telah diselenggarakan berdasarkan kategori
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#E04E4E] text-white shadow-lg transform scale-105'
                      : 'bg-white text-[#7A7A7A] hover:bg-[#E04E4E] hover:text-white hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="group gallery-card bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="gallery-image w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder-event.png';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-[#1F1F1F] mb-2 group-hover:text-[#E04E4E] transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#7A7A7A] mb-3 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-[#7A7A7A]">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">Tidak ada kegiatan</h3>
              <p className="text-[#7A7A7A]">Tidak ada kegiatan untuk kategori yang dipilih.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E04E4E]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ingin Mengadakan Acara?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Booking fasilitas kami untuk acara Anda dan jadikan bagian dari galeri kegiatan yang menginspirasi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E04E4E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Buat Booking Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#E04E4E] transition-colors duration-300 transform hover:scale-105">
              Lihat Fasilitas
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
