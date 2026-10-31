"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import EcommerceMarketingHeroSection from "@/components/EcommerceMarketingHeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import EcommerceMarketingStatsStrip from "@/components/EcommerceMarketingStatsStrip";
import EcommerceGrowthSystemSection from "@/components/EcommerceGrowthSystemSection";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";

export default function EcommerceMarketingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <EcommerceMarketingHeroSection />
        <ClientLogosSection showHeading={false} />
        <EcommerceMarketingStatsStrip />
        <EcommerceGrowthSystemSection />
        <ServiceReviewsSection />
        <div id="contact-ecommerce-marketing" className="scroll-mt-24">
          <ServiceContactSection
            topic="eCommerce Marketing"
            teamLabel="eCommerce growth specialists"
            description="Tell us about your products, target customers and sales goals. We’ll help you find practical opportunities across customer acquisition, conversion and repeat purchases."
            defaultService="Ecommerce marketing"
          />
        </div>
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
