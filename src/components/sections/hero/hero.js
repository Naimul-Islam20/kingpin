"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import AnimatedButton from "@/components/ui/annimation_button";

const slideData = [
  {
    title: "The King of All Lanes",
    subtitle: "Premium Boutique Bowling",
    description: "Experience the ultimate strike in our luxury lanes with world-class service.",
    cta: "Book a Lane",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Elevated Spirits & Bites",
    subtitle: "Handcrafted Cocktails",
    description: "Savor chef-inspired dishes and signature cocktails in our stylish lounge.",
    cta: "View Menu",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Iconic Events Start Here",
    subtitle: "Private Parties & Corporate Events",
    description: "Host an unforgettable celebration in our exclusive VIP suites.",
    cta: "Enquire Now",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop"
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const goTo = (i) => {
    swiperInstance?.slideToLoop(i);
  };

  return (
    <section className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden relative bg-black font-[family-name:var(--font-montserrat)]">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full relative z-10"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center">
              {/* Background Image for each slide */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Subtle Overlays for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content Panel */}
              <div className="relative h-full w-full maaleen-container flex flex-col justify-center z-10">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="max-w-4xl"
                    >
                      <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-3 mb-4 sm:mb-6"
                      >
                        <div className="h-[2px] w-8 sm:w-12 bg-primary" />
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm">
                          {slide.subtitle}
                        </span>
                      </motion.div>
                      
                      <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-4 sm:mb-8 leading-[1] text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-8 sm:mb-12 leading-relaxed font-light"
                      >
                        {slide.description}
                      </motion.p>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-row gap-2 sm:gap-6"
                      >
                        <AnimatedButton className="flex-1 sm:flex-none !px-4 sm:!px-12 !py-3 sm:!py-5 !text-[9px] sm:!text-sm">
                          {slide.cta}
                        </AnimatedButton>
                        <AnimatedButton variant="secondary" className="flex-1 sm:flex-none !px-4 sm:!px-12 !py-3 sm:!py-5 !text-[9px] sm:!text-sm !text-primary !shadow-none hover:!shadow-none">
                          Explore Venue
                        </AnimatedButton>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation and Manual Carousel Dots inside Container */}
        <div className="absolute bottom-2 sm:bottom-10 w-full z-20 pointer-events-none">
          <div className="maaleen-container flex justify-between items-end pointer-events-auto">
            {/* Custom Carousel Dots */}
            <div
              className="flex gap-2 mb-1 sm:mb-4 lg:mb-6"
              role="tablist"
              aria-label="Hero slides"
            >
              {slideData.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 lg:h-2.5 rounded-none transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    i === activeIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 lg:w-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Custom Navigation Buttons */}
            <div className="flex gap-1.5 sm:gap-4">
              <button className="hero-prev group flex items-center justify-center w-8 h-8 sm:w-14 sm:h-14 border border-white/20 hover:border-primary bg-black/40 hover:bg-primary text-white transition-all duration-300 backdrop-blur-sm cursor-pointer">
                <FiChevronLeft className="group-hover:-translate-x-1 transition-transform w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button className="hero-next group flex items-center justify-center w-8 h-8 sm:w-14 sm:h-14 border border-white/20 hover:border-primary bg-black/40 hover:bg-primary text-white transition-all duration-300 backdrop-blur-sm cursor-pointer">
                <FiChevronRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </Swiper>

      <style>{`
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
