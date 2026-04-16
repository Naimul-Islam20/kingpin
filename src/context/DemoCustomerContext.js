"use client";

import { createContext, useCallback, useContext, useMemo, useReducer } from "react";
import { MEMBERSHIP_STATUS, MOCK_MEMBER } from "@/components/booking/bookingData";
import { buildMemberAfterCardActivation, computeRenewalExpiry, migrateLegacyPendingMember } from "@/lib/rewardCardFlow";

const STORAGE_KEY = "kingpin_demo_customer_v2";
const LEGACY_KEYS = ["pendingMembershipProfile", "memberProfile"];

const DemoCustomerContext = createContext(null);

function baseMember() {
  return {
    ...MOCK_MEMBER,
    membershipStatus: MEMBERSHIP_STATUS.guest,
    tier: "—",
    tierId: null,
    rewardCardPan: null,
    cardActivatedAt: null,
    renewalStatus: null,
    membershipStartDate: null,
    membershipExpiryDate: null,
    paymentStatus: null,
    paymentTransactionRef: "",
    verificationStatus: "unverified",
    verification: { phoneVerified: false, emailVerified: false },
    points: 0,
    pointsExpiringSoon: 0,
  };
}

function loadPersisted() {
  if (typeof window === "undefined") return null;
  LEGACY_KEYS.forEach((k) => window.localStorage.removeItem(k));
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

function persist(state) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

const initialState = () => {
  const saved = loadPersisted();
  if (saved?.member) {
    const merged = { ...baseMember(), ...saved.member };
    return {
      member: migrateLegacyPendingMember(merged),
      pendingApplication: saved.pendingApplication ?? null,
      isAuthenticated: Boolean(saved.isAuthenticated),
    };
  }
  return { member: baseMember(), pendingApplication: null, isAuthenticated: false };
};

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { member: baseMember(), pendingApplication: null, isAuthenticated: false };
    case "hydrate":
      return action.payload;
    case "set_pending_application":
      return { ...state, pendingApplication: action.payload };
    case "set_auth":
      return { ...state, isAuthenticated: Boolean(action.payload) };
    case "patch_member":
      return { ...state, member: { ...state.member, ...action.payload } };
    case "complete_reward_card_onboarding": {
      const pending = state.pendingApplication;
      if (!pending || pending.paymentStatus !== "paid") return state;
      const member = buildMemberAfterCardActivation(state.member, pending);
      return {
        pendingApplication: null,
        member,
      };
    }
    default:
      return state;
  }
}

function persistedReducer(state, action) {
  const next = reducer(state, action);
  persist(next);
  return next;
}

export function DemoCustomerProvider({ children }) {
  const [state, dispatch] = useReducer(persistedReducer, undefined, initialState);

  const patchMember = useCallback((payload) => {
    dispatch({ type: "patch_member", payload });
  }, []);

  const markAuthenticated = useCallback(() => {
    dispatch({ type: "set_auth", payload: true });
  }, []);

  const markSignedOut = useCallback(() => {
    dispatch({ type: "set_auth", payload: false });
  }, []);

  const completeProfileAfterAuth = useCallback((profile) => {
    dispatch({
      type: "patch_member",
      payload: {
        fullName: profile.fullName,
        email: profile.email,
        phone: profile.phone,
        city: profile.city || "",
        verification: { phoneVerified: false, emailVerified: true },
      },
    });
    dispatch({ type: "set_auth", payload: true });
  }, []);

  const recordPaidRewardApplication = useCallback((application) => {
    dispatch({ type: "set_pending_application", payload: application });
  }, []);

  /** After payment: user signs in or registers — card activates in one step (no staff button). */
  const applyPendingAfterAuth = useCallback(() => {
    if (!state.pendingApplication || state.pendingApplication.paymentStatus !== "paid") return false;
    dispatch({ type: "complete_reward_card_onboarding" });
    return true;
  }, [state.pendingApplication]);

  const renewAnnualMembership = useCallback(() => {
    if (state.member.membershipStatus !== MEMBERSHIP_STATUS.active) return false;
    if (!state.member.membershipExpiryDate) return false;
    const { membershipExpiryDate } = computeRenewalExpiry(state.member.membershipExpiryDate);
    dispatch({
      type: "patch_member",
      payload: {
        membershipExpiryDate,
        renewalStatus: "active",
        paymentStatus: "paid",
        paymentTransactionRef: `KP-RNW-${Date.now()}`,
      },
    });
    return true;
  }, [state.member.membershipStatus, state.member.membershipExpiryDate]);

  const value = useMemo(
    () => ({
      member: state.member,
      pendingApplication: state.pendingApplication,
      isAuthenticated: state.isAuthenticated,
      recordPaidRewardApplication,
      applyPendingAfterAuth,
      renewAnnualMembership,
      markAuthenticated,
      markSignedOut,
      completeProfileAfterAuth,
      patchMember,
      resetDemoSession: () => dispatch({ type: "reset" }),
    }),
    [
      state.member,
      state.pendingApplication,
      state.isAuthenticated,
      recordPaidRewardApplication,
      applyPendingAfterAuth,
      renewAnnualMembership,
      markAuthenticated,
      markSignedOut,
      completeProfileAfterAuth,
      patchMember,
    ]
  );

  return <DemoCustomerContext.Provider value={value}>{children}</DemoCustomerContext.Provider>;
}

export function useDemoCustomer() {
  const ctx = useContext(DemoCustomerContext);
  if (!ctx) {
    throw new Error("useDemoCustomer must be used within DemoCustomerProvider");
  }
  return ctx;
}
