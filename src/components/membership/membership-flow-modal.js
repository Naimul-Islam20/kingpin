"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark, HiOutlineCheckCircle, HiOutlineLockClosed, HiOutlineUserPlus, HiOutlineShieldCheck, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useDemoCustomer } from "@/context/DemoCustomerContext";
import { formatBDT } from "@/components/booking/bookingData";

export default function MembershipFlowModal({ isOpen, onClose, plan }) {
  const { isAuthenticated, patchMember } = useDemoCustomer();
  const router = useRouter();
  const [step, setStep] = useState("auth");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentData, setPaymentData] = useState({
    method: "bkash",
    phone: "",
    trxId: "",
  });

  // Sync step if already authenticated
  useEffect(() => {
    if (isOpen) {
      if (isAuthenticated) {
        setStep("payment");
      } else {
        setStep("auth");
      }
    }
  }, [isOpen, isAuthenticated]);

  // Disable scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      patchMember({ tier: plan?.title, membershipStatus: "Member-Active" });
      setIsLoading(false);
      setStep("success");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <HiXMark className="w-6 h-6 text-slate-400" />
        </button>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === "auth" && (
              <motion.div 
                key="auth"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-8 py-4"
              >
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <HiOutlineLockClosed size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase">Join Kingpin</h3>
                  <p className="text-sm text-slate-500 max-w-[240px] mx-auto">Please sign in or create an account to continue with <span className="font-bold text-blue-600">{plan?.title}</span> membership.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <button 
                    onClick={() => router.push(`/login?tier=${plan?.id}`)}
                    className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
                  >
                    <HiOutlineArrowRightOnRectangle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Sign In Now
                  </button>
                  
                  <div className="flex items-center gap-4 py-2">
                    <div className="h-px bg-slate-100 flex-1" />
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">OR</span>
                    <div className="h-px bg-slate-100 flex-1" />
                  </div>

                  <button 
                    onClick={() => router.push(`/signup?tier=${plan?.id}`)}
                    className="w-full py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-white hover:shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <HiOutlineUserPlus className="w-5 h-5" />
                    Create New Account
                  </button>
                </div>

                <p className="text-[10px] text-center text-slate-400 font-medium">By continuing, you agree to Kingpin's terms of service and reward policy.</p>
              </motion.div>
            )}

            {step === "payment" && (
              <motion.div 
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Complete Payment</h3>
                  <p className="text-sm text-slate-500 mt-1">Selected: <span className="font-bold text-blue-600">{plan?.title}</span></p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center text-sm">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Plan Fee</p>
                    <p className="text-lg font-black text-slate-900">{formatBDT(plan?.annualFeeBDT)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Validity</p>
                    <p className="text-sm font-bold text-slate-900">1 Year</p>
                  </div>
                </div>

                <form onSubmit={handlePaymentSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Payment Method</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["bkash", "nagad"].map(m => (
                        <button key={m} type="button" onClick={() => setPaymentData({...paymentData, method: m})} className={`py-3 px-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${paymentData.method === m ? "border-blue-600 bg-blue-50/50" : "border-slate-100"}`}>
                          <div className={`w-3 h-3 rounded-full border-2 ${paymentData.method === m ? "border-blue-600 bg-blue-600" : "border-slate-300"}`} />
                          <span className="text-xs font-bold uppercase tracking-wider">{m}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">{paymentData.method.toUpperCase()} Number</label>
                    <input type="tel" required placeholder="01XXXXXXXXX" value={paymentData.phone} onChange={(e) => setPaymentData({...paymentData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-sm focus:border-blue-600 transition-colors" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Transaction ID (Optional)</label>
                    <input type="text" placeholder="8X9Y1Z..." value={paymentData.trxId} onChange={(e) => setPaymentData({...paymentData, trxId: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-sm uppercase focus:border-blue-600 transition-colors" />
                  </div>

                  <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 flex items-center justify-center">
                    {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : `Pay ${formatBDT(plan?.annualFeeBDT)}`}
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-emerald-600">
                    <HiOutlineShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Secured Transaction</span>
                  </div>
                </form>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div 
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-6 text-center space-y-4"
              >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCheckCircle size={48} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Application Successful!</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed px-4">
                  Welcome to the <span className="font-bold text-blue-600">{plan?.title}</span> tier. Your benefits are now active in your dashboard.
                </p>
                <button onClick={onClose} className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg">
                  Back to Membership
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
