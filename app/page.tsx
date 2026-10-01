"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FoundersSection from "@/components/FoundersSection";
import IndustriesSection from "@/components/IndustriesSection";
import FloatingButtons from "@/components/FloatingButtons";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"audit" | "services" | "chat">("audit");
  const [submitted, setSubmitted] = useState(false);

  const openModal = (type: "audit" | "services" | "chat") => {
    setModalType(type);
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds if needed
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-[#020B35] text-white overflow-hidden flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35]">
      {/* Background Gradients precisely as specified */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 75% 38%, rgba(0, 191, 255, 0.13) 0%, transparent 40%),
            radial-gradient(circle at 18% 22%, rgba(91, 60, 196, 0.14) 0%, transparent 35%),
            radial-gradient(circle at 50% 80%, rgba(6, 20, 74, 0.4) 0%, transparent 60%)
          `,
        }}
      />

      {/* Subtle fine mesh grid texture for high-tech digital agency feel */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Hero & Stats */}
        <main className="flex-1 flex flex-col justify-center">
          <Hero />
          <StatsSection />
          <AboutSection />
          <ServicesSection />
          <IndustriesSection />
          <CaseStudiesSection />
          <FoundersSection />
        </main>

        {/* Footer info (subtle, non-distracting) */}
        <footer className="relative z-10 border-t border-white/[0.05] py-6 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              © {new Date().getFullYear()} Promonex Media Pvt. Ltd. All rights reserved.
            </div>
            <div className="text-slate-400">
              Patna, Bihar • Digital Marketing Agency
            </div>
          </div>
        </footer>

        {/* Floating UI Elements */}
        <FloatingButtons />
      </div>

      {/* Interactive Modal for Contact / Growth Audit */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-2xl bg-[#06144A] border border-white/10 p-6 sm:p-8 shadow-2xl text-left"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <>
                  <div className="text-xs uppercase tracking-widest text-[#00D9FF] font-semibold">
                    Promonex Media Pvt. Ltd.
                  </div>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {modalType === "audit"
                      ? "Get Your Free Growth Audit"
                      : modalType === "services"
                      ? "Explore Our Marketing Solutions"
                      : "Let's Connect"}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Tell us about your business goals and our marketing team in Patna will craft a tailored strategy.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Work Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Website / Domain
                      </label>
                      <input
                        type="text"
                        placeholder="https://yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#00D9FF] hover:bg-[#00BFFF] text-[#020B35] shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Submit Request</span>
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center mb-4">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Request Received!</h4>
                  <p className="mt-2 text-sm text-slate-300 max-w-sm">
                    Thank you for reaching out to Promonex Media. Our growth specialists will analyze your requirements and get in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
