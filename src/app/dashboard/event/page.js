"use client";

import DashboardHeader from "@/components/layout/header/dashboard-header";
import { HiOutlineCalendar } from "react-icons/hi2";
import { MOCK_BOOKINGS } from "@/components/booking/bookingData";
import { useDemoCustomer } from "@/context/DemoCustomerContext";

export default function EventBookingPage() {
  const { member } = useDemoCustomer();

  return (
    <>
      <DashboardHeader 
        title="Event Booking" 
        subtitle="Reserve our venue for your special occasions." 
      />

      <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-base font-bold text-slate-900">New Event Request</h2>
            <p className="text-xs text-slate-500 mt-1">Fill in the details below and our team will get back to you.</p>
          </div>
          
          <form className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Event Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Birthday Party"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Expected Guests</label>
                <input 
                  type="number" 
                  placeholder="Number of guests"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Preferred Time</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm bg-white">
                  <option>Morning (10:00 AM - 1:00 PM)</option>
                  <option>Afternoon (2:00 PM - 5:00 PM)</option>
                  <option>Evening (6:00 PM - 10:00 PM)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Package Preference</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Basic Party', 'Signature Event', 'VIP Celebration'].map((pkg) => (
                  <label key={pkg} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-500 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500">
                    <input type="radio" name="package" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm font-medium text-slate-700">{pkg}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Special Requirements</label>
              <textarea 
                rows={4}
                placeholder="Any special requests, dietary requirements, or theme details..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm"
              ></textarea>
            </div>

            <div className="pt-4 flex items-center justify-end gap-4 border-t border-slate-100">
              <button type="button" className="px-6 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-8 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all"
              >
                Submit Booking
              </button>
            </div>
          </form>
        </div>

        {/* Recent Events Summary */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900">Your Recent Events</h2>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
            {MOCK_BOOKINGS.filter(b => b.type === 'event').slice(0, 2).map((event) => (
              <div key={event.reference} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <HiOutlineCalendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{event.meta.eventPackage}</p>
                    <p className="text-[10px] text-slate-500">{event.dateTime}</p>
                  </div>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${event.status === 'Confirmed' ? 'text-green-700 bg-green-50' : 'text-amber-700 bg-amber-50'}`}>
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
