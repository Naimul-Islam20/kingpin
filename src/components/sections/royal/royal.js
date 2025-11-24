"use client";
import DynamicTitle from "@/components/ui/TitleText";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import RoyalS from "./royalS";

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      src: "/home/deals2.jpg",
      title: "$29 parties",
      subtitle: "Kids Bronze Parties",
      desc: "Enjoy the best kids bronze parties with fun and games!Have a delicious meal and enjoy our fun activities!Enjoy the best kids bronze parties with fun and games!",
    },
    {
      id: 2,
      src: "/home/deals2.jpg",
      title: "Eat and Play",
      subtitle: "Spend $65 and Get 20",
      desc: "Have a delicious meal and enjoy our fun activities!Have a delicious meal and enjoy our fun activities!",
    },
    {
      id: 3,
      src: "/home/deals3.jpg",
      title: "New Drinks Menu",
      subtitle: "Sip Royal",
      desc: "Try our latest drinks menu and refresh yourself!",
    },
  ];

  const renderDesktopGrid = () => (
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {images.map((img) => (
        <article key={img.id} className="relative overflow-hidden group">
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* title + subtitle (TAB এ ছোট) */}
          <div className="absolute inset-0 flex flex-col ps-4 items-start justify-center pointer-events-none z-20 transition-all duration-500 group-hover:-translate-y-20">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-white">
              {img.title}
            </h3>
            <h2 className="text-lg md:text-lg lg:text-2xl font-semibold text-white mt-2">
              {img.subtitle}
            </h2>

            {/* TAB ONLY button */}
            <button className="md:block lg:hidden bg-white text-black font-bold uppercase px-3 py-1 rounded-full mt-3 pointer-events-auto">
              Learn More
            </button>
          </div>

          <div className="absolute inset-0 flex flex-col justify-end items-center text-start bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
            <div className="absolute inset-0 flex flex-col items-start p-4 text-start bg-black/70 transition-transform duration-500 z-10 group-hover:translate-y-0">
              <p className="text-gray-200 border-gray-200 border-t font-bold mb-2 mt-25 pt-3">
                {img.desc.split(" ").length > 20
                  ? img.desc.split(" ").slice(0, 26).join(" ") + "..."
                  : img.desc}
              </p>

              {/* desktop button — untouched */}
              <button className="fixed bottom-4 left-4 bg-white text-black font-bold uppercase px-4 py-2 rounded-full hover:bg-gray-300 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

const renderMobileSlider = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = React.useRef(null);

  return (
    <div className="md:hidden ">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={12}
        loop={true}
        
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id} className="swiper-slide-custom">
            <div className="relative   w-full h-64  overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex flex-col items-start justify-center p-4 z-20">
                <h3 className="text-3xl uppercase font-extrabold text-white">
                  {img.title}
                </h3>
                <h2 className="text-lg font-extrabold text-white mt-1">
                  {img.subtitle}
                </h2>

                <button className="bg-white text-black font-bold uppercase  px-4 py-2 text-xl rounded-full mt-4 z-30">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ---- Clickable Manual Pagination Dots ---- */}
      <div className="flex justify-center gap-5 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideToLoop(i);
              }
            }}
            className={`w-5 h-5 rounded-full transition-all ${
              activeIndex === i ? "bg-yellow-600 " : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
  return (
    <main className=" bg-white">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-4 pt-2 md:pt-0 md:pb-6 grid grid-cols-1 gap-2 md:gap-4">
        {/* Page Title */}
        <DynamicTitle
          blackText="deals and spacials"
          redText=""
          className="uppercase"
        />

        {/* Desktop */}
        {renderDesktopGrid()}

        {/* Mobile */}
        {renderMobileSlider()}
      </div>
      <RoyalS />
    </main>
  );
}
