"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  Phone,
  User,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesConsultationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  return (
    <section className="relative w-full bg-white text-[#020B35] pt-14 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 font-['Poppins',sans-serif] overflow-hidden">


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Headset Icon, Headline, Copy, Urgent Phone    */}
          {/* (Kept 100% untouched as requested)                        */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
            {/* 1. Support Headset Icon with Cyan Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-12 h-12 rounded-full bg-[#00D9FF]/12 border border-[#00D9FF]/35 flex items-center justify-center text-[#00A8E8] shadow-[0_0_20px_rgba(0,217,255,0.25)] mb-6 select-none"
            >
              <Headphones size={22} className="stroke-[2.2]" />
            </motion.div>

            {/* 2. Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] xl:text-[62px] font-extrabold text-[#020B35] leading-[1.12] tracking-tight"
            >
              Let’s Talk with<br />
              <span className="text-[#00A8E8] drop-shadow-[0_2px_14px_rgba(0,168,232,0.3)]">
                Experienced
              </span><br />
              Digital Marketing<br />
              Consultant
            </motion.h2>

            {/* 3. Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-slate-600 text-sm sm:text-base md:text-[16.5px] leading-relaxed max-w-lg mt-5 mb-8 font-normal"
            >
              Ready to take your online presence to the next level? Our team of experts is here to help!
              Fill out the form, and let’s start the journey towards achieving your digital goals.
            </motion.p>

            {/* 4. Urgent? Contact Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col space-y-2.5"
            >
              <span className="text-base sm:text-lg font-bold text-[#00A8E8] tracking-tight">
                Urgent?
              </span>

              <div className="flex items-center gap-3.5">
                {/* Glowing Circular Phone Button */}
                <a
                  href="tel:+917061941818"
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00A8E8] via-[#0478FD] to-[#8B5CF6] text-white flex items-center justify-center shadow-[0_4px_18px_rgba(0,168,232,0.4)] hover:scale-108 hover:shadow-[0_6px_24px_rgba(0,168,232,0.6)] transition-all duration-300 shrink-0"
                  aria-label="Call +91 70619 41818"
                >
                  <Phone size={20} className="fill-white" />
                </a>

                {/* Call Us Text & Contact Number */}
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Call us
                  </span>
                  <a
                    href="tel:+917061941818"
                    className="text-lg sm:text-xl font-extrabold text-[#020B35] hover:text-[#00A8E8] transition-colors tracking-tight leading-tight"
                  >
                    +91 70619 41818
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Premium Dark Glassmorphic Contact Form Card */}
          {/* (Exact match with reference image)                         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* 1. Large Soft Cyan/Blue Outer Glow behind Card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[580px] bg-gradient-to-tr from-[#00D9FF]/28 via-[#0478FD]/20 to-[#8B5CF6]/15 rounded-full blur-[110px] -z-10"
            />

            {/* 2. Concentric Arc / Ring Shapes extending from Lower-Left behind Card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-28 w-[380px] h-[380px] rounded-full border-[2px] border-[#00D9FF]/20 -z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-44 w-[500px] h-[500px] rounded-full border-[1.5px] border-[#00D9FF]/12 -z-10"
            />

            {/* 3. Small Floating Glossy Sphere on the Right side */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 sm:-right-5 top-[60%] w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#00D9FF] via-[#0478FD] to-[#8B5CF6] shadow-[0_0_24px_rgba(0,217,255,0.85)] z-20"
            />

            {/* 4. Three Angled Cyan Decorative Strokes at Upper-Right */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-4 -right-3 z-20 flex items-center gap-1.5 rotate-[-20deg]"
            >
              <span className="w-[3px] h-3.5 bg-[#00D9FF] rounded-full opacity-90 shadow-[0_0_8px_#00D9FF]" />
              <span className="w-[3px] h-5.5 bg-[#00D9FF] rounded-full opacity-100 shadow-[0_0_12px_#00D9FF]" />
              <span className="w-[3px] h-3.5 bg-[#00D9FF] rounded-full opacity-90 shadow-[0_0_8px_#00D9FF]" />
            </div>

            {/* 5. Curved Dashed Arrow pointing from Upper-Left to Card */}
            <div
              aria-hidden="true"
              className="hidden sm:block pointer-events-none absolute -top-7 -left-12 z-20 text-[#00D9FF]"
            >
              <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
                <path
                  d="M 6 42 Q 22 4, 56 18"
                  stroke="#00D9FF"
                  strokeWidth="2.2"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  fill="none"
                />
                <polyline
                  points="47,12 56,18 49,26"
                  stroke="#00D9FF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* ── THE DARK NAVY GLASSMORPHIC CARD ── */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[610px] rounded-[30px] p-7 sm:p-9 lg:p-10 border border-[#00D9FF]/65 shadow-[0_0_50px_rgba(0,190,255,0.4),0_25px_65px_rgba(2,11,53,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden"
              style={{
                background: "linear-gradient(180deg, rgba(6, 32, 82, 0.94) 0%, rgba(3, 18, 55, 0.96) 100%)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter: "blur(22px)",
              }}
            >
              {/* Internal subtle glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-52 h-52 bg-[#00D9FF]/15 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 w-52 h-52 bg-[#8B5CF6]/15 rounded-full blur-3xl" />

              {/* Card Header: Circular Message Icon + Heading */}
              <div className="flex items-center gap-4 mb-7 sm:mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00D9FF]/25 to-[#0478FD]/35 border border-[#00D9FF]/60 flex items-center justify-center text-[#00D9FF] shadow-[0_0_20px_rgba(0,217,255,0.4)] shrink-0">
                  <MessageSquare size={24} className="stroke-[2.2]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-tight">
                    Fill the form
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#A0C4E8] font-normal mt-0.5">
                    Our team will get back to you shortly.
                  </p>
                </div>
              </div>

              {/* Contact Form Fields */}
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                {/* 1. Your Name */}
                <div className="relative flex items-center">
                  <span className="absolute left-4 sm:left-5 text-[#00D9FF] pointer-events-none z-10">
                    <User size={20} className="stroke-[2.2]" />
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full h-[60px] rounded-[16px] pl-12 sm:pl-14 pr-5 text-[15px] sm:text-base text-white placeholder:text-[#90B5E0] focus:outline-none transition-all duration-200 border"
                    style={{
                      background: "rgba(15, 50, 105, 0.5)",
                      borderColor: "rgba(0, 190, 255, 0.45)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#00D9FF";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.35)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 190, 255, 0.45)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* 2. Your Email */}
                <div className="relative flex items-center">
                  <span className="absolute left-4 sm:left-5 text-[#00D9FF] pointer-events-none z-10">
                    <Mail size={20} className="stroke-[2.2]" />
                  </span>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email"
                    className="w-full h-[60px] rounded-[16px] pl-12 sm:pl-14 pr-5 text-[15px] sm:text-base text-white placeholder:text-[#90B5E0] focus:outline-none transition-all duration-200 border"
                    style={{
                      background: "rgba(15, 50, 105, 0.5)",
                      borderColor: "rgba(0, 190, 255, 0.45)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#00D9FF";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.35)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 190, 255, 0.45)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* 3. Your Phone */}
                <div className="relative flex items-center">
                  <span className="absolute left-4 sm:left-5 text-[#00D9FF] pointer-events-none z-10">
                    <Phone size={20} className="stroke-[2.2]" />
                  </span>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone"
                    className="w-full h-[60px] rounded-[16px] pl-12 sm:pl-14 pr-5 text-[15px] sm:text-base text-white placeholder:text-[#90B5E0] focus:outline-none transition-all duration-200 border"
                    style={{
                      background: "rgba(15, 50, 105, 0.5)",
                      borderColor: "rgba(0, 190, 255, 0.45)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#00D9FF";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.35)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 190, 255, 0.45)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* 4. Your Message */}
                <div className="relative flex items-start">
                  <span className="absolute left-4 sm:left-5 top-4 text-[#00D9FF] pointer-events-none z-10">
                    <MessageSquare size={20} className="stroke-[2.2]" />
                  </span>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message"
                    className="w-full h-[140px] rounded-[16px] pl-12 sm:pl-14 pr-5 pt-4 text-[15px] sm:text-base text-white placeholder:text-[#90B5E0] focus:outline-none transition-all duration-200 resize-none border"
                    style={{
                      background: "rgba(15, 50, 105, 0.5)",
                      borderColor: "rgba(0, 190, 255, 0.45)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#00D9FF";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.35)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 190, 255, 0.45)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-[62px] group relative inline-flex items-center justify-center gap-3 rounded-full text-white font-bold text-[17px] shadow-[0_0_30px_rgba(8,215,245,0.45),0_8px_24px_rgba(22,138,245,0.35)] hover:shadow-[0_0_42px_rgba(8,215,245,0.7)] hover:scale-[1.015] active:scale-98 transition-all duration-300 cursor-pointer overflow-hidden select-none"
                    style={{
                      background: "linear-gradient(90deg, #08D7F5 0%, #168AF5 50%, #8B4DFF 100%)",
                    }}
                  >
                    <span className="relative z-10">Send Message</span>
                    <ArrowRight
                      size={20}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>

                {/* Submission Success Alert */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#00D9FF] bg-[#00D9FF]/15 border border-[#00D9FF]/40 rounded-xl py-2 px-3 mt-2"
                  >
                    <CheckCircle2 size={16} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                {/* Privacy Text */}
                <div className="pt-2 text-center">
                  <span className="text-xs sm:text-[13px] text-[#A0C4E8] inline-flex items-center gap-1.5">
                    <span>🔒</span> We respect your privacy. Your information is safe with us.
                  </span>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
