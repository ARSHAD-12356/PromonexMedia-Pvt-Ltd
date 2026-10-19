"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import WordpressHeroSection from "@/components/WordpressHeroSection";
import WordpressWhyChooseSection from "@/components/WordpressWhyChooseSection";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WordpressDevelopmentPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <WordpressHeroSection />
        <WordpressWhyChooseSection />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <ServiceReviewsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <ServiceContactSection
            topic="WordPress Development"
            teamLabel="WordPress developers and designers"
            defaultService="Website development"
          />
        </motion.div>
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
