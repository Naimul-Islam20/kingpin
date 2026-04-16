"use client";

import DashboardHeader from "@/components/layout/header/dashboard-header";
import { HiOutlineUser, HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlineShieldCheck } from "react-icons/hi2";
import { useDemoCustomer } from "@/context/DemoCustomerContext";

export default function ProfileDashboard() {
  const { member, patchMember } = useDemoCustomer();

  const labelClass = "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block";
  const inputClass = "w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all";

  return (
    <>
      <DashboardHeader 
        title="Your Profile" 
        subtitle="Manage your personal information and account security." 
      />

      <div className="p-6 md:p-10 max-w-4xl">
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-[2rem] bg-slate-900 flex items-center justify-center text-white text-4xl font-black shadow-2xl">
                {member?.fullName?.charAt(0) || "G"}
              </div>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Change Photo</button>
            </div>

            {/* Form Section */}
            <div className="flex-1 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className={labelClass}>Full Name</label>
                    <div className="relative">
                      <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        defaultValue={member?.fullName} 
                        onBlur={(e) => patchMember({ fullName: e.target.value })}
                        className={`${inputClass} pl-12`}
                      />
                    </div>
                 </div>
                 <div>
                    <label className={labelClass}>Email Address</label>
                    <div className="relative">
                      <HiOutlineEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        defaultValue={member?.email} 
                        className={`${inputClass} pl-12 opacity-60`}
                        disabled
                      />
                    </div>
                 </div>
                 <div>
                    <label className={labelClass}>Phone Number</label>
                    <div className="relative">
                      <HiOutlinePhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        defaultValue={member?.phone} 
                        className={`${inputClass} pl-12`}
                      />
                    </div>
                 </div>
                 <div>
                    <label className={labelClass}>Location</label>
                    <div className="relative">
                      <HiOutlineMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        defaultValue={member?.city || "Dhaka, BD"} 
                        className={`${inputClass} pl-12`}
                      />
                    </div>
                 </div>
              </div>

              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-500 bg-emerald-50 px-3 py-1.5 rounded-lg">
                  <HiOutlineShieldCheck size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Account Verified</span>
                </div>
                <button className="px-8 py-3 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-slate-200">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
