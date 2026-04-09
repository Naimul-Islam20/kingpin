"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/annimation_button";

const attractions = [
  {
    title: "Arcade Zone",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "AR/VR Zone",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Racing Zone",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Kidz Zone",
    image: "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Bowling Zone",
    image: "https://images.unsplash.com/photo-1538388149343-8d931b1662c2?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "War Zone",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
];

export default function Attractions() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="bg-[#f9f9f9] py-6 md:py-16 overflow-hidden">
      <div className="maaleen-container">
        <div className="mb-6 md:mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black italic tracking-tighter text-[#1a1a1a] uppercase leading-none"
          >
            Digital Gaming Arcade
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8">
          {attractions.map((item, index) => (
            <Link 
              key={index} 
              href={item.link}
              className="block outline-none"
            >
              <motion.div
                key={isMobile ? "mob" : "desk"}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ 
                  duration: 1.2, 
                  delay: isMobile ? 0 : (index % 3) * 0.12,
                  ease: [0.19, 1, 0.22, 1] 
                }}
                className="group relative h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden rounded-none cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/30 transition-all duration-700"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end items-start z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
                      {item.title}
                    </h3>
                  </motion.div>
                  
                  <div className="md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <AnimatedButton className="!px-10 !py-4 text-base font-bold uppercase tracking-widest pointer-events-none">
                      Explore More
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
