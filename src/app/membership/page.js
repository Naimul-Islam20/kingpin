"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MEMBERSHIP_PLAN, formatBDT, getRewardTierById, MEMBERSHIP_STATUS } from "@/components/booking/bookingData";
import { useDemoCustomer } from "@/context/DemoCustomerContext";
import {
  buildPaidApplicationPayload,
  getRewardCardUiPhase,
  validateRewardCardStep,
} from "@/lib/rewardCardFlow";
import AnimatedButton from "@/components/ui/annimation_button";

const initialForm = {
  fullName: "",
  phone: "",
  city: "",
  dob: "",
  otp: "",
  marketingConsent: false,
  hasAccount: "no",
  paymentMethod: "bkash",
  paymentStatus: "idle",
  paymentTransactionRef: "",
};

const STEPS = [
  { id: 1, title: "Profile", hint: "Who is applying" },
  { id: 2, title: "Verify", hint: "SMS code" },
  { id: 3, title: "Terms", hint: "DOB + consent" },
  { id: 4, title: "Review", hint: "Confirm details" },
  { id: 5, title: "Pay", hint: "Annual fee" },
  { id: 6, title: "Account", hint: "Link profile" },
];

const labelClass = "text-[10px] font-black uppercase tracking-widest text-gray-500";
const inputClass =
  "w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";

/** Header (~sticky) এর নিচে বাকি উচ্চতায় কনটেন্ট মাঝখানে, ছোট কার্ড — পুরো পেজ নিচে টানা লাগবে না */
const pageShell =
  "flex min-h-[calc(100dvh-8.5rem)] flex-col items-center justify-center bg-gray-50 px-4 py-6 font-[family-name:var(--font-montserrat)] md:min-h-[calc(100dvh-9.5rem)] md:py-8";
const cardWrap = "w-full max-w-lg mx-auto";
const cardBox =
  "max-h-[min(88dvh,calc(100dvh-9rem))] overflow-y-auto overflow-x-hidden overscroll-contain border border-gray-100 bg-white shadow-sm";

function MembershipPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { member, pendingApplication, recordPaidRewardApplication } = useDemoCustomer();
  const selectedTier = useMemo(() => getRewardTierById(searchParams.get("tier")), [searchParams]);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const phase = getRewardCardUiPhase(member, pendingApplication);

  const next = () => {
    setError("");
    if (step <= 3) {
      const { ok, errors } = validateRewardCardStep(step, form);
      if (!ok) {
        setError(errors[0]);
        return;
      }
    }
    setStep((s) => Math.min(6, s + 1));
  };

  const prev = () => setStep((s) => Math.max(1, s - 1));

  const handlePayment = () => {
    setError("");
    if (form.paymentMethod === "nagad" && !form.paymentTransactionRef.trim()) {
      setError("Enter the Nagad transaction ID from your receipt, or switch to bKash for instant confirmation in this sandbox.");
      setForm((p) => ({ ...p, paymentStatus: "failed" }));
      return;
    }
    setForm((p) => ({ ...p, paymentStatus: "paid" }));
    setStep(6);
  };

  const handleSubmit = () => {
    const payload = buildPaidApplicationPayload(form, selectedTier);
    recordPaidRewardApplication(payload);
    if (form.hasAccount === "yes") {
      router.push("/login?fromMembership=1");
      return;
    }
    router.push("/signup?fromMembership=1");
  };

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
              Verify, pay the annual fee, then sign in or register — your card activates on the same profile.
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

          <div className="mt-4 flex gap-1.5">
            {STEPS.map((s) => (
              <div key={s.id} className="flex-1">
                <div className={`h-1.5 transition-colors ${step >= s.id ? "bg-primary" : "bg-gray-200"}`} />
                <p className={`mt-1.5 truncate text-[9px] font-bold uppercase tracking-wide ${step >= s.id ? "text-primary" : "text-gray-400"}`}>
                  {s.title}
                </p>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="mt-4 space-y-3 md:space-y-4"
            >
              {step === 1 && (
                <>
                  <div>
                    <label className={labelClass}>Full legal name</label>
                    <input
                      value={form.fullName}
                      onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Mobile</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="+8801XXXXXXXXX"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>City</label>
                    <input
                      value={form.city}
                      onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
                    We sent a one-time code to <strong className="text-gray-900">{form.phone || "your number"}</strong>. In
                    production this is a real SMS; in this sandbox use code <strong className="text-primary">123456</strong>.
                  </div>
                  <div>
                    <label className={labelClass}>Verification code</label>
                    <input
                      value={form.otp}
                      onChange={(e) => setForm((p) => ({ ...p, otp: e.target.value }))}
                      placeholder="6-digit code"
                      className={inputClass}
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div>
                    <label className={labelClass}>Date of birth</label>
                    <input
                      type="date"
                      value={form.dob}
                      onChange={(e) => setForm((p) => ({ ...p, dob: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <label className="flex cursor-pointer items-start gap-3 border border-gray-200 bg-gray-50 p-4 text-left text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={form.marketingConsent}
                      onChange={(e) => setForm((p) => ({ ...p, marketingConsent: e.target.checked }))}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span>I accept the reward card terms, privacy notice, and optional marketing from Kingpin.</span>
                  </label>
                </>
              )}

              {step === 4 && (
                <div className="space-y-3 border border-gray-200 bg-gray-50 p-4 text-left text-sm text-gray-800">
                  <p>
                    <span className="text-gray-500">Name</span> — <strong>{form.fullName || "—"}</strong>
                  </p>
                  <p>
                    <span className="text-gray-500">Phone</span> — <strong>{form.phone || "—"}</strong>
                  </p>
                  <p>
                    <span className="text-gray-500">City</span> — <strong>{form.city || "—"}</strong>
                  </p>
                  <p>
                    <span className="text-gray-500">Card tier</span> — <strong>{selectedTier.title}</strong>
                  </p>
                  <p>
                    <span className="text-gray-500">Annual charge</span> — <strong>{formatBDT(selectedTier.annualFeeBDT)}</strong>
                  </p>
                  <p className="border-t border-gray-200 pt-3 text-xs text-gray-600">
                    By continuing you authorise the annual card fee for the selected tier. Membership renews each year unless
                    cancelled under programme rules.
                  </p>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-4">
                  <div className="border border-[#C27D2A] bg-amber-50 p-4">
                    <p className={`${labelClass} text-[#C27D2A]`}>Payment</p>
                    <p className="mt-1 text-2xl font-black text-gray-900">{formatBDT(selectedTier.annualFeeBDT)}</p>
                    <p className="text-xs text-gray-600">{selectedTier.title}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["bkash", "nagad", "card"].map((m) => (
                      <label
                        key={m}
                        className={`cursor-pointer border-2 px-4 py-2 text-xs font-black uppercase tracking-widest transition ${
                          form.paymentMethod === m ? "border-primary bg-primary/5 text-gray-900" : "border-gray-200 text-gray-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          className="sr-only"
                          checked={form.paymentMethod === m}
                          onChange={() => setForm((p) => ({ ...p, paymentMethod: m }))}
                        />
                        {m}
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className={labelClass}>Transaction reference (required for Nagad)</label>
                    <input
                      value={form.paymentTransactionRef}
                      onChange={(e) => setForm((p) => ({ ...p, paymentTransactionRef: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  {form.paymentStatus === "failed" && (
                    <p className="text-center text-xs font-semibold text-rose-600">Fix the reference above or choose bKash for automatic confirmation.</p>
                  )}
                </div>
              )}

              {step === 6 && (
                <div className="space-y-4">
                  <div className="border-l-4 border-primary bg-sky-50 p-4 text-sm text-gray-800">
                    <p className="font-black uppercase text-primary">Payment confirmed</p>
                    <p className="mt-2">Link this payment to your Kingpin profile. After sign-in or registration your card activates immediately.</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">How should we link your profile?</p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label className="flex flex-1 cursor-pointer items-center gap-3 border border-gray-200 bg-gray-50 p-4">
                      <input
                        type="radio"
                        name="hasAccount"
                        checked={form.hasAccount === "yes"}
                        onChange={() => setForm((p) => ({ ...p, hasAccount: "yes" }))}
                        className="h-4 w-4 text-primary"
                      />
                      <span className="text-sm font-semibold text-gray-800">I already have an account</span>
                    </label>
                    <label className="flex flex-1 cursor-pointer items-center gap-3 border border-gray-200 bg-gray-50 p-4">
                      <input
                        type="radio"
                        name="hasAccount"
                        checked={form.hasAccount === "no"}
                        onChange={() => setForm((p) => ({ ...p, hasAccount: "no" }))}
                        className="h-4 w-4 text-primary"
                      />
                      <span className="text-sm font-semibold text-gray-800">Create a new account</span>
                    </label>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {error && <p className="mt-4 text-center text-xs font-semibold text-rose-600">{error}</p>}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={prev}
              disabled={step === 1}
              className="border-2 border-gray-300 bg-white px-6 py-3 text-[10px] font-black uppercase tracking-widest text-gray-700 transition hover:border-gray-900 disabled:opacity-40"
            >
              Back
            </button>
            {step < 4 && (
              <AnimatedButton type="button" onClick={next} className="flex-1 !py-3 sm:min-w-[200px]">
                Continue
              </AnimatedButton>
            )}
            {step === 4 && (
              <AnimatedButton type="button" onClick={() => setStep(5)} className="flex-1 !py-3 sm:min-w-[200px]">
                Continue to payment
              </AnimatedButton>
            )}
            {step === 5 && (
              <AnimatedButton type="button" onClick={handlePayment} className="flex-1 !py-3 sm:min-w-[200px]">
                Confirm payment
              </AnimatedButton>
            )}
            {step === 6 && (
              <AnimatedButton type="button" onClick={handleSubmit} className="flex-1 !py-3 sm:min-w-[200px]">
                Continue to {form.hasAccount === "yes" ? "sign in" : "registration"}
              </AnimatedButton>
            )}
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
