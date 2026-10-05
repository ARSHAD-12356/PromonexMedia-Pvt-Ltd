"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What digital marketing services does Promonex Media provide?",
    answer:
      "We provide end-to-end digital marketing solutions including SEO, social media marketing, Google Ads, Meta Ads, website development, creative design, and lead generation.",
  },
  {
    id: "faq-2",
    question: "How can Promonex help my business grow online?",
    answer:
      "We combine strategy, creative content, performance marketing, SEO, and technology to build a consistent digital growth system tailored to your business goals.",
  },
  {
    id: "faq-3",
    question: "Do you work with businesses across different industries?",
    answer:
      "Yes. We work with businesses across e-commerce, quick commerce, healthcare, real estate, education, automotive, and other growing industries.",
  },
  {
    id: "faq-4",
    question: "How do I get started with Promonex Media?",
    answer:
      "Simply contact us and share your business goals. Our team will understand your requirements and recommend the right digital marketing strategy for your brand.",
  },
  {
    id: "faq-5",
    question: "Can Promonex manage our complete digital marketing?",
    answer:
      "Yes. We can manage multiple parts of your digital presence including SEO, social media, paid advertising, website development, creative design, and lead generation.",
  },
];

export default function ContactFaqSection() {
  // All FAQ items collapsed by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="contact-faq-section"
      aria-labelledby="contact-faq-heading"
      className="relative w-full bg-[#020B35] text-white py-16 sm:py-20 lg:py-24 font-['Poppins',sans-serif] overflow-hidden border-t border-[#00D9FF]/15"
    >
      {/* ========================================================= */}
      {/* 1. AMBIENT BACKGROUND GLOWS & ORBS (Clean, No Dotted Grid)*/}
      {/* ========================================================= */}

      {/* Top-Right Soft Translucent Cyan Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-[#00D9FF]/12 via-[#0478FD]/08 to-transparent rounded-full blur-[140px] -z-0"
      />

      {/* Bottom-Left Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#00D9FF]/14 via-[#7C3AED]/12 to-transparent rounded-full blur-[140px] -z-0"
      />

      {/* Futuristic Ambient Glowing Orb Curve at Bottom-Left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 w-[380px] h-[380px] rounded-full border border-[#00D9FF]/20 bg-gradient-to-tr from-[#00D9FF]/08 via-[#7C3AED]/08 to-transparent blur-[2px] opacity-70 -z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-36 w-[500px] h-[500px] rounded-full border border-[#00D9FF]/15 bg-gradient-to-tr from-[#0478FD]/06 via-transparent to-transparent blur-[3px] opacity-50 -z-0"
      />

      {/* Abstract Glowing Node on Curve Line (Reference aesthetic) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-1/4 w-3.5 h-3.5 rounded-full bg-[#00D9FF] shadow-[0_0_16px_#00D9FF,0_0_30px_#00D9FF] hidden md:block -z-0"
      />

      {/* Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        
        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: FAQ Introduction & CTA (35–40% width)       */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-24"
          >
            {/* Small Eyebrow Text: FAQ */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="px-3 py-1 rounded-full bg-[#00D9FF]/12 border border-[#00D9FF]/40 text-[#00D9FF] text-xs font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(0,217,255,0.2)]">
                FAQ
              </span>
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#00D9FF] to-transparent rounded-full" />
            </div>

            {/* Large Heading */}
            <h2
              id="contact-faq-heading"
              className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-white tracking-tight leading-[1.14]"
            >
              Have a question in{" "}
              <span className="text-[#00D9FF]">
                mind?
              </span>
            </h2>

            {/* CONFUSED? Label */}
            <div className="mt-5 sm:mt-6">
              <span className="text-xs font-extrabold text-[#00D9FF] tracking-[0.18em] uppercase">
                CONFUSED?
              </span>
            </div>

            {/* Subtext */}
            <p className="mt-1.5 text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              Can&apos;t find your answers here? Send us a message.
            </p>

            {/* CTA Button: Contact us */}
            <div className="mt-6 sm:mt-8">
              <a
                href="#contact-form-section"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#08205C]/75 hover:bg-[#0C2B7A] border border-[#00D9FF]/40 hover:border-[#00D9FF] text-white font-semibold text-sm sm:text-base shadow-[0_0_16px_rgba(0,217,255,0.18)] hover:shadow-[0_0_26px_rgba(0,217,255,0.45)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact us</span>
                <span className="w-7 h-7 rounded-full bg-[#00D9FF]/20 group-hover:bg-[#00D9FF] flex items-center justify-center transition-colors duration-300">
                  <ArrowRight
                    size={15}
                    className="text-[#00D9FF] group-hover:text-[#020B35] transition-all duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </div>

            {/* 3D Paper Plane flying towards accordion cards (Reference Graphic) */}
            <div className="hidden lg:block relative mt-8 xl:mt-12 select-none pointer-events-none">
              {/* Dashed trail */}
              <svg viewBox="0 0 160 80" className="w-36 h-20 overflow-visible" fill="none">
                <path
                  d="M 10 70 Q 70 65 110 30"
                  stroke="#00D9FF"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  opacity="0.8"
                />
              </svg>
              {/* 3D Paper Plane */}
              <motion.div
                animate={{ y: [-3, 3, -3], rotate: [-2, 3, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-28 top-3 w-10 h-10"
              >
                <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow-[0_0_12px_#00D9FF]" fill="none">
                  <polygon points="5,25 55,5 30,50" fill="#0478FD" />
                  <polygon points="5,25 55,5 33,33" fill="#38BDF8" />
                  <polygon points="33,33 55,5 22,55" fill="#00D9FF" />
                  <line x1="5" y1="25" x2="55" y2="5" stroke="#FFFFFF" strokeWidth="1" opacity="0.85" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: FAQ Accordion Cards (60–65% width)         */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col space-y-3.5 sm:space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${item.id}`;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -2 }}
                  className={`group relative rounded-2xl sm:rounded-[20px] transition-all duration-300 backdrop-blur-md overflow-hidden ${
                    isOpen
                      ? "bg-[#092264]/90 border border-[#00D9FF] shadow-[0_0_28px_rgba(0,217,255,0.22),0_8px_24px_rgba(2,11,53,0.35)]"
                      : "bg-[#07194D]/75 hover:bg-[#09205E]/85 border border-[#00D9FF]/25 hover:border-[#00D9FF]/55 shadow-[0_4px_20px_rgba(2,11,53,0.25)]"
                  }`}
                >
                  {/* Subtle Inner Glow on Active Item */}
                  {isOpen && (
                    <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[280px] h-[80px] bg-[#00D9FF]/18 rounded-full blur-[35px]" />
                  )}

                  {/* Header / Clickable Toggle */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] rounded-2xl"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      {/* Left glowing cyan vertical indicator bar */}
                      <span
                        className={`w-1 h-5 sm:h-6 rounded-full shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-gradient-to-b from-[#00D9FF] to-[#38BDF8] shadow-[0_0_12px_#00D9FF]"
                            : "bg-[#00D9FF]/60 group-hover:bg-[#00D9FF] group-hover:shadow-[0_0_8px_#00D9FF]"
                        }`}
                      />

                      {/* Question text */}
                      <span className="text-white text-sm sm:text-base font-semibold leading-snug group-hover:text-[#E0F2FE] transition-colors">
                        {item.question}
                      </span>
                    </div>

                    {/* Circular Chevron Toggle Icon */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#00D9FF] text-[#020B35] border-[#00D9FF] shadow-[0_0_12px_#00D9FF]"
                          : "bg-[#041444]/60 text-slate-300 border-[#00D9FF]/30 group-hover:border-[#00D9FF] group-hover:text-white"
                      }`}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                      >
                        <ChevronDown size={17} className="stroke-[2.2]" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                          <div className="pt-3 border-t border-[#00D9FF]/15 pl-4 sm:pl-5">
                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
