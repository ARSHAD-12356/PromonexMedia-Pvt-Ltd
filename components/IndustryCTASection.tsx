"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function IndustryCTASection() {
  const handleOpenConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-promonex-chat"));
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "917061941818";
    const message = encodeURIComponent(
      "Hi Promonex Media, I would like to discuss a custom digital marketing strategy for my industry."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="industry-cta"
      aria-labelledby="industry-cta-heading"
      className="relative w-full overflow-hidden bg-white py-14 sm:py-18 lg:py-22 font-['Poppins',sans-serif] selection:bg-[#00D9FF] selection:text-[#020B35]"
    >
      {/* ── Outer Subtle Ambient Glows on White Section Background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 15% 30%, rgba(0, 217, 255, 0.04) 0%, transparent 45%),
            radial-gradient(circle at 85% 70%, rgba(22, 139, 255, 0.035) 0%, transparent 45%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10">
        {/* ── Main Large Dark Blue CTA Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden p-8 sm:p-12 md:p-16 lg:p-20 text-center border border-[#00D9FF]/30 shadow-[0_20px_60px_rgba(2,11,53,0.22)]"
          style={{
            background:
              "linear-gradient(145deg, #07174C 0%, #030D35 50%, #020826 100%)",
          }}
        >
          {/* Subtle Ambient Radial Lighting Inside the Dark Card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 50% 0%, rgba(0, 217, 255, 0.18) 0%, transparent 55%),
                radial-gradient(circle at 85% 100%, rgba(139, 61, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 15% 100%, rgba(22, 139, 255, 0.14) 0%, transparent 50%)
              `,
            }}
          />



          {/* ── Content Inside Dark Blue Card ── */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Top Eyebrow */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#00D9FF] rounded-full" />
              <span className="text-[11px] sm:text-xs md:text-[13px] font-bold tracking-[0.22em] text-[#00D9FF] uppercase select-none">
                YOUR INDUSTRY ISN&apos;T GENERIC
              </span>
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#00D9FF] rounded-full" />
            </div>

            {/* Main Heading */}
            <h2
              id="industry-cta-heading"
              className="font-['Poppins',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.18]"
            >
              Your Marketing Strategy{" "}
              <span className="bg-gradient-to-r from-[#00D9FF] via-[#168BFF] to-[#B55FE6] bg-clip-text text-transparent">
                Shouldn&apos;t Be Either.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[16.5px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Tell us what you sell, who your customers are and what growth
              means for your business. We&apos;ll help build a strategy around
              your actual market.
            </p>

            {/* ── CTA Action Buttons ── */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full">
              {/* Primary Button: Build My Industry Strategy */}
              <button
                type="button"
                onClick={handleOpenConsultation}
                aria-label="Build My Industry Strategy consultation"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-[#020B35] transition-all duration-500 hover:-translate-y-0.5 active:scale-95 cursor-pointer overflow-hidden shadow-[0_0_24px_rgba(0,217,255,0.4),0_4px_14px_rgba(0,163,255,0.25)] hover:shadow-[0_0_36px_rgba(0,217,255,0.7),0_8px_24px_rgba(22,139,255,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, #00D9FF 0%, #00B4D8 30%, #168BFF 65%, #8B3DFF 100%)",
                  backgroundSize: "240% 100%",
                  backgroundPosition: "0% 0%",
                  transition:
                    "background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "100% 0%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "0% 0%";
                }}
              >
                {/* Smooth Sheen Flare Layer */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                <span className="relative z-10 font-extrabold tracking-wide">
                  Build My Industry Strategy
                </span>
                <ArrowRight
                  size={18}
                  className="relative z-10 stroke-[2.8] transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </button>

              {/* Secondary Outline / Glass Button: Talk to Promonex */}
              <button
                type="button"
                onClick={handleWhatsApp}
                aria-label="Talk to Promonex on WhatsApp"
                className="group relative inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white bg-white/[0.08] hover:bg-white/[0.16] border border-white/25 hover:border-[#00D9FF]/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_0_24px_rgba(0,217,255,0.25)]"
              >
                <MessageSquare size={17} className="text-[#00D9FF] stroke-[2.4]" />
                <span className="font-semibold tracking-wide">
                  Talk to Promonex
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
