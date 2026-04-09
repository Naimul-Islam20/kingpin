"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "@/components/ui/annimation_button";
import { FiArrowRight, FiShield, FiActivity, FiHeart, FiStar } from "react-icons/fi";
import Link from "next/link";

export default function SummerPass() {
  return (
    <section className="bg-white py-6 md:py-16 border-t border-gray-100 overflow-hidden">
      <div className="maaleen-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-primary overflow-hidden">
          <div className="relative h-[250px] lg:h-auto min-h-[250px] bg-gray-200 overflow-hidden rounded-none group order-1 lg:order-2">
            <Image
              src="/play.jpg"
              alt="Children's Outdoor Play Zone"
              fill
              unoptimized
              className="object-cover transition-transform duration-700"
            />
          </div>

          {/* Left Content */}
          <div className="flex flex-col space-y-4 p-4 md:p-8 lg:p-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#1a1a1a] uppercase leading-[0.95] tracking-tighter mb-4">
                Children’s Outdoor <br /> Play Zone
              </h2>
              
              <div className="h-1 w-16 bg-white mb-6"></div>
              

              <p className="text-white text-base md:text-lg font-bold leading-relaxed max-w-xl mb-8 opacity-90">
                Giving your children the freedom to explore, learn, and grow in a naturally inspired environment designed for pure fun and maximum safety.
              </p>

              {/* Play Zone Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <FiShield size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-black uppercase tracking-tight text-lg mb-1 leading-none">Safe Environment</h4>
                    <p className="text-white text-xs font-medium opacity-90">100% certified safety standard equipment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <FiActivity size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-black uppercase tracking-tight text-lg mb-1 leading-none">Interactive Play</h4>
                    <p className="text-white text-xs font-medium opacity-90">Designed to thrill every little explorer.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <FiHeart size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-black uppercase tracking-tight text-lg mb-1 leading-none">Parent's Lounge</h4>
                    <p className="text-white text-xs font-medium opacity-90">Relax while watching your kids play safely.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <FiStar size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-black uppercase tracking-tight text-lg mb-1 leading-none">Exclusive Zones</h4>
                    <p className="text-white text-xs font-medium opacity-90">Separated play areas for all age groups.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <AnimatedButton variant="secondary" className="!h-[54px] md:!h-[60px] !w-full sm:!w-[300px] !rounded-none !px-8 !hover:border-white">
                  <div className="flex items-center justify-between w-full font-black tracking-widest text-xs uppercase">
                    <span>Explore The Play Zone</span>
                    <FiArrowRight size={20} />
                  </div>
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
