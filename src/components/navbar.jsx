"use client";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navigationItems = [
    { id: "fasilitas", label: "Fasilitas", href: "#fasilitas" },
    { id: "jadwal", label: "Jadwal", href: "#jadwal" },
    { id: "galeri", label: "Galeri", href: "#galeri" },
    { id: "faq", label: "FAQ", href: "#faq" },
    { id: "kontak", label: "Kontak", href: "#kontak" },
  ];

  const handleNavClick = (itemId, href) => {
    setActiveNavItem(itemId);
    setIsMobileMenuOpen(false);
    if (href) {
      if (href.startsWith('#')) {
        // Handle anchor links - scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // Handle regular navigation
        router.push(href);
      }
    }
  };

  const handleLoginClick = () => {
    router.push("/auth");
    setIsMobileMenuOpen(false);
  };

  const handleRegisterClick = () => {
    router.push("/auth");
    setIsMobileMenuOpen(false);
  };

  const handleDashboardClick = () => {
    router.push("/dashboard");
    setIsMobileMenuOpen(false);
  };

  const handleLogoutClick = async () => {
    await signOut({ callbackUrl: "/" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 px-6 lg:px-8 py-3 lg:py-4 bg-white rounded-full shadow-lg border border-solid border-[#E5E5E5] text-[#1F1F1F] fixed top-2 sm:top-4 lg:top-6 left-2 sm:left-4 lg:left-1/2 right-2 sm:right-4 lg:right-auto lg:-translate-x-1/2 z-50 transition-transform duration-300 lg:max-w-6xl lg:mx-auto w-full ${
        isVisible ? 'translate-y-0' : '-translate-y-[200%]'
      }`}
      role="banner"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        {/* Logo sekolah SMK Telkom Malang */}
        <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
          <img 
            src="/logo.png?v=2" 
            alt="Logo SMK Telkom Malang" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Teks logo */}
        <div className="flex flex-col">
          <span className="text-[#1F1F1F] font-medium text-sm lg:text-base leading-tight">
            Booking
          </span>
          <span className="text-[#1F1F1F] font-medium text-xs lg:text-sm leading-tight whitespace-nowrap">
            SMK Telkom Malang
          </span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation - Desktop */}
      <nav
        className="hidden lg:flex gap-2.5 px-0 py-2 items-center relative ml-[100px] mr-[100px]"
        role="navigation"
        aria-label="Main navigation"
      >
           {navigationItems.map((item) => (
             <button
               key={item.id}
               className={`relative px-2 py-1 text-[#1F1F1F] font-medium text-sm hover:text-[#E04E4E] focus:text-[#E04E4E] focus:outline-none transition-colors duration-200 whitespace-nowrap ${
                 activeNavItem === item.id ? "text-[#E04E4E]" : ""
               }`}
               onClick={() => handleNavClick(item.id, item.href)}
               aria-current={activeNavItem === item.id ? "page" : undefined}
             >
               {item.label}
             </button>
           ))}
      </nav>

      {/* Navigation - Mobile */}
      {isMobileMenuOpen && (
        <nav
          className="lg:hidden flex flex-col w-full gap-2 py-4 border-t border-gray-200"
          role="navigation"
          aria-label="Mobile navigation"
        >
             {navigationItems.map((item) => (
               <button
                 key={item.id}
                 className={`w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                   activeNavItem === item.id
                     ? "bg-[#FFF0F0] text-[#E04E4E] font-semibold"
                     : "text-primitive-neutral-700 hover:bg-gray-100"
                 }`}
                 onClick={() => handleNavClick(item.id, item.href)}
                 aria-current={activeNavItem === item.id ? "page" : undefined}
               >
                 {item.label}
               </button>
             ))}
          
          {/* Auth buttons in mobile menu */}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200">
            {status === "loading" ? (
              <div className="w-full py-3 text-center text-[#7A7A7A]">
                Loading...
              </div>
            ) : session ? (
              <>
                <div className="flex items-center gap-3 px-4 py-3 bg-[#FFF0F0] rounded-xl">
                  {session.user?.image && (
                    <img
                      src={session.user.image}
                      alt={session.user?.name || "User"}
                      className="w-10 h-10 rounded-full border-2 border-[#E04E4E]"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1F1F1F] truncate">
                      {session.user?.name}
                    </p>
                    <p className="text-xs text-[#7A7A7A] truncate">
                      {session.user?.email}
                    </p>
                  </div>
                </div>
                <button
                  className="w-full bg-[#E04E4E] text-white py-3 px-5 rounded-xl font-medium cursor-pointer hover:bg-[#c93e3e] transition-colors duration-200"
                  onClick={handleDashboardClick}
                  type="button"
                >
                  Dashboard
                </button>
                <button
                  className="w-full py-3 px-5 text-[#E04E4E] border-[#E04E4E] rounded-xl bg-white border border-solid hover:bg-[#FFF0F0] transition-colors duration-200 font-medium cursor-pointer"
                  onClick={handleLogoutClick}
                  type="button"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="w-full bg-[#E04E4E] text-white py-3 px-5 rounded-xl font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-[length:var(--body-regular-b2-font-size)] cursor-pointer hover:bg-[#c93e3e] transition-colors duration-200"
                  onClick={handleLoginClick}
                  type="button"
                  aria-label="Login to your account"
                >
                  Masuk
                </button>

                <button
                  className="w-full py-3 px-5 text-[#E04E4E] border-[#E04E4E] rounded-xl bg-white border border-solid hover:bg-[#E04E4E] hover:text-white transition-colors duration-200 font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-[length:var(--body-regular-b2-font-size)] cursor-pointer"
                  onClick={handleRegisterClick}
                  type="button"
                  aria-label="Register for a new account"
                >
                  Daftar
                </button>
              </>
            )}
          </div>
        </nav>
      )}

      {/* Auth buttons - Desktop only */}
      <div className="hidden lg:flex gap-6 items-center">
        {status === "loading" ? (
          <div className="text-[#7A7A7A] text-sm">Loading...</div>
        ) : session ? (
          <>
            <button
              className="bg-[#E04E4E] text-white py-2 px-5 rounded-lg font-medium cursor-pointer focus:outline-none hover:bg-[#c93e3e] transition-colors duration-200 whitespace-nowrap text-sm"
              onClick={handleDashboardClick}
              type="button"
            >
              Dashboard
            </button>

            <div className="relative group">
              <button
                className="flex items-center gap-2 py-1.5 px-3 text-[#E04E4E] border-[#E04E4E] rounded-lg bg-white border border-solid hover:bg-[#FFF0F0] transition-colors duration-200 cursor-pointer focus:outline-none"
                type="button"
              >
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user?.name || "User"}
                    className="w-8 h-8 rounded-full border-2 border-[#E04E4E]"
                  />
                )}
                <span className="font-medium max-w-[120px] truncate">
                  {session.user?.name}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-[#1F1F1F] truncate">
                    {session.user?.name}
                  </p>
                  <p className="text-xs text-[#7A7A7A] truncate">
                    {session.user?.email}
                  </p>
                  <p className="text-xs text-[#E04E4E] mt-1 font-medium">
                    {session.user?.role === "ADMIN" ? "Admin" : "User"}
                  </p>
                </div>
                <div className="p-2">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-[#1F1F1F] hover:bg-[#FFF0F0] rounded-lg transition-colors"
                    onClick={handleDashboardClick}
                  >
                    📊 Dashboard
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    onClick={handleLogoutClick}
                  >
                    🚪 Logout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Tombol Masuk - sesuai desain Figma */}
            <button
              className="bg-[#E04E4E] text-white py-2.5 px-6 rounded-lg font-medium cursor-pointer focus:outline-none hover:bg-[#c93e3e] transition-colors duration-200 whitespace-nowrap text-sm"
              onClick={handleLoginClick}
              type="button"
              aria-label="Login to your account"
            >
              Masuk
            </button>

            {/* Tombol Daftar - sesuai desain Figma */}
            <button
              className="py-2.5 px-6 text-[#E04E4E] border-[#E04E4E] rounded-lg bg-white border border-solid hover:bg-[#E04E4E] hover:text-white transition-colors duration-200 font-medium cursor-pointer focus:outline-none whitespace-nowrap text-sm"
              onClick={handleRegisterClick}
              type="button"
              aria-label="Register for a new account"
            >
              Daftar
            </button>
          </>
        )}
      </div>
    </header>
  );
};
