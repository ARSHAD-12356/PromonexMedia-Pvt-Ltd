"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones,
  Phone,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function AboutConsultantFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const messageText = [
      "Hello Promonex Media, I would like to consult with your digital marketing team.",
      `Name: ${formData.name}`,
      `Email: ${formData.email || "N/A"}`,
      `Phone: ${formData.phone}`,
      `Message: ${formData.message || "N/A"}`,
    ].join("\n");

    window.open(
      `https://wa.me/917061941818?text=${encodeURIComponent(messageText)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4500);
  };

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
              <span className="relative inline-block text-[#020B35]">
                Experienced
                <span
                  aria-hidden="true"
                  className="absolute bottom-1.5 left-0 w-full h-[3px] bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]"
                />
              </span>{" "}
              <br />
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
          {/* RIGHT COLUMN: Transparent Water Grey Frosted Glass Form */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 relative w-full flex justify-end">
            
            {/* Subtle soft neutral grey ambient shadow behind form */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 bg-slate-200/50 rounded-[34px] blur-xl opacity-60 -z-10"
            />

            {/* Neutral Greyish Water Rim Outer Shell */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
              className="relative w-full rounded-[30px] p-[1.5px] bg-gradient-to-b from-white/90 via-slate-200/70 to-slate-300/50 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_6px_20px_rgba(0,0,0,0.03)]"
            >
              {/* Inner Translucent Water Frosted Glass Card in Grey / Neutral Tones */}
              <div className="relative w-full rounded-[28.5px] bg-slate-100/35 backdrop-blur-2xl border border-white/90 p-6 sm:p-8 md:p-9 flex flex-col shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(0,0,0,0.03)] overflow-hidden">
                
                {/* Neutral Specular Highlights (No sky blue) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-white/70 to-transparent rounded-full blur-xl opacity-70"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tl from-slate-200/40 to-transparent rounded-full blur-xl opacity-60"
                />

                {/* Form Top Micro-Header */}
                <div className="relative z-10 flex items-center justify-between pb-4 mb-5 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#020B35] shadow-[0_0_8px_rgba(2,11,53,0.3)] animate-pulse" />
                    <span className="text-xs sm:text-[12.5px] font-bold tracking-[0.2em] text-[#020B35] uppercase select-none">
                      GET IN TOUCH
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium bg-slate-100/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200/70 shadow-xs">
                    ⚡ Fast Response
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="relative z-10 py-12 flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#020B35]/10 border border-[#020B35]/30 flex items-center justify-center text-[#020B35] shadow-[0_0_20px_rgba(2,11,53,0.15)] mb-4">
                        <CheckCircle2 size={36} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0B1536] mb-2">
                        Message Prepared!
                      </h3>
                      <p className="text-sm text-slate-600 max-w-sm">
                        WhatsApp has opened with your inquiry. Our senior consultant
                        will get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative z-10 space-y-4"
                    >
                      {/* Name Input with Icon */}
                      <div className="relative flex items-center bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-3.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] focus-within:border-[#020B35] focus-within:bg-white/95 focus-within:ring-2 focus-within:ring-[#020B35]/10 focus-within:shadow-[0_4px_16px_rgba(2,11,53,0.06)] transition-all duration-300">
                        <User size={18} className="text-slate-500 shrink-0" />
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-3 bg-transparent text-[#0B1536] placeholder-slate-400 text-sm sm:text-[15px] focus:outline-none font-medium"
                        />
                      </div>

                      {/* Email Input with Icon */}
                      <div className="relative flex items-center bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-3.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] focus-within:border-[#020B35] focus-within:bg-white/95 focus-within:ring-2 focus-within:ring-[#020B35]/10 focus-within:shadow-[0_4px_16px_rgba(2,11,53,0.06)] transition-all duration-300">
                        <Mail size={18} className="text-slate-500 shrink-0" />
                        <input
                          type="email"
                          required
                          placeholder="Your email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-3 bg-transparent text-[#0B1536] placeholder-slate-400 text-sm sm:text-[15px] focus:outline-none font-medium"
                        />
                      </div>

                      {/* Phone Input with Icon */}
                      <div className="relative flex items-center bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-3.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] focus-within:border-[#020B35] focus-within:bg-white/95 focus-within:ring-2 focus-within:ring-[#020B35]/10 focus-within:shadow-[0_4px_16px_rgba(2,11,53,0.06)] transition-all duration-300">
                        <Phone size={18} className="text-slate-500 shrink-0" />
                        <input
                          type="tel"
                          required
                          placeholder="Your phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-3 bg-transparent text-[#0B1536] placeholder-slate-400 text-sm sm:text-[15px] focus:outline-none font-medium"
                        />
                      </div>

                      {/* Message Textarea with Icon */}
                      <div className="relative flex items-start bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-3.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] focus-within:border-[#020B35] focus-within:bg-white/95 focus-within:ring-2 focus-within:ring-[#020B35]/10 focus-within:shadow-[0_4px_16px_rgba(2,11,53,0.06)] transition-all duration-300">
                        <MessageSquare size={18} className="text-slate-500 shrink-0 mt-0.5" />
                        <textarea
                          rows={3}
                          placeholder="Your message or project requirements..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full pl-3 bg-transparent text-[#0B1536] placeholder-slate-400 text-sm sm:text-[15px] focus:outline-none resize-none font-medium"
                        />
                      </div>

                      {/* Hero Dark Blue Submit Button with White Font */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 px-8 rounded-xl bg-[#020B35] hover:bg-[#03123D] text-white font-bold text-sm sm:text-[15px] shadow-[0_8px_24px_rgba(2,11,53,0.25)] hover:shadow-[0_12px_32px_rgba(2,11,53,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span className="text-white">Send Message</span>
                          <ArrowRight size={17} className="text-white" />
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
