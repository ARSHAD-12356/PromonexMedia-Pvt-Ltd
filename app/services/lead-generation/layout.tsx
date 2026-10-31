import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "B2B & B2C Lead Generation Agency in Patna",
  description:
    "Generate qualified, high-intent inquiries and sales calls through multi-channel paid acquisition, dedicated landing pages, and automated funnels.",
  path: "/services/lead-generation",
});

export default function LeadGenerationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

