"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import AnimatedButton from "@/components/ui/annimation_button";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiUser, FiPhone, FiCalendar, FiArrowRight } from "react-icons/fi";
import { useRouter, useSearchParams } from "next/navigation";
import { useDemoCustomer } from "@/context/DemoCustomerContext";

function SignupPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromMembership = searchParams.get("fromMembership") === "1";
  const { pendingApplication, applyPendingAfterAuth, completeProfileAfterAuth } = useDemoCustomer();
  const [formData, setFormData] = useState({ 
    firstName: "", 
    lastName: "",
    email: "", 
    phone: "",
    dob: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    if (!fromMembership || !pendingApplication) return;
    const parts = (pendingApplication.fullName || "").trim().split(" ");
    setFormData((prev) => ({
      ...prev,
      firstName: parts[0] || prev.firstName,
      lastName: parts.slice(1).join(" ") || prev.lastName,
      phone: pendingApplication.phone || prev.phone,
      dob: pendingApplication.dob || prev.dob,
    }));
  }, [fromMembership, pendingApplication]);

  const handleSubmit = (e) => {
    e.preventDefault();
    completeProfileAfterAuth({
      fullName: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      city: "",
    });
    const tier = searchParams.get("tier");
    if (tier) {
      router.push(`/membership/payment?plan=${tier}`);
      return;
    }
    if (fromMembership) {
      const linked = applyPendingAfterAuth();
      router.push(linked ? "/dashboard/membership?card=activated" : "/dashboard/membership");
      return;
    }
    router.push("/dashboard?fromRegistration=1");
  };

  const inputClass = "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-semibold";
  const labelClass = "text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1 block";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-montserrat)]">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 md:p-12 shadow border border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">The Kingpin Club</h2>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mb-2">Create Account</h1>
          <div className="h-1 w-12 bg-primary mx-auto mb-6" />
          {fromMembership && (
            <p className="text-xs font-semibold text-amber-700">
              Membership details pre-filled. Complete account to submit membership.
            </p>
          )}
        </motion.div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="relative">
              <label className={labelClass}>First Name</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  className={inputClass}
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="relative">
              <label className={labelClass}>Last Name</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            {/* Email Address - Full Width */}
            <div className="md:col-span-2 relative">
              <label className={labelClass}>Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  className={inputClass}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label className={labelClass}>Phone Number</label>
              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  required
                  className={inputClass}
                  placeholder="+8801XXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="relative">
              <label className={labelClass}>Date of Birth</label>
              <div className="relative">
                <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  required
                  className={inputClass}
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <label className={labelClass}>Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  className={inputClass}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className={labelClass}>Confirm Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  className={inputClass}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
            />
            <label htmlFor="terms" className="ml-2 block text-[10px] font-bold uppercase tracking-widest text-gray-600 leading-relaxed">
              I agree to the{" "}
              <Link href="#" className="text-primary hover:underline">Terms & Conditions</Link> ebong Kingpin-er promo updates pete op-in korchi.
            </label>
          </div>

          <div>
            <AnimatedButton type="submit" className="w-full !py-4 text-sm">
              Create Account <FiArrowRight className="ml-2" />
            </AnimatedButton>
          </div>
        </form>

        <div className="text-center mt-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-black hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-gray-50 font-[family-name:var(--font-montserrat)] text-sm text-gray-500">
          Loading…
        </main>
      }
    >
      <SignupPageContent />
    </Suspense>
  );
}
