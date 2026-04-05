"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const partyData = [
  {
    title: "Kids Parties",
    description: "Our bowling parties for kids are fun and easy to plan! Design the perfect birthday party for your kids, their friends, and yourself.",
    image: "https://images.unsplash.com/photo-1544144433-d50aff500b91?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Kids Parties"
  },
  {
    title: "Teen Parties",
    description: "Bowl on blacklight lanes, relax on your own reserved lane, and dig into insta-worthy treats perfect for teen birthdays!",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Teen Parties"
  },
  {
    title: "Corporate Events",
    description: "Elevate your next corporate outing! We make planning office parties and corporate events easy and completely stress-free.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04cb11c7?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Corporate Events"
  },
  {
    title: "Adult Parties",
    description: "Celebrate with style in our VIP lanes with signature drinks and upscale appetisers for the ultimate grown-up gathering.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop",
    cta: "Explore Adult Parties"
  },
  {
    title: "Milestone Events",
    description: "From family reunions to charity galas, our custom event packages ensure your special day is handled with care.",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Milestone Events"
  }
];

const PartySlider = () => {
  return (
    <section className="py-10 bg-white overflow-hidden font-[family-name:var(--font-montserrat)]">
      <div className="maaleen-container">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#C27D2A] text-xs sm:text-sm font-bold uppercase tracking-[0.4em] mb-4">
            Celebrations Start Here
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black leading-tight">
            Your Spring Party <br className="hidden sm:block" /> Starts Here
          </h3>
          <div className="mt-6 h-[3px] w-20 bg-[#C27D2A] mx-auto" />
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".party-pagination" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-16"
        >
          {partyData.map((party, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full flex flex-col bg-gray-50 border border-gray-100 hover:border-[#C27D2A]/30 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden mb-8">
                  <img
                    src={party.image}
                    alt={party.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="px-8 pb-10 flex flex-col flex-grow">
                  <h4 className="text-2xl font-black uppercase text-black mb-4 group-hover:text-[#C27D2A] transition-colors line-clamp-1 overflow-hidden h-[32px]">
                    {party.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow font-light line-clamp-3 overflow-hidden min-h-[72px]">
                    {party.description}
                  </p>
                  <button className="relative w-max text-xs sm:text-sm font-bold uppercase tracking-widest text-black group/btn mt-auto">
                    <span className="relative z-10 transition-colors group-hover/btn:text-[#C27D2A]">
                      {party.cta}
                    </span>
                    <div className="mt-2 h-[2px] w-12 bg-[#C27D2A] group-hover/btn:w-full transition-all duration-300" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation/Pagination Area */}
        <div className="flex justify-center mt-4">
          <div className="party-pagination flex gap-2 child:bg-[#C27D2A]!" />
        </div>
      </div>

      <style>{`
        .party-pagination .swiper-pagination-bullet { width: 10px; height: 10px; opacity: 0.3; background: #000; border-radius: 0; }
        .party-pagination .swiper-pagination-bullet-active { width: 30px; opacity: 1; background: #C27D2A; border-radius: 0; }
      `}</style>
    </section>
  );
};

export default PartySlider;
