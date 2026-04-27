"use client";

import DashboardHeader from "@/components/layout/header/dashboard-header";
import { 
  HiOutlineTrophy, 
  HiOutlineClock, 
  HiOutlineCreditCard,
  HiOutlinePlus
} from "react-icons/hi2";
import { useDemoCustomer } from "@/context/DemoCustomerContext";
import { MOCK_BOOKINGS, formatBDT, SERVICE_CONFIG, STATUS_STYLES, REWARD_CARD_TIERS } from "@/components/booking/bookingData";
import Link from "next/link";

export default function DashboardOverview() {
  const { member } = useDemoCustomer();

  const stats = [
    { name: "Total Bookings", value: MOCK_BOOKINGS.length, icon: HiOutlineClock, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Reward Points", value: member?.points || 0, icon: HiOutlineTrophy, color: "text-amber-600", bg: "bg-amber-50" },
    { name: "Membership Status", value: member?.tier || "Starter", icon: HiOutlineCreditCard, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <>
      <DashboardHeader 
        title="Dashboard" 
        subtitle={`Welcome back, ${member?.fullName?.split(' ')[0] || 'Member'}.`} 
      />

      <div className="p-4 sm:p-5 md:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.name}</p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 break-words">{stat.value}</p>
                </div>
                <div className={`${stat.bg} ${stat.color} p-2.5 rounded-lg`}>
                  <stat.icon size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 md:gap-8">
          {/* Recent Bookings List */}
          <div className="xl:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">Recent Bookings</h2>
              <Link href="/dashboard/dining" className="text-blue-600 text-sm font-semibold hover:text-blue-700">
                View All
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {MOCK_BOOKINGS.slice(0, 5).map((booking) => (
                      <tr key={booking.reference} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-slate-900">{SERVICE_CONFIG[booking.type].label}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{booking.dateTime}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[booking.status]}`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="md:hidden divide-y divide-slate-100">
                {MOCK_BOOKINGS.slice(0, 5).map((booking) => (
                  <div key={booking.reference} className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {SERVICE_CONFIG[booking.type].label}
                        </p>
                        <p className="mt-1 text-xs text-slate-600">{booking.dateTime}</p>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium ${STATUS_STYLES[booking.status]}`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Membership Card */}
          <div className="space-y-6">
            <h2 className="text-base font-bold text-slate-900">Membership Card</h2>
            {(() => {
              const currentTier = REWARD_CARD_TIERS.find(t => t.title === member?.tier) || REWARD_CARD_TIERS[0];
              const styles = {
                silver: "from-zinc-500 via-zinc-300 to-zinc-500 text-zinc-900",
                gold: "from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#5d4037]",
                platinum: "from-[#111111] via-[#3f3f46] to-[#0a0a0a] text-white",
                family: "from-[#155e75] via-[#67e8f9] to-[#0f766e] text-white",
              };
              const cardClass = styles[currentTier.id];

              return (
                <div className={`bg-gradient-to-tr ${cardClass} rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl relative overflow-hidden group min-h-[170px] sm:min-h-[180px] flex flex-col justify-between`}>
                  <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <HiOutlineCreditCard size={96} className="sm:w-[120px] sm:h-[120px]" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6 sm:mb-8">
                      <div className="w-8 h-8 opacity-40 border-2 border-current rounded-md flex items-center justify-center font-bold text-xs">K</div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-80">{currentTier.highlight}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-base sm:text-lg font-black uppercase tracking-tight">{currentTier.title}</h3>
                      <p className="text-xs sm:text-sm font-bold opacity-80 break-words">{member?.fullName || "Valued Member"}</p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-5 sm:mt-6 flex justify-between items-end gap-2">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-widest opacity-60">Member ID</p>
                      <p className="text-[11px] sm:text-xs font-mono break-all">{member?.id || "KP-102938"}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-tighter">Kingpin</p>
                    </div>
                  </div>
                </div>
              );
            })()}
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <h3 className="text-sm font-bold text-blue-900 mb-1">Upgrade your plan</h3>
              <p className="text-xs text-blue-700 mb-3">Get exclusive access to VIP lounges and priority bookings.</p>
              <Link href="/dashboard/membership" className="inline-flex w-full sm:w-auto justify-center bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
