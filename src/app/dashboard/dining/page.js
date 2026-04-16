"use client";

import DashboardHeader from "@/components/layout/header/dashboard-header";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { MOCK_BOOKINGS } from "@/components/booking/bookingData";
import { useDemoCustomer } from "@/context/DemoCustomerContext";

export default function DiningBookingPage() {
  const { member } = useDemoCustomer();

  return (
    <>
      <DashboardHeader 
        title="Dining Booking" 
        subtitle="Book a table for a delightful dining experience." 
      />

      <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-base font-bold text-slate-900">Reserve a Table</h2>
            <p className="text-xs text-slate-500 mt-1">Select your preferred date, time, and party size.</p>
          </div>
          
          <form className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Dining Area</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm bg-white">
                  <option>Main Dining Hall</option>
                  <option>Private VIP Room</option>
                  <option>Outdoor Terrace</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Party Size</label>
                <input 
                  type="number" 
                  min="1"
                  placeholder="Number of guests"
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
                <label className="text-sm font-semibold text-slate-700">Time Slot</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm bg-white">
                  <option>Lunch (12:30 PM - 3:30 PM)</option>
                  <option>High Tea (4:00 PM - 6:00 PM)</option>
                  <option>Dinner (7:00 PM - 11:00 PM)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Occasion (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. Birthday, Anniversary"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Additional Notes</label>
              <textarea 
                rows={3}
                placeholder="Any dietary restrictions or special requests..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm"
              ></textarea>
            </div>

            <div className="pt-4 flex items-center justify-end gap-4 border-t border-slate-100">
              <button type="button" className="px-6 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Reset
              </button>
              <button 
                type="submit" 
                className="px-8 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>

        {/* Recent Dining Bookings */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900">Your Recent Reservations</h2>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
            {MOCK_BOOKINGS.filter(b => b.type === 'dining').slice(0, 2).map((booking) => (
              <div key={booking.reference} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                    <HiOutlineCalendarDays size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{booking.meta.diningPackage || 'Table Reservation'}</p>
                    <p className="text-[10px] text-slate-500">{booking.dateTime} • {booking.partySize} Guests</p>
                  </div>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${booking.status === 'Confirmed' ? 'text-green-700 bg-green-50' : 'text-amber-700 bg-amber-50'}`}>
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
