"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiAward } from "react-icons/fi";
import AnimatedButton from "@/components/ui/annimation_button";

const rewardCards = [
  {
    type: "Family",
    title: "Family Card",
    gradient: "from-[#ff6b6b] via-[#f06292] to-[#c2185b]",
    textColor: "text-white",
    features: [
      "Group Discounts (Up to 6 people)",
      "Pizza & Drinks Combo Deals",
      "Shared Points Pool",
      "Dedicated Family Events"
    ],
    highlight: "Group Savings"
  },
  {
    type: "Silver",
    title: "Silver Card",
    gradient: "from-gray-400 via-gray-200 to-gray-500",
    textColor: "text-gray-800",
    features: [
      "5% Discount on all Games",
      "Free Shoe Rental on Weekdays",
      "Exclusive Birthday Invitations",
      "Collect 1 point per $10 spent"
    ],
    highlight: "Essential Entry"
  },
  {
    type: "Gold",
    title: "Gold Card",
    gradient: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]",
    textColor: "text-[#5d4037]",
    features: [
      "10% Discount on Games & Snacks",
      "Priority Lane Booking",
      "1 Free Game per Month",
      "Collect 2 points per $10 spent"
    ],
    highlight: "Most Popular"
  },
  {
    type: "Platinum",
    title: "Platinum Card",
    gradient: "from-[#1a1a1a] via-[#4a4a4a] to-[#000000]",
    textColor: "text-white",
    features: [
      "15% Flat Discount Storewide",
      "VIP Lounge Access",
      "Unlimited Free Shoe Rentals",
      "Personal Host for Events"
    ],
    highlight: "Ultra Premium"
  }
];

const Rewards = () => {
  return (
    <section className="pt-10 pb-20 md:pt-16 md:pb-20 bg-gray-50 overflow-hidden font-[family-name:var(--font-montserrat)] text-[#1a1a1a]">
      <div className="maaleen-container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">
              KINPIN REWARD CARD
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase leading-tight">
              Rewards & Loyalty 
            </h3>
            <div className="mt-8 h-[3px] w-20 bg-primary mx-auto" />
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
          {rewardCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col group cursor-pointer overflow-hidden rounded-none bg-white shadow transition-all duration-500 border border-gray-100"
            >
              {/* Top Card Part */}
              <div className={`relative h-56 bg-gradient-to-tr ${card.gradient} p-8 flex flex-col justify-between overflow-hidden`}>
                {/* Sequential Shiny Effect (Automatic) */}
                <motion.div 
                  animate={{ left: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 4.5,
                    delay: index * 1.5,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[30deg] z-0" 
                />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className={`flex items-center gap-2 ${card.textColor} opacity-90`}>
                    <FiAward className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{card.highlight}</span>
                  </div>
                  <div className={`text-xl font-black uppercase tracking-tighter ${card.textColor}`}>
                    Kinpin
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className={`text-2xl font-black uppercase ${card.textColor}`}>
                    {card.title}
                  </h4>
                  <div className={`mt-2 text-[8px] font-bold tracking-[3px] uppercase ${card.textColor} opacity-50`}>
                    1234 5678 9012 3456
                  </div>
                </div>
              </div>

              {/* Bottom Details Part (Joined) */}
              <div className="p-8 flex flex-col flex-grow">
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-primary">Membership Benefits</h5>
                <ul className="space-y-4 mb-10">
                  {card.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <FiCheck className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600 text-[13px] font-semibold leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <AnimatedButton className="mt-auto w-full !bg-[#1a1a1a] !text-white !border-[#1a1a1a] hover:!border-[#1a1a1a] !shadow-none hover:!shadow-none transition-colors">
                  Become a Member
                </AnimatedButton>
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
