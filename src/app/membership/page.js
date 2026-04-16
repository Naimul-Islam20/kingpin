"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  MEMBERSHIP_PLAN,
  formatBDT,
  getRewardTierById,
  MEMBERSHIP_STATUS,
} from "@/components/booking/bookingData";
import { useDemoCustomer } from "@/context/DemoCustomerContext";
import {
  buildPaidApplicationPayload,
  getRewardCardUiPhase,
  validatePaymentInput,
} from "@/lib/rewardCardFlow";
import AnimatedButton from "@/components/ui/annimation_button";

const labelClass = "text-[10px] font-black uppercase tracking-widest text-gray-500";
const pageShell =
  "flex min-h-[calc(100dvh-8.5rem)] flex-col items-center justify-center bg-gray-50 px-4 py-6 font-[family-name:var(--font-montserrat)] md:min-h-[calc(100dvh-9.5rem)] md:py-8";
const cardWrap = "w-full max-w-lg mx-auto";
const cardBox =
  "max-h-[min(88dvh,calc(100dvh-9rem))] overflow-y-auto overflow-x-hidden overscroll-contain border border-gray-100 bg-white shadow-sm";

function MembershipPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    member,
    pendingApplication,
    isAuthenticated,
    recordPaidRewardApplication,
    applyPendingAfterAuth,
  } = useDemoCustomer();
  const selectedTier = useMemo(() => getRewardTierById(searchParams.get("tier")), [searchParams]);
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [isPaying, setIsPaying] = useState(false);
  const [error, setError] = useState("");
  const phase = getRewardCardUiPhase(member, pendingApplication);

  const handlePayment = () => {
    setError("");
    const check = validatePaymentInput({ method: paymentMethod });
    if (!check.ok) {
      setError(check.error || "Payment method is invalid.");
      return;
    }
    if (!isAuthenticated) {
      setError("Please sign in first.");
      return;
    }
    setIsPaying(true);
    const payload = buildPaidApplicationPayload(member, selectedTier, paymentMethod);
    recordPaidRewardApplication(payload);
    // Demo mode: auto-success. Later this will be replaced by payment gateway webhook.
    const linked = applyPendingAfterAuth();
    router.push(linked ? "/account?tab=Membership&card=activated" : "/account?tab=Membership");
  };

  if (!isAuthenticated) {
    return (
      <main className={pageShell}>
        <div className={`${cardWrap} text-center`}>
          <div className={`${cardBox} p-6 md:p-7`}>
            <p className={`${labelClass} mb-3 text-primary`}>Login required</p>
            <h1 className="text-xl font-black uppercase tracking-tighter text-gray-900 md:text-2xl">
              Sign in to apply card
            </h1>
            <div className="mx-auto mb-4 mt-2 h-1 w-12 bg-primary" />
            <p className="text-sm text-gray-600">
              Reward card apply is only for existing users. Login or create an account first.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row sm:gap-3">
              <Link
                href={`/login?fromMembership=1&tier=${selectedTier.id}`}
                className="inline-flex justify-center border-2 border-primary bg-primary px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white"
              >
                Sign in
              </Link>
              <Link
                href={`/signup?fromMembership=1&tier=${selectedTier.id}`}
                className="inline-flex justify-center border-2 border-gray-900 bg-gray-900 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (member.membershipStatus === MEMBERSHIP_STATUS.active) {
    return (
      <main className={pageShell}>
        <div className={`${cardWrap} text-center`}>
          <div className={`${cardBox} p-6 md:p-7`}>
            <p className={`${labelClass} mb-3 text-primary`}>Reward card</p>
            <h1 className="text-xl font-black uppercase tracking-tighter text-gray-900 md:text-2xl">You already have an active card</h1>
            <div className="mx-auto mb-4 mt-2 h-1 w-12 bg-primary" />
            <p className="text-sm text-gray-600">
              Tier: <strong className="text-gray-900">{member.tier}</strong>
              {member.rewardCardPan ? (
                <>
                  <br />
                  <span className="font-mono text-gray-900">{member.rewardCardPan}</span>
                </>
              ) : null}
            </p>
            <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row sm:gap-3">
              <Link
                href="/account?tab=Membership"
                className="inline-flex justify-center border-2 border-primary bg-primary px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white"
              >
                Open account
              </Link>
              <Link
                href="/booking"
                className="inline-flex justify-center border-2 border-gray-900 bg-white px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-gray-900 hover:bg-gray-50"
              >
                Book visit
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (phase.key === "awaiting_account") {
    return (
      <main className={pageShell}>
        <div className={`${cardWrap} text-center`}>
          <div className={`${cardBox} p-6 md:p-7`}>
            <p className={`${labelClass} mb-3 text-primary`}>Next step</p>
            <h1 className="text-xl font-black uppercase tracking-tighter text-gray-900 md:text-2xl">{phase.headline}</h1>
            <div className="mx-auto mb-4 mt-2 h-1 w-12 bg-primary" />
            <p className="text-sm text-gray-600">{phase.body}</p>
            <p className="mt-4 text-xs text-gray-500">
              Tier on file: <strong className="text-gray-900">{pendingApplication?.selectedTierTitle}</strong>
            </p>
            <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row sm:gap-3">
              <Link
                href="/login?fromMembership=1"
                className="inline-flex justify-center border-2 border-primary bg-primary px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white"
              >
                Sign in
              </Link>
              <Link
                href="/signup?fromMembership=1"
                className="inline-flex justify-center border-2 border-gray-900 bg-gray-900 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white"
              >
                Create account
              </Link>
            </div>
            <Link href="/account?tab=Membership" className="mt-5 inline-block text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
              ← Back to account
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={pageShell}>
      <div className={cardWrap}>
        <motion.div
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${cardBox} p-5 md:p-6`}
        >
          <div className="border-b border-gray-100 pb-4 text-center md:text-left">
            <p className={`${labelClass} mb-1 text-primary`}>Kingpin reward card</p>
            <h1 className="text-2xl font-black uppercase tracking-tighter text-gray-900 md:text-3xl">Application</h1>
            <div className="mx-auto mt-2 h-1 w-12 bg-primary md:mx-0" />
            <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-gray-600 md:mx-0 md:text-sm">
              Account is verified. Pay the annual card fee and activation will happen instantly.
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border border-gray-100 bg-gray-50 p-3 md:p-4">
            <div className="text-left">
              <p className="text-xs font-bold text-primary">{selectedTier.highlight}</p>
              <p className="text-base font-black uppercase tracking-tight text-gray-900 md:text-lg">{selectedTier.title}</p>
              <p className="mt-0.5 text-xs text-gray-500">
                {formatBDT(selectedTier.annualFeeBDT)} / year · {MEMBERSHIP_PLAN.type}
              </p>
            </div>
          </div>

          <div className="mt-4 border border-gray-100 bg-white p-3">
            <p className={`${labelClass} mb-2`}>Membership Benefits</p>
            <ul className="space-y-2">
              {(selectedTier.benefits || []).map((benefit, index) => (
                <li key={index} className="text-xs font-semibold text-gray-700">
                  - {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 border border-gray-200 bg-gray-50 p-4">
            <p className={`${labelClass} mb-2`}>Payment method</p>
            <div className="flex flex-wrap gap-2">
              {["bkash", "nagad"].map((method) => (
                <label
                  key={method}
                  className={`cursor-pointer border-2 px-4 py-2 text-xs font-black uppercase tracking-widest transition ${
                    paymentMethod === method ? "border-primary bg-primary/5 text-gray-900" : "border-gray-200 text-gray-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="sr-only"
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                  />
                  {method}
                </label>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Demo mode: payment is auto-confirmed. Real bKash/Nagad gateway will be integrated later.
            </p>
          </div>

          {error && <p className="mt-4 text-center text-xs font-semibold text-rose-600">{error}</p>}

          <div className="mt-6">
            <AnimatedButton
              type="button"
              onClick={handlePayment}
              className="w-full !py-3"
            >
              {isPaying ? "Activating..." : `Pay & Activate (${paymentMethod})`}
            </AnimatedButton>
          </div>

          <Link href="/account?tab=Membership" className="mt-6 block text-center text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
            ← Back to account
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

export default function MembershipPage() {
  return (
    <Suspense
      fallback={
        <div className={`${pageShell} text-sm text-gray-500`}>Loading…</div>
      }
    >
      <MembershipPageContent />
    </Suspense>
  );
}
