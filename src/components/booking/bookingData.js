export const SERVICE_TYPES = {
  event: "event",
  dining: "dining",
  arcade: "arcade",
};

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
  },
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
    meta: { eventPackage: "Corporate Event", budgetRange: "$1200 - $2500" },
  },
  {
    reference: "KP-23812",
    type: SERVICE_TYPES.dining,
    status: "Confirmed",
    dateTime: "2026-05-20 20:00",
    partySize: 4,
    meta: { diningPackage: "The Triple Threat", seatingPreference: "Private booth" },
  },
  {
    reference: "KP-23813",
    type: SERVICE_TYPES.arcade,
    status: "Completed",
    dateTime: "2026-05-10 16:00",
    partySize: 2,
    meta: { gameType: "VR Arena", sessionDuration: "2 Hours" },
  },
];
