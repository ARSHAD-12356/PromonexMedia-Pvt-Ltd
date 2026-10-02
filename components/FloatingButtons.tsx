"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <>
      {/* BOTTOM LEFT: Fixed WhatsApp Action Button */}
      <motion.aside
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "backOut" }}
        className="fixed bottom-6 left-6 z-40"
        aria-label="Contact Promonex Media on WhatsApp"
      >
        <a
          href="https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] drop-shadow-[0_0_18px_rgba(37,211,102,0.55)] hover:drop-shadow-[0_0_28px_rgba(37,211,102,0.85)]"
          aria-label="Chat on WhatsApp +91 70619 41818"
          title="Chat on WhatsApp (+91 70619 41818)"
        >
          {/* Subtle pulse ring matching the circular icon */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none -z-10" />

          <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/assets/whatsapp-icon.png"
              alt="WhatsApp"
              fill
              sizes="(max-width: 640px) 48px, 56px"
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>
      </motion.aside>

      {/* BOTTOM RIGHT: Animated AI Bot with Waving Hand & Synchronized 'Can I help you?' Toggle */}
      <motion.aside
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5, ease: "backOut" }}
        className="fixed bottom-6 right-6 z-40"
        aria-label="Promonex AI Assistant"
      >
        <div className="relative">
          {/* Synchronized Message Bubble: Pops in when hand is UP, hides when hand is DOWN */}
          <motion.div
            animate={{
              opacity: [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
              scale: [0.6, 0.6, 1, 1.02, 0.98, 1.02, 0.98, 1.02, 1, 0.6, 0.6],
              y: [8, 8, 0, -2, 0, -2, 0, -2, 0, 8, 8],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.08, 0.18, 0.28, 0.38, 0.48, 0.58, 0.68, 0.76, 0.86, 1],
            }}
            className="absolute bottom-full right-0 mb-3 pointer-events-none select-none"
            style={{ transformOrigin: "bottom right" }}
          >
            <div className="relative bg-[#020B35]/95 backdrop-blur-md border border-[#00D9FF]/75 text-white px-3.5 py-1.5 rounded-2xl shadow-[0_0_22px_rgba(0,217,255,0.5)] flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-slate-100 tracking-wide drop-shadow-sm">
                Can I help you?
              </span>
              {/* Tail pointing down toward the bot's waving hand */}
              <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#020B35] border-r border-b border-[#00D9FF]/75 transform rotate-45" />
            </div>
          </motion.div>

          {/* AI Bot Circular Floating Button */}
          <button
            type="button"
            onClick={scrollToContact}
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#061442] to-[#020B35] border-2 border-[#00D9FF] text-white shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:shadow-[0_0_35px_rgba(0,217,255,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00D9FF]"
            aria-label="Promonex AI Assistant - Can I help you?"
            title="Chat with Promonex AI"
          >
            {/* Ambient Cyan Aura */}
            <span className="absolute -inset-1 rounded-full bg-[#00D9FF] opacity-30 blur-sm group-hover:opacity-60 transition-opacity pointer-events-none" />

            {/* Vector Animated AI Robot */}
            <svg
              viewBox="0 0 64 64"
              className="w-8 h-8 sm:w-10 sm:h-10 relative z-10 overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="aiBotHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0F2463" />
                  <stop offset="100%" stopColor="#040D2F" />
                </linearGradient>
                <linearGradient id="aiBotBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#122A70" />
                  <stop offset="100%" stopColor="#030B24" />
                </linearGradient>
                <filter id="cyanGlowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Antenna */}
              <line x1="32" y1="16" x2="32" y2="9" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" />
              <motion.circle
                cx="32"
                cy="7"
                r="3"
                fill="#00D9FF"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                filter="url(#cyanGlowEffect)"
              />

              {/* Headphone Ears */}
              <rect x="15" y="21" width="3.5" height="11" rx="1.75" fill="#00D9FF" />
              <rect x="45.5" y="21" width="3.5" height="11" rx="1.75" fill="#00D9FF" />

              {/* Bot Body / Torso */}
              <path
                d="M 23 39 C 23 39 21 53 32 53 C 43 53 41 39 41 39 Z"
                fill="url(#aiBotBodyGrad)"
                stroke="#00D9FF"
                strokeWidth="1.6"
              />
              {/* Chest Glowing Core */}
              <circle cx="32" cy="46" r="2.6" fill="#00D9FF" filter="url(#cyanGlowEffect)" />

              {/* Left Arm (Resting on side) */}
              <path
                d="M 22 41 C 18 43 17 48 19 52"
                stroke="#00D9FF"
                strokeWidth="2.8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Bot Head */}
              <rect
                x="18"
                y="16"
                width="28"
                height="23"
                rx="9"
                fill="url(#aiBotHeadGrad)"
                stroke="#00D9FF"
                strokeWidth="1.6"
              />

              {/* Visor Screen */}
              <rect x="21" y="20" width="22" height="15" rx="6" fill="#020924" />

              {/* Glowing Cyan LED Eyes (with subtle blink) */}
              <motion.g
                animate={{
                  scaleY: [1, 1, 0.1, 1, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  times: [0, 0.45, 0.5, 0.55, 1],
                }}
                style={{ transformOrigin: "32px 27px" }}
              >
                <circle cx="26.5" cy="27" r="2.8" fill="#00D9FF" filter="url(#cyanGlowEffect)" />
                <circle cx="37.5" cy="27" r="2.8" fill="#00D9FF" filter="url(#cyanGlowEffect)" />
                {/* Eye Highlights */}
                <circle cx="27.5" cy="26" r="0.9" fill="#FFFFFF" />
                <circle cx="38.5" cy="26" r="0.9" fill="#FFFFFF" />
              </motion.g>

              {/* Cute LED Smile */}
              <path
                d="M 29 32 Q 32 35 35 32"
                stroke="#00D9FF"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Right Arm & Waving Hand: Animated Hand-shake / Wave */}
              <motion.g
                style={{ transformOrigin: "42px 41px" }}
                animate={{
                  rotate: [70, 70, 0, -22, 14, -22, 14, -22, 0, 70, 70],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.08, 0.18, 0.28, 0.38, 0.48, 0.58, 0.68, 0.76, 0.86, 1],
                }}
              >
                {/* Arm reaching up */}
                <path
                  d="M 42 41 C 45 37 47 33 49 28"
                  stroke="#00D9FF"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Hand palm */}
                <circle cx="50" cy="26" r="3.2" fill="#00D9FF" filter="url(#cyanGlowEffect)" />
                {/* Waving fingers */}
                <path
                  d="M 49 24 L 50 21 M 51.5 24 L 54.5 22 M 52.5 26 L 55.5 25"
                  stroke="#00D9FF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </motion.g>
            </svg>
          </button>
        </div>
      </motion.aside>
    </>
  );
}
