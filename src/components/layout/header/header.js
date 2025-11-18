"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import menus from "@/data/menus.json";
import AnimatedButton from "@/components/ui/annimation_button";
import Topbar from "./topber";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <>
      <Topbar />
      <header className="bg-black/30 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-[1250px] mx-auto flex justify-between items-center px-4 md:px-12 lg:px-16 py-5">
          {/* Left: Logo */}
          <div className="select-none">
            <img
              src="/logo.png" // এখানে তোমার logo path দাও
              alt="MyLogo"
              className="h-10 w-auto" // size adjust করতে চাইলে
            />
          </div>

          {/* Middle: Menu (centered) */}
          <nav className="flex-1 flex justify-center   items-center space-x-6 lg:space-x-7">
            {menus.map((menu) => (
              <div
                key={menu.id}
                className="relative  "
                onMouseEnter={() => setOpenMenu(menu.id)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {/* Parent Menu Button */}
                <Link
                  href={menu.path && menu.path !== "" ? menu.path : "#"}
                  className="flex items-center gap-1 px-2 py-2 text-white  hover:text-red-400 transition-colors duration-200"
                >
                  {menu.menu_name}
                  {menu.has_child === 1 && (
                    <FaChevronDown className="text-[10px] mt-[2px]" />
                  )}
                </Link>

                {/* Child Menu */}
                {menu.children && openMenu === menu.id && (
                  <>
                    <div
                      className="absolute left-0 top-full w-full h-5"
                      onMouseEnter={() => setOpenMenu(menu.id)}
                      onMouseLeave={() => setOpenMenu(null)}
                    ></div>

                    <div
                      className="absolute left-0 top-full mt-4 w-52 bg-white text-white  border-gray-200 border rounded shadow-md"
                      onMouseEnter={() => setOpenMenu(menu.id)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
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
                                child.path && child.path !== ""
                                  ? child.path
                                  : "#"
                              }
                              className="flex justify-between text-white items-center w-full px-4 py-2 hover:bg-gray-100 transition"
                            >
                              {child.menu_name}
                              {child.has_child === 1 && (
                                <FaChevronRight className="text-[10px]" />
                              )}
                            </Link>

                            {/* Second Level Menu */}
                            {child.children && openSubMenu === child.id && (
                              <>
                                <div
                                  className="absolute left-full top-0 w-full h-3"
                                  onMouseEnter={() => setOpenSubMenu(child.id)}
                                  onMouseLeave={() => setOpenSubMenu(null)}
                                ></div>

                                <ul
                                  className="absolute left-full top-0 border-gray-300 border w-48 bg-white rounded shadow-md"
                                  onMouseEnter={() => setOpenSubMenu(child.id)}
                                  onMouseLeave={() => setOpenSubMenu(null)}
                                >
                                  {child.children.map((sub) => (
                                    <li key={sub.id}>
                                      <Link
                                        href={
                                          sub.path && sub.path !== ""
                                            ? sub.path
                                            : "#"
                                        }
                                        className="block px-4 py-2 hover:text-blue-600 hover:bg-gray-100 whitespace-nowrap transition"
                                      >
                                        {sub.menu_name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Button */}
          <div>
            <AnimatedButton path="#">Contact Us</AnimatedButton>
          </div>
        </div>
      </header>
    </>
  );
}
