"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const brandData = [
  {
    title: "Burger King",
    description: "Savor the authentic Flame-Grilled Whopper and original Burger King favorites, served fresh directly to your table.",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop",
    cta: "View Original Menu"
  },
  {
    title: "KFC Special",
    description: "The world's most famous Finger Lickin' Good fried chicken, served with the original 11 herbs and spices you love.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore KFC Menu"
  },
  {
    title: "Pizza Hut",
    description: "Enjoy the iconic Pan Pizza and signature crusts from Pizza Hut, served fresh for an authentic dining experience.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop",
    cta: "View Original Menu"
  },
  {
    title: "Nando's Peri-Peri",
    description: "Experience the original flame-grilled PERi-PERi chicken from Nando's, prepared exactly how it's meant to be.",
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Nando's Menu"
  },
  {
    title: "Taco Bell",
    description: "Authentic Taco Bell tacos, burritos, and more. Satisfy your Tex-Mex cravings with the original flavors.",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop",
    cta: "View Original Menu"
  },
  {
    title: "Starbucks Treats",
    description: "Your favorite Starbucks beverages and pastries, expertly served for an authentic coffee-house experience.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    cta: "Original Menu"
  },
  {
    title: "Subway Fresh",
    description: "Custom-made sandwiches and salads prepared fresh right in front of you with your choice of toppings.",
    image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=2070&auto=format&fit=crop",
    cta: "Original Menu"
  },
  {
    title: "Domino's Pizza",
    description: "Hot and fresh pizzas delivered straight from the oven to your table. Enjoy the classic flavors you love.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    cta: "View Original Menu"
  },
  {
    title: "Dunkin' Donuts",
    description: "America's favorite coffee and donuts. Treat yourself to a variety of sweet treats and premium coffee.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop",
    cta: "Original Menu"
  },
  {
    title: "Hardee's Burgers",
    description: "Famous for thickburgers and made-from-scratch biscuits. Experience the authentic taste of Hardee's.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Menu"
  }
];

const EatsDrinks = () => {
  return (
    <section className="py-4 md:py-12 bg-white overflow-hidden font-[family-name:var(--font-montserrat)]">
      <div className="maaleen-container relative px-10 sm:px-4">
        {/* Section Heading */}
        <div className="text-center mb-4 md:mb-10">
          <h2 className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4">
            Authentic Service
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black leading-tight">
            Eats & Drinks
          </h3>
          <div className="mt-6 h-[3px] w-20 bg-primary mx-auto" />
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-6 lg:px-2 z-20 pointer-events-none">
            <button className="eats-prev pointer-events-auto group flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-white/90 border border-gray-100 hover:border-primary text-black hover:text-white hover:bg-primary transition-all duration-300 shadow-md">
              <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button className="eats-next pointer-events-auto group flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-white/90 border border-gray-100 hover:border-primary text-black hover:text-white hover:bg-primary transition-all duration-300 shadow-md">
              <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".eats-pagination" }}
            navigation={{ prevEl: ".eats-prev", nextEl: ".eats-next" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            className="pb-12"
          >
            {brandData.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="group h-full flex flex-col bg-gray-50 border border-gray-100 hover:border-primary/30 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden mb-8">
                    <img
                      src={brand.image}
                      alt={brand.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-10 flex flex-col flex-grow">
                    <h4 className="text-2xl font-black uppercase text-black mb-4 group-hover:text-primary transition-colors line-clamp-1 overflow-hidden h-[32px]">
                      {brand.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow font-light line-clamp-3 overflow-hidden min-h-[72px]">
                      {brand.description}
                    </p>
                    <button className="relative w-max text-xs sm:text-sm font-bold uppercase tracking-widest text-black group/btn mt-auto">
                      <span className="relative z-10 transition-colors group-hover/btn:text-primary">
                        {brand.cta}
                      </span>
                      <div className="mt-2 h-[2px] w-12 bg-primary group-hover/btn:w-full transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 w-full">
          <div className="eats-pagination flex justify-center items-center gap-2 w-full" />
        </div>
      </div>

      <style>{`
        .eats-pagination .swiper-pagination-bullet { 
          width: 6px; 
          height: 6px; 
          opacity: 0.2; 
          background: #000; 
          border-radius: 0; 
          transition: all 0.3s ease-in-out; 
          margin: 0 4px !important; 
        }
        @media (min-width: 1024px) { 
          .eats-pagination .swiper-pagination-bullet { 
            width: 10px; 
            height: 10px; 
          } 
        }
        .eats-pagination .swiper-pagination-bullet-active { 
          width: 24px; 
          opacity: 1; 
          background: #C4A484; 
        }
        @media (min-width: 1024px) { 
          .eats-pagination .swiper-pagination-bullet-active { 
            width: 32px; 
          } 
        }
        
        .eats-prev.swiper-button-disabled,
        .eats-next.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default EatsDrinks;
