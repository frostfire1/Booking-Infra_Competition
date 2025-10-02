import React from "react";
import { ArrowRight } from "./ArrowRight";
import { Facebook } from "./Facebook";
import { Sms } from "./Sms";
import { Whatsapp } from "./Whatsapp";
import group150 from "./group-150.png";

export const FooterSection = () => {
  const menuItems = [
    { label: "Fasilitas", href: "#fasilitas" },
    { label: "Jadwal", href: "#jadwal" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ];

  const socialLinks = [
    { icon: Whatsapp, href: "https://wa.me/", label: "WhatsApp" },
    { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
    { icon: Sms, href: "mailto:booking@smktelkom-mlg.sch.id", label: "Email" },
  ];

  return (
    <footer className="flex flex-col lg:flex-row w-full items-start lg:items-center gap-12 lg:gap-[157px] px-4 md:px-12 lg:px-32 py-12 md:py-[82px] relative bg-white">
      <div className="flex flex-col items-start gap-12 lg:gap-32 w-full lg:w-auto">
        <div className="flex flex-col w-full lg:w-[394px] items-start justify-center gap-3">
          <div className="flex items-center gap-2 lg:gap-3.5">
            <img
              className="relative w-8 h-8 lg:w-[39.5px] lg:h-[39.14px] aspect-[1.01]"
              alt="SMK Telkom Malang Logo"
              src={group150}
            />

            <div className="relative w-fit [font-family:'DM_Sans-SemiBold',Helvetica] font-semibold text-primitive-neutral-700 text-sm lg:text-[16.3px] tracking-[-0.65px] leading-tight lg:leading-[18.0px]">
              Booking
              <br />
              SMK Telkom Malang
            </div>
          </div>

          <p className="relative self-stretch font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-neutral-300 text-sm md:text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)]">
            Platform Penyewaan Fasiltas dan Peralatan SMK Telkom Malang
          </p>
        </div>

        <div className="relative w-fit font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-neutral-400 text-sm md:text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)]">
          © 2024 Copyright MokletDev
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-[269px] w-full lg:flex-1">
        <nav
          className="flex flex-col items-start justify-center gap-[22px]"
          role="navigation"
          aria-label="Footer navigation"
        >
          <h3 className="relative w-fit font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-neutral-700 text-sm md:text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)]">
            Menu Utama
          </h3>

          <ul className="flex flex-col items-start justify-center gap-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative w-fit font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-neutral-400 text-sm md:text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)] hover:text-primitive-neutral-700 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-start justify-between gap-4 lg:gap-[22px]">
          <div
            className="flex items-center gap-3"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="hover:opacity-70 transition-opacity duration-200"
                  aria-label={social.label}
                  role="listitem"
                >
                  <IconComponent className="!relative !w-6 !h-6" />
                </a>
              );
            })}
          </div>

          <a
            href="mailto:booking@smktelkom-mlg.sch.id"
            className="flex items-center justify-start gap-2 rounded-xl hover:opacity-70 transition-opacity duration-200"
            aria-label="Send email to booking@smktelkom-mlg.sch.id"
          >
            <span className="relative w-fit font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-neutral-700 text-sm md:text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)] break-all sm:break-normal">
              booking@smktelkom-mlg.sch.id
            </span>

            <ArrowRight className="!relative !w-6 !h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
