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
  return (
    <>
      {/* 
    <footer className="w-full uppercase bg-[#000000] text-white">
      <div className="w-full">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex flex-col gap-5 w-full lg:w-1/2 items-center md:items-start">
              <div className="text-white text-4xl font-bold tracking-wide">
                KINGPIN
              </div>

              <div className="flex flex-col items-center gap-5 md:flex-row md:gap-12 md:items-start w-full">
                <div className="flex flex-col items-center md:items-start">
                  <small className="uppercase tracking-wider text-amber-500 text-sm">
                    follow
                  </small>
                  <div className="flex mt-3 text-2xl gap-4">
                    <Link
                      href="https://www.facebook.com/Kingpin"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      href="https://www.instagram.com/kingpin_play/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@kingpin_play"
                      target="_blank"
                    >
                      <FaTiktok />
                    </Link>
                    <Link
                      href="https://www.youtube.com/user/KingpinBowlingAus"
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <small className="uppercase tracking-wider text-amber-500 text-sm">
                    contact
                  </small>
                  <a
                    href="tel:1300814214"
                    className="text-[#f9f9f9] font-black text-[28px] transition-all hover:underline"
                  >
                    1300 814 214
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <small className="uppercase tracking-wider text-amber-500 text-sm">
                  our other brands
                </small>
                <div className="flex flex-col items-center mt-3 gap-2 md:flex-row md:gap-12">
                  <Link
                    href="https://www.zonebowling.com/en-au/"
                    
                  >
                    <span className="text-lg font-black">ZONE BOWLING</span>
                  </Link>
                  <Link href="https://timezonegames.com/en-au/" >
                    <span className="text-lg tracking-wide font-black">
                      TIMEZONE
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 border-t border-gray-500 pt-5 md:pt-0 md:border-none">
              <div className="grid text-medium md:text-lg text-white grid-cols-2 md:grid-cols-4 gap-7 md:gap-10 pl-11 md:pl-0">
                <ul className="space-y-3 md:w-[80px]">
                  <li className="hover:underline">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/activities">Activities</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/venues">Locations</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/wine-and-dine">Wine &amp; Dine</Link>
                  </li>
                </ul>

                <ul className="space-y-3">
                  <li className="hover:underline">
                    <Link href="/parties-and-events/birthday-parties">
                      Birthdays
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/parties-and-events/corporate-parties">
                      Corporate
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/parties-and-events/group-events">Social</Link>
                  </li>
                </ul>

                <ul className="space-y-3">
                  <li className="hover:underline">
                    <Link href="/gift-cards">Gift Cards</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/deals">Deals</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>

                <ul className="space-y-3 w-[80px]">
                  <li className="hover:underline">
                    <Link href="/about-kingpin">About us</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/safety">Safety</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/faqs">FAQs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1330px] text-white mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <Link
            href="https://portal.kingpinplay.com/"
           
            className="order-1 mb-4 md:order-2 md:mb-0"
          >
            <AnimatedButton path={"#"}>Members Portal</AnimatedButton>
          </Link>

          <div className="flex flex-col md:flex-row font-medium flex-wrap gap-5 md:gap-2  text-[#f9f9f9 ] opacity-80 items-center md:items-start order-2 md:order-1">
            <Link
              className="hover:underline order-2 md:order-5"
              href="/terms-conditions"
            >
              Terms and Conditions
            </Link>
            <Link
              className="hover:underline order-3 md:order-4"
              href="/disclaimer"
            >
              Disclaimer
            </Link>
            <Link
              className="hover:underline order-4 md:order-3"
              href="/privacy"
            >
              Privacy
            </Link>
            <Link className="hover:underline order-5 md:order-2" href="/">
              Home
            </Link>
            <span className="order-6 md:order-1 mt-2 md:mt-0">
              © 2025{" "}
              <a
                href="https://muktodharaltd.com/"
                className="hover:underline text-yellow-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                MTL
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
    */}

      <footer className="w-full bg-white text-black pt-6 md:pt-16 pb-10 md:pb-16 overflow-hidden border-t border-gray-200">
        <div className="maaleen-container">

          {/* Logo Section - DESKTOP ONLY */}
          <div className="hidden md:block mb-12">
            <h2 className="text-8xl font-black italic tracking-tighter text-[#1a1a1a] uppercase leading-none">
              Let’s Bowl
            </h2>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mb-10 md:mb-20">
            {/* Signup Section - TOP on mobile, RIGHT on desktop */}
            <div className="order-first md:order-last flex flex-col space-y-2 bg-white p-4 md:p-6 shadow border border-gray-100 h-fit">
              <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-[#1a1a1a]">
                Stay in the Know
              </h3>
              <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-wide leading-relaxed max-w-[250px]">
                Sign up to receive exclusive promotions and the latest updates.
              </p>
              <div className="pt-1">
                <AnimatedButton className="!px-6 !py-2 !text-sm">
                  Sign Up
                </AnimatedButton>
              </div>
            </div>

            {/* Combined Section: Let's Bowl and Company Side-by-Side on Mobile, separate on Desktop */}
            <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2 md:gap-24">
              {/* Main Links Column */}
              <div className="flex flex-col pl-4 md:pl-0">
                <h3 className="text-sm font-bold uppercase text-gray-400 mb-6 tracking-widest md:hidden">
                  Let’s Bowl
                </h3>
                <div className="flex flex-col space-y-5">
                  {[
                    "Find a Location",
                    "Parties & Events",
                    "Experiences",
                    "Bar & Nightlife",
                    "Eat & Drink",
                    "Leagues",
                    "Gift Cards",
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

          {/* Divider */}
          <div className="h-px bg-gray-200 w-full mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-8">
            {/* Social Icons - Top on mobile, Bottom Right on desktop */}
            <div className="flex gap-6 md:gap-8 text-lg md:text-2xl text-black order-first md:order-last">
              {[
                { Icon: FaFacebookF, href: "https://www.facebook.com/Kingpin" },
                { Icon: FaInstagram, href: "https://www.instagram.com/kingpin_play/" },
                { Icon: FaTiktok, href: "https://www.tiktok.com/@kingpin_play" },
                { Icon: FaYoutube, href: "https://www.youtube.com/user/KingpinBowlingAus" }
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Icon />
                </Link>
              ))}
            </div>

            {/* Policies & Copyright - Bottom on Mobile, Bottom Left on desktop */}
            <div className="flex flex-col items-center md:items-start gap-2 md:gap-6 text-center md:text-left order-last md:order-first">
              {/* Policies */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-0 gap-y-1.5 text-[9px] md:text-xs font-bold uppercase tracking-wider text-gray-400">
                {[
                  "Terms of Use",
                  "Promotional Terms & Conditions",
                  "Arcade Terms & Conditions",
                  "Privacy Policy",
                  "CCPA",
                ].map((policy, index, arr) => (
                  <span key={policy} className="flex items-center">
                    <Link href="#" className="hover:text-black transition-colors">
                      {policy}
                    </Link>
                    {index < arr.length - 1 && (
                      <span className="mx-1.5 text-gray-300">•</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400">
                © 2026 Lucky Strike Entertainment • All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

