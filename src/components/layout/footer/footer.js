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

      <footer className="w-full bg-white text-black py-16 overflow-hidden border-t border-gray-200">
        <div className="maaleen-container">
          {/* Logo Section */}
          <div className="mb-12">
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter text-[#1a1a1a] uppercase leading-none">
              Let’s Bowl
            </h2>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-20">
            {/* Main Links */}
            <div className="flex flex-col space-y-3">
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
                  className="text-lg md:text-xl font-bold uppercase hover:text-red-600 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Company Section */}
            <div className="flex flex-col">
              <h3 className="text-sm font-bold uppercase text-gray-400 mb-6 tracking-widest">
                Company
              </h3>
              <div className="flex flex-col space-y-3">
                {["Blog", "Careers", "Press", "Investors", "Contact Us"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-lg font-bold uppercase hover:text-red-600 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Brands Section */}
            <div className="flex flex-col space-y-6">
              {["Bowlero", "Lucky Strike", "AMF"].map((brand) => (
                <div key={brand} className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default">
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 w-full mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex flex-col gap-6">
              {/* Policies */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                {[
                  "Terms of Use",
                  "Promotional Terms & Conditions",
                  "Arcade Terms & Conditions",
                  "Privacy Policy",
                  "CCPA",
                ].map((policy, index, arr) => (
                  <span key={policy} className="flex items-center">
                    <Link href="#" className="hover:text-black">
                      {policy}
                    </Link>
                    {index < arr.length - 1 && (
                      <span className="ml-4 text-gray-300">•</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                © 2026 Lucky Strike Entertainment • All Rights Reserved
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl text-black">
              <Link
                href="https://www.facebook.com/Kingpin"
                target="_blank"
                className="hover:text-red-600 transition-colors"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.instagram.com/kingpin_play/"
                target="_blank"
                className="hover:text-red-600 transition-colors"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.tiktok.com/@kingpin_play"
                target="_blank"
                className="hover:text-red-600 transition-colors"
              >
                <FaTiktok />
              </Link>
              <Link
                href="https://www.youtube.com/user/KingpinBowlingAus"
                target="_blank"
                className="hover:text-red-600 transition-colors"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

