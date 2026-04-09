"use client";

import AnimatedButton from "@/components/ui/annimation_button";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const brandLogos = [
    { src: "https://www.vectorlogo.zone/logos/pepsi/pepsi-ar21.svg", alt: "Pepsi" },
    { src: "https://www.vectorlogo.zone/logos/google/google-ar21.svg", alt: "Google" },
    { src: "https://www.vectorlogo.zone/logos/adidas/adidas-ar21.svg", alt: "Adidas" },
    { src: "https://www.vectorlogo.zone/logos/cocacola/cocacola-ar21.svg", alt: "Coca Cola" }
  ];

  // Repeat the 4 logos to make a set of 8
  const logos = [...brandLogos, ...brandLogos];

  const SocialIcons = ({ className = "", showLabel = true }) => (
    <div className={`flex flex-col gap-5 ${className}`}>
      {showLabel && (
        <h4 className="text-sm font-bold uppercase text-gray-400 tracking-widest">
          Follow Us
        </h4>
      )}
      <div className="flex gap-6">
        {[
          { Icon: FaFacebookF, href: "https://www.facebook.com/Kingpin", color: "hover:text-[#1877F2]" },
          { Icon: FaInstagram, href: "https://www.instagram.com/kingpin_play/", color: "hover:text-[#E4405F]" },
          { Icon: FaTiktok, href: "https://www.tiktok.com/@kingpin_play", color: "hover:text-[#000000]" },
          { Icon: FaYoutube, href: "https://www.youtube.com/user/KingpinBowlingAus", color: "hover:text-[#FF0000]" }
        ].map(({ Icon, href, color }, i) => (
          <Link
            key={i}
            href={href}
            target="_blank"
            className={`text-black transition-colors duration-300 ${color}`}
          >
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <footer className="w-full bg-white text-black pt-0 pb-6 md:pb-8 overflow-hidden border-t border-gray-200">
        
        {/* Scrolling Partner Logos - Minimalist Style */}
        <div className="bg-white py-8 overflow-hidden border-b border-gray-100 mb-10 md:mb-16 kinpin-ticker">
          <div className="flex whitespace-nowrap kinpin-ticker-track items-center w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
                {logos.map((logo, index) => (
                  <div key={`logo-box-${i}-${index}`} className="flex items-center justify-center min-w-[120px] md:min-w-[150px]">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-110" 
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="maaleen-container">
          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mb-10 md:mb-20">
            {/* Signup Section COLUMN */}
            <div className="order-first md:order-last flex flex-col gap-10">
              <div className="flex flex-col space-y-4 bg-white p-4 md:p-6 shadow border border-gray-100 h-fit">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-[#1a1a1a]">
                    Stay in the Know
                  </h3>
                  <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-wide leading-relaxed max-w-[250px]">
                    Sign up to receive exclusive promotions and the latest updates.
                  </p>
                </div>
                <div className="pt-1">
                  <AnimatedButton className="!px-6 !py-2 !text-sm">
                    Sign Up
                  </AnimatedButton>
                </div>
              </div>
              
              {/* SOCIAL ICONS FOR DESKTOP ONLY */}
              <div className="hidden md:block">
                 <SocialIcons className="text-xl" />
              </div>
            </div>

            {/* Combined Section */}
            <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2 md:gap-24">
              {/* Main Links Column */}
              <div className="flex flex-col pl-4 md:pl-0">
                <h3 className="text-sm font-bold uppercase text-gray-400 mb-6 tracking-widest">
                  Let’s Bowl
                </h3>
                <div className="flex flex-col space-y-5">
                  {[
                    "Find a Location",
                    "Parties & Events",
                    "Experiences",
                    "Eat & Drink",
                    "Gift Cards",
                    "Press Release",
                    "FAQs",
                    "MVB Rewards",
                  ].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-xs sm:text-sm md:text-lg font-bold uppercase hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company Section Column */}
              <div className="flex flex-col">
                <h3 className="text-sm font-bold uppercase text-gray-400 mb-6 tracking-widest">
                  Company
                </h3>
                <div className="flex flex-col space-y-5">
                  {["Blog", "Careers", "Press", "Investors", "Contact Us"].map(
                    (item) => (
                      <Link
                        key={item}
                        href="#"
                        className="text-xs sm:text-sm md:text-lg font-bold uppercase hover:text-primary transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 w-full mb-4"></div>

          <div className="flex flex-col items-center gap-6 pt-6 w-full">
            {/* SOCIAL ICONS FOR MOBILE ONLY - Centered */}
            <div className="md:hidden w-full flex justify-center">
              <SocialIcons className="text-2xl items-center" />
            </div>

            <div className="flex flex-col items-center gap-2 md:gap-3 w-full text-center">
              {/* Policies Links - Perfectly Centered */}
              <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] text-gray-600">
                {[
                  "Terms of Use",
                  "Promotional Terms & Conditions",
                  "Arcade Terms & Conditions",
                  "Privacy Policy",
                  "CCPA",
                ].map((policy, index, arr) => (
                  <div key={policy} className="flex items-center">
                    <Link href="#" className="hover:text-black transition-colors duration-300">
                      {policy}
                    </Link>
                    {index < arr.length - 1 && (
                      <span className="ml-3 md:ml-4 text-black select-none">•</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Copyright Info - Centered */}
              <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-gray-600">
                © 2026 <span className="text-gray-800 text-primary">Kingpin</span> All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
