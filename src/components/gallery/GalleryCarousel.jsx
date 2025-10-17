"use client";
import React, { useState, useEffect, useRef } from 'react';

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const galleryData = [
    {
      id: 1,
      title: "Jobfair & Edufair",
      description: "Acara pameran kerja dan pendidikan yang menghubungkan siswa dengan perusahaan terkemuka",
      image: "/JobFair.png",
      category: "Career",
      categoryColor: "bg-[#E04E4E]",
      date: "15 Maret 2024",
      location: "Aula"
    },
    {
      id: 2,
      title: "Kick-Off Cyber Heroes",
      description: "Peluncuran program cyber security untuk membentuk generasi digital yang aman",
      image: "/kickoff.png",
      category: "Technology",
      categoryColor: "bg-purple-500",
      date: "24 Januari 2023",
      location: "Lab 7"
    },
    {
      id: 3,
      title: "Sosialisasi Kurikulum",
      description: "Presentasi kurikulum terbaru untuk mempersiapkan siswa menghadapi era digital",
      image: "/kurikulum.png",
      category: "Education",
      categoryColor: "bg-green-500",
      date: "24 Januari 2023",
      location: "Aula"
    },
    {
      id: 4,
      title: "Kunjungan Pak Onno",
      description: "Kunjungan tokoh teknologi Indonesia untuk berbagi inspirasi dan motivasi",
      image: "/pakonno.png",
      category: "Inspiration",
      categoryColor: "bg-yellow-500",
      date: "10 Februari 2023",
      location: "Aula"
    },
    {
      id: 5,
      title: "Roblox Competition",
      description: "Kompetisi game development menggunakan platform Roblox Studio",
      image: "/Roblox1.png",
      category: "Competition",
      categoryColor: "bg-red-500",
      date: "5 April 2024",
      location: "Lab 5"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, galleryData.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const maxIndex = Math.max(0, galleryData.length - slidesToShow);
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const goToNext = () => {
    const maxIndex = Math.max(0, galleryData.length - slidesToShow);
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides Container */}
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` 
          }}
        >
          {galleryData.map((item, index) => {
            const isCenter = index === currentIndex;
            const isVisible = Math.abs(index - currentIndex) <= Math.floor(slidesToShow / 2);
            
            return (
              <div key={item.id} className={`flex-shrink-0 px-2 ${
                slidesToShow === 1 ? 'w-full' : 
                slidesToShow === 2 ? 'w-1/2' : 
                'w-1/3'
              }`}>
                <div className={`group gallery-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                  isCenter 
                    ? 'scale-105 shadow-2xl ring-2 ring-[#E04E4E] ring-opacity-50' 
                    : 'scale-95 opacity-80'
                }`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-image w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/placeholder-event.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <span className={`${item.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className={`font-bold text-[#1F1F1F] mb-2 group-hover:text-[#E04E4E] transition-colors duration-300 ${
                      isCenter ? 'text-lg' : 'text-base'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-[#7A7A7A] mb-3 line-clamp-2 ${
                      isCenter ? 'text-sm' : 'text-xs'
                    }`}>
                      {item.description}
                    </p>
                    <div className={`flex items-center justify-between text-[#7A7A7A] ${
                      isCenter ? 'text-sm' : 'text-xs'
                    }`}>
                      <span className="font-medium">{item.date}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#E04E4E] w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#E04E4E] w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#E04E4E] w-8 h-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10"
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {galleryData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#E04E4E] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
        <div 
          className="bg-gradient-to-r from-[#E04E4E] to-[#FF6767] h-1 rounded-full transition-all duration-100 ease-linear"
          style={{ width: `${((currentIndex + 1) / galleryData.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default GalleryCarousel;
