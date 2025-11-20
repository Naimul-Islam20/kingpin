// components/Footer.jsx
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] text-white">
      {/* Main Footer */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-12 lg:px-16 py-8 md:py-14 text-center md:text-left">
        {/* Column 1 */}
        <div className="flex flex-col space-y-4 md:space-y-6 items-center md:items-start">
          <div className="text-2xl font-bold">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto cursor-pointer mx-auto md:mx-0"
              />
            </Link>
          </div>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-blue-400">
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-blue-400">
                Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-4 md:space-y-6 items-center md:items-start">
          <h3 className="font-bold text-lg">Help</h3>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
            <li>
              <Link href="/customer-support" className="hover:text-blue-400">
                Customer Support
              </Link>
            </li>
            <li>
              <Link href="/delivery-details" className="hover:text-blue-400">
                Delivery Details
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-400">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-4 md:space-y-6 items-center md:items-start">
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
            <li>
              <Link href="/free-ebooks" className="hover:text-blue-400">
                Free eBooks
              </Link>
            </li>
            <li>
              <Link
                href="/development-tutorial"
                className="hover:text-blue-400"
              >
                Development Tutorial
              </Link>
            </li>
            <li>
              <Link href="/how-to-blog" className="hover:text-blue-400">
                How To Blog
              </Link>
            </li>
            <li>
              <Link href="/youtube-playlist" className="hover:text-blue-400">
                Youtube Playlist
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col space-y-4 md:space-y-6 items-center md:items-start">
          <h3 className="font-bold text-lg">Extra Links</h3>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
            <li>
              <Link href="/blog" className="hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/delivery-details" className="hover:text-blue-400">
                Delivery Details
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-400">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-2 md:py-4">
        <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-4 px-4 md:px-12 lg:px-16 text-sm md:text-base">
          {/* Left Side */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <div className="flex gap-3 md:gap-4 text-white justify-center">
              <Link href="#">
                <FaFacebookF className="hover:text-blue-400" />
              </Link>
              <Link href="#">
                <FaTwitter className="hover:text-blue-400" />
              </Link>
              <Link href="#">
                <FaInstagram className="hover:text-blue-400" />
              </Link>
              <Link href="#">
                <FaWhatsapp className="hover:text-blue-400" />
              </Link>
            </div>
            <div className="flex gap-2 md:gap-6 flex-wrap justify-center mt-1 md:mt-0">
              <Link href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400">
                Terms
              </Link>
              <Link href="/work" className="hover:text-blue-400">
                Work
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center md:text-right mt-1 md:mt-0">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href={"https://muktodharaltd.com/"}
              className="text-[#C27D2A]"
            >
              Muktodhara Technology Limited.
            </Link>{" "}
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
