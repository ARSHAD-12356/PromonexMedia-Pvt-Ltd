"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import LocationContactForm from "@/components/LocationContactForm";

export default function SeoContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="seo-contact-heading"
      className="relative w-full bg-white text-[#020B35] py-16 sm:py-20 lg:py-24 font-['Poppins',sans-serif]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Headings, Supporting Paragraph & Contact Info */}
          {/* ========================================================= */}
          <div className="flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2.5 mb-3.5 sm:mb-4"
            >
              <span className="w-8 sm:w-10 h-[2.5px] bg-[#00D9FF] rounded-full shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#00A8E8] uppercase select-none">
                LET&apos;S CONNECT
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              id="seo-contact-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-extrabold text-[#020B35] tracking-tight leading-[1.18]"
            >
              Let&apos;s Talk About Your{" "}
              <span className="relative inline-block text-[#00A8E8]">
                Next Big Move.
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#00D9FF] rounded-full"
                />
              </span>
            </motion.h2>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="mt-5 sm:mt-6 text-slate-600 text-sm sm:text-base lg:text-[16.5px] leading-relaxed max-w-xl font-normal"
            >
              Ready to grow your business online? Our team is here to help you find
              the right digital strategy and turn your goals into measurable results.
            </motion.p>

            {/* Contact Block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
              className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200 flex items-center gap-4 sm:gap-5"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#0478FD] shadow-[0_0_20px_rgba(0,217,255,0.2)] shrink-0">
                <Phone size={22} className="text-[#0478FD] stroke-[2.2]" />
              </div>

              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00A8E8] block">
                  NEED QUICK ASSISTANCE?
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium block mt-0.5">
                  Talk to our team
                </span>
                <a
                  href="tel:+917061941818"
                  className="mt-0.5 inline-block text-lg sm:text-xl font-bold text-[#020B35] hover:text-[#0478FD] transition-colors"
                  aria-label="Call Promonex Media at +91 70619 41818"
                >
                  +91 70619 41818
                </a>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Exact Homepage Location Contact Form       */}
          {/* ========================================================= */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-xl lg:max-w-none">
              <LocationContactForm defaultService="SEO" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
