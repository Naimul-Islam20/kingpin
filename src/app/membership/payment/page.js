"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineShieldCheck } from "react-icons/hi2";
import { FiAward, FiCheck } from "react-icons/fi";
import { REWARD_CARD_TIERS, formatBDT } from "@/components/booking/bookingData";

const cardStyles = {
  silver: "from-zinc-500 via-zinc-300 to-zinc-500 text-zinc-900 shadow-zinc-200",
  gold: "from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#5d4037] shadow-amber-200",
  platinum: "from-[#111111] via-[#3f3f46] to-[#0a0a0a] text-white shadow-slate-400",
  family: "from-[#155e75] via-[#67e8f9] to-[#0f766e] text-white shadow-cyan-200",
};

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const planId = searchParams.get("plan");
  const plan = REWARD_CARD_TIERS.find(t => t.id === planId) || REWARD_CARD_TIERS[1];

  const handlePaymentInit = (method) => {
    console.log(`Initializing ${method} payment for ${plan.title}`);
    // User will implement specific payment gateway logic here later
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-[family-name:var(--font-montserrat)]">
      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors text-xs font-black uppercase tracking-widest group"
      >
        <HiOutlineArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Complete Membership</h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Selected Tier</p>
        </div>

        {/* The Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative h-56 bg-gradient-to-tr ${cardStyles[plan.id]} p-8 rounded-3xl flex flex-col justify-between overflow-hidden shadow-2xl`}
        >
          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-center gap-2 opacity-90">
              <FiAward className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest">{plan.highlight}</span>
            </div>
            <div className="text-xl font-black uppercase tracking-tighter">
              Kingpin
            </div>
          </div>

          <div className="relative z-10">
            <h4 className="text-2xl font-black uppercase">{plan.title}</h4>
            <p className="mt-1 text-xs font-black uppercase tracking-wider opacity-90">
              {formatBDT(plan.annualFeeBDT)} / year
            </p>
            <div className="mt-4 text-[10px] font-bold tracking-[4px] uppercase opacity-50">
              •••• •••• •••• 3456
            </div>
          </div>
        </motion.div>

        {/* Minimal Payment Buttons */}
        <div className="space-y-6">
          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Pay with</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handlePaymentInit("bkash")}
              className="py-3 px-8 bg-[#e2136e] text-white rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-pink-100"
            >
              bKash
            </button>
            <button
              onClick={() => handlePaymentInit("nagad")}
              className="py-3 px-8 bg-[#f7941d] text-white rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-orange-100"
            >
              Nagad
            </button>
          </div>
          
          <div className="pt-4 flex items-center justify-center gap-2 text-slate-300">
             <HiOutlineShieldCheck className="w-4 h-4" />
             <span className="text-[10px] font-black uppercase tracking-widest">Secured Transaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MembershipPaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>}>
      <PaymentContent />
    </Suspense>
  );
}
