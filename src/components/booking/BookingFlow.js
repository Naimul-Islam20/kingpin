"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import AnimatedButton from "@/components/ui/annimation_button";
import { SERVICE_CONFIG, TIME_SLOTS, VENUES } from "./bookingData";

const BASE_LABEL_CLASS = "mb-2 block text-[11px] font-semibold uppercase tracking-wide text-gray-500";
const BASE_INPUT_CLASS =
  "w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C27D2A]";

const STEPS = ["Date & Time", "Guests", "Contact", "Review"];

export default function BookingFlow({ serviceType }) {
  const config = SERVICE_CONFIG[serviceType];
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    date: "",
    time: TIME_SLOTS[0],
    venue: VENUES[0],
    guests: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const requiredExtensionFields = useMemo(
    () => config.extensionFields.filter((field) => field.type !== "textarea"),
    [config.extensionFields]
  );

  const updateForm = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const isStepOneReady =
    form.date &&
    requiredExtensionFields.every((field) => typeof form[field.key] === "string" && form[field.key].trim() !== "");

  const isStepTwoReady = Number(form.guests) > 0;
  const isStepThreeReady = form.name && form.email && form.phone;

  const canContinue =
    (step === 1 && isStepOneReady) || (step === 2 && isStepTwoReady) || (step === 3 && isStepThreeReady);

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <FiCheckCircle className="mx-auto mb-4 text-5xl text-green-600" />
          <h1 className="text-2xl font-bold text-black">Booking Request Submitted</h1>
          <p className="mt-2 text-sm text-gray-600">
            Your {config.label.toLowerCase()} request is now in review. We have sent details to your email.
          </p>
          <p className="mt-4 rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-700">
            Ref: KP-{Math.floor(Math.random() * 90000 + 10000)}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/account" className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium">
              Go to Account
            </Link>
            <Link href="/" className="rounded-md bg-black px-5 py-2 text-sm font-medium text-white">
              Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <Link href="/booking" className="text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-black">
          Back to services
        </Link>
        <h1 className="mt-3 text-3xl font-bold text-black">{config.label}</h1>
        <p className="mt-1 text-sm text-gray-600">{config.description}</p>

        <div className="mt-6 grid grid-cols-4 gap-2">
          {STEPS.map((item, index) => (
            <div
              key={item}
              className={`rounded-md border px-2 py-2 text-center text-[11px] font-medium ${
                step >= index + 1 ? "border-[#C27D2A] bg-[#C27D2A]/10 text-black" : "border-gray-200 bg-white text-gray-500"
              }`}
            >
              {index + 1}. {item}
            </div>
          ))}
        </div>

        <section className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          {step === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={BASE_LABEL_CLASS}>Date</label>
                  <input type="date" className={BASE_INPUT_CLASS} value={form.date} onChange={(e) => updateForm("date", e.target.value)} />
                </div>
                <div>
                  <label className={BASE_LABEL_CLASS}>Time</label>
                  <select className={BASE_INPUT_CLASS} value={form.time} onChange={(e) => updateForm("time", e.target.value)}>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
              {config.extensionFields.map((field) => (
                <div key={field.key}>
                  <label className={BASE_LABEL_CLASS}>{field.label}</label>
                  {field.type === "select" ? (
                    <select className={BASE_INPUT_CLASS} value={form[field.key] || ""} onChange={(e) => updateForm(field.key, e.target.value)}>
                      <option value="">Select {field.label.toLowerCase()}</option>
                      {field.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <textarea
                      rows={3}
                      className={BASE_INPUT_CLASS}
                      value={form[field.key] || ""}
                      onChange={(e) => updateForm(field.key, e.target.value)}
                      placeholder={`Add ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={BASE_LABEL_CLASS}>Guests</label>
                  <input
                    type="number"
                    min="1"
                    className={BASE_INPUT_CLASS}
                    value={form.guests}
                    onChange={(e) => updateForm("guests", e.target.value)}
                  />
                </div>
                <div>
                  <label className={BASE_LABEL_CLASS}>Venue</label>
                  <select className={BASE_INPUT_CLASS} value={form.venue} onChange={(e) => updateForm("venue", e.target.value)}>
                    {VENUES.map((venue) => (
                      <option key={venue}>{venue}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={BASE_LABEL_CLASS}>Full Name</label>
                  <input className={BASE_INPUT_CLASS} value={form.name} onChange={(e) => updateForm("name", e.target.value)} />
                </div>
                <div>
                  <label className={BASE_LABEL_CLASS}>Phone</label>
                  <input className={BASE_INPUT_CLASS} value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} />
                </div>
              </div>
              <div>
                <label className={BASE_LABEL_CLASS}>Email</label>
                <input className={BASE_INPUT_CLASS} type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)} />
              </div>
              <div>
                <label className={BASE_LABEL_CLASS}>Notes</label>
                <textarea rows={3} className={BASE_INPUT_CLASS} value={form.notes} onChange={(e) => updateForm("notes", e.target.value)} />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3 text-sm text-gray-700">
              <p className="rounded-md bg-gray-100 px-4 py-3">
                <strong>Service:</strong> {config.label}
              </p>
              <p className="rounded-md bg-gray-100 px-4 py-3">
                <strong>When:</strong> {form.date} at {form.time}
              </p>
              <p className="rounded-md bg-gray-100 px-4 py-3">
                <strong>Guests:</strong> {form.guests} | <strong>Venue:</strong> {form.venue}
              </p>
              <p className="rounded-md bg-gray-100 px-4 py-3">
                <strong>Contact:</strong> {form.name} | {form.phone} | {form.email}
              </p>
            </div>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              disabled={step === 1}
              onClick={() => setStep((prev) => Math.max(1, prev - 1))}
              className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            {step < 4 ? (
              <button
                type="button"
                disabled={!canContinue}
                onClick={() => setStep((prev) => prev + 1)}
                className="rounded-md bg-black px-5 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
              </button>
            ) : (
              <AnimatedButton onClick={() => setSubmitted(true)}>Confirm Booking</AnimatedButton>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
