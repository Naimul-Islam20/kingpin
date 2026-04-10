"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import AnimatedButton from "@/components/ui/annimation_button";

const MobileMenu = ({ isOpen, onClose, menus }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const toggleMenu = (id) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-sm border-0 p-0"
              onClick={onClose}
              aria-label="Close menu"
            />

            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 flex h-full min-h-screen w-[280px] flex-col bg-white shadow-2xl"
              aria-hidden={!isOpen}
            >
        <div className="flex shrink-0 items-center justify-between border-b border-gray-300 p-4">
          <h2 className="text-xl font-semibold text-black">Menu</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-black"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <ul className="space-y-0">
            {menus.map((menu) => {
              const hasChildren = menu.has_child === 1 && Array.isArray(menu.child);

              return (
                <li
                  key={menu.id}
                  className="border-b border-gray-300 py-2 uppercase"
                >
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full cursor-pointer items-center justify-between py-2 text-left uppercase"
                        onClick={() => toggleMenu(menu.id)}
                      >
                        <span className="text-sm font-medium text-black">
                          {menu.menu_name}
                        </span>
                        {activeMenu === menu.id ? (
                          <GoChevronUp className="shrink-0 text-black" />
                        ) : (
                          <GoChevronDown className="shrink-0 text-black" />
                        )}
                      </button>

                      <AnimatePresence>
                        {activeMenu === menu.id && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="mt-1 space-y-0 pl-4 overflow-hidden"
                          >
                            {menu.child.map((child, idx) => (
                              <li key={idx}>
                                <Link
                                  href={
                                    child.path && child.path !== ""
                                      ? child.path
                                      : "#"
                                  }
                                  onClick={onClose}
                                  className="block py-2 text-xs font-semibold text-gray-600 hover:text-primary transition-colors"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={
                        menu.path && menu.path !== "" ? menu.path : "#"
                      }
                      className="block py-2 text-sm text-gray-800"
                      onClick={onClose}
                    >
                      {menu.menu_name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-row gap-2 px-0">
            <Link href="#" onClick={onClose} className="flex-1">
              <AnimatedButton className="w-full !px-1 !py-4 !text-[9px]">
                PRIVATE DINING
              </AnimatedButton>
            </Link>

            <Link href="#" onClick={onClose} className="flex-1">
              <AnimatedButton variant="secondary" className="w-full !px-2 !py-4 !text-[9px]">
                BOOK AN EVENT
              </AnimatedButton>
            </Link>
          </div>
          </div>
        </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
