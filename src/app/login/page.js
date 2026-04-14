"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import AnimatedButton from "@/components/ui/annimation_button";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { useRouter, useSearchParams } from "next/navigation";
import { useDemoCustomer } from "@/context/DemoCustomerContext";

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromMembership = searchParams.get("fromMembership") === "1";
  const { applyPendingAfterAuth } = useDemoCustomer();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fromMembership) {
      const linked = applyPendingAfterAuth();
      router.push(linked ? "/account?tab=Membership&card=activated" : "/account?tab=Membership");
      return;
    }
    router.push("/account");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-montserrat)]">
      <div className="max-w-md w-full space-y-8 bg-white p-8 md:p-12 shadow border border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">Welcome Back</h2>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mb-2">Member Login</h1>
          <div className="h-1 w-12 bg-primary mx-auto mb-6" />
          {fromMembership && (
            <p className="text-xs font-semibold text-amber-700">Login to continue your membership request.</p>
          )}
        </motion.div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1 block">Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-semibold"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1 block">Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-semibold"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-[10px] font-bold uppercase tracking-widest text-gray-600">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="/forgot-password" title="Forgot your password?" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-hover transition-colors">
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <AnimatedButton type="submit" className="w-full !py-4 text-sm">
              Sign In <FiArrowRight className="ml-2" />
            </AnimatedButton>
          </div>
        </form>

        <div className="text-center mt-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary font-black hover:underline">
              Join Now
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-gray-50 font-[family-name:var(--font-montserrat)] text-sm text-gray-500">
          Loading…
        </main>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
