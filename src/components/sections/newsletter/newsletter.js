"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  return (
    <section className="py-6 md:py-8 bg-[#1a1a1a] text-white overflow-hidden font-[family-name:var(--font-montserrat)] border-t border-white/5">
      <div className="maaleen-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-4">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:max-w-xl text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tighter mb-1">
              Be the first <span className="text-primary">to know</span>
            </h2>
            <p className="text-gray-400 text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.2em] opacity-80 leading-relaxed">
              Enter your email for exclusive rewards, special discounts, and more!
            </p>
          </motion.div>

          {/* Right Side: Input Form (Wider) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:max-w-xl" 
          >
            <form className="flex flex-row gap-0 group">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="flex-grow bg-[#2a2a2a] border-none text-white px-4 md:px-6 py-4 focus:bg-[#333333] outline-none text-[10px] font-bold tracking-widest transition-all placeholder:text-gray-500 rounded-none w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-6 md:px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 flex items-center justify-center gap-2 shrink-0 rounded-none w-auto"
              >
                Join <FiSend className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
