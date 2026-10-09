"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const fieldClassName =
  "w-full rounded-lg border border-white/80 bg-white px-3 py-2.5 text-sm text-[#08183D] placeholder:text-slate-400 outline-none transition focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/30";

function sendInquiry(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const message = [
    "Hello Promonex Media, I would like to discuss a project.",
    `Name: ${formData.get("name")}`,
    `Phone: ${formData.get("phone")}`,
    `Email: ${formData.get("email")}`,
    `Service: ${formData.get("service")}`,
    `Details: ${formData.get("message") || "Not provided"}`,
  ].join("\n");

  window.open(
    `https://wa.me/917061941818?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
}

export default function AboutConsultantFormSection() {
  return (
    <section
      id="consultant-form"
      aria-label="Let's talk with Experienced Digital Marketing Consultant"
      className="relative w-full bg-white text-[#0B1536] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 border-t border-slate-100 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: Consultant Pitch & Contact Details (~50%)  */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Top Headphones Icon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/35 flex items-center justify-center text-[#00D9FF] shadow-[0_0_24px_rgba(0,217,255,0.25)] mb-6 sm:mb-7"
            >
              <Headphones size={28} className="stroke-[2.2]" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#020B35] tracking-tight leading-[1.18]"
            >
              Let&apos;s talk with <br />
              Experienced <br />
              Digital Marketing <br />
              <span className="text-[#00D9FF] drop-shadow-[0_0_22px_rgba(0,217,255,0.4)]">
                Consultant
              </span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 sm:mt-6 text-slate-600 text-sm sm:text-base lg:text-[15.5px] leading-relaxed max-w-xl font-normal"
            >
              Ready to take your online presence to the next level? Our team of
              experts is here to help! Fill out the form, and let&apos;s start
              the journey towards achieving your digital goals.
            </motion.p>

            {/* Urgent? Call us Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-8 sm:mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
            >
              <div className="shrink-0">
                <span className="text-sm font-bold text-[#00D9FF] tracking-wide block uppercase drop-shadow-[0_0_6px_rgba(0,217,255,0.3)]">
                  Urgent?
                </span>
                <a
                  href="tel:+917061941818"
                  className="mt-1 inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-[#020B35] hover:text-[#00D9FF] transition-colors whitespace-nowrap"
                >
                  <Phone size={18} className="text-[#00D9FF] shrink-0" />
                  <span className="whitespace-nowrap">Call us +91 70619-41818</span>
                </a>
              </div>

              <div className="hidden sm:block w-[1px] h-10 bg-slate-200 shrink-0" />

              <div className="shrink-0">
                <span className="text-xs font-semibold text-slate-400 tracking-wider block uppercase">
                  Email Us
                </span>
                <a
                  href="mailto:promonexmedia@gmail.com"
                  className="mt-1 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-600 hover:text-[#020B35] transition-colors whitespace-nowrap"
                >
                  <Mail size={16} className="text-[#00D9FF] shrink-0" />
                  <span className="whitespace-nowrap">promonexmedia@gmail.com</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: Project Inquiry Form (Exact Home Style)  */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 relative w-full flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-[#06144A] p-5 text-white shadow-[0_22px_55px_rgba(2,11,53,0.2)] sm:p-7 lg:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#1D4ED8]/20 blur-3xl"
              />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D9FF]">
                  Let&apos;s talk
                </span>
                <h3 className="mt-2 font-poppins text-2xl font-bold leading-tight sm:text-[28px] text-white">
                  Tell us about your project
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Share a few details and we&apos;ll connect with you to plan the next step.
                </p>
              </div>

              <form onSubmit={sendInquiry} className="relative mt-5 flex flex-1 flex-col gap-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="block text-xs font-medium text-slate-200">
                    Full name
                    <input
                      className={`${fieldClassName} mt-1.5`}
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="block text-xs font-medium text-slate-200">
                    Phone number
                    <input
                      className={`${fieldClassName} mt-1.5`}
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+91 00000 00000"
                      required
                    />
                  </label>
                </div>
                <label className="block text-xs font-medium text-slate-200">
                  Email address
                  <input
                    className={`${fieldClassName} mt-1.5`}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>
                <label className="block text-xs font-medium text-slate-200">
                  Service you&apos;re interested in
                  <select className={`${fieldClassName} mt-1.5`} name="service" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option>Performance marketing</option>
                    <option>SEO</option>
                    <option>Social media marketing</option>
                    <option>Website development</option>
                    <option>Creative design</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block text-xs font-medium text-slate-200">
                  Project details <span className="font-normal text-slate-400">(optional)</span>
                  <textarea
                    className={`${fieldClassName} mt-1.5 min-h-[76px] resize-y`}
                    name="message"
                    placeholder="What would you like to achieve?"
                    rows={2}
                  />
                </label>
                <motion.button
                  type="submit"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00D9FF] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] px-5 font-bold text-[#020B35] hover:text-white shadow-[0_8px_24px_rgba(0,217,255,0.35)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] transition-all duration-300 cursor-pointer"
                >
                  <span>Submit</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
