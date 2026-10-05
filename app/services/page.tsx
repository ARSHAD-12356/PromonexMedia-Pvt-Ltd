"use client";

import React from "react";
import Header from "@/components/Header";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#020B35] text-white overflow-hidden flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35] font-['Poppins',sans-serif]">
      {/* Background Gradients */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 75% 20%, rgba(0, 191, 255, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 20% 15%, rgba(91, 60, 196, 0.14) 0%, transparent 35%)
          `,
        }}
      />

      {/* Subtle fine mesh grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content: Only Services Hero Section */}
      <main className="relative z-10 pt-0 flex-1 flex flex-col justify-center">
        <ServicesHeroSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Floating Elements */}
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
