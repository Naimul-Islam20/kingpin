"use client";

import DashboardHeader from "@/components/layout/header/dashboard-header";
import { HiOutlineTicket } from "react-icons/hi2";
import { MOCK_BOOKINGS } from "@/components/booking/bookingData";
import { useDemoCustomer } from "@/context/DemoCustomerContext";

export default function ArcadeBookingPage() {
  const { member } = useDemoCustomer();

  return (
    <>
      <DashboardHeader 
        title="Arcade Booking" 
        subtitle="Reserve your spot at our state-of-the-art gaming arena." 
      />

      <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-base font-bold text-slate-900">Book a Gaming Session</h2>
            <p className="text-xs text-slate-500 mt-1">Choose your gaming category and duration.</p>
          </div>
          
          <form className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Gaming Category</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm bg-white">
                  <option>VR Gaming Zone</option>
                  <option>Retro Arcade</option>
                  <option>PC Gaming Lounge</option>
                  <option>Consoles (PS5/Xbox)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Number of Players</label>
                <input 
                  type="number" 
                  min="1"
                  placeholder="e.g. 2"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Session Duration</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm bg-white">
                  <option>30 Minutes</option>
                  <option>1 Hour</option>
                  <option>2 Hours</option>
                  <option>Full Day Pass</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Preferred Start Time</label>
              <input 
                type="time" 
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm"
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-4 border-t border-slate-100">
              <button type="button" className="px-6 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Clear
              </button>
              <button 
                type="submit" 
                className="px-8 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all"
              >
                Book Slot
              </button>
            </div>
          </form>
        </div>

        {/* Recent Arcade Summary */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900">Recent Sessions</h2>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
            {MOCK_BOOKINGS.filter(b => b.type === 'arcade').slice(0, 2).map((session) => (
              <div key={session.reference} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <HiOutlineTicket size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{session.meta.gameType || 'Arcade Session'}</p>
                    <p className="text-[10px] text-slate-500">{session.dateTime} • {session.meta.sessionDuration}</p>
                  </div>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${session.status === 'Confirmed' ? 'text-green-700 bg-green-50' : 'text-amber-700 bg-amber-50'}`}>
                  {session.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
