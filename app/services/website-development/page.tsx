"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import WebsiteDevelopmentHeroSection from "@/components/WebsiteDevelopmentHeroSection";
import WebsiteDevelopmentFeaturesSection from "@/components/WebsiteDevelopmentFeaturesSection";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import WebsiteDevelopmentContactSection from "@/components/WebsiteDevelopmentContactSection";

export default function WebsiteDevelopmentPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <WebsiteDevelopmentHeroSection />
        <WebsiteDevelopmentFeaturesSection />
        <ServiceReviewsSection />
        <WebsiteDevelopmentContactSection />
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}