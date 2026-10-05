"use client";

import React from "react";
import Header from "@/components/Header";
import ContactHeroSection from "@/components/ContactHeroSection";
import ContactMainSection from "@/components/ContactMainSection";
import ContactFaqSection from "@/components/ContactFaqSection";
import ContactSocialSection from "@/components/ContactSocialSection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#020B35] text-white overflow-hidden flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35] font-['Poppins',sans-serif]">
      {/* Background Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 75% 20%, rgba(0, 191, 255, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 20% 15%, rgba(91, 60, 196, 0.14) 0%, transparent 35%)
          `,
        }}
      />

      {/* Header - Existing Promonex Header */}
      <Header />

      {/* Main Content: Hero + Contact Form & Details Section + FAQ Section + Social Section */}
      <main className="relative z-10 flex-1 flex flex-col">
        <ContactHeroSection />
        <ContactMainSection />
        <ContactFaqSection />
        <ContactSocialSection />
      </main>

      {/* Footer Section */}
      <FooterSection />

      {/* Floating Elements */}
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
