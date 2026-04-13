"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedButton from "@/components/ui/annimation_button";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiArrowLeft, FiShield, FiLock, FiCheckCircle } from "react-icons/fi";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", ""]);
  const [step, setStep] = useState(1); // 1: Email, 2: Code, 3: New Password, 4: Success

  const handleSendCode = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setStep(4);
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    // Auto-focus next input
    if (value && index < 3) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-montserrat)]">
      <div className="max-w-md w-full space-y-8 bg-white p-8 md:p-12 shadow border border-gray-100 overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Step 1: Enter Email */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">Security</h2>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mb-2">Forgot Password</h1>
                <div className="h-1 w-12 bg-primary mx-auto mb-6" />
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 leading-relaxed">
                  Enter your email address to receive a verification code.
                </p>
              </div>

              <form onSubmit={handleSendCode} className="space-y-6">
                <div className="relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1 block">Email Address</label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-semibold"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <AnimatedButton type="submit" className="w-full !py-4 text-sm">
                    Send Code
                  </AnimatedButton>
                  <Link href="/login" className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">
                    <FiArrowLeft /> Back to Login
                  </Link>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 2: Enter Code (OTP) */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">Verification</h2>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mb-2">Enter Code</h1>
                <div className="h-1 w-12 bg-primary mx-auto mb-6" />
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 leading-relaxed">
                  We've sent a 4-digit code to <br/><span className="text-gray-900">{email}</span>
                </p>
              </div>

              <form onSubmit={handleVerifyCode} className="space-y-8">
                <div className="flex justify-center gap-4">
                  {code.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`code-${idx}`}
                      type="text"
                      maxLength={1}
                      className="w-12 h-14 text-center text-xl font-black bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      value={digit}
                      onChange={(e) => handleCodeChange(idx, e.target.value)}
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  <AnimatedButton type="submit" className="w-full !py-4 text-sm">
                    Verify Code
                  </AnimatedButton>
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors"
                  >
                    Resend Code
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3: New Password */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">New Credentials</h2>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mb-2">New Password</h1>
                <div className="h-1 w-12 bg-primary mx-auto mb-6" />
              </div>

              <form onSubmit={handleResetPassword} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1 block">New Password</label>
                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-semibold"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1 block">Confirm Password</label>
                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-semibold"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                <AnimatedButton type="submit" className="w-full !py-4 text-sm">
                  Reset Password
                </AnimatedButton>
              </form>
            </motion.div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheckCircle size={32} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900 mb-2">Password Reset!</h2>
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 leading-relaxed mb-8">
                Your password has been successfully updated. You can now login with your new credentials.
              </p>
              <Link href="/login">
                <AnimatedButton variant="primary" className="w-full">
                  Login Now
                </AnimatedButton>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
