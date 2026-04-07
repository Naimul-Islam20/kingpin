"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ChatWidget() {
  // Replace with the actual WhatsApp number
  const whatsappNumber = "611300814214"; 
  
  return (
    <>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:shadow-[#25D366]/50 group flex items-center justify-center animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />

        {/* Floating Tooltip */}
        <span className="absolute right-full mr-3 bg-white text-black text-[9px] md:text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-none shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border-2 border-gray-100 italic">
          Chat with us
        </span>
      </a>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
