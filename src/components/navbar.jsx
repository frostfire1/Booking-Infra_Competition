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
    { id: "fasilitas", label: "Fasilitas" },
    { id: "jadwal", label: "Jadwal" },
    { id: "galeri", label: "Galeri" },
    { id: "faq", label: "FAQ" },
    { id: "kontak", label: "Kontak" },
  ];

  const handleNavClick = (itemId) => {
    setActiveNavItem(itemId);
    setIsMobileMenuOpen(false);
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
      className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 xl:gap-[166px] px-3 sm:px-4 lg:px-8 xl:px-[46px] py-3 lg:py-[7px] bg-white rounded-xl lg:rounded-full shadow-lg border border-solid border-[#dcdcdc] text-neutral-700 fixed top-2 sm:top-4 lg:top-6 left-2 sm:left-4 lg:left-1/2 right-2 sm:right-4 lg:right-auto lg:-translate-x-1/2 z-50 transition-transform duration-300 lg:max-w-7xl lg:mx-auto ${
        isVisible ? 'translate-y-0' : '-translate-y-[200%]'
      }`}
      role="banner"
    >
      <div className="flex w-full lg:w-auto items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-3.5">
          <img
            className="relative w-8 h-8 lg:w-[39.5px] lg:h-[39.14px] aspect-[1.01]"
            alt="SMK Telkom Malang Logo"
            src="/logo.png"
          />

          <div className="relative w-fit font-extrabold text-primitive-neutral-700 text-sm lg:text-[16.3px] tracking-[-0.65px] leading-tight">
            Booking
            <br />
            SMK Telkom Malang
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
      </div>

      {/* Navigation - Desktop */}
      <nav
        className="hidden lg:flex gap-6 xl:gap-12 px-0 py-7 items-center relative flex-[0_0_auto]"
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className="flex-col justify-center gap-1.5 inline-flex items-center relative flex-[0_0_auto]"
          >
            <button
              className="relative w-fit mt-[-1.00px] font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-neutral-700 text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)] hover:text-primitive-primary-400 focus:text-primitive-primary-400 focus:outline-none transition-colors duration-200 whitespace-nowrap"
              onClick={() => handleNavClick(item.id)}
              aria-current={activeNavItem === item.id ? "page" : undefined}
            >
              {item.label}
            </button>

            <div
              className={`relative self-stretch w-full h-0.5 transition-colors duration-200 ${
                activeNavItem === item.id
                  ? "bg-primitive-primary-400"
                  : "bg-transparent"
              }`}
            />
          </div>
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
              onClick={() => handleNavClick(item.id)}
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
      <div className="hidden lg:flex gap-3.5 items-center">
        {status === "loading" ? (
          <div className="text-[#7A7A7A] text-sm">Loading...</div>
        ) : session ? (
          <>
            <button
              className="bg-[#E04E4E] text-white py-2.5 px-5 rounded-xl font-medium cursor-pointer focus:outline-none hover:bg-[#c93e3e] transition-colors duration-200 whitespace-nowrap"
              onClick={handleDashboardClick}
              type="button"
            >
              Dashboard
            </button>

            <div className="relative group">
              <button
                className="flex items-center gap-2 py-1.5 px-3 text-[#E04E4E] border-[#E04E4E] rounded-xl bg-white border border-solid hover:bg-[#FFF0F0] transition-colors duration-200 cursor-pointer focus:outline-none"
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
            <button
              className="bg-[#E04E4E] text-white py-2.5 px-5 rounded-xl font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] cursor-pointer focus:outline-none hover:bg-[#c93e3e] transition-colors duration-200 whitespace-nowrap"
              onClick={handleLoginClick}
              type="button"
              aria-label="Login to your account"
            >
              Masuk
            </button>

            <button
              className="py-2.5 px-5 text-[#E04E4E] border-[#E04E4E] rounded-xl bg-white border border-solid hover:bg-[#E04E4E] hover:text-white transition-colors duration-200 font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] cursor-pointer focus:outline-none whitespace-nowrap"
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
