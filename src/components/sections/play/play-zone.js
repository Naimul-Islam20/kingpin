"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiShield, FiHeart, FiStar, FiActivity } from "react-icons/fi";

const features = [
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "Safe Environment",
    desc: "100% certified safety standard equipment."
  },
  {
    icon: <FiActivity className="w-6 h-6" />,
    title: "Interactive Play",
    desc: "Designed to thrill every little explorer."
  },
  {
    icon: <FiHeart className="w-6 h-6" />,
    title: "Parent's Lounge",
    desc: "Relax while watching your kids play safely."
  },
  {
    icon: <FiStar className="w-6 h-6" />,
    title: "Exclusive Zones",
    desc: "Separated play areas for all age groups."
  }
];

const ChildrenPlayZone = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden font-[family-name:var(--font-montserrat)] text-[#1a1a1a]">
      <div className="maaleen-container">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24">
          
          {/* Left Side: Solid Image Container */}
          <div className="w-full lg:w-1/2 flex">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-[450px] md:h-[600px] lg:h-full min-h-[500px] rounded-[40px] overflow-hidden shadow-2xl group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?q=80&w=2070&auto=format&fit=crop" 
                alt="Outdoor Play" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-white/50">
                <p className="text-primary font-black text-2xl mb-1 italic tracking-tighter">Safe & Fun</p>
                <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">Premium Outdoor Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Perfectly Aligned Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-primary"></span>
                <span className="text-secondary text-sm font-black uppercase tracking-[0.3em]">Outdoor Adventure</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] mb-8 tracking-tighter">
                Children’s Outdoor <br /> 
                <span className="text-primary italic">Play Zone</span>
              </h2>
              
              <p className="text-gray-500 text-base md:text-lg mb-12 font-medium leading-relaxed max-w-xl">
                Giving your children the freedom to explore, learn, and grow in a naturally inspired environment designed for pure fun and maximum safety.
              </p>
            </motion.div>

            {/* Symmetry Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] uppercase text-sm tracking-tight mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-xs leading-normal">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button className="px-10 py-4 bg-[#1a1a1a] text-white text-xs font-black uppercase tracking-[0.2em] rounded-none hover:bg-primary transition-colors duration-300 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1">
                Explore The Play Zone
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenPlayZone;
