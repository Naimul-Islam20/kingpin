"use client";

import { DemoCustomerProvider } from "@/context/DemoCustomerContext";

export default function AppProviders({ children }) {
  return <DemoCustomerProvider>{children}</DemoCustomerProvider>;
}
