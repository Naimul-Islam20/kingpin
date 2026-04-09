"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiShoppingBag, FiArrowRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    title: "Kinpin Signature Hoodie",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop",
    price: "$55.00",
    size: "lg",
  },
  {
    id: 2,
    title: "Digital Gift Experience",
    category: "Gifts",
    image: "https://images.unsplash.com/photo-1549463514-6fd42817290d?q=80&w=2070&auto=format&fit=crop",
    price: "From $25.00",
    size: "md",
  },
  {
    id: 3,
    title: "Pro Series Bowling Ball",
    category: "Pro Gear",
    image: "https://images.unsplash.com/photo-1629713014426-10360a40236a?q=80&w=2070&auto=format&fit=crop",
    price: "$120.00",
    size: "sm",
  },
  {
    id: 4,
    title: "Gamer Tech Accessories",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop",
    price: "$45.00",
    size: "sm",
  }
];

const ExperienceShop = () => {
  // Ultra smooth easing curve
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="pt-10 pb-10 md:pt-16 md:pb-16 bg-white overflow-hidden font-[family-name:var(--font-montserrat)] text-[#1a1a1a]">
      <div className="maaleen-container">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: smoothEase }}
          >
            <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">The Lifestyle</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
              Experience <span className="text-primary">Shop</span>
            </h3>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, delay: 0.3, ease: smoothEase }}
             className="flex items-center gap-4 group cursor-pointer"
          >
            <span className="text-xs font-black uppercase tracking-widest border-b-2 border-[#1a1a1a] pb-1">Visit Full Shop</span>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-700">
              <FiArrowRight />
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px] px-4">
          
          {/* Item 1: Large Hoodie */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: smoothEase }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-gray-100 cursor-pointer"
          >
            <Image src={products[0].image} alt={products[0].title} fill className="object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute bottom-10 left-10 text-white z-10">
              <span className="text-[10px] uppercase font-black tracking-widest bg-primary px-3 py-1 mb-4 inline-block">{products[0].category}</span>
              <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-3 translate-x-0 group-hover:translate-x-2 transition-transform duration-1000 ease-out">{products[0].title}</h4>
              <p className="text-lg font-bold opacity-80 mb-6">{products[0].price}</p>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest group/btn">
                Shop Now <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-700" />
              </button>
            </div>
          </motion.div>

          {/* Item 2: Gift Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.2, ease: smoothEase }}
            className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-gray-200 cursor-pointer"
          >
            <Image src={products[1].image} alt={products[1].title} fill className="object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-1000" />
            <div className="absolute inset-x-8 bottom-8 flex justify-between items-end text-white z-10">
              <div className="translate-y-0 group-hover:-translate-y-1 transition-transform duration-700">
                <h4 className="text-xl md:text-2xl font-black uppercase mb-1">{products[1].title}</h4>
                <p className="text-sm font-bold opacity-70">{products[1].price}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-700">
                <FiShoppingBag className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Item 3: Pro Gear */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.4, ease: smoothEase }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-gray-100 cursor-pointer"
          >
            <Image src={products[2].image} alt={products[2].title} fill className="object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-1000" />
            <div className="absolute top-6 left-6 text-white z-10">
              <h4 className="text-[13px] font-black uppercase leading-tight mb-1 group-hover:text-primary transition-colors duration-500">{products[2].title}</h4>
              <p className="text-[11px] font-bold opacity-90">{products[2].price}</p>
            </div>
          </motion.div>

          {/* Item 4: Gamer Tech */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.6, ease: smoothEase }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#1a1a1a] cursor-pointer"
          >
            <Image src={products[3].image} alt={products[3].title} fill className="object-cover opacity-50 transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:opacity-70" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
              <h4 className="text-white text-lg font-black uppercase tracking-tight mb-2 leading-none group-hover:scale-105 transition-transform duration-700">{products[3].title}</h4>
              <span className="text-primary text-[10px] font-black uppercase tracking-widest border border-primary px-4 py-2 mt-4 inline-block opacity-0 group-hover:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover:translate-y-0">
                View Details
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceShop;
