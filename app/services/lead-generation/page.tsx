"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import ClientLogosSection from "@/components/ClientLogosSection";
import LeadGenerationHeroSection from "@/components/LeadGenerationHeroSection";
import LeadGenerationStrategySection from "@/components/LeadGenerationStrategySection";
import LeadGenerationJourneySection from "@/components/LeadGenerationJourneySection";
import LeadGenerationChannelsSection from "@/components/LeadGenerationChannelsSection";
import ServiceContactSection from "@/components/ServiceContactSection";

export default function LeadGenerationPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
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

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        {/* 1. Lead generation hero */}
        <LeadGenerationHeroSection />
        <ClientLogosSection showHeading={false} />
        <LeadGenerationStrategySection />
        <LeadGenerationJourneySection />
        <LeadGenerationChannelsSection />

        {/* Contact Us Section (right before footer, tailored for lead generation) */}
        <div id="lead-generation-contact" className="scroll-mt-24">
          <ServiceContactSection
            topic="Lead Generation"
            role="Specialists"
            teamLabel="lead generation and conversion specialists"
            description="Ready to scale your business with a predictable flow of qualified, high-intent leads? Our team of lead generation experts is here to help! Fill out the form, and let's craft a tailored acquisition funnel for your business."
            defaultService="Lead Generation"
          />
        </div>
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Floating Elements */}
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}

