"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaBars } from "react-icons/fa";
import menus from "@/data/menus.json";
import AnimatedButton from "@/components/ui/annimation_button";
import MobileMenu from "./mobileMenu";
import { AnimatePresence, motion } from "framer-motion";

import { useDemoCustomer } from "@/context/DemoCustomerContext";

export default function Header() {
  const { isAuthenticated } = useDemoCustomer();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setIsMobileOpen(false), []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Refs and height state for animation
  const dropdownRef = useRef(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);

  // Measure dropdown height for animation
  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    }
  }, [openMenu, openSubMenu]);

  // New Menu Items
  const navMenus = [
    { 
      id: 2, 
      menu_name: "Parties & Events", 
      path: "#",
      has_child: 1,
      child: [
        { name: "Birthday Parties", path: "/birthday-parties" },
        { name: "Class Party", path: "/class-party" },
        { name: "Work Gatherings", path: "/work-gatherings" },
        { name: "Meetings", path: "/meetings" },
      ]
    },
    { id: 3, menu_name: "kingpin fastivals", path: "#" },
    { id: 4, menu_name: "Eat & Drink", path: "#" },
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 py-1 md:py-2 text-black">
        <div className="maaleen-container flex flex-col items-center gap-1">
          {/* Top Row: Logo (Centered) and Action Buttons (Right) */}
          <div className="w-full relative flex items-center justify-center">
            {/* Left Brands - Absolute Left */}
            <div className="hidden lg:flex absolute left-0 items-center gap-4">
            </div>

            {/* Logo - Centered Top */}
            <div className="select-none">
              <Link href="/" onClick={closeMobileMenu}>
                <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-primary">
                  kingpin
                </span>
              </Link>
            </div>

            {/* Desktop Buttons - Absolute Right */}
            <div className="hidden lg:flex absolute right-0 items-center gap-3">
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <AnimatedButton className="!px-6 !py-[10px] md:!py-[14px] !text-[11px] xl:!text-xs min-w-[120px] !shadow-none hover:!shadow-none uppercase">
                    Dashboard
                  </AnimatedButton>
                </Link>
              ) : (
                <Link href="/signup">
                  <AnimatedButton className="!px-6 !py-[10px] md:!py-[14px] !text-[11px] xl:!text-xs min-w-[120px] !shadow-none hover:!shadow-none uppercase">
                    Sign Up
                  </AnimatedButton>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button - Absolute Right */}
            <div className="lg:hidden absolute right-0">
              <button
                onClick={() => setIsMobileOpen(true)}
                className="flex items-center justify-center p-2 text-black transition-all hover:opacity-70"
              >
                <FaBars size={23} />
              </button>
            </div>
          </div>

          {/* Bottom Row: Desktop Menu (Centered) */}
          <div className="w-full flex justify-center items-center">
            <nav className="hidden lg:flex justify-center items-center space-x-2 lg:space-x-6 uppercase">
              {/* 
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
                  ...
                </div>
              ))}
              */}

              {navMenus.map((item) => (
                <div
                  key={item.id}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => item.has_child && setOpenMenu(item.id)}
                  onMouseLeave={() => item.has_child && setOpenMenu(null)}
                >
                  <Link
                    href={item.path}
                    className="px-2 lg:px-4 py-2 text-[14px] xl:text-[16px] font-bold text-black hover:text-primary transition-all duration-300 tracking-wider hover:opacity-80 active:scale-95 flex items-center gap-1"
                  >
                    {item.menu_name}
                    {item.has_child === 1 && (
                      <FaChevronDown className={`text-[10px] mt-[2px] transition-transform duration-300 ${openMenu === item.id ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.has_child === 1 && (
                    <AnimatePresence>
                      {openMenu === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-white shadow-2xl border-t-2 border-primary py-4 z-[100]"
                        >
                          <div className="flex flex-col">
                            {item.child.map((subItem, idx) => (
                              <Link
                                key={idx}
                                href={subItem.path}
                                className="px-6 py-3 text-sm font-bold text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors uppercase tracking-widest border-l-4 border-transparent hover:border-primary"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={closeMobileMenu}
        menus={navMenus}
      />
    </>
  );
}
