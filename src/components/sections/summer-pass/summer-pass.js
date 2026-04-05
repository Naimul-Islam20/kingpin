"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "@/components/ui/annimation_button";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function SummerPass() {
  return (
    <section className="bg-[#f8f8f8] py-10 border-t border-gray-100">
      <div className="maaleen-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-black italic text-[#1a1a1a] uppercase leading-[0.95] tracking-tighter mb-4">
                Summer Season <br /> Pass Is Back!
              </h2>
              
              <div className="h-1 w-20 bg-[#C27D2A] mb-8"></div>
              
              <p className="text-xl md:text-2xl font-black text-[#C27D2A] uppercase italic tracking-tight mb-6">
                Buy your Summer Season Pass now and <br className="hidden md:block" /> get 10% off.
              </p>

              <p className="text-gray-600 text-base md:text-lg font-bold leading-relaxed max-w-xl mb-10">
                Make the most of summer with the Summer Season Pass, your all-access pass to fun with 2 free games of bowling daily, free shoe rental and more exciting perks!
              </p>

              <div className="flex flex-col space-y-6">
                <AnimatedButton className="!h-[60px] !w-[260px] !rounded-none !px-8">
                  <div className="flex items-center justify-between w-full font-black tracking-widest text-xs">
                    <span>Buy Your Pass</span>
                    <FiArrowRight size={20} />
                  </div>
                </AnimatedButton>

                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest leading-loose">
                  Discount offer valid through 5/17. <br className="md:hidden" />
                  <Link href="#" className="underline decoration-gray-300 hover:text-[#C27D2A] transition-colors decoration-2 underline-offset-4 ml-1">
                    Terms & conditions apply.
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content: High-Impact Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[550px] bg-gray-200 overflow-hidden rounded-none group"
          >
            <Image
              src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2070&auto=format&fit=crop"
              alt="Summer Season Pass Lifestyle"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Design accents */}
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C27D2A] flex items-center justify-center -mr-8 -mt-8 rotate-45"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
