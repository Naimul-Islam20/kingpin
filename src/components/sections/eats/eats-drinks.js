"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const foodData = [
  {
    title: "Signature Cocktails",
    description: "Expertly mixed and handcrafted spirits for the ultimate experience.",
    image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Artisan Burger Selection",
    description: "Flame-grilled to perfection with our secret house seasoning.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Crispy Appetizers",
    description: "Perfectly seasoned and served hot for sharing with your group.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Premium Craft Brews",
    description: "A curated selection of local and imported seasonal ales.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Chef's Table Platters",
    description: "Large variety of flavors perfect for celebrating big milestones.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Specialty Pizzas",
    description: "Wood-fired crust topped with the freshest local ingredients.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop"
  }
];

const EatsDrinks = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-10 sm:py-16 bg-white overflow-hidden font-[family-name:var(--font-montserrat)]">
      <div className="maaleen-container">
        
        {/* Top Header */}
        <div className="text-center mb-16 sm:mb-20 px-4">
          <h2 className="text-[#C27D2A] text-xs font-bold uppercase tracking-[0.4em] mb-4">
            Chef Inspired Menu
          </h2>
          <h3 className="text-4xl sm:text-6xl font-black uppercase text-black leading-tight">
            Eats & Drinks
          </h3>
        </div>

        {/* Dynamic Image Slider */}
        <div className="relative w-full h-[400px] sm:h-[550px]">
          <Swiper
            modules={[Navigation, Autoplay]}
            centeredSlides={true}
            slidesPerView={1.25}
            spaceBetween={15}
            speed={800}
            watchSlidesProgress={true}
            breakpoints={{
              640: { slidesPerView: 1.8, spaceBetween: 25 },
              1024: { slidesPerView: 2.5, spaceBetween: 40 }
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
            loop={true}
            onProgress={(swiper) => {
              const { slides } = swiper;
              for (let i = 0; i < slides.length; i++) {
                const slide = slides[i];
                const progress = slide.progress;
                const scale = 1.08 - Math.abs(progress) * 0.12;
                const opacity = 1 - Math.abs(progress) * 0.4;
                const container = slide.querySelector('.item-container');
                if (container) {
                  container.style.transform = `scale(${Math.max(scale, 0.85)})`;
                  container.style.opacity = `${Math.max(opacity, 0.4)}`;
                }
              }
            }}
            onSetTransition={(swiper, duration) => {
              const { slides } = swiper;
              for (let i = 0; i < slides.length; i++) {
                const container = slides[i].querySelector('.item-container');
                if (container) {
                  container.style.transition = `${duration}ms ease-out`;
                }
              }
            }}
            className="w-full h-full eats-drinks-swiper overflow-visible"
          >
            {foodData.map((item, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="w-full h-full item-container relative overflow-hidden group border border-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Unified Dynamic Text Information */}
        <div className="mt-12 sm:mt-20 text-center px-4 min-h-[160px] flex flex-col items-center overflow-hidden">
          <div 
            className="animate-slideInUnified flex flex-col items-center" 
            key={`united-content-${activeIdx}`}
          >
            <h4 className="text-2xl sm:text-4xl font-black uppercase text-black mb-4">
              {foodData[activeIdx]?.title}
            </h4>
            
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl font-light leading-relaxed">
              {foodData[activeIdx]?.description}
            </p>
          </div>
          
          <button className="mt-10 group relative overflow-hidden bg-black text-white font-bold px-12 py-5 rounded-none uppercase tracking-widest text-xs sm:text-sm border-2 border-black transition-all duration-500">
            <span className="relative z-10 transition-colors group-hover:text-[#C27D2A]">View Menu Details</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideInUnified {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slideInUnified {
          animation: slideInUnified 1.5s cubic-bezier(0.19, 1, 0.22, 1) both;
        }

        .eats-drinks-swiper .swiper-wrapper {
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default EatsDrinks;
