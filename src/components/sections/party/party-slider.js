"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const partyData = [
  {
    title: "Kids Parties",
    description: "Our bowling parties for kids are fun and easy to plan! Design the perfect birthday party for your kids, their friends, and yourself.",
    image: "https://images.unsplash.com/photo-1544144433-d50aff500b91?q=80&w=2000&auto=format&fit=crop",
    cta: "Explore Kids Parties"
  },
  {
    title: "Teen Parties",
    description: "Bowl on blacklight lanes, relax on your own reserved lane, and dig into insta-worthy treats perfect for teen birthdays!",
    image: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1976&auto=format&fit=crop",
    cta: "Explore Teen Parties"
  },
  {
    title: "Corporate Events",
    description: "Elevate your next corporate outing! We make planning office parties and corporate events easy and completely stress-free.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Corporate Events"
  },
  {
    title: "Adult Social Events",
    description: "The perfect backdrop for every occasion. Birthdays, bachelorette parties, reunions, and any occasion you can think of!",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2000&auto=format&fit=crop",
    cta: "Explore Adult Social Events"
  },
  {
    title: "Contact a Planner",
    description: "Get in touch with our expert party planners and let us bring your event to life! We handle all the details for you.",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop",
    cta: "Contact an Event Planner"
  }
];

const PartySlider = () => {
  return (
    <section className="py-6 md:py-16 bg-white overflow-hidden font-[family-name:var(--font-montserrat)]">
      <div className="maaleen-container relative px-10 sm:px-4">
        {/* Section Heading */}
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.4em] mb-4">
            Celebrations Start Here
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black leading-tight">
            Your Spring Party <br className="hidden sm:block" /> Starts Here
          </h3>
          <div className="mt-6 h-[3px] w-20 bg-primary mx-auto" />
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          {/* Navigation Buttons - Positioned on sides of the slider area */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-6 lg:px-2 z-20 pointer-events-none">
            <button className="party-prev pointer-events-auto group flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-white/90 border border-gray-100 hover:border-primary text-black hover:text-white hover:bg-primary transition-all duration-300 shadow-md">
              <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button className="party-next pointer-events-auto group flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-white/90 border border-gray-100 hover:border-primary text-black hover:text-white hover:bg-primary transition-all duration-300 shadow-md">
              <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".party-pagination" }}
            navigation={{ prevEl: ".party-prev", nextEl: ".party-next" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {partyData.map((party, index) => (
              <SwiperSlide key={index}>
                <div className="group h-full flex flex-col bg-gray-50 border border-gray-100 hover:border-primary/30 transition-all duration-500">
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
                    <h4 className="text-2xl font-black uppercase text-black mb-4 group-hover:text-primary transition-colors line-clamp-1 overflow-hidden h-[32px]">
                      {party.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow font-light line-clamp-3 overflow-hidden min-h-[72px]">
                      {party.description}
                    </p>
                    <button className="relative w-max text-xs sm:text-sm font-bold uppercase tracking-widest text-black group/btn mt-auto">
                      <span className="relative z-10 transition-colors group-hover/btn:text-primary">
                        {party.cta}
                      </span>
                      <div className="mt-2 h-[2px] w-12 bg-primary group-hover/btn:w-full transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation/Pagination Area */}
        <div className="flex justify-center mt-4 w-full">
          <div className="party-pagination flex justify-center items-center gap-2 child:bg-primary! w-full" />
        </div>
      </div>

      <style>{`
        .party-pagination .swiper-pagination-bullet { 
          width: 6px; 
          height: 6px; 
          opacity: 0.2; 
          background: #000; 
          border-radius: 0; 
          transition: all 0.3s ease-in-out; 
          margin: 0 4px !important; 
        }
        @media (min-width: 1024px) { 
          .party-pagination .swiper-pagination-bullet { 
            width: 10px; 
            height: 10px; 
          } 
        }
        .party-pagination .swiper-pagination-bullet-active { 
          width: 24px; 
          opacity: 1; 
          background: var(--color-primary); 
        }
        @media (min-width: 1024px) { 
          .party-pagination .swiper-pagination-bullet-active { 
            width: 32px; 
          } 
        }
        
        .party-prev.swiper-button-disabled,
        .party-next.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default PartySlider;
