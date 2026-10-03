"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import OutstandingResultsSection from "@/components/OutstandingResultsSection";
import FoundersSection from "@/components/FoundersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import LocationContactSection from "@/components/LocationContactSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import { X, CheckCircle, ArrowRight, Phone } from "lucide-react";
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
        <main className="flex-1 flex flex-col">
          <Hero />
          <StatsSection />
          <AboutSection />
          <ServicesSection />
          <IndustriesSection />
          <CaseStudiesSection />
          <OutstandingResultsSection />
          <FoundersSection />
          <TestimonialsSection />
          <section
            id="contact"
            aria-labelledby="consultation-heading"
            className="relative isolate w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 45%, rgba(0, 191, 255, 0.12), transparent 55%), linear-gradient(180deg, rgba(2, 11, 53, 0) 0%, rgba(6, 20, 74, 0.58) 50%, rgba(2, 11, 53, 0) 100%)",
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative mx-auto max-w-7xl rounded-[24px] border border-[#00D9FF]/25 bg-[linear-gradient(115deg,#06144A_0%,#0A205C_52%,#06144A_100%)] px-5 py-10 text-center shadow-[0_22px_60px_rgba(0,0,0,0.24)] sm:px-10 sm:py-14 lg:px-16"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D9FF]">
                Promonex Media
              </span>
              <h2
                id="consultation-heading"
                className="mx-auto mt-3 max-w-4xl font-poppins text-[30px] font-bold leading-tight text-white sm:text-[40px] lg:text-[48px]"
              >
                Ready to <span className="text-[#00D9FF]">grow your brand?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Book a free consultation with our Patna team and get a clear, practical plan for your next stage of growth.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <motion.button
                  type="button"
                  onClick={() => openModal("audit")}
                  whileHover={{ y: -2, scale: 1.025 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[linear-gradient(100deg,#00D9FF,#00BFFF)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] px-7 font-semibold text-[#020B35] hover:text-white shadow-[0_10px_30px_rgba(0,191,255,0.22)] hover:shadow-[0_14px_36px_rgba(4,120,253,0.35)] transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
                </motion.button>
                <motion.a
                  href="tel:+917061941818"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 px-6 font-medium text-white transition-colors hover:border-[#00D9FF]/60 hover:bg-white/[0.06]"
                >
                  <Phone size={18} className="text-[#00D9FF]" aria-hidden="true" />
                  +91 70619 41818
                </motion.a>
              </div>
            </motion.div>
          </section>
          <LocationContactSection />
          <FAQSection />
        </main>

        <FooterSection />

        {/* Floating UI Elements */}
        <SocialMediaRail />
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
                      className="w-full mt-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#00D9FF] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] text-[#020B35] hover:text-white shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] transition-all duration-300 flex items-center justify-center gap-2"
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
