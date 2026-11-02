"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import AnalyticsAuditHeroSection from "@/components/AnalyticsAuditHeroSection";
import AnalyticsAuditIncludesSection from "@/components/AnalyticsAuditIncludesSection";
import AnalyticsAuditInsightsSection from "@/components/AnalyticsAuditInsightsSection";
import AnalyticsAuditProcessSection from "@/components/AnalyticsAuditProcessSection";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";

export default function AnalyticsAuditPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <AnalyticsAuditHeroSection />
        <AnalyticsAuditIncludesSection />
        <AnalyticsAuditInsightsSection />
        <AnalyticsAuditProcessSection />
        <div id="analytics-audit-reviews" className="scroll-mt-20">
          <ServiceReviewsSection />
        </div>
        <div id="analytics-audit-contact" className="scroll-mt-20">
          <ServiceContactSection
            topic="Analytics Audit"
            role="Specialist"
            teamLabel="analytics and measurement specialists"
            description="Not sure whether your marketing reports reflect what is really happening? We’ll review your GA4 setup, events, conversions and attribution, then help you understand what to fix and what to measure next."
            defaultService="Analytics Audit"
          />
        </div>
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
