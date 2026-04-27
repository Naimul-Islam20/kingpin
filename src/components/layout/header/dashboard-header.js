"use client";

import { HiOutlineBell, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useDemoCustomer } from "@/context/DemoCustomerContext";

export default function DashboardHeader({ title, subtitle }) {
  const { member } = useDemoCustomer();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between pl-16 pr-4 sm:pl-[4.5rem] sm:pr-5 md:px-8 sticky top-0 z-20">
      <div>
        <h1 className="text-lg font-bold text-slate-900 tracking-tight">{title}</h1>
        {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
          <HiOutlineBell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="hidden md:block text-right">
            <p className="text-xs font-semibold text-slate-900">{member?.fullName || "Guest"}</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">{member?.tier || "Bronze"}</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm uppercase">
            {member?.fullName?.charAt(0) || "G"}
          </div>
        </div>
      </div>
    </header>
  );
}
