"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaChevronRight } from "react-icons/fa";
import menus from "@/data/menus.json";
import AnimatedButton from "@/components/ui/annimation_button";
import MobileMenu from "./mobileMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Refs and height state for animation
  const dropdownRef = useRef(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure dropdown height for animation
  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    }
  }, [openMenu, openSubMenu]);

  return (
    <>
      <header
        className={`bg-[#000] shadow-md sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3 md:py-5"
        }`}
      >
        <div className="max-w-[1330px] mx-auto flex justify-between items-center px-4 md:px-12 lg:px-16">
          {/* Logo */}
          <div className="select-none transition-all duration-300">
            <Link href="/">
              <img
                src="/logo.png"
                alt="MyLogo"
                className={`w-auto transition-all duration-300 ${
                  scrolled ? " h-8 md:h-9" : "h-9 md:h-11"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="flex-1 hidden lg:flex justify-center items-center space-x-2 lg:space-x-3 uppercase">
            {menus.map((menu) => (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.id)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={menu.path && menu.path !== "" ? menu.path : "#"}
                  className="flex items-center gap-1 px-2 py-2 text-white hover:text-[#C27D2A] transition"
                >
                  {menu.menu_name}
                  {menu.has_child === 1 && (
                    <FaChevronDown className="text-[10px] mt-[2px]" />
                  )}
                </Link>

                {/* Child Menu with height animation */}
                <AnimatePresence>
                  {menu.children && openMenu === menu.id && (
                    <motion.ul
                      ref={dropdownRef}
                      initial={{ height: 0 }}
                      animate={{
                        height: dropdownHeight || "auto",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                      exit={{
                        height: 0,
                        transition: { duration: 0.1, ease: "easeIn" },
                      }}
                      className="absolute left-0 top-full w-52 bg-black text-white border border-gray-700 rounded shadow-md overflow-hidden"
                    >
                      {menu.children.map((child) => (
                        <li
                          key={child.id}
                          className="relative"
                          onMouseEnter={() => setOpenSubMenu(child.id)}
                          onMouseLeave={() => setOpenSubMenu(null)}
                        >
                          <Link
                            href={
                              child.path && child.path !== "" ? child.path : "#"
                            }
                            className="flex justify-between text-white items-center w-full px-4 py-2 hover:bg-[#181818] hover:text-amber-500 transition"
                          >
                            {child.menu_name}
                            {child.has_child === 1 && (
                              <FaChevronRight className="text-[10px]" />
                            )}
                          </Link>

                          {/* Second Level */}
                          <AnimatePresence>
                            {child.children && openSubMenu === child.id && (
                              <motion.ul
                                initial={{ height: 0 }}
                                animate={{
                                  height: dropdownHeight || "auto",
                                  transition: {
                                    duration: 0.2,
                                    ease: "easeOut",
                                  },
                                }}
                                exit={{
                                  height: 0,
                                  transition: { duration: 0.2, ease: "easeIn" },
                                }}
                                className="absolute left-full top-0 border border-gray-300 w-48 bg-black rounded shadow-md overflow-hidden"
                              >
                                {child.children.map((sub) => (
                                  <li key={sub.id}>
                                    <Link
                                      href={
                                        sub.path && sub.path !== ""
                                          ? sub.path
                                          : "#"
                                      }
                                      className="block px-4 py-2 hover:bg-gray-100 text-white transition"
                                    >
                                      {sub.menu_name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <AnimatedButton path="#">BOOK NOW</AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden flex items-center gap-2 px-2 py-2 bg-[#C27D2A] text-white rounded hover:bg-[#b66e16] transition"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        menus={menus}
      />
    </>
  );
}
