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
      className="relative w-full bg-[#020B35] text-white font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Glowing Ambient Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#00D9FF]/12 via-[#0478FD]/06 to-transparent rounded-full blur-[140px] -z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-[#BB20E9]/12 via-[#0478FD]/08 to-transparent rounded-full blur-[140px] -z-0"
      />

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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.18]"
            >
              Let&apos;s talk with <br />
              <span className="relative inline-block text-white">
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
              className="mt-5 sm:mt-6 text-slate-300 text-sm sm:text-base lg:text-[15.5px] leading-relaxed max-w-xl font-normal"
            >
              Ready to take your online presence to the next level? Our team of
              experts is here to help! Fill out the form, and let&apos;s start
              the journey towards achieving your digital goals.
            </motion.p>

            {/* Urgent? Call us Info Card (Theme Cyan Accent) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-8 sm:mt-10 pt-6 border-t border-white/[0.1] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
            >
              <div>
                <span className="text-sm font-bold text-[#00D9FF] tracking-wide block uppercase drop-shadow-[0_0_6px_rgba(0,217,255,0.3)]">
                  Urgent?
                </span>
                <a
                  href="tel:+917061941818"
                  className="mt-1 inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-white hover:text-[#00D9FF] transition-colors"
                >
                  <Phone size={18} className="text-[#00D9FF]" />
                  <span>Call us +91 70619-41818</span>
                </a>
              </div>

              <div className="hidden sm:block w-[1px] h-10 bg-white/[0.12]" />

              <div>
                <span className="text-xs font-semibold text-slate-400 tracking-wider block uppercase">
                  Email Us
                </span>
                <a
                  href="mailto:promonexmedia@gmail.com"
                  className="mt-1 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-[#00D9FF]" />
                  <span>promonexmedia@gmail.com</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: Stylish Glowing Glassmorphic Form (~50%)  */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 relative w-full flex justify-end">
            
            {/* Glowing Ambient Card Glow behind form */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 bg-gradient-to-tr from-[#00D9FF]/20 via-[#0478FD]/15 to-[#BB20E9]/12 rounded-[36px] blur-2xl opacity-75 -z-10"
            />

            {/* Glowing Gradient Border Outer Shell */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
              className="relative w-full rounded-[30px] p-[1.5px] bg-gradient-to-b from-[#00D9FF]/40 via-[#0478FD]/25 to-[#BB20E9]/30 shadow-[0_24px_60px_rgba(0,0,0,0.65),0_0_35px_rgba(0,217,255,0.14)]"
            >
              {/* Inner Frosted Dark Card */}
              <div className="w-full rounded-[28.5px] bg-[#020B35]/95 backdrop-blur-2xl p-6 sm:p-8 md:p-9 flex flex-col">
                
                {/* Form Top Micro-Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D9FF] shadow-[0_0_10px_#00D9FF] animate-pulse" />
                    <span className="text-xs sm:text-[12.5px] font-bold tracking-[0.2em] text-[#00D9FF] uppercase select-none">
                      GET IN TOUCH
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
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
                      className="py-12 flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#00D9FF]/15 border border-[#00D9FF] flex items-center justify-center text-[#00D9FF] shadow-[0_0_24px_rgba(0,217,255,0.4)] mb-4">
                        <CheckCircle2 size={36} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Message Prepared!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-sm">
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
                      className="space-y-4"
                    >
                      {/* Name Input with Icon */}
                      <div className="relative flex items-center bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 py-3.5 focus-within:border-[#00D9FF] focus-within:bg-white/[0.07] focus-within:ring-2 focus-within:ring-[#00D9FF]/25 focus-within:shadow-[0_0_16px_rgba(0,217,255,0.18)] transition-all duration-300">
                        <User size={18} className="text-[#00D9FF]/80 shrink-0" />
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-3 bg-transparent text-white placeholder-slate-400 text-sm sm:text-[15px] focus:outline-none"
                        />
                      </div>

                      {/* Email Input with Icon */}
                      <div className="relative flex items-center bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 py-3.5 focus-within:border-[#00D9FF] focus-within:bg-white/[0.07] focus-within:ring-2 focus-within:ring-[#00D9FF]/25 focus-within:shadow-[0_0_16px_rgba(0,217,255,0.18)] transition-all duration-300">
                        <Mail size={18} className="text-[#00D9FF]/80 shrink-0" />
                        <input
                          type="email"
                          required
                          placeholder="Your email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-3 bg-transparent text-white placeholder-slate-400 text-sm sm:text-[15px] focus:outline-none"
                        />
                      </div>

                      {/* Phone Input with Icon */}
                      <div className="relative flex items-center bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 py-3.5 focus-within:border-[#00D9FF] focus-within:bg-white/[0.07] focus-within:ring-2 focus-within:ring-[#00D9FF]/25 focus-within:shadow-[0_0_16px_rgba(0,217,255,0.18)] transition-all duration-300">
                        <Phone size={18} className="text-[#00D9FF]/80 shrink-0" />
                        <input
                          type="tel"
                          required
                          placeholder="Your phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-3 bg-transparent text-white placeholder-slate-400 text-sm sm:text-[15px] focus:outline-none"
                        />
                      </div>

                      {/* Message Textarea with Icon */}
                      <div className="relative flex items-start bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 py-3.5 focus-within:border-[#00D9FF] focus-within:bg-white/[0.07] focus-within:ring-2 focus-within:ring-[#00D9FF]/25 focus-within:shadow-[0_0_16px_rgba(0,217,255,0.18)] transition-all duration-300">
                        <MessageSquare size={18} className="text-[#00D9FF]/80 shrink-0 mt-0.5" />
                        <textarea
                          rows={3}
                          placeholder="Your message or project requirements..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full pl-3 bg-transparent text-white placeholder-slate-400 text-sm sm:text-[15px] focus:outline-none resize-none"
                        />
                      </div>

                      {/* Gradient Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 px-8 rounded-xl bg-[linear-gradient(90deg,#00D9FF_0%,#0478FD_50%,#BB20E9_100%)] text-white font-bold text-sm sm:text-[15px] shadow-[0_8px_25px_rgba(0,217,255,0.35)] hover:shadow-[0_12px_36px_rgba(4,120,253,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Send Message</span>
                          <ArrowRight size={17} />
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
