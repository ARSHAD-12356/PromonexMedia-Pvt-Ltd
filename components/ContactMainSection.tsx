"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Globe,
  BarChart2,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function ContactMainSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello Promonex Media, I would like to inquire about your services.",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Website: ${formData.website || "N/A"}`,
      `Monthly Budget: ${formData.budget || "N/A"}`,
      `Message: ${formData.message || "N/A"}`,
    ].join("\n");

    window.open(
      `https://wa.me/917061941818?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section
      id="contact-form-section"
      className="relative w-full min-h-screen lg:h-screen flex items-center justify-center bg-[#FFFFFF] text-[#020B35] font-['Poppins',sans-serif] overflow-hidden py-12 lg:py-0"
    >
      {/* ========================================================= */}
      {/* 1. AMBIENT BACKGROUND GLOWS (Clean, No Dotted Patterns)  */}
      {/* ========================================================= */}

      {/* Top-Right Soft Translucent Cyan/Purple Orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-[#00D9FF]/10 via-[#8B5CF6]/08 to-transparent rounded-full blur-[140px] -z-0"
      />

      {/* Bottom-Left Soft Purple/Cyan Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#0478FD]/08 via-[#8B5CF6]/08 to-transparent rounded-full blur-[130px] -z-0"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10 my-auto">
        
        {/* Two-Column Responsive Grid - Centered in Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Premium Dark Navy Contact Form Card          */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative">
            
            {/* Dark Navy Form Card - Full, rich & premium */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-full rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#020B35] via-[#030F40] to-[#020B35] p-5 sm:p-6 lg:p-6 xl:p-7 border border-[#00D9FF]/40 shadow-[0_16px_45px_rgba(2,11,53,0.25),0_0_30px_rgba(0,217,255,0.15)] overflow-hidden"
            >
              {/* Subtle Inner Glow on top border */}
              <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[280px] h-[110px] bg-[#00D9FF]/18 rounded-full blur-[45px]" />

              {/* Decorative 3D Paper Plane on Top-Right of Card */}
              <div className="absolute right-5 sm:right-6 top-5 sm:top-6 w-14 h-14 pointer-events-none select-none">
                {/* Dashed trail curve */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute -left-4 top-1 w-12 h-12 overflow-visible"
                  fill="none"
                >
                  <path
                    d="M 10 70 C 25 35, 60 70, 75 40"
                    stroke="#00D9FF"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    opacity="0.8"
                  />
                  <line x1="15" y1="20" x2="22" y2="24" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  <line x1="30" y1="12" x2="33" y2="20" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                </svg>

                {/* 3D Paper Plane */}
                <motion.div
                  animate={{ y: [-2, 2, -2], rotate: [-2, 2, -2] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-0 top-0 w-9 h-9"
                >
                  <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow-[0_0_10px_#00D9FF]" fill="none">
                    <polygon points="5,25 55,5 30,50" fill="#0478FD" />
                    <polygon points="5,25 55,5 33,33" fill="#38BDF8" />
                    <polygon points="33,33 55,5 22,55" fill="#00D9FF" />
                    <line x1="5" y1="25" x2="55" y2="5" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />
                  </svg>
                </motion.div>
              </div>

              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#00D9FF]/15 border border-[#00D9FF]/35 text-[#00D9FF] text-[10px] font-bold tracking-wider uppercase">
                  SEND US A MESSAGE
                </span>
                <span className="w-4 h-[1.5px] bg-[#00D9FF]/50 rounded-full" />
              </div>

              {/* Heading */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                Tell Us About{" "}
                <span className="text-[#00D9FF] drop-shadow-[0_2px_12px_rgba(0,217,255,0.45)]">
                  Your Project
                </span>
              </h3>

              {/* Subtitle */}
              <p className="text-slate-300 text-xs sm:text-[13px] mt-1 leading-snug max-w-sm">
                Fill out the form and our team will get back to you shortly with the best solutions for your business.
              </p>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="mt-3.5 space-y-2.5">
                
                {/* 1. Name Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#00D9FF] transition-colors">
                    <User size={15} />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Your name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#031140]/80 border border-[#00D9FF]/25 rounded-xl pl-9 pr-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all duration-200 focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.25)] hover:border-[#00D9FF]/50"
                  />
                </div>

                {/* 2. Email Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#00D9FF] transition-colors">
                    <Mail size={15} />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Your email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#031140]/80 border border-[#00D9FF]/25 rounded-xl pl-9 pr-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all duration-200 focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.25)] hover:border-[#00D9FF]/50"
                  />
                </div>

                {/* 3. Phone Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#00D9FF] transition-colors">
                    <Phone size={15} />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Your phone*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#031140]/80 border border-[#00D9FF]/25 rounded-xl pl-9 pr-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all duration-200 focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.25)] hover:border-[#00D9FF]/50"
                  />
                </div>

                {/* 4. Company Website Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#00D9FF] transition-colors">
                    <Globe size={15} />
                  </div>
                  <input
                    type="text"
                    placeholder="Company Website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-[#031140]/80 border border-[#00D9FF]/25 rounded-xl pl-9 pr-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all duration-200 focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.25)] hover:border-[#00D9FF]/50"
                  />
                </div>

                {/* 5. Monthly Budget Dropdown */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#00D9FF] transition-colors">
                    <BarChart2 size={15} />
                  </div>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#031140]/80 border border-[#00D9FF]/25 rounded-xl pl-9 pr-9 py-2 sm:py-2.5 text-xs sm:text-sm text-white outline-none transition-all duration-200 focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.25)] hover:border-[#00D9FF]/50 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#020B35] text-slate-400">
                      Monthly Budget
                    </option>
                    <option value="Under ₹25,000" className="bg-[#020B35] text-white">
                      Under ₹25,000 / month
                    </option>
                    <option value="₹25,000 - ₹50,000" className="bg-[#020B35] text-white">
                      ₹25,000 - ₹50,000 / month
                    </option>
                    <option value="₹50,000 - ₹1,00,000" className="bg-[#020B35] text-white">
                      ₹50,000 - ₹1,00,000 / month
                    </option>
                    <option value="₹1,00,000+" className="bg-[#020B35] text-white">
                      ₹1,00,000+ / month (Enterprise)
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                    <ChevronDown size={14} />
                  </div>
                </div>

                {/* 6. Message Field */}
                <div className="relative group">
                  <div className="absolute top-2.5 left-3.5 pointer-events-none text-slate-400 group-focus-within:text-[#00D9FF] transition-colors">
                    <MessageSquare size={15} />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#031140]/80 border border-[#00D9FF]/25 rounded-xl pl-9 pr-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all duration-200 focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.25)] hover:border-[#00D9FF]/50 resize-none min-h-[58px] sm:min-h-[64px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-[#020B35] bg-gradient-to-r from-[#00D9FF] to-[#0478FD] shadow-[0_0_16px_rgba(0,217,255,0.4)] hover:shadow-[0_0_24px_rgba(0,217,255,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group mt-2"
                >
                  <span>{isSubmitted ? "Message Sent!" : "Send Message"}</span>
                  {isSubmitted ? (
                    <CheckCircle size={16} className="text-[#020B35]" />
                  ) : (
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1.5"
                    />
                  )}
                </button>

              </form>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Contact Information Area (White Background) */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#00D9FF]/12 border border-[#00D9FF]/30 text-[#00A8E8] text-[10px] font-bold tracking-wider uppercase">
                GET IN TOUCH
              </span>
              <span className="w-6 h-[1.5px] bg-[#00A8E8] rounded-full inline-block" />
            </div>

            {/* Main Heading */}
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold text-[#020B35] tracking-tight leading-[1.12]">
                We&apos;re Here to{" "}
                <span className="text-[#00D9FF] inline-flex items-center gap-1">
                  Help You Grow
                  {/* Playful Cyan Accent Rays */}
                  <span className="inline-flex flex-col gap-0.5 ml-1 select-none">
                    <span className="w-2.5 h-[2px] bg-[#00D9FF] rounded-full rotate-45 shadow-[0_0_6px_#00D9FF]" />
                    <span className="w-4 h-[2px] bg-[#00D9FF] rounded-full rotate-[-15deg] shadow-[0_0_8px_#00D9FF]" />
                  </span>
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-snug">
              Have a question, need a consultation, or ready to start your next project? Our team is just a message away.
            </p>

            {/* Contact Cards Container */}
            <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-3.5">
              
              {/* ---------------------------------------------------- */}
              {/* CARD 1: OUR ADDRESS (Updated with Promonex Patna Address) */}
              {/* ---------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="relative bg-white rounded-xl sm:rounded-2xl border border-slate-100/90 shadow-[0_6px_20px_rgba(2,11,53,0.05)] p-3.5 sm:p-4 transition-all duration-300 hover:shadow-[0_10px_26px_rgba(0,217,255,0.12)] hover:border-[#00D9FF]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 overflow-hidden"
              >
                {/* Left side content */}
                <div className="flex items-start gap-3 z-10 max-w-[72%]">
                  <div className="w-10 h-10 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(2,132,199,0.12)]">
                    <MapPin size={18} className="stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#020B35]">
                      Our Address
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Grih sobha, Anirudh Prasad Singh Path,
                      <br />
                      New Area, Kadamkuan, Patna, Bihar 800003
                    </p>
                  </div>
                </div>

                {/* Right side Map Graphic + "Visit Our Office" */}
                <div className="relative shrink-0 flex flex-col items-center sm:items-end justify-center">
                  {/* Handwritten Note with arrow */}
                  <div className="hidden sm:block absolute -top-3.5 -right-0.5 z-20 font-['Caveat',cursive] text-[#020B35] text-xs font-bold rotate-[6deg] select-none text-right">
                    <span>Visit Our Office</span>
                    <svg viewBox="0 0 30 20" className="w-4 h-2.5 text-[#020B35] ml-auto -mt-0.5" fill="none">
                      <path d="M 5 2 Q 18 10 24 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M 18 16 L 24 16 L 23 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Stylized Vector Map Preview Card */}
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-[#BAE6FD] bg-[#F0F9FF] shadow-inner flex items-center justify-center">
                    <svg viewBox="0 0 100 70" className="w-full h-full opacity-60" fill="none">
                      <rect width="100" height="70" fill="#E0F2FE" />
                      <rect x="10" y="5" width="25" height="25" rx="3" fill="#BAE6FD" />
                      <rect x="45" y="5" width="45" height="15" rx="3" fill="#BAE6FD" />
                      <rect x="55" y="30" width="35" height="30" rx="3" fill="#DCFCE7" />
                      <rect x="10" y="40" width="35" height="20" rx="3" fill="#BAE6FD" />
                      <line x1="0" y1="35" x2="100" y2="35" stroke="#FFFFFF" strokeWidth="6" />
                      <line x1="45" y1="0" x2="45" y2="70" stroke="#FFFFFF" strokeWidth="6" />
                    </svg>
                    {/* Glowing Cyan Map Pin */}
                    <div className="absolute w-6 h-6 rounded-full bg-[#00D9FF] text-white flex items-center justify-center shadow-[0_0_10px_#00D9FF]">
                      <MapPin size={13} className="fill-white stroke-none" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ---------------------------------------------------- */}
              {/* CARD 2: CONTACT INFO (Updated with Promonex Phone)  */}
              {/* ---------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="relative bg-white rounded-xl sm:rounded-2xl border border-slate-100/90 shadow-[0_6px_20px_rgba(2,11,53,0.05)] p-3.5 sm:p-4 transition-all duration-300 hover:shadow-[0_10px_26px_rgba(0,217,255,0.12)] hover:border-[#00D9FF]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 overflow-hidden"
              >
                {/* Left side content */}
                <div className="flex items-start gap-3 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(124,58,237,0.12)]">
                    <Phone size={18} className="stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#020B35]">
                      Contact Info
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      Reach out to us via WhatsApp, Call or Message:
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2 text-xs sm:text-sm font-bold text-[#00A8E8]">
                      <a href="tel:+917061941818" className="hover:underline hover:text-[#0478FD] transition-colors">
                        +91 70619 41818
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side 3D Smartphone Illustration */}
                <div className="relative shrink-0 flex items-center justify-center pr-2">
                  <motion.div
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-12 h-14 flex items-center justify-center"
                  >
                    <svg viewBox="0 0 60 70" className="w-full h-full drop-shadow-[0_3px_10px_rgba(4,120,253,0.25)]" fill="none">
                      <rect x="15" y="10" width="30" height="50" rx="6" fill="#0478FD" stroke="#00D9FF" strokeWidth="2" />
                      <rect x="19" y="15" width="22" height="38" rx="3" fill="#FFFFFF" opacity="0.9" />
                      <path d="M 48 18 Q 56 24 56 35 Q 56 46 48 52" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 52 23 Q 58 29 58 35 Q 58 41 52 47" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* ---------------------------------------------------- */}
              {/* CARD 3: REACH US VIA EMAIL                          */}
              {/* ---------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="relative bg-white rounded-xl sm:rounded-2xl border border-slate-100/90 shadow-[0_6px_20px_rgba(2,11,53,0.05)] p-3.5 sm:p-4 transition-all duration-300 hover:shadow-[0_10px_26px_rgba(0,217,255,0.12)] hover:border-[#00D9FF]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 overflow-hidden"
              >
                {/* Left side content */}
                <div className="flex items-start gap-3 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(2,132,199,0.12)]">
                    <Mail size={18} className="stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#020B35]">
                      Reach us via Email
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      We eagerly await your thoughts. They truly matter to us.
                    </p>
                    <a
                      href="mailto:info@promonexmedia.com"
                      className="mt-1 inline-block text-xs sm:text-sm font-bold text-[#00A8E8] hover:text-[#0478FD] hover:underline transition-colors"
                    >
                      info@promonexmedia.com
                    </a>
                  </div>
                </div>

                {/* Right side 3D Envelope + Flying Letter Graphic */}
                <div className="relative shrink-0 flex items-center justify-center pr-2">
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-14 h-14 flex items-center justify-center"
                  >
                    <svg viewBox="0 0 70 70" className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,217,255,0.3)]" fill="none">
                      <rect x="20" y="16" width="30" height="24" rx="2" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
                      <line x1="25" y1="22" x2="42" y2="22" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="25" y1="27" x2="38" y2="27" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M 12 28 L 35 44 L 58 28 L 58 56 C 58 58, 56 60, 54 60 L 16 60 C 14 60, 12 58, 12 56 Z" fill="#0478FD" />
                      <path d="M 12 28 L 35 44 L 58 28" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
                      <polygon points="50,14 65,8 55,24" fill="#00D9FF" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
