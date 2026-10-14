"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import ContentCreationHeroSection from "@/components/ContentCreationHeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import ContentCreationServicesSection from "@/components/ContentCreationServicesSection";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";

export default function ContentCreationPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <ContentCreationHeroSection />
        <ClientLogosSection showHeading={false} />
        <ContentCreationServicesSection />
        <ServiceReviewsSection />
        <ServiceContactSection
          topic="Content Creation"
          teamLabel="content creators and designers"
          defaultService="Creative design"
        />
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
