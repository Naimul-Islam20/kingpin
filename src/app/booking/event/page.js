"use client";

import BookingFlow from "@/components/booking/BookingFlow";
import { SERVICE_TYPES } from "@/components/booking/bookingData";

export default function EventBookingPage() {
  return <BookingFlow serviceType={SERVICE_TYPES.event} />;
}
