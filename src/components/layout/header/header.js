"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaChevronRight } from "react-icons/fa";
import menus from "@/data/menus.json";
import AnimatedButton from "@/components/ui/annimation_button";
import MobileMenu from "./mobileMenu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-[#181818] shadow-md sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3 md:py-5"
        }`}
      >
        <div className="max-w-[1330px] mx-auto flex justify-between items-center px-4 md:px-12 lg:px-16">
          {/* Left: Logo */}
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

                {/* Child Menu */}
                {menu.children && openMenu === menu.id && (
                  <div className="absolute left-0 top-full mt-4 w-52 bg-white border border-gray-200 rounded shadow-md">
                    <ul className="py-2">
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
                            className="flex justify-between text-black items-center w-full px-4 py-2 hover:bg-gray-100 transition"
                          >
                            {child.menu_name}
                            {child.has_child === 1 && (
                              <FaChevronRight className="text-[10px]" />
                            )}
                          </Link>

                          {/* Second Level */}
                          {child.children && openSubMenu === child.id && (
                            <ul className="absolute left-full top-0 border border-gray-300 w-48 bg-white rounded shadow-md">
                              {child.children.map((sub) => (
                                <li key={sub.id}>
                                  <Link
                                    href={
                                      sub.path && sub.path !== ""
                                        ? sub.path
                                        : "#"
                                    }
                                    className="block px-4 py-2 hover:bg-gray-100 transition"
                                  >
                                    {sub.menu_name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
