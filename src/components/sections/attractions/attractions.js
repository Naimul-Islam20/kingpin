"use client";

import React from "react";
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
  return (
    <section className="bg-[#f9f9f9] py-10 overflow-hidden">
      <div className="maaleen-container">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter text-[#1a1a1a] uppercase leading-none"
          >
            Attractions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((item, index) => (
            <Link 
              key={index} 
              href={item.link}
              className="block outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-none cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4"
                  >
                    {item.title}
                  </motion.h3>
                  
                  <div className="md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <AnimatedButton className="!px-8 !py-3 text-base pointer-events-none">
                      Know More
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
