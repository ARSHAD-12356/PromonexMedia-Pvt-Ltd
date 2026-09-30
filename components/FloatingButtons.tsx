"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* BOTTOM LEFT: Floating Circular Icon */}
      <motion.aside
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
        className="fixed bottom-6 left-6 z-40"
        aria-label="Promonex AI Assistant"
      >
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00D9FF] hover:bg-[#00BFFF] text-[#020B35] shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:shadow-[0_0_35px_rgba(0,217,255,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Promonex Quick Action"
        >
          {/* Subtle spinning glow ring */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#5B3CC4] opacity-40 blur-sm group-hover:opacity-75 transition-opacity" />
          <span className="relative flex items-center justify-center w-full h-full rounded-full bg-[#00D9FF] text-[#020B35]">
            <Sparkles size={22} className="stroke-[2.5]" />
          </span>
        </button>
      </motion.aside>

      {/* BOTTOM RIGHT: Floating Chat / Message Button */}
      <motion.aside
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5, ease: "backOut" }}
        className="fixed bottom-6 right-6 z-40"
        aria-label="Direct Chat Support"
      >
        <a
          href="#contact"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00D9FF] hover:bg-[#00BFFF] text-[#020B35] shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:shadow-[0_0_35px_rgba(0,217,255,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Chat with Promonex Team"
        >
          {/* Subtle pulse effect */}
          <span className="absolute -inset-1 rounded-full bg-[#00D9FF] opacity-30 animate-ping pointer-events-none" />
          <span className="relative flex items-center justify-center w-full h-full rounded-full bg-[#00D9FF] text-[#020B35]">
            <MessageSquare size={22} className="stroke-[2.5]" />
          </span>
        </a>
      </motion.aside>
    </>
  );
}
