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
    <footer className="w-full uppercase bg-[#000] text-white">
      {/* TOP */}
      <div className="w-full">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* LEFT SECTION (Logo + Follow + Contact + Brands) */}
            <div className="flex flex-col gap-5 w-full lg:w-1/2 items-center md:items-start">
              {/* LOGO */}
              <div className="text-white text-4xl font-bold tracking-wide">
                KINGPIN
              </div>

              {/* FOLLOW + CONTACT */}
              <div className="flex flex-col items-center gap-5 md:flex-row md:gap-12 md:items-start w-full">
                {/* FOLLOW */}
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

                {/* CONTACT */}
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

              {/* OTHER BRANDS */}
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
            {/* RIGHT SECTION (NAVIGATION MENU) */}
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

      {/* BOTTOM */}
      {/* BOTTOM */}
      <div>
        <div className="max-w-[1330px] text-white mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          {/* MEMBERS PORTAL BUTTON (মোবাইলে উপরে) */}
          <Link
            href="https://portal.kingpinplay.com/"
           
            className="order-1 mb-4 md:order-2 md:mb-0"
          >
            <AnimatedButton path={"#"}>Members Portal</AnimatedButton>
          </Link>

          {/* LINKS */}
          <div className="flex flex-col md:flex-row font-medium flex-wrap gap-5 md:gap-2  text-[#f9f9f9 ] opacity-80 items-center md:items-start order-2 md:order-1">
            {/* মোবাইলে সঠিক অর্ডার */}
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
  );
}
