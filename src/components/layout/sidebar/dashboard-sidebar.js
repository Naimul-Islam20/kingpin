"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { 
  HiOutlineSquares2X2, 
  HiOutlineCalendarDays, 
  HiOutlineTicket, 
  HiOutlineCake, 
  HiOutlineCreditCard,
  HiOutlineUser,
  HiOutlineArrowLeftOnRectangle,
  HiBars3BottomLeft,
  HiXMark
} from "react-icons/hi2";
import { useState, useEffect } from "react";
import { useDemoCustomer } from "@/context/DemoCustomerContext";

const NAV_ITEMS = [
  { name: "Dashboard Overview", href: "/dashboard", icon: HiOutlineSquares2X2 },
  { name: "Event Booking", href: "/dashboard/event", icon: HiOutlineCake },
  { name: "Dining Booking", href: "/dashboard/dining", icon: HiOutlineCalendarDays },
  { name: "Arcade Booking", href: "/dashboard/arcade", icon: HiOutlineTicket },
  { name: "Membership", href: "/dashboard/membership", icon: HiOutlineCreditCard },
];

const SECONDARY_NAV = [
  { name: "Profile", href: "/dashboard/profile", icon: HiOutlineUser },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { markSignedOut } = useDemoCustomer();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleLogout = () => {
    markSignedOut();
    setIsMobileOpen(false);
    router.push("/");
  };

  return (
    <>
      <div className="fixed left-3 top-3 z-50 lg:hidden focus:outline-none">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <HiXMark size={22} /> : <HiBars3BottomLeft size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside
        className={`fixed inset-y-0 left-0 z-40 h-screen w-[260px] border-r border-slate-200 bg-white flex flex-col transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:z-30 lg:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-5 border-b border-slate-50">
          <div className="mt-12 flex items-center justify-between gap-3">
            <Link href="/dashboard" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-700 transition-colors">
                K
              </div>
            </Link>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          <div>
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                      ${isActive 
                        ? "bg-blue-50 text-blue-700 font-semibold" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}
                    `}
                  >
                    <item.icon size={20} className={`${isActive ? "text-blue-600" : "text-slate-400"} shrink-0`} />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Settings
            </p>
            <nav className="space-y-1">
              {SECONDARY_NAV.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                      ${isActive 
                        ? "bg-blue-50 text-blue-700 font-semibold" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}
                    `}
                  >
                    <item.icon size={20} className={`${isActive ? "text-blue-600" : "text-slate-400"} shrink-0`} />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
              >
                <HiOutlineArrowLeftOnRectangle size={20} className="shrink-0" />
                <span className="text-sm font-medium">Log out</span>
              </button>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
