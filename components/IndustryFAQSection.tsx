"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const INDUSTRY_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Which Industries does Promonex Media work with?",
    answer:
      "Promonex Media partners with businesses across a wide spectrum of sectors including Ecommerce & D2C, Healthcare & Clinics, Real Estate & Architecture, Higher Education & EdTech, Luxury & Fashion, Automobile Dealerships, Hospitality & Dining, B2B SaaS, Professional Services, Finance, and Local Retail. Our multi-disciplinary team shapes creative and growth strategy specifically around how your unique audience discovers, evaluates, and converts.",
  },
  {
    id: "faq-2",
    question: "Do you use the same marketing strategy for every industry?",
    answer:
      "Never. Every sector operates on distinct buyer psychology, transaction values, and search intent. An ecommerce store requires high-velocity creative testing, catalog remarketing, and conversion rate optimization (CRO), whereas healthcare demands local SEO authority, strict medical trust, and appointment booking funnels. We custom-build the channel mix and acquisition roadmap for your specific industry economics.",
  },
  {
    id: "faq-3",
    question: "Do you work with both B2B and B2C businesses?",
    answer:
      "Yes, we build dedicated acquisition engines for both models. For B2B companies, we prioritize LinkedIn targeting, high-intent Google Search, account-based marketing, and qualified lead generation integrated with your CRM. For B2C and consumer brands, we focus on scalable Meta and Google Shopping campaigns, social commerce, influencer amplification, and automated WhatsApp/email retention funnels.",
  },
  {
    id: "faq-4",
    question: "Do you work with local businesses?",
    answer:
      "Yes, local dominance is one of our flagship capabilities. We manage comprehensive Local SEO, Google Business Profile (GBP) ranking optimization, geo-targeted Meta & Google Local Services Ads, local citation building, and automated customer review generation to make sure your brand captures maximum market share in your local territory.",
  },
  {
    id: "faq-5",
    question: "Do you work with ecommerce brands?",
    answer:
      "Yes. We manage full-funnel ecommerce growth across Shopify, WooCommerce, and custom platforms. Our services encompass ROAS-driven Meta & Google Performance Max campaigns, dynamic catalog remarketing, high-converting product landing pages, email/SMS/WhatsApp lifecycle marketing, and average order value (AOV) optimization.",
  },
  {
    id: "faq-6",
    question: "What if my industry is not listed on this page?",
    answer:
      "Even if your exact niche is not highlighted here, our proprietary performance marketing and creative frameworks apply across all digital customer journeys. We begin every new engagement with exhaustive competitor benchmarking, audience persona research, and search volume audits to engineer a tailored, data-backed roadmap for your specific market.",
  },
  {
    id: "faq-7",
    question: "Can you create a complete marketing strategy from scratch?",
    answer:
      "Absolutely. We frequently work with launching brands, scaling startups, and established enterprises undergoing digital transformation. We develop end-to-end go-to-market strategies spanning brand positioning, website UI/UX development, organic SEO foundations, paid media funnels, performance creative, tracking analytics, and automated lead nurturing systems.",
  },
];

export default function IndustryFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="industry-faqs"
      aria-labelledby="industry-faqs-heading"
      className="relative w-full overflow-hidden bg-white text-[#0A1538] py-16 sm:py-20 lg:py-24 font-['Poppins',sans-serif] selection:bg-[#00D9FF] selection:text-[#0A1538]"
    >
      {/* ── Subtle Ambient Background Highlights (Clean White Aesthetic) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(0, 217, 255, 0.04) 0%, transparent 45%),
            radial-gradient(circle at 90% 80%, rgba(22, 139, 255, 0.035) 0%, transparent 45%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#00D9FF] rounded-full" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#00A3FF] uppercase select-none">
              FAQS
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#00D9FF] rounded-full" />
          </div>

          {/* Heading */}
          <h2
            id="industry-faqs-heading"
            className="font-['Poppins',sans-serif] text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0A1538] tracking-tight leading-[1.15]"
          >
            Industries We Serve{" "}
            <span className="bg-gradient-to-r from-[#00D9FF] via-[#168BFF] to-[#00A3FF] bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>
        </div>

        {/* ── FAQ Accordion List ── */}
        <div className="divide-y divide-slate-200/90 border-t border-b border-slate-200/90">
          {INDUSTRY_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.id} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-4 text-left transition-colors duration-200 cursor-pointer"
                >
                  <span
                    className={`font-['Poppins',sans-serif] text-base sm:text-lg md:text-[18.5px] font-bold transition-colors duration-200 ${
                      isOpen
                        ? "text-[#0066FF]"
                        : "text-[#0A1538] group-hover:text-[#0066FF]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Minimal Toggle Chevron */}
                  <span
                    className={`flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#EBF5FF] text-[#0066FF] shadow-sm rotate-180"
                        : "bg-slate-100 text-slate-500 group-hover:bg-[#EBF5FF] group-hover:text-[#0066FF]"
                    }`}
                  >
                    <ChevronDown size={18} className="stroke-[2.5]" />
                  </span>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 sm:pt-3.5 pb-1 text-sm sm:text-base text-slate-600 leading-relaxed font-normal pr-6 sm:pr-10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
