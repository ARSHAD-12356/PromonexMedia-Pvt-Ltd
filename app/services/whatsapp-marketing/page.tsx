"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import ServiceContactSection from "@/components/ServiceContactSection";
import {
  WhatsAppAutomationSection,
  WhatsAppCampaignManagementSection,
  WhatsAppCustomerJourneySection,
  WhatsAppEcommerceSection,
  WhatsAppFaqSection,
  WhatsAppFinalCtaSection,
  WhatsAppLeadNurturingSection,
  WhatsAppMarketingHeroSection,
  WhatsAppOptInSection,
} from "@/components/WhatsAppMarketingSections";

export default function WhatsAppMarketingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <WhatsAppMarketingHeroSection />
        <WhatsAppCustomerJourneySection />
        <WhatsAppOptInSection />
        <WhatsAppAutomationSection />
        <WhatsAppCampaignManagementSection />
        <WhatsAppEcommerceSection />
        <WhatsAppLeadNurturingSection />
        <WhatsAppFaqSection />
        <WhatsAppFinalCtaSection />
        <div id="whatsapp-marketing-contact" className="scroll-mt-20">
          <ServiceContactSection
            topic="WhatsApp Marketing"
            role="Specialists"
            teamLabel="WhatsApp marketing specialists"
            description="Turn WhatsApp into a stronger channel for customer conversations, lead nurturing and retention. Tell us about your audience and goals, and our team will help plan campaigns and automated journeys that fit your business."
            defaultService="WhatsApp Marketing"
          />
        </div>
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
