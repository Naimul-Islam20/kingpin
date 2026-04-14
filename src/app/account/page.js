"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  MOCK_BOOKINGS,
  SERVICE_CONFIG,
  STATUS_STYLES,
  MEMBERSHIP_STATUS,
  MOCK_LEDGER,
  REDEEM_POLICY,
  formatBDT,
  MEMBERSHIP_PLAN,
  LEDGER_EVENT,
} from "@/components/booking/bookingData";
import { useDemoCustomer } from "@/context/DemoCustomerContext";
import { getRewardCardUiPhase, renewalWindowStatus } from "@/lib/rewardCardFlow";
import AnimatedButton from "@/components/ui/annimation_button";

/** Membership early so reward card is easy to find (was buried at the bottom). */
const TABS = ["Overview", "Membership", "Bookings", "Rewards & Loyalty", "Profile"];

const labelClass = "text-[10px] font-black uppercase tracking-widest text-gray-500";
const inputClass =
  "mt-2 w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";

function BookingCard({ item, onView }) {
  return (
    <motion.button
      type="button"
      layout
      onClick={() => onView(item)}
      className="w-full border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-primary hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-gray-900">{SERVICE_CONFIG[item.type].label}</p>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase ${STATUS_STYLES[item.status]}`}>{item.status}</span>
      </div>
      <p className="mt-1 text-xs text-gray-500">{item.dateTime}</p>
      <p className="mt-1 text-xs text-gray-600">Guests: {item.partySize}</p>
      <span className="mt-3 inline-block text-[10px] font-black uppercase tracking-widest text-primary">View details →</span>
    </motion.button>
  );
}

function AccountPageContent() {
  const searchParams = useSearchParams();
  const queryTab = searchParams.get("tab");
  const fromRegistration = searchParams.get("fromRegistration") === "1";
  const cardActivated = searchParams.get("card") === "activated";
  const { member, pendingApplication, renewAnnualMembership, patchMember } = useDemoCustomer();

  const [activeTab, setActiveTab] = useState(queryTab && TABS.includes(queryTab) ? queryTab : "Overview");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [redeemPoints, setRedeemPoints] = useState("");
  const [memberNotice, setMemberNotice] = useState("");

  const rewardPhase = useMemo(() => getRewardCardUiPhase(member, pendingApplication), [member, pendingApplication]);

  const ledgerRows = useMemo(() => {
    const rows = [...MOCK_LEDGER];
    if (member.cardActivatedAt) {
      rows.unshift({
        id: "LED-activation",
        bookingReference: member.rewardCardPan || "REWARD-CARD",
        event: LEDGER_EVENT.MEMBERSHIP_ACTIVATED,
        points: 0,
        note: `Reward card issued — ${member.tier}`,
        createdAt: String(member.cardActivatedAt).slice(0, 10),
      });
    }
    return rows;
  }, [member.cardActivatedAt, member.rewardCardPan, member.tier]);

  const renewalInfo = useMemo(
    () => renewalWindowStatus(member.membershipExpiryDate),
    [member.membershipExpiryDate]
  );

  const upcoming = useMemo(
    () => MOCK_BOOKINGS.find((item) => item.status === "Confirmed") ?? MOCK_BOOKINGS[0],
    []
  );

  const pendingBookings = useMemo(() => MOCK_BOOKINGS.filter((item) => item.status === "Pending").length, []);

  const safeRedeem = Number(redeemPoints || 0);
  const maxRedeemByBalance = member.points;
  const maxRedeemByPolicy = Math.floor(upcoming.amountBDT * REDEEM_POLICY.maxRedeemPercentPerBooking);
  const canRedeem =
    safeRedeem >= REDEEM_POLICY.minimumPoints &&
    safeRedeem <= maxRedeemByBalance &&
    safeRedeem <= maxRedeemByPolicy &&
    member.membershipStatus === MEMBERSHIP_STATUS.active;

  const handleRenewNow = () => {
    const ok = renewAnnualMembership();
    setMemberNotice(
      ok ? "Membership term extended. New expiry is shown above." : "Renewal is only available for active cards with a valid expiry date."
    );
  };

  useEffect(() => {
    if (queryTab && TABS.includes(queryTab)) {
      setActiveTab(queryTab);
    }
  }, [queryTab]);

  useEffect(() => {
    if (!cardActivated) return;
    setMemberNotice("Your reward card is linked and active on this profile.");
    setActiveTab("Membership");
  }, [cardActivated]);

  const tabHref = (tab) => `/account?tab=${encodeURIComponent(tab)}`;
  const membershipHref = "/membership";

  return (
    <main className="min-h-0 bg-gray-50 pb-10 pt-6 font-[family-name:var(--font-montserrat)] text-gray-900 md:pb-12 md:pt-8">
      <div className="maaleen-container max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-gray-100 bg-white p-6 shadow-sm md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={`${labelClass} mb-2 text-primary`}>My account</p>
              <h1 className="text-3xl font-black uppercase tracking-tighter text-gray-900 md:text-4xl">Hi, {member.fullName}</h1>
              <div className="mb-4 mt-3 h-1 w-12 bg-primary" />
              <p className="max-w-lg text-sm text-gray-600">
                Bookings, points, and reward card — same look as the rest of Kingpin. Sample bookings below show how your hub
                will read once connected to live data.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link href="/booking" className="inline-flex justify-center border-2 border-primary bg-white px-6 py-3 text-center text-[10px] font-black uppercase tracking-widest text-black transition hover:bg-gray-50">
                New booking
              </Link>
              <Link
                href={membershipHref}
                className="inline-flex justify-center border-2 border-primary bg-primary px-6 py-3 text-center text-[10px] font-black uppercase tracking-widest text-white transition hover:opacity-90"
              >
                Reward card
              </Link>
            </div>
          </div>
        </motion.header>

        <section className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Card status", value: member.membershipStatus, sub: `Tier: ${member.tier}` },
            { label: "Points", value: String(member.points), sub: `Redeem from ${REDEEM_POLICY.minimumPoints}+` },
            { label: "Pending bookings", value: String(pendingBookings), sub: "Awaiting confirmation" },
            { label: "Expiring soon", value: String(member.pointsExpiringSoon), sub: `${REDEEM_POLICY.expiryWarningDays} day notice` },
          ].map((card) => (
            <div key={card.label} className="border border-gray-100 bg-white p-4 shadow-sm">
              <p className={`${labelClass} mb-1`}>{card.label}</p>
              <p className="text-lg font-black text-gray-900">{card.value}</p>
              <p className="mt-1 text-xs text-gray-500">{card.sub}</p>
            </div>
          ))}
        </section>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,220px)_1fr]">
          <aside className="h-fit border border-gray-100 bg-white p-2 shadow-sm">
            {TABS.map((tab) => (
              <Link
                key={tab}
                href={tabHref(tab)}
                onClick={() => setActiveTab(tab)}
                className={`mb-1 block px-4 py-3 text-left text-sm font-bold transition last:mb-0 ${
                  activeTab === tab ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab}
              </Link>
            ))}
          </aside>

          <section className="min-h-[420px] border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            {activeTab === "Overview" && (
              <>
                <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">Overview</h2>
                <p className="mt-1 text-sm text-gray-600">Quick snapshot of your Kingpin profile.</p>
                {rewardPhase.key === "awaiting_account" && (
                  <div className="mt-4 border-l-4 border-primary bg-sky-50 p-4 text-sm text-gray-800">
                    <p className="font-black uppercase tracking-wide text-primary">{rewardPhase.headline}</p>
                    <p className="mt-2">{rewardPhase.body}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link
                        href="/login?fromMembership=1"
                        className="inline-flex border-2 border-primary bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white"
                      >
                        Sign in
                      </Link>
                      <Link
                        href="/signup?fromMembership=1"
                        className="inline-flex border-2 border-gray-300 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-800 hover:border-primary"
                      >
                        Create account
                      </Link>
                    </div>
                  </div>
                )}
                {fromRegistration && (
                  <div className="mt-4 border border-[#C27D2A] bg-amber-50 p-4 text-sm text-amber-950">
                    <p className="font-black uppercase tracking-wide text-[#C27D2A]">Account ready</p>
                    <p className="mt-2">Choose your next step — reward card or a reservation.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link
                        href={membershipHref}
                        className="inline-flex border-2 border-primary bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white"
                      >
                        Apply card
                      </Link>
                      <Link
                        href="/booking/event"
                        className="inline-flex border-2 border-gray-900 bg-gray-900 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white"
                      >
                        Book event
                      </Link>
                    </div>
                  </div>
                )}
                {member.membershipStatus === MEMBERSHIP_STATUS.guest && rewardPhase.key !== "awaiting_account" && (
                  <div className="mt-4 border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
                    <p className="font-bold text-gray-900">No active reward card</p>
                    <p className="mt-1 text-xs text-gray-600">Apply once to earn and redeem points on qualifying bookings.</p>
                    <Link
                      href={membershipHref}
                      className="mt-3 inline-flex border-2 border-primary bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white"
                    >
                      Start application
                    </Link>
                  </div>
                )}
                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {MOCK_BOOKINGS.map((item) => (
                    <BookingCard key={item.reference} item={item} onView={setSelectedBooking} />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Bookings" && (
              <>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">Bookings</h2>
                  <Link
                    href="/booking"
                    className="inline-flex justify-center border-2 border-gray-900 bg-gray-900 px-4 py-2 text-center text-[10px] font-black uppercase tracking-widest text-white"
                  >
                    New booking
                  </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {MOCK_BOOKINGS.map((item) => (
                    <BookingCard key={item.reference} item={item} onView={setSelectedBooking} />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Rewards & Loyalty" && (
              <>
                <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">Rewards</h2>
                <p className="mt-1 text-sm text-gray-600">Programme rules for points and redemption.</p>
                <div className="mt-4 border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
                  <p>Minimum redeem: {REDEEM_POLICY.minimumPoints} pts</p>
                  <p>Max per booking: {Math.round(REDEEM_POLICY.maxRedeemPercentPerBooking * 100)}% of bill</p>
                  <p>Points expire after {REDEEM_POLICY.pointsExpiryMonths} months of inactivity (policy).</p>
                  {member.membershipStatus !== MEMBERSHIP_STATUS.active && (
                    <Link
                      href={membershipHref}
                      className="mt-4 inline-flex border-2 border-primary bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white"
                    >
                      Apply for card
                    </Link>
                  )}
                </div>
                <div className="mt-4 border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-bold text-gray-900">Redeem preview</p>
                  <p className="mt-1 text-xs text-gray-500">Sample booking amount: {formatBDT(upcoming.amountBDT)}</p>
                  {member.membershipStatus !== MEMBERSHIP_STATUS.active && (
                    <p className="mt-2 border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
                      Redeem is available with an active card.{" "}
                      <Link href={membershipHref} className="font-black text-primary underline underline-offset-2">
                        Apply
                      </Link>
                    </p>
                  )}
                  <input
                    type="number"
                    min="0"
                    className="mt-3 w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    value={redeemPoints}
                    onChange={(e) => setRedeemPoints(e.target.value)}
                    placeholder="Points to redeem"
                  />
                  <p className={`mt-2 text-xs font-semibold ${canRedeem ? "text-emerald-700" : "text-amber-800"}`}>
                    {canRedeem ? "Within programme limits for this booking amount." : "Not redeemable — check card status, balance, and cap."}
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  {ledgerRows.map((entry) => (
                    <div key={entry.id} className="border border-gray-100 bg-gray-50 p-3 text-sm">
                      <p className="font-bold text-gray-900">
                        {entry.event} {entry.points > 0 ? `+${entry.points}` : entry.points}
                      </p>
                      <p className="text-xs text-gray-600">{entry.note}</p>
                      <p className="text-[10px] text-gray-400">
                        {entry.bookingReference} · {entry.createdAt}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "Membership" && (
              <>
                <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">Reward card</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Apply → verify → pay → link account. Your card activates as soon as payment is matched to your profile.
                </p>

                {rewardPhase.key === "awaiting_account" && (
                  <div className="mt-4 border-l-4 border-primary bg-sky-50 p-5 text-sm text-gray-800">
                    <p className="font-black uppercase text-primary">{rewardPhase.headline}</p>
                    <p className="mt-2">{rewardPhase.body}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        href="/login?fromMembership=1"
                        className="inline-flex border-2 border-primary bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white"
                      >
                        Sign in
                      </Link>
                      <Link
                        href="/signup?fromMembership=1"
                        className="inline-flex border-2 border-gray-900 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-900 hover:bg-gray-50"
                      >
                        Create account
                      </Link>
                    </div>
                  </div>
                )}

                <div className="mt-4 grid gap-3 border border-gray-200 bg-gray-50 p-4 text-sm sm:grid-cols-2">
                  <p>
                    <span className="text-gray-500">Profile status</span>
                    <br />
                    <span className="font-bold text-gray-900">{member.membershipStatus}</span>
                  </p>
                  <p>
                    <span className="text-gray-500">Plan</span>
                    <br />
                    <span className="font-bold text-gray-900">
                      {member.membershipPlan} ({formatBDT(member.annualFeeBDT ?? MEMBERSHIP_PLAN.annualFeeBDT)})
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-500">Phone verification</span>
                    <br />
                    <span className="font-bold text-gray-900">{member.verification?.phoneVerified ? "Verified" : "Not verified"}</span>
                  </p>
                  <p>
                    <span className="text-gray-500">Last payment</span>
                    <br />
                    <span className="font-bold text-gray-900">{member.paymentStatus || "—"}</span>
                  </p>
                  {member.membershipStatus === MEMBERSHIP_STATUS.active && (
                    <>
                      <p className="sm:col-span-2">
                        <span className="text-gray-500">Card number</span>
                        <br />
                        <span className="font-mono text-base font-bold tracking-wide text-gray-900">{member.rewardCardPan || "Issuing…"}</span>
                      </p>
                      <p className="sm:col-span-2 text-xs text-gray-600">
                        Valid {member.membershipStartDate || "—"} — {member.membershipExpiryDate || "—"}
                        {member.cardActivatedAt ? ` · Issued ${String(member.cardActivatedAt).slice(0, 10)}` : ""}
                      </p>
                    </>
                  )}
                </div>

                {member.membershipStatus === MEMBERSHIP_STATUS.guest && rewardPhase.key !== "awaiting_account" && (
                  <div className="mt-4 border border-gray-200 bg-white p-5 shadow-sm">
                    <p className="font-black uppercase tracking-wide text-primary">No card on file</p>
                    <p className="mt-2 text-sm text-gray-600">{rewardPhase.body}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        href={membershipHref}
                        className="inline-flex border-2 border-primary bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white"
                      >
                        Start application
                      </Link>
                      <Link
                        href="/booking/event"
                        className="inline-flex border-2 border-gray-300 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-900 hover:border-primary"
                      >
                        Book a visit
                      </Link>
                    </div>
                  </div>
                )}

                {member.membershipStatus === MEMBERSHIP_STATUS.active && renewalInfo.showRenewal && (
                  <div
                    className={`mt-4 border p-5 text-sm ${
                      renewalInfo.tone === "overdue"
                        ? "border-rose-300 bg-rose-50 text-rose-900"
                        : "border-amber-300 bg-amber-50 text-amber-950"
                    }`}
                  >
                    <p className="font-black uppercase text-gray-900">Membership renewal</p>
                    <p className="mt-2 text-gray-800">
                      {renewalInfo.tone === "overdue"
                        ? "Your renewal date has passed. Renew to keep earning and redeeming without interruption."
                        : `Your current term ends in ${renewalInfo.daysRemaining} days (${member.membershipExpiryDate}).`}
                    </p>
                    <div className="mt-4">
                      <AnimatedButton type="button" onClick={handleRenewNow} className="!px-6 !py-2 !text-[10px]">
                        Renew — {formatBDT(member.annualFeeBDT ?? MEMBERSHIP_PLAN.annualFeeBDT)}
                      </AnimatedButton>
                    </div>
                  </div>
                )}

                {memberNotice && <p className="mt-4 text-sm font-semibold text-emerald-700">{memberNotice}</p>}
              </>
            )}

            {activeTab === "Profile" && (
              <>
                <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">Profile</h2>
                <p className="mt-1 text-sm text-gray-600">Update how we address you. This build stores changes in your browser session only.</p>
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className={labelClass}>
                    Full name
                    <input
                      defaultValue={member.fullName}
                      onBlur={(e) => patchMember({ fullName: e.target.value })}
                      className={inputClass}
                    />
                  </label>
                  <label className={labelClass}>
                    Email
                    <input
                      defaultValue={member.email}
                      onBlur={(e) => patchMember({ email: e.target.value })}
                      className={inputClass}
                    />
                  </label>
                </div>
              </>
            )}
          </section>
        </div>
      </div>

      {selectedBooking && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
          onClick={() => setSelectedBooking(null)}
          role="presentation"
        >
          <div
            className="mb-8 w-full max-w-md border border-gray-200 bg-white p-6 shadow-xl sm:mb-0"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h3 className="text-lg font-black uppercase tracking-tight text-gray-900">Booking</h3>
            <p className="mt-3 text-sm text-gray-700">Ref: {selectedBooking.reference}</p>
            <p className="text-sm text-gray-700">Type: {SERVICE_CONFIG[selectedBooking.type].label}</p>
            <p className="text-sm text-gray-700">When: {selectedBooking.dateTime}</p>
            <p className="text-sm text-gray-700">Guests: {selectedBooking.partySize}</p>
            <p className="text-sm text-gray-700">Status: {selectedBooking.status}</p>
            <div className="mt-4 border border-gray-100 bg-gray-50 p-3 text-xs text-gray-600">
              {Object.entries(selectedBooking.meta).map(([key, value]) => (
                <p key={key}>
                  {key}: {value}
                </p>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelectedBooking(null)}
              className="mt-6 w-full border-2 border-gray-900 bg-gray-900 py-3 text-[10px] font-black uppercase tracking-widest text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default function AccountPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50 font-[family-name:var(--font-montserrat)] text-sm text-gray-500">
          Loading account…
        </div>
      }
    >
      <AccountPageContent />
    </Suspense>
  );
}
