"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const foodData = [
  {
    title: "Monster Burgers",
    description: "Double-stacked juicy beef patties with extra cheese and our signature sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Loaded Nachos",
    description: "Crispy tortillas topped with melted cheese, jalapeños, and zesty salsa.",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1935&auto=format&fit=crop"
  },
  {
    title: "Cheesy Pizza",
    description: "Hot, gooey mozzarella on a crispy crust with your favorite meat toppings.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Golden Fries",
    description: "Seasoned to perfection, served with a variety of addictive dipping sauces.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Gourmet Hot Dogs",
    description: "Classic street-style dogs with a premium twist and loaded toppings.",
    image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Thick Milkshakes",
    description: "Dreamy, creamy, and topped with whipped cream and fancy sprinkles.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2000&auto=format&fit=crop"
  }
];

const EatsDrinks = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="pt-6 pb-0 md:py-16 bg-white overflow-hidden font-[family-name:var(--font-montserrat)]">
      <div className="maaleen-container">
        
        {/* Top Header */}
        <div className="text-center mb-6 md:mb-20 px-4">
          <h2 className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4">
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
                const container = slide.querySelector('.item-container');
                if (container) {
                  container.style.transform = `scale(${Math.max(scale, 0.85)})`;
                  container.style.filter = "none";
                  container.style.opacity = "1";
                }
              }
            }}
            onSetTransition={(swiper, duration) => {
              const { slides } = swiper;
              for (let i = 0; i < slides.length; i++) {
                const container = slides[i].querySelector('.item-container');
                if (container) {
                  container.style.transition = `${duration}ms cubic-bezier(0.19, 1, 0.22, 1)`;
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
                    className="w-full h-full object-cover transition-all duration-700 brightness-100 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-transparent pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Unified Dynamic Text Information */}
        <div className="mt-8 sm:mt-20 text-center px-4 min-h-[120px] sm:min-h-[160px] flex flex-col items-center overflow-hidden">
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
