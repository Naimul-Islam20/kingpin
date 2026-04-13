// app/faq/page.tsx
"use client";

import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const faqs = [
    {
      q: "How early should I arrive at the bowling alley before my game?",
      a: "It’s best to arrive at the bowling alley 5-10 minutes early, so you have time to get set up in your lane.",
    },
    {
      q: "How many people are allowed per bowling lane?",
      a: "A maximum of 6 people are allowed per bowling lane. If you have more people playing and are keen to have lanes that are next to each other, make an online booking above.",
    },
    {
      q: "How much does bowling cost at Kingpin?",
      a: "To find rates for your preferred time and location, check out the pricing menu at the top right of this page. Alternatively, visit the pricing page for activity bundle prices. t forget, whatever our standard package prices are, ",
    },
  ];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <main className="pt-6 md:pt-12 px-4 md:px-0 lg:px-0 max-w-[1330px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left column */}
        <section className="md:col-span-4">
          <h1 className="text-3xl uppercase md:text-4xl font-extrabold text-slate-900">
            FREQUENTLY ASKED QUESTIONS ABOUT BOWLING AT KINGPIN
          </h1>
        </section>

        {/* Right column - Accordion FAQ */}
        <aside className="md:col-span-8">
          <div className="bg-white">
            <div className="divide-y divide-slate-700">
              {faqs.map((item, i) => (
                <div key={i} className="px-5 py-4">
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-lg md:text-xl font-bold text-slate-900">
                      {item.q}
                    </span>

                    {/* Rotating Icon */}
                    <IoIosArrowDown
                      className={`text-2xl transform text-yellow-600 transition-transform duration-300 ${
                        openIndex === i ? "rotate-0 " : "rotate-[90deg]"
                      }`}
                    />
                  </button>

                  {/* Answer with smooth auto-height animation */}
                  <div
                    ref={(el) => (contentRefs.current[i] = el)}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight:
                        openIndex === i
                          ? `${contentRefs.current[i]?.scrollHeight}px`
                          : "0px",
                      opacity: openIndex === i ? 1 : 0,
                      marginTop: openIndex === i ? "0.75rem" : "0px",
                    }}
                  >
                    <p className="text-slate-700 text-medium md:text-lg leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
