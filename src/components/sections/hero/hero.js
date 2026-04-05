"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HERO_VIDEO_ID = "3I1Lpm3AlI4";

function loadYouTubeIframeAPI() {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.YT?.Player) {
      resolve();
      return;
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.head.appendChild(tag);
    }
  });
}

const slideData = [
  {
    title: "The King of All Lanes",
    subtitle: "Premium Boutique Bowling",
    description: "Experience the ultimate strike in our luxury lanes with world-class service.",
    cta: "Book a Lane"
  },
  {
    title: "Elevated Spirits & Bites",
    subtitle: "Handcrafted Cocktails",
    description: "Savor chef-inspired dishes and signature cocktails in our stylish lounge.",
    cta: "View Menu"
  },
  {
    title: "Iconic Events Start Here",
    subtitle: "Private Parties & Corporate Events",
    description: "Host an unforgettable celebration in our exclusive VIP suites.",
    cta: "Enquire Now"
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const hostRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeIframeAPI().then(() => {
      if (cancelled || !hostRef.current || !window.YT?.Player) return;

      const origin =
        typeof window !== "undefined" ? window.location.origin : "";
      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId: HERO_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          enablejsapi: 1,
          loop: 1,
          playlist: HERO_VIDEO_ID, // Required for loop in YT API
          ...(origin ? { origin } : {}),
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
          },
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(0, true);
              e.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
      playerRef.current = null;
    };
  }, []);

  const goTo = (i) => {
    swiperInstance?.slideToLoop(i);
  };

  return (
    <section className="w-full h-[60vh] sm:h-[75vh] md:h-[90vh] lg:h-screen overflow-hidden relative bg-black font-[family-name:var(--font-montserrat)]">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          ref={hostRef}
          className="absolute top-1/2 left-1/2 w-screen h-[56.25vw] min-h-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 [&_iframe]:size-full opacity-100"
        />
        {/* Subtle Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

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
              {/* Content Panel */}
              <div className="relative h-full w-full maaleen-container flex flex-col justify-center">
                <div 
                  className={`max-w-4xl transition-opacity duration-500 ${
                    activeIndex === index ? "animate-slideInLeft opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="h-[2px] w-8 sm:w-12 bg-[#C27D2A]" />
                    <span className="text-[#C27D2A] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm">
                      {slide.subtitle}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase mb-6 sm:mb-8 leading-[1.1] text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    {slide.title}
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mb-8 sm:mb-12 leading-relaxed font-light">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <button className="group relative overflow-hidden bg-[#C27D2A] text-white font-bold px-8 sm:px-12 py-3 sm:py-5 rounded-none uppercase tracking-widest text-xs sm:text-sm border-2 border-[#C27D2A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(194,125,42,0.6)]">
                      <span className="relative z-10">{slide.cta}</span>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="absolute inset-0 z-10 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">{slide.cta}</span>
                    </button>
                    <button className="bg-transparent hover:bg-white text-white hover:text-black transition-all duration-500 font-bold px-8 sm:px-12 py-3 sm:py-5 rounded-none uppercase tracking-widest text-xs sm:text-sm border-2 border-white/30 hover:border-white">
                      Explore Venue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation and Manual Carousel Dots inside Container */}
        <div className="absolute bottom-10 w-full z-20 pointer-events-none">
          <div className="maaleen-container flex justify-between items-end pointer-events-auto">
            {/* Custom Carousel Dots */}
            <div
              className="flex gap-2 mb-2 sm:mb-4 lg:mb-6"
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
                  className={`h-2 lg:h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    i === activeIndex
                      ? "w-8 bg-[#C27D2A]"
                      : "w-2 lg:w-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Custom Navigation Buttons */}
            <div className="flex gap-2 sm:gap-4">
              <button className="hero-prev group flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 border border-white/20 hover:border-[#C27D2A] bg-black/40 hover:bg-[#C27D2A] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer">
                <FiChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="hero-next group flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 border border-white/20 hover:border-[#C27D2A] bg-black/40 hover:bg-[#C27D2A] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer">
                <FiChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Swiper>

      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
