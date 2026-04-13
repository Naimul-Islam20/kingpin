"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MOCK_BOOKINGS, SERVICE_CONFIG, SERVICE_TYPES, STATUS_STYLES } from "@/components/booking/bookingData";

const TABS = [
  "Overview",
  "Bookings",
  "Events",
  "Private Dining",
  "Digital Arcade",
  "Profile & Preferences",
];

const tabToType = {
  Events: SERVICE_TYPES.event,
  "Private Dining": SERVICE_TYPES.dining,
  "Digital Arcade": SERVICE_TYPES.arcade,
};

function BookingCard({ item, onView }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-black">{SERVICE_CONFIG[item.type].label}</p>
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${STATUS_STYLES[item.status]}`}>{item.status}</span>
      </div>
      <p className="mt-1 text-xs text-gray-500">{item.dateTime}</p>
      <p className="mt-1 text-xs text-gray-600">Guests: {item.partySize}</p>
      <button onClick={() => onView(item)} className="mt-3 text-sm font-medium text-[#C27D2A] hover:underline">
        View details
      </button>
    </div>
  );
}

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const user = {
    name: "John Doe",
    email: "john@example.com",
    loyaltyTier: "Gold",
    points: 1250,
  };

  const upcoming = useMemo(
    () => MOCK_BOOKINGS.find((item) => item.status === "Confirmed") ?? MOCK_BOOKINGS[0],
    []
  );

  const filteredBookings = useMemo(() => {
    if (activeTab === "Bookings" || activeTab === "Overview") return MOCK_BOOKINGS;
    const type = tabToType[activeTab];
    return MOCK_BOOKINGS.filter((item) => item.type === type);
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="rounded-xl bg-black px-5 py-6 text-white md:px-8">
          <p className="text-xs uppercase tracking-widest text-[#C27D2A]">My Account</p>
          <h1 className="mt-2 text-2xl font-bold md:text-3xl">Welcome back, {user.name}</h1>
          <p className="mt-2 text-sm text-gray-300">Manage bookings, service requests, and profile preferences.</p>
        </header>

        <section className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">Upcoming booking</p>
            <p className="mt-1 text-sm font-semibold">{SERVICE_CONFIG[upcoming.type].shortLabel}</p>
            <p className="text-xs text-gray-500">{upcoming.dateTime}</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">Pending event inquiry</p>
            <p className="mt-1 text-sm font-semibold">
              {MOCK_BOOKINGS.filter((item) => item.type === SERVICE_TYPES.event && item.status === "Pending").length}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">Loyalty tier</p>
            <p className="mt-1 text-sm font-semibold">{user.loyaltyTier}</p>
            <p className="text-xs text-gray-500">{user.points} points</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">Quick actions</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Link href="/booking/private-dining" className="rounded bg-black px-2 py-1 text-xs text-white">
                Book Dining
              </Link>
              <Link href="/booking/event" className="rounded bg-black px-2 py-1 text-xs text-white">
                Book Event
              </Link>
              <Link href="/booking/arcade" className="rounded bg-black px-2 py-1 text-xs text-white">
                Book Games
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[250px_1fr]">
          <aside className="rounded-xl border border-gray-200 bg-white p-3">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mb-1 w-full rounded-md px-3 py-2 text-left text-sm ${
                  activeTab === tab ? "bg-[#C27D2A] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </aside>

          <section className="rounded-xl border border-gray-200 bg-white p-5 md:p-6">
            {activeTab === "Overview" && (
              <>
                <h2 className="text-xl font-semibold text-black">Overview</h2>
                <p className="mt-1 text-sm text-gray-600">Your latest activity across all services.</p>
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {MOCK_BOOKINGS.map((item) => (
                    <BookingCard key={item.reference} item={item} onView={setSelectedBooking} />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Bookings" && (
              <>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-semibold text-black">All Bookings</h2>
                  <Link href="/booking" className="rounded bg-black px-3 py-2 text-sm font-medium text-white">
                    New Booking
                  </Link>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {filteredBookings.map((item) => (
                    <BookingCard key={item.reference} item={item} onView={setSelectedBooking} />
                  ))}
                </div>
              </>
            )}

            {tabToType[activeTab] && (
              <>
                <h2 className="text-xl font-semibold text-black">{activeTab}</h2>
                <p className="mt-1 text-sm text-gray-600">Focused view for {activeTab.toLowerCase()} bookings.</p>
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {filteredBookings.length > 0 ? (
                    filteredBookings.map((item) => <BookingCard key={item.reference} item={item} onView={setSelectedBooking} />)
                  ) : (
                    <p className="rounded-md bg-gray-100 p-4 text-sm text-gray-600">No records yet for this service.</p>
                  )}
                </div>
              </>
            )}

            {activeTab === "Profile & Preferences" && (
              <>
                <h2 className="text-xl font-semibold text-black">Profile & Preferences</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="text-sm text-gray-600">
                    Full Name
                    <input defaultValue={user.name} className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm" />
                  </label>
                  <label className="text-sm text-gray-600">
                    Email
                    <input defaultValue={user.email} className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm" />
                  </label>
                </div>
                <button className="mt-4 rounded bg-black px-4 py-2 text-sm font-medium text-white">Save changes</button>
              </>
            )}
          </section>
        </div>
      </div>

      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-black/35 p-4" onClick={() => setSelectedBooking(null)} role="button" tabIndex={0}>
          <div
            className="ml-auto mt-12 w-full max-w-md rounded-lg bg-white p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h3 className="text-lg font-semibold text-black">Booking Detail</h3>
            <p className="mt-2 text-sm text-gray-700">Reference: {selectedBooking.reference}</p>
            <p className="mt-1 text-sm text-gray-700">Type: {SERVICE_CONFIG[selectedBooking.type].label}</p>
            <p className="mt-1 text-sm text-gray-700">When: {selectedBooking.dateTime}</p>
            <p className="mt-1 text-sm text-gray-700">Guests: {selectedBooking.partySize}</p>
            <p className="mt-1 text-sm text-gray-700">Status: {selectedBooking.status}</p>
            <div className="mt-4 rounded bg-gray-100 p-3 text-xs text-gray-600">
              {Object.entries(selectedBooking.meta).map(([key, value]) => (
                <p key={key}>
                  {key}: {value}
                </p>
              ))}
            </div>
            <button onClick={() => setSelectedBooking(null)} className="mt-4 rounded bg-black px-4 py-2 text-sm text-white">
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
