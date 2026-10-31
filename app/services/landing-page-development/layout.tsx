import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "High-Converting Landing Page Development",
  description:
    "Targeted, sub-second landing pages built for Google Ads and Meta Ads campaigns that maximize conversion rates and lower cost per acquisition.",
  path: "/services/landing-page-development",
});

export default function LandingPageDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

