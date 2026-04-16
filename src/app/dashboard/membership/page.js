"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/layout/header/dashboard-header";
import { HiOutlineTrophy } from "react-icons/hi2";
import { FiCheck, FiAward } from "react-icons/fi";
import { useDemoCustomer } from "@/context/DemoCustomerContext";
import { MOCK_LEDGER, LEDGER_EVENT, REWARD_CARD_TIERS, formatBDT } from "@/components/booking/bookingData";
import MembershipFlowModal from "@/components/membership/membership-flow-modal";

const cardStyles = {
  silver: "from-zinc-500 via-zinc-300 to-zinc-500 text-zinc-900",
  gold: "from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#5d4037]",
  platinum: "from-[#111111] via-[#3f3f46] to-[#0a0a0a] text-white",
  family: "from-[#155e75] via-[#67e8f9] to-[#0f766e] text-white",
};

export default function MembershipPage() {
  const { member, isAuthenticated } = useDemoCustomer();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Check if member has an active tier (not just 'Starter' or 'Guest' status)
  const hasActivePlan = member?.tier && member?.tier !== 'Starter' && member?.membershipStatus !== 'Guest';

  const handleApply = (card) => {
    setSelectedPlan(card);
    setModalOpen(true);
  };

  return (
    <>
      <DashboardHeader 
        title="Membership" 
        subtitle="Manage your tier and track your reward points." 
      />

      <div className="p-6 md:p-8 space-y-12 max-w-7xl mx-auto">
        {hasActivePlan && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-blue-100 shadow-sm border-l-4 border-l-blue-600">
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Current Membership</p>
                <h2 className="text-2xl font-black text-slate-900">{member?.tier}</h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Reward Points</p>
                  <p className="text-xl font-bold text-slate-900">{member?.points || 0}</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                  K
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-base font-bold text-slate-900">Points History</h2>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto">
                  {MOCK_LEDGER.map((entry) => (
                    <div key={entry.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${entry.event === LEDGER_EVENT.EARNED ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                           <HiOutlineTrophy size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{entry.note}</p>
                          <p className="text-[10px] text-slate-500">{entry.createdAt}</p>
                        </div>
                      </div>
                      <p className={`text-sm font-bold ${entry.points > 0 ? "text-emerald-600" : "text-red-600"}`}>
                        {entry.points > 0 ? `+${entry.points}` : entry.points}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Membership Plans */}
        <div className="space-y-8">
          <h2 className="text-base font-bold text-slate-900">{hasActivePlan ? "Upgrade Your Plan" : "Available Plans"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {REWARD_CARD_TIERS.map((card) => {
              const isCurrent = member?.tier === card.title || (card.id === 'silver' && (!member?.tier || member?.tier === 'Starter'));
              const isFamilyAndCurrent = card.id === 'family' && member?.tier === 'Family Card'; // Matching exact titles
              const activeMatch = isCurrent || isFamilyAndCurrent;

              return (
                <div
                  key={card.id}
                  className={`flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border ${activeMatch ? 'border-blue-500 ring-2 ring-blue-50 scale-[1.02]' : 'border-slate-200 hover:shadow-md'}`}
                >
                  {/* Top Card Part */}
                  <div className={`relative h-44 bg-gradient-to-tr ${cardStyles[card.id]} p-6 flex flex-col justify-between overflow-hidden shrink-0`}>
                    <div className="flex justify-between items-start relative z-10">
                      <div className="flex items-center gap-2 opacity-90">
                        <FiAward className="w-4 h-4" />
                        <span className="text-[9px] font-black uppercase tracking-widest">{card.highlight}</span>
                      </div>
                      <div className="text-base font-black uppercase tracking-tighter">
                        Kingpin
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-xl font-black uppercase">
                        {card.title}
                      </h4>
                      <p className="mt-0.5 text-[10px] font-black uppercase tracking-wider opacity-90">
                        {formatBDT(card.annualFeeBDT)} / year
                      </p>
                    </div>
                  </div>

                  {/* Bottom Details Part */}
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <h5 className="text-[9px] font-black uppercase tracking-[0.2em] mb-4 text-blue-600">Benefits</h5>
                    <ul className="space-y-3 mb-8">
                      {[card.discountLabel, card.bonusLabel, card.facilityLabel]
                        .filter(Boolean)
                        .map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <FiCheck className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          <span className="text-slate-600 text-[11px] font-semibold leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => handleApply(card)}
                      disabled={activeMatch}
                      className={`mt-auto w-full py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                        ${activeMatch 
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                          : 'bg-slate-900 text-white hover:bg-blue-600 shadow-sm'}
                      `}
                    >
                      {activeMatch ? 'Current Plan' : `Apply ${card.title}`}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <MembershipFlowModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        plan={selectedPlan} 
      />
    </>
  );
}

