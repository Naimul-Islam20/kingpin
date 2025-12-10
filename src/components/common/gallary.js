"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


export default function ReusableGalleryPage({ images }) {
  // Mobile slider active state
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = React.useRef(null);

  // Desktop Grid
  const renderDesktopGrid = () => (
    <div className="hidden lg:grid lg:grid-cols-3 gap-10">
      {images.map((img) => (
        <article key={img.id} className="relative overflow-hidden group">
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-94">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* title + subtitle (TAB এ ছোট) */}
          <div className="absolute inset-0 flex flex-col pl-4 items-start justify-end mb-20 pointer-events-none z-20 transition-all duration-500 group-hover:-translate-y-50">
            <h3 className="text-xl md:text-2xl uppercase lg:text-3xl font-extrabold text-white">
              {img.title}
            </h3>
            <h2 className="text-lg md:text-lg uppercase lg:text-2xl font-semibold text-white mt-1">
              {img.subtitle}
            </h2>

            {/* TAB ONLY button */}
            <button className="md:block lg:hidden bg-white text-black font-bold uppercase px-3 py-1 rounded-full mt-3 pointer-events-auto">
              Learn More
            </button>
          </div>

          <div className="absolute inset-0 flex flex-col justify-end items-center text-start bg-black/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
            <div className="absolute inset-0 flex flex-col items-start p-4 text-start bg-black/50 transition-transform duration-500 z-10 group-hover:translate-y-0">
              <p className="text-gray-200 border-t border-gray-200 font-bold mb-2 mt-24 pt-3">
                {img.desc.split(" ").length > 20
                  ? img.desc.split(" ").slice(0, 26).join(" ") + "..."
                  : img.desc}
              </p>

              {/* desktop button */}
              <button className="fixed bottom-4 left-4 bg-white text-black font-bold uppercase px-4 py-2 rounded-full hover:bg-gray-300 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  // Tablet Grid
  const renderTabletGrid = () => (
    <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
      {images.map((img) => (
        <article key={img.id} className="relative overflow-hidden group">
          <div className="relative w-full h-48 sm:h-56 md:h-60">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* title + subtitle */}
          <div className="absolute inset-0 flex flex-col pl-4 items-start justify-center pointer-events-none z-20 transition-all duration-500 group-hover:-translate-y-16">
            <h3 className="text-lg md:text-xl uppercase font-bold text-white">
              {img.title}
            </h3>
            <h2 className="text-sm md:text-lg uppercase font-semibold text-white mt-1">
              {img.subtitle}
            </h2>

            {/* Tablet button */}
            <button className="md:block bg-white text-black font-bold uppercase px-3 py-1 rounded-full mt-3 pointer-events-auto">
              Learn More
            </button>
          </div>

          <div className="absolute inset-0 flex flex-col justify-end items-center text-start bg-black/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
            <div className="absolute inset-0 flex flex-col items-start p-4 text-start bg-black/50 transition-transform duration-500 z-10 group-hover:translate-y-0">
              <p className="text-gray-200 border-t border-gray-200 font-bold mb-2 pt-3">
                {img.desc.split(" ").length > 20
                  ? img.desc.split(" ").slice(0, 26).join(" ") + "..."
                  : img.desc}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  // Mobile Slider
  const renderMobileSlider = () => (
    <div className="md:hidden">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={12}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-center p-4 z-20">
                <h3 className="text-3xl uppercase font-bold text-white">
                  {img.title}
                </h3>
                <h2 className="text-lg uppercase font-semibold text-white mt-1">
                  {img.subtitle}
                </h2>

                <button className="bg-white text-black font-bold uppercase px-4 py-2 text-xl rounded-full mt-4 z-30">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
              activeIndex === i ? "bg-yellow-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <main className="bg-white">
      <div className=" ">
        {/* Page Title */}

        {/* Desktop */}
        {renderDesktopGrid()}

        {/* Tablet */}
        {renderTabletGrid()}

        {/* Mobile */}
        {renderMobileSlider()}
      </div>
    </main>
  );
}
