export const SERVICE_TYPES = {
  event: "event",
  dining: "dining",
  arcade: "arcade",
};

export const MEMBERSHIP_STATUS = {
  guest: "Guest",
  pending: "Member-Pending",
  active: "Member-Active",
  suspended: "Member-Suspended",
};

/** Allowed status changes (demo). Card becomes Active immediately after payment + account link. */
export const MEMBERSHIP_TRANSITIONS = {
  [MEMBERSHIP_STATUS.guest]: [MEMBERSHIP_STATUS.active],
  [MEMBERSHIP_STATUS.pending]: [MEMBERSHIP_STATUS.active, MEMBERSHIP_STATUS.suspended],
  [MEMBERSHIP_STATUS.active]: [MEMBERSHIP_STATUS.suspended, MEMBERSHIP_STATUS.active],
  [MEMBERSHIP_STATUS.suspended]: [MEMBERSHIP_STATUS.active],
};

export const LEDGER_EVENT = {
  EARNED: "EARNED",
  REDEEMED: "REDEEMED",
  EXPIRED: "EXPIRED",
  ADJUSTED: "ADJUSTED",
  MEMBERSHIP_APPLIED: "MEMBERSHIP_APPLIED",
  MEMBERSHIP_PAYMENT_RECEIVED: "MEMBERSHIP_PAYMENT_RECEIVED",
  MEMBERSHIP_APPROVED: "MEMBERSHIP_APPROVED",
  MEMBERSHIP_RENEWED: "MEMBERSHIP_RENEWED",
  MEMBERSHIP_SUSPENDED: "MEMBERSHIP_SUSPENDED",
  MEMBERSHIP_ACTIVATED: "MEMBERSHIP_ACTIVATED",
};

export const MEMBERSHIP_PLAN = {
  type: "annual",
  annualFeeBDT: 1200,
  gracePeriodDays: 7,
};

export const REWARD_CARD_TIERS = [
  {
    id: "silver",
    title: "Silver Card",
    annualFeeBDT: 1200,
    earnMultiplier: 1,
    highlight: "Starter",
    benefits: [
      "5% discount on selected games",
      "Weekday queue priority",
      "Birthday month bonus points",
    ],
  },
  {
    id: "gold",
    title: "Gold Card",
    annualFeeBDT: 2400,
    earnMultiplier: 2,
    highlight: "Most Popular",
    benefits: [
      "10% discount on games and snacks",
      "Priority lane booking",
      "Free shoe rental anytime",
    ],
  },
  {
    id: "platinum",
    title: "Platinum Card",
    annualFeeBDT: 4000,
    earnMultiplier: 3,
    highlight: "Premium",
    benefits: [
      "15% flat discount",
      "VIP counter support",
      "Monthly premium pass perks",
    ],
  },
  {
    id: "family",
    title: "Family Card",
    annualFeeBDT: 3200,
    earnMultiplier: 2,
    highlight: "Family Value",
    benefits: [
      "Shared points wallet for up to 4 members",
      "Family weekend bundle offers",
      "Priority lanes on birthdays and school breaks",
    ],
  },
];

export function getRewardTierById(tierId) {
  return REWARD_CARD_TIERS.find((tier) => tier.id === tierId) ?? REWARD_CARD_TIERS[0];
}

export function canTransitionMembership(fromStatus, toStatus) {
  return MEMBERSHIP_TRANSITIONS[fromStatus]?.includes(toStatus) ?? false;
}

export function formatBDT(value) {
  return `BDT ${Number(value || 0).toLocaleString("en-BD")}`;
}

export function calculateEarnablePoints(serviceType, amountBDT) {
  const rule = REWARD_RULES[serviceType];
  if (!rule) return 0;
  if (amountBDT < rule.minSpend) return rule.fixedBonus;
  return rule.fixedBonus + Math.floor(amountBDT * rule.earnRate);
}

export const SERVICE_CONFIG = {
  [SERVICE_TYPES.event]: {
    key: SERVICE_TYPES.event,
    label: "Book an Event",
    shortLabel: "Events",
    path: "/booking/event",
    description: "Birthdays, corporate nights, and custom gatherings.",
    extensionFields: [
      {
        key: "eventPackage",
        label: "Package",
        type: "select",
        options: ["Birthday Party", "Corporate Event", "Class Party", "Business Meeting"],
      },
      {
        key: "budgetRange",
        label: "Budget",
        type: "select",
        options: ["Under $500", "$500 - $1200", "$1200 - $2500", "Custom"],
      },
      { key: "specialRequests", label: "Special Requests", type: "textarea" },
    ],
    estimateAmount: 12000,
  },
  [SERVICE_TYPES.dining]: {
    key: SERVICE_TYPES.dining,
    label: "Private Dining",
    shortLabel: "Dining",
    path: "/booking/private-dining",
    description: "Premium seating with curated food and beverage service.",
    extensionFields: [
      {
        key: "diningPackage",
        label: "Dining Package",
        type: "select",
        options: ["The Dynamic Duo", "The Triple Threat", "The Grand Tour"],
      },
      {
        key: "seatingPreference",
        label: "Seating Preference",
        type: "select",
        options: ["Window side", "Private booth", "Near stage", "No preference"],
      },
      { key: "dietaryNotes", label: "Dietary Notes", type: "textarea" },
    ],
    estimateAmount: 6500,
  },
  [SERVICE_TYPES.arcade]: {
    key: SERVICE_TYPES.arcade,
    label: "Digital Arcade",
    shortLabel: "Arcade",
    path: "/booking/arcade",
    description: "Reserve game slots, passes, and lounge access.",
    extensionFields: [
      {
        key: "gameType",
        label: "Game Type",
        type: "select",
        options: ["Console Zone", "VR Arena", "Racing Simulators", "Mixed Zone"],
      },
      {
        key: "sessionDuration",
        label: "Session Duration",
        type: "select",
        options: ["1 Hour", "2 Hours", "3 Hours", "Unlimited Day Pass"],
      },
      {
        key: "slotPreference",
        label: "Slot Preference",
        type: "select",
        options: ["Morning", "Afternoon", "Evening", "Late Night"],
      },
    ],
    estimateAmount: 2500,
  },
};

export const REWARD_RULES = {
  [SERVICE_TYPES.event]: {
    service: SERVICE_TYPES.event,
    minSpend: 5000,
    earnRate: 0.03,
    fixedBonus: 60,
  },
  [SERVICE_TYPES.dining]: {
    service: SERVICE_TYPES.dining,
    minSpend: 3000,
    earnRate: 0.025,
    fixedBonus: 40,
  },
  [SERVICE_TYPES.arcade]: {
    service: SERVICE_TYPES.arcade,
    minSpend: 1000,
    earnRate: 0.02,
    fixedBonus: 30,
  },
};

export const REDEEM_POLICY = {
  minimumPoints: 300,
  maxRedeemPercentPerBooking: 0.4,
  pointsExpiryMonths: 12,
  expiryWarningDays: 30,
};

export const VENUES = ["Norwood Center", "Stretton Center", "Adelaide CBD"];
export const TIME_SLOTS = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

export const STATUS_STYLES = {
  Pending: "bg-amber-100 text-amber-700",
  Confirmed: "bg-green-100 text-green-700",
  Completed: "bg-blue-100 text-blue-700",
  Cancelled: "bg-rose-100 text-rose-700",
};

export const MOCK_BOOKINGS = [
  {
    reference: "KP-23811",
    type: SERVICE_TYPES.event,
    status: "Pending",
    dateTime: "2026-05-24 18:00",
    partySize: 30,
    amountBDT: 18000,
    meta: { eventPackage: "Corporate Event", budgetRange: "$1200 - $2500" },
  },
  {
    reference: "KP-23812",
    type: SERVICE_TYPES.dining,
    status: "Confirmed",
    dateTime: "2026-05-20 20:00",
    partySize: 4,
    amountBDT: 6800,
    meta: { diningPackage: "The Triple Threat", seatingPreference: "Private booth" },
  },
  {
    reference: "KP-23813",
    type: SERVICE_TYPES.arcade,
    status: "Completed",
    dateTime: "2026-05-10 16:00",
    partySize: 2,
    amountBDT: 2600,
    meta: { gameType: "VR Arena", sessionDuration: "2 Hours" },
  },
];

export const MOCK_MEMBER = {
  id: "MBR-1001",
  fullName: "John Doe",
  email: "john@example.com",
  phone: "+8801712345678",
  city: "Dhaka",
  membershipStatus: MEMBERSHIP_STATUS.guest,
  tier: "Starter",
  membershipPlan: MEMBERSHIP_PLAN.type,
  annualFeeBDT: MEMBERSHIP_PLAN.annualFeeBDT,
  joinDate: "2026-04-01",
  membershipStartDate: "2026-04-01",
  membershipExpiryDate: "2027-04-01",
  renewalStatus: "due-soon",
  paymentStatus: "pending",
  paymentTransactionRef: "",
  verificationStatus: "unverified",
  points: 240,
  pointsExpiringSoon: 80,
  verification: {
    phoneVerified: false,
    emailVerified: true,
  },
};

export const MOCK_LEDGER = [
  {
    id: "LED-1",
    bookingReference: "KP-23812",
    event: LEDGER_EVENT.EARNED,
    points: 210,
    note: "Private Dining confirmed booking",
    createdAt: "2026-05-20",
    idempotencyKey: "KP-23812:EARNED",
  },
  {
    id: "LED-2",
    bookingReference: "KP-10090",
    event: LEDGER_EVENT.REDEEMED,
    points: -120,
    note: "Voucher applied to next booking",
    createdAt: "2026-05-22",
    idempotencyKey: "KP-10090:REDEEMED",
  },
  {
    id: "LED-3",
    bookingReference: "MEM-1001",
    event: LEDGER_EVENT.MEMBERSHIP_APPLIED,
    points: 0,
    note: "Annual membership application submitted",
    createdAt: "2026-05-24",
    idempotencyKey: "MEM-1001:APPLIED",
  },
];

export function isLedgerEventUnique(existingLedger, idempotencyKey) {
  return !existingLedger.some((item) => item.idempotencyKey === idempotencyKey);
}
