"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default bg-black/30 border-0 p-0"
          onClick={onClose}
          aria-label="Close menu"
        />
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-50 flex h-full min-h-screen w-4/5 max-w-xs flex-col bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
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
              const hasChildren =
                Array.isArray(menu.children) && menu.children.length > 0;

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

                      {activeMenu === menu.id && (
                        <ul className="mt-2 space-y-1 pl-2">
                          {menu.children.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={
                                  child.path && child.path !== ""
                                    ? child.path
                                    : "#"
                                }
                                onClick={onClose}
                                className="block rounded py-2 text-sm font-medium text-black hover:bg-gray-100"
                              >
                                {child.menu_name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
              <AnimatedButton className="w-full !px-2 !py-4 !text-[10px]">
                BOOK EVENT
              </AnimatedButton>
            </Link>

            <Link href="#" onClick={onClose} className="flex-1">
              <AnimatedButton variant="secondary" className="w-full !px-2 !py-4 !text-[10px]">
                RESERVE LANE
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
