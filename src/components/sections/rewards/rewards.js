"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheck, FiAward } from "react-icons/fi";
import AnimatedButton from "@/components/ui/annimation_button";
import { REWARD_CARD_TIERS, formatBDT } from "@/components/booking/bookingData";

const cardStyles = {
  silver: "from-zinc-500 via-zinc-300 to-zinc-500 text-zinc-900",
  gold: "from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#5d4037]",
  platinum: "from-[#111111] via-[#3f3f46] to-[#0a0a0a] text-white",
  family: "from-[#155e75] via-[#67e8f9] to-[#0f766e] text-white",
};

const Rewards = () => {
  return (
    <section className="pt-10 pb-20 md:pt-16 md:pb-20 bg-gray-50 overflow-hidden font-[family-name:var(--font-montserrat)] text-[#1a1a1a]">
      <div className="maaleen-container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">
              KINGPIN REWARD CARD
            </h2>
            <h3 className="text-3xl md:text-6xl font-black uppercase leading-tight">
              Rewards & Loyalty 
            </h3>
            <div className="mt-6 md:mt-8 h-[3px] w-16 md:w-20 bg-primary mx-auto" />
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {REWARD_CARD_TIERS.map((card) => (
            <div
              key={card.id}
              className="flex flex-col group cursor-pointer overflow-hidden rounded-none bg-white shadow transition-all duration-500 border border-gray-100"
            >
              {/* Top Card Part */}
              <div className={`relative h-48 md:h-56 bg-gradient-to-tr ${cardStyles[card.id]} p-6 md:p-8 flex flex-col justify-between overflow-hidden`}>
                <div className="flex justify-between items-start relative z-10">
                  <div className={`flex items-center gap-2 ${card.textColor} opacity-90`}>
                    <FiAward className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{card.highlight}</span>
                  </div>
                  <div className={`text-xl font-black uppercase tracking-tighter ${card.textColor}`}>
                    Kingpin
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className={`text-2xl font-black uppercase ${card.textColor}`}>
                    {card.title}
                  </h4>
                  <p className={`mt-1 text-xs font-black uppercase tracking-wider ${card.textColor} opacity-90`}>
                    {formatBDT(card.annualFeeBDT)} / year
                  </p>
                  <div className={`mt-2 text-[8px] font-bold tracking-[3px] uppercase ${card.textColor} opacity-50`}>
                    1234 5678 9012 3456
                  </div>
                </div>
              </div>

              {/* Bottom Details Part (Joined) */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-3 text-primary">Membership Benefits</h5>
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  {[card.discountLabel, card.bonusLabel, card.facilityLabel]
                    .filter(Boolean)
                    .map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 md:gap-3">
                      <FiCheck className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600 text-[12px] md:text-[13px] font-semibold leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/membership?tier=${card.id}`} className="mt-auto block">
                  <AnimatedButton className="w-full !py-2 !text-[10px] !tracking-[0.12em] !bg-[#1a1a1a] !text-white !border-[#1a1a1a] hover:!border-[#1a1a1a] !shadow-none hover:!shadow-none transition-colors">
                    Apply {card.title}
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm font-medium mb-4">Terms and conditions apply for membership processing.</p>
          <a href="#" className="text-[#1a1a1a] font-black text-xs uppercase tracking-widest border-b-2 border-primary hover:text-primary transition-all">
            See Full Policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
