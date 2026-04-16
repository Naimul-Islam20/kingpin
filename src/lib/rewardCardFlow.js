/**
 * Reward card application & subscription rules (client demo — no API).
 * Keeps validation and lifecycle transitions explicit and testable.
 */

import {
  MEMBERSHIP_PLAN,
  MEMBERSHIP_STATUS,
  REWARD_CARD_TIERS,
  getRewardTierById,
} from "@/components/booking/bookingData";

function pad2(n) {
  return String(n).padStart(2, "0");
}

export function formatYMD(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

export function parseYMD(s) {
  if (!s || typeof s !== "string") return null;
  const [y, m, d] = s.split("-").map((x) => Number(x));
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

/** Annual subscription window from activation date (inclusive start, typical anniversary expiry). */
export function computeInitialSubscription(now = new Date()) {
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = new Date(start);
  end.setFullYear(end.getFullYear() + 1);
  return { membershipStartDate: formatYMD(start), membershipExpiryDate: formatYMD(end) };
}

/** Next anniversary expiry: one year from current term end, or from today if already lapsed. */
export function computeRenewalExpiry(currentExpiryYMD, now = new Date()) {
  const expiry = parseYMD(currentExpiryYMD);
  const base = !expiry || now > expiry ? now : expiry;
  const nextEnd = new Date(base.getFullYear(), base.getMonth(), base.getDate());
  nextEnd.setFullYear(nextEnd.getFullYear() + 1);
  return { membershipExpiryDate: formatYMD(nextEnd) };
}

export function generateRewardCardPan() {
  const a = String(Math.floor(1000 + Math.random() * 9000));
  const b = String(Math.floor(1000 + Math.random() * 9000));
  return `4591 ${a.slice(0, 2)}** **** ${b}`;
}

export function isPhonePlausible(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function validatePaymentInput({ method }) {
  if (!method) return { ok: false, error: "Select a payment method." };
  if (method !== "bkash" && method !== "nagad") {
    return { ok: false, error: "Only bKash or Nagad is allowed in demo mode." };
  }
  return { ok: true, error: null };
}

export function buildPaidApplicationPayload(member, tierMeta, paymentMethod) {
  return {
    fullName: String(member.fullName || "").trim(),
    phone: String(member.phone || "").trim(),
    city: String(member.city || "").trim(),
    paymentMethod,
    paymentStatus: "paid",
    // NOTE: Demo mode auto-confirms payment. Real gateway/webhook will later provide transaction IDs.
    paymentTransactionRef: "",
    selectedTierId: tierMeta.id,
    selectedTierTitle: tierMeta.title,
    membershipPlan: MEMBERSHIP_PLAN.type,
    annualFeeBDT: tierMeta.annualFeeBDT,
    submittedAt: new Date().toISOString(),
  };
}

/**
 * After payment + successful sign-in/sign-up: card is active immediately (no manual approval step).
 */
export function buildMemberAfterCardActivation(existingMember, pending) {
  const tierMeta = getRewardTierById(pending.selectedTierId);
  const { membershipStartDate, membershipExpiryDate } = computeInitialSubscription();
  const welcomeBonus = 100 + Math.min(200, (tierMeta.earnMultiplier || 1) * 40);
  const rewardCardPan = existingMember.rewardCardPan || generateRewardCardPan();
  const activatedAt = new Date().toISOString();

  return {
    ...existingMember,
    fullName: pending.fullName || existingMember.fullName,
    phone: pending.phone || existingMember.phone,
    city: pending.city || existingMember.city,
    tier: tierMeta.title,
    tierId: tierMeta.id,
    membershipStatus: MEMBERSHIP_STATUS.active,
    membershipPlan: MEMBERSHIP_PLAN.type,
    annualFeeBDT: pending.annualFeeBDT ?? tierMeta.annualFeeBDT,
    membershipStartDate,
    membershipExpiryDate,
    renewalStatus: "active",
    paymentStatus: "paid",
    paymentTransactionRef: pending.paymentTransactionRef || `KP-RC-${Date.now()}`,
    verificationStatus: "verified",
    verification: { ...existingMember.verification, phoneVerified: true, emailVerified: existingMember.verification?.emailVerified },
    rewardCardPan,
    cardActivatedAt: activatedAt,
    points: Math.max(Number(existingMember.points || 0), welcomeBonus),
    pointsExpiringSoon: existingMember.pointsExpiringSoon ?? 0,
  };
}

export function getRewardCardUiPhase(member, pendingApplication) {
  const isActive = member.membershipStatus === MEMBERSHIP_STATUS.active;
  const awaitingLink =
    pendingApplication?.paymentStatus === "paid" && member.membershipStatus === MEMBERSHIP_STATUS.guest;

  if (isActive) {
    return {
      key: "active",
      headline: "Reward card active",
      body: "Earn points on qualifying bookings and redeem according to programme rules.",
    };
  }
  if (awaitingLink) {
    return {
      key: "awaiting_account",
      headline: "Payment received",
      body: "Sign in or create your Kingpin account so we can issue and link your reward card to this profile.",
    };
  }
  return {
    key: "guest",
    headline: "No reward card on this profile",
    body: "Apply once per year for your tier. Verification and payment happen before your card is issued.",
  };
}

export function renewalWindowStatus(membershipExpiryYMD, now = new Date()) {
  const expiry = parseYMD(membershipExpiryYMD);
  if (!expiry) return { showRenewal: false, daysRemaining: null };
  const ms = expiry.getTime() - now.getTime();
  const daysRemaining = Math.ceil(ms / (24 * 60 * 60 * 1000));
  if (daysRemaining <= 0) return { showRenewal: true, daysRemaining, tone: "overdue" };
  if (daysRemaining <= 45) return { showRenewal: true, daysRemaining, tone: "due_soon" };
  return { showRenewal: false, daysRemaining, tone: "ok" };
}

/** One-off migration for older demo sessions still marked pending after payment. */
export function migrateLegacyPendingMember(member) {
  if (member.membershipStatus !== MEMBERSHIP_STATUS.pending) return member;
  if (member.paymentStatus !== "paid") return member;
  const { membershipStartDate, membershipExpiryDate } = computeInitialSubscription();
  const tierMatch = member.tier ? REWARD_CARD_TIERS.find((t) => t.title === member.tier) : null;
  const tierId = member.tierId || tierMatch?.id || "silver";
  return {
    ...member,
    membershipStatus: MEMBERSHIP_STATUS.active,
    tierId,
    tier: tierMatch?.title || getRewardTierById(tierId).title,
    membershipStartDate: member.membershipStartDate || membershipStartDate,
    membershipExpiryDate: member.membershipExpiryDate || membershipExpiryDate,
    renewalStatus: "active",
    rewardCardPan: member.rewardCardPan || generateRewardCardPan(),
    cardActivatedAt: member.cardActivatedAt || new Date().toISOString(),
  };
}
