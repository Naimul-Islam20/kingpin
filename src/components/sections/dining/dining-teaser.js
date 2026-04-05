"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "@/components/ui/annimation_button";
import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";

const packages = [
  {
    id: "duo",
    title: "The Dynamic Duo",
    subtitle: "Dual-Restaurant Selection",
    features: ["Choose any 2 partner restaurants", "Unlimited orders from the full menu", "Concierge fetching & service"],
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000"
  },
  {
    id: "trio",
    title: "The Triple Threat",
    subtitle: "Triple-Kitchen Elite Feast",
    features: ["Access to 3 distinct restaurant menus", "Unlimited multi-course selections", "Concierge menu design", "Priority fetching"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000",
    featured: true
  },
  {
    id: "grand",
    title: "The Grand Tour",
    subtitle: "The Infinite Tasting Journey",
    features: ["No limits. Access all partner restaurants", "The ultimate culinary freedom", "Dedicated dining server", "Exclusive VIP staging"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000"
  }
];

export default function DiningTeaser() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-10 overflow-hidden">
      <div className="maaleen-container">
      
      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white max-w-xl w-full relative overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => { setSelectedPackage(null); setIsSubmitted(false); }}
                className="absolute top-6 right-6 text-gray-400 hover:text-[#C27D2A] z-10"
              >
                <FiX size={24} />
              </button>

              {!isSubmitted ? (
                 <div className="p-12">
                     <span className="text-[#C27D2A] text-[10px] font-black uppercase tracking-[5px] mb-4 block">Reservation Request</span>
                     <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                       {selectedPackage.title}
                     </h2>
                     <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-10 leading-relaxed">
                       Please provide your contact details. Our Elite Dining Manager will reach out to you within 2 hours to curate your bespoke menu.
                     </p>

                     <form onSubmit={handleBooking} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <input 
                              required
                              type="text" 
                              placeholder="FULL NAME"
                              className="w-full h-14 bg-gray-50 border-0 px-6 font-black uppercase text-[10px] tracking-widest placeholder:text-gray-300 focus:ring-2 focus:ring-[#C27D2A] transition-all"
                           />
                           <input 
                              required
                              type="tel" 
                              placeholder="PHONE NUMBER"
                              className="w-full h-14 bg-gray-50 border-0 px-6 font-black uppercase text-[10px] tracking-widest placeholder:text-gray-300 focus:ring-2 focus:ring-[#C27D2A] transition-all"
                           />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <input 
                              required
                              type="date" 
                              className="w-full h-14 bg-gray-50 border-0 px-6 font-black uppercase text-[10px] tracking-widest placeholder:text-gray-300 focus:ring-2 focus:ring-[#C27D2A] transition-all"
                           />
                           <input 
                              required
                              type="number" 
                              placeholder="NUMBER OF GUESTS"
                              className="w-full h-14 bg-gray-50 border-0 px-6 font-black uppercase text-[10px] tracking-widest placeholder:text-gray-300 focus:ring-2 focus:ring-[#C27D2A] transition-all"
                           />
                        </div>
                        <div className="space-y-4">
                           <span className="text-[10px] font-black uppercase tracking-widest text-[#C27D2A]">What are you craving?</span>
                           <textarea 
                              placeholder="LIST YOUR PREFERRED DISHES OR RESTAURANTS (E.G. TRUFFLE PASTA, RIBEYE STEAK, SUSHI PLATTER)"
                              className="w-full h-32 bg-gray-50 border-0 p-6 font-black uppercase text-[10px] tracking-widest placeholder:text-gray-300 focus:ring-2 focus:ring-[#C27D2A] transition-all resize-none"
                           ></textarea>
                        </div>

                        <AnimatedButton type="submit" className="!w-full !h-[64px] !rounded-none">
                           <div className="flex items-center justify-between w-full font-black tracking-[4px] text-xs">
                              <span>Submit Request</span>
                              <FiArrowRight size={20} />
                           </div>
                        </AnimatedButton>
                     </form>
                 </div>
              ) : (
                 <div className="p-20 text-center flex flex-col items-center">
                    <div className="h-24 w-24 bg-[#C27D2A] flex items-center justify-center text-white mb-10">
                       <FiCheck size={48} />
                    </div>
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6 leading-none">
                       Request Received
                    </h2>
                    <p className="text-gray-500 font-bold text-sm uppercase tracking-widest leading-loose max-w-sm">
                       An Elite Dining Manager will contact you shortly to start your curation journey.
                    </p>
                    <button 
                      onClick={() => setSelectedPackage(null)}
                      className="mt-12 text-[#C27D2A] font-black text-[10px] uppercase tracking-[5px] hover:tracking-[7px] transition-all border-b-2 border-[#C27D2A] pb-2"
                    >
                       Done
                    </button>
                 </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-center text-center mb-24">
        <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">
           Unlimited Flavors. <br /> <span className="text-[#C27D2A]">One Dedicated Lane.</span>
        </h2>
        <p className="text-gray-500 font-black uppercase tracking-[5px] text-xs max-w-2xl leading-loose">
           Select your curation level. We fetch food from the city's finest restaurants and serve it directly to your lane while you bowl.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`flex flex-col relative h-full ${pkg.featured ? 'bg-[#1a1a1a] text-white lg:translate-y-[-20px] shadow-2xl' : 'bg-white border border-gray-100'}`}
          >
            {pkg.featured && (
              <div className="absolute top-0 left-0 bg-[#C27D2A] text-white px-6 py-2 z-20 text-[10px] font-black uppercase tracking-widest -mt-4 ml-6">
                Most Immersive
              </div>
            )}

            <div className="relative h-[250px] md:h-[350px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src={pkg.image}
                alt={pkg.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8 flex flex-col flex-grow">
              <div>
                <span className={`text-xs font-black uppercase tracking-[4px] mb-4 block ${pkg.featured ? 'text-[#C27D2A]' : 'text-gray-400'}`}>
                  {pkg.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-black italic uppercase leading-none tracking-tighter mb-4 leading-none">
                  {pkg.title}
                </h3>
              </div>

              <ul className="space-y-4 pt-8 border-t border-gray-100/20 flex-grow">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-[10px] font-black uppercase tracking-widest leading-none">
                    <FiCheck className="text-[#C27D2A] text-lg shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <AnimatedButton 
                  onClick={() => setSelectedPackage(pkg)}
                  className={`!w-full !rounded-none !h-[60px] ${pkg.featured ? '!bg-white !text-[#1a1a1a]' : '!bg-[#1a1a1a] !text-white'}`}
                >
                  <div className="flex items-center justify-between w-full font-black tracking-[4px] text-xs">
                    <span>Select Package</span>
                    <FiArrowRight size={20} />
                  </div>
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
}
