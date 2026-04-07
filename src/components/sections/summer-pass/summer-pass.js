"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "@/components/ui/annimation_button";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function SummerPass() {
  return (
    <section className="bg-[#fef9f1] py-6 md:py-16 border-t border-gray-100 overflow-hidden">
      <div className="maaleen-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-primary overflow-hidden">
          <div className="relative h-[250px] lg:h-auto min-h-[250px] bg-gray-200 overflow-hidden rounded-none group order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2070&auto=format&fit=crop"
              alt="Summer Season Pass Lifestyle"
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
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-black italic text-[#1a1a1a] uppercase leading-[0.95] tracking-tighter mb-4">
                Summer Season <br /> Pass Is Back!
              </h2>
              
              <div className="h-1 w-16 bg-white mb-6"></div>
              
              <p className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase italic tracking-tight mb-6">
                Buy your Summer Season Pass now and <br className="hidden md:block" /> get 10% off.
              </p>

              <p className="text-white text-base md:text-lg font-bold leading-relaxed max-w-xl mb-10 opacity-90">
                Make the most of summer with the Summer Season Pass, your all-access pass to fun with 2 free games of bowling daily, free shoe rental and more exciting perks!
              </p>

              <div className="flex flex-col space-y-6">
                <AnimatedButton variant="secondary" className="!h-[54px] md:!h-[60px] !w-full sm:!w-[260px] !rounded-none !px-8 !hover:border-white">
                  <div className="flex items-center justify-between w-full font-black tracking-widest text-xs">
                    <span>Buy Your Pass</span>
                    <FiArrowRight size={20} />
                  </div>
                </AnimatedButton>

                <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest leading-loose opacity-80">
                  Discount offer valid through 5/17. <br className="md:hidden" />
                  <Link href="#" className="underline decoration-white hover:text-white transition-colors decoration-2 underline-offset-4 ml-1">
                    Terms & conditions apply.
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Secondary Card: Spring Break Unlimited (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-primary overflow-hidden mt-4 md:mt-16">
          <div className="relative h-[250px] lg:h-auto min-h-[250px] bg-gray-100 overflow-hidden rounded-none group order-1 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1544144433-d50aff500b91?q=80&w=2000&auto=format&fit=crop"
              alt="Spring Break Unlimited Lifestyle"
              fill
              unoptimized
              className="object-cover transition-transform duration-700"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col space-y-4 p-4 md:p-8 lg:p-10 order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black italic text-[#1a1a1a] uppercase leading-[0.95] tracking-tighter mb-4">
                Spring Break <br /> Unlimited Bowling
              </h2>
              
              <div className="h-1 w-16 bg-white mb-6"></div>
              
              <p className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase italic tracking-tight mb-6">
                Unlimited Bowling. Unlimited Fun.
              </p>

              <p className="text-white text-sm md:text-base font-bold leading-relaxed max-w-xl mb-10 opacity-90">
                Enjoy unlimited bowling (shoe rental included!) for a set price with our limited-time Spring Break Unlimited offer!
              </p>

              <div className="flex flex-col space-y-6">
                <AnimatedButton variant="secondary" className="!h-[54px] md:!h-[60px] !w-full sm:!w-[340px] !rounded-none !px-8 !hover:border-white">
                  <div className="flex items-center justify-between w-full font-black tracking-widest text-[10px] md:text-xs">
                    <span>Spring Break Unlimited Details</span>
                    <FiArrowRight size={20} />
                  </div>
                </AnimatedButton>

                <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest leading-loose opacity-80">
                  Subject to lane availability. Pricing and participation vary by location. <br className="md:hidden" />
                  <Link href="#" className="underline decoration-white hover:text-white transition-colors decoration-2 underline-offset-4 ml-1">
                    Terms & conditions apply.
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
