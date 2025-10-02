import React, { useState } from "react";
import { ArrowDown } from "./ArrowDown";
import { Box } from "./Box";
import { Calendar } from "./Calendar";
import { House } from "./House";
import { IconComponentNode } from "./IconComponentNode";
import { VillaHomeIconUia } from "./VillaHomeIconUia";
import image from "./image.svg";
import subtract from "./subtract.svg";
import vector2 from "./vector-2.svg";
import vector from "./vector.svg";

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
    console.log("Checking availability for:", {
      facility: selectedFacility,
      date: selectedDate,
    });
  };

  return (
    <main className="flex flex-col w-[1440px] h-[722px] items-center justify-between pt-[90px] pb-[58px] px-32 relative">
      <img1
        className="absolute w-[1440px] h-[1024px] top-[-147px] left-0"
        alt="Background decoration"
        src={subtract}
      />

      <section className="flex-col items-center justify-center gap-9 flex-[0_0_auto] mt-[-786.5px] inline-flex relative">
        <header className="flex-col items-center justify-center gap-3 flex-[0_0_auto] inline-flex relative">
          <h1 className="relative w-fit mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-primitive-neutral-700 text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
            <span className="text-[#1f1f1f] font-heading-h1 [font-style:var(--heading-h1-font-style)] font-[number:var(--heading-h1-font-weight)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] text-[length:var(--heading-h1-font-size)]">
              Hai, Mau{" "}
            </span>

            <span className="text-[#e04e4e] font-heading-h1 [font-style:var(--heading-h1-font-style)] font-[number:var(--heading-h1-font-weight)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] text-[length:var(--heading-h1-font-size)]">
              Booking
            </span>

            <span className="text-[#1f1f1f] font-heading-h1 [font-style:var(--heading-h1-font-style)] font-[number:var(--heading-h1-font-weight)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] text-[length:var(--heading-h1-font-size)]">
              {" "}
              Apa?
            </span>
          </h1>

          <p className="relative w-fit font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-neutral-400 text-[length:var(--body-regular-b2-font-size)] text-center tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)]">
            Temukan Ruangan dan Tempat yang Cocok Untuk Acaramu!
          </p>
        </header>

        <form className="inline-flex flex-col items-start gap-4 px-5 py-4 relative flex-[0_0_auto] bg-primitive-primary-50 rounded-[var(--primitive-radius-radious-lg)] border border-solid border-primitive-primary-400">
          <div className="items-start gap-3 flex-[0_0_auto] inline-flex relative">
            <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
              <label
                htmlFor="facility-select"
                className="relative w-fit mt-[-1.00px] font-body-regular-b1 font-[number:var(--body-regular-b1-font-weight)] text-primitive-neutral-700 text-[length:var(--body-regular-b1-font-size)] tracking-[var(--body-regular-b1-letter-spacing)] leading-[var(--body-regular-b1-line-height)] [font-style:var(--body-regular-b1-font-style)]"
              >
                Fasilitas
              </label>

              <div className="h-[49px] items-center gap-[42px] px-[18px] py-3.5 bg-white rounded-[var(--primitive-radius-radious-lg)] border border-solid border-primitive-neutral-100 inline-flex relative">
                <div className="inline-flex gap-[18px] flex-[0_0_auto] mt-[-1.50px] mb-[-1.50px] items-center relative">
                  <VillaHomeIconUia
                    className="!relative !w-6 !h-6 !aspect-[1]"
                    aria-hidden="true"
                  />
                  <select
                    id="facility-select"
                    value={selectedFacility}
                    onChange={(e) => handleFacilityChange(e.target.value)}
                    className="relative w-fit font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-neutral-500 text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)] bg-transparent border-none outline-none appearance-none cursor-pointer"
                    aria-label="Pilih fasilitas yang ingin dipinjam"
                  >
                    <option value="" disabled>
                      Apa yang ingin dipinjam?
                    </option>
                    {facilityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <ArrowDown
                  className="!relative !w-[18px] !h-[18px] !aspect-[1] pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
              <label
                htmlFor="date-select"
                className="relative w-fit mt-[-1.00px] font-body-regular-b1 font-[number:var(--body-regular-b1-font-weight)] text-primitive-neutral-700 text-[length:var(--body-regular-b1-font-size)] tracking-[var(--body-regular-b1-letter-spacing)] leading-[var(--body-regular-b1-line-height)] [font-style:var(--body-regular-b1-font-style)]"
              >
                Waktu
              </label>

              <div className="flex w-[286px] h-[49px] gap-[42px] px-[18px] py-3.5 bg-white rounded-[var(--primitive-radius-radious-lg)] border border-solid border-primitive-neutral-100 items-center relative">
                <div className="inline-flex gap-[18px] flex-[0_0_auto] mt-[-1.50px] mb-[-1.50px] bg-white items-center relative">
                  <Calendar
                    className="!relative !w-6 !h-6"
                    aria-hidden="true"
                  />
                  <input
                    id="date-select"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    placeholder="Kapan Mau Pinjam?"
                    className="relative w-fit font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-neutral-500 text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)] bg-transparent border-none outline-none cursor-pointer"
                    aria-label="Pilih tanggal peminjaman"
                  />
                </div>

                <ArrowDownzzl
                  className="!relative !w-[18px] !h-[18px] !aspect-[1] pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="flex-col items-start gap-2.5 pt-[30px] pb-0 px-0 flex-[0_0_auto] inline-flex relative">
              <button
                type="button"
                onClick={handleCheckAvailability}
                className="inline-flex items-center gap-3 px-6 py-3.5 relative flex-[0_0_auto] bg-primitive-primary-400 rounded-[var(--primitive-radius-radious-lg)] hover:bg-primitive-primary-500 focus:bg-primitive-primary-500 focus:outline-none focus:ring-2 focus:ring-primitive-primary-400 focus:ring-offset-2 transition-colors duration-200 cursor-pointer"
                aria-label="Cek ketersediaan fasilitas"
              >
                <div className="relative w-6 h-6" aria-hidden="true">
                  <div className="relative h-6">
                    <div className="absolute w-[22px] h-[22px] top-px left-px">
                      <img
                        className="absolute w-5 h-5 top-0 left-0"
                        alt=""
                        src={vector}
                      />

                      <img
                        className="absolute w-1 h-1 top-[18px] left-[18px]"
                        alt=""
                        src={image}
                      />
                    </div>

                    <img
                      className="absolute w-6 h-6 top-[-407px] left-[-2410px]"
                      alt=""
                      src={vector2}
                    />
                  </div>
                </div>

                <span className="relative w-fit font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-primitive-base-white text-[length:var(--body-regular-b2-font-size)] tracking-[var(--body-regular-b2-letter-spacing)] leading-[var(--body-regular-b2-line-height)] [font-style:var(--body-regular-b2-font-style)]">
                  Cek Ketersediaan
                </span>
              </button>
            </div>
          </div>
        </form>
      </section>

      <button
        type="button"
        className="inline-flex items-center gap-2 p-3.5 relative flex-[0_0_auto] mt-[-786.5px] bg-primitive-primary-400 rounded-[var(--primitive-radius-radious-full)] hover:bg-primitive-primary-500 focus:bg-primitive-primary-500 focus:outline-none focus:ring-2 focus:ring-primitive-primary-400 focus:ring-offset-2 transition-colors duration-200 cursor-pointer"
        aria-label="Scroll down"
      >
        <IconComponentNode className="!relative !w-6 !h-6" aria-hidden="true" />
      </button>

      <div
        className="inline-flex items-center gap-[12.64px] p-[22.12px] absolute top-[106px] left-[61px] bg-primitive-primary-50 rounded-[15798.58px] border-[1.58px] border-solid border-primitive-primary-400 rotate-[-0.58deg]"
        aria-hidden="true"
      >
        <Box className="!relative !w-[37.92px] !h-[37.92px] !rotate-[0.58deg] !aspect-[1]" />
      </div>

      <div
        className="inline-flex items-center gap-[12.64px] p-[22.12px] absolute top-[73px] left-[1335px] bg-primitive-primary-50 rounded-[15798.58px] border-[1.58px] border-solid border-primitive-primary-400 rotate-[3.01deg]"
        aria-hidden="true"
      >
        <House className="!relative !w-[39.86px] !h-[39.86px] !mt-[-0.97px] !mb-[-0.97px] !ml-[-0.97px] !mr-[-0.97px] !rotate-[-3.01deg]" />
      </div>
    </main>
  );
};
