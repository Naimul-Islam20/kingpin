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
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-12 lg:px-16 py-14">
        
        {/* Column 1: Logo + Pages */}
        <div className="flex flex-col space-y-6">
          <div className="text-2xl font-bold">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-10 w-auto cursor-pointer" 
              />
            </Link>
          </div>
          <ul className="space-y-4">
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/work" className="hover:text-blue-400">Work</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link href="/service" className="hover:text-blue-400">Service</Link></li>
          </ul>
        </div>

        {/* Column 2: Help */}
        <div className="flex flex-col space-y-6">
          <h3 className="font-bold text-lg">Help</h3>
          <ul className="space-y-4">
            <li><Link href="/customer-support" className="hover:text-blue-400">Customer Support</Link></li>
            <li><Link href="/delivery-details" className="hover:text-blue-400">Delivery Details</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="flex flex-col space-y-6">
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="space-y-4">
            <li><Link href="/free-ebooks" className="hover:text-blue-400">Free eBooks</Link></li>
            <li><Link href="/development-tutorial" className="hover:text-blue-400">Development Tutorial</Link></li>
            <li><Link href="/how-to-blog" className="hover:text-blue-400">How To Blog</Link></li>
            <li><Link href="/youtube-playlist" className="hover:text-blue-400">Youtube Playlist</Link></li>
          </ul>
        </div>

        {/* Column 4: Extra Links */}
        <div className="flex flex-col space-y-6">
          <h3 className="font-bold text-lg">Extra Links</h3>
          <ul className="space-y-4">
            <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
            <li><Link href="/delivery-details" className="hover:text-blue-400">Delivery Details</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-16 py-4 text-sm">
          
          {/* Left Side: Social + Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex gap-4 text-white">
              <Link href="#"><FaFacebookF className="hover:text-blue-400" /></Link>
              <Link href="#"><FaTwitter className="hover:text-blue-400" /></Link>
              <Link href="#"><FaInstagram className="hover:text-blue-400" /></Link>
              <Link href="#"><FaWhatsapp className="hover:text-blue-400" /></Link>
            </div>
            <div className="flex gap-6 flex-wrap mt-2 md:mt-0">
              <Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-400">Terms</Link>
              <Link href="/work" className="hover:text-blue-400">Work</Link>
            </div>
          </div>

          {/* Right Side: Copyright */}
          <div className="mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} <Link href={"https://muktodharaltd.com/" } className="text-red-500">Muktodhara Technology Limited.</Link> All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
