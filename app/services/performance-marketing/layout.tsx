import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Performance Marketing Agency in Patna | High ROI Campaigns",
  description:
    "Turn ad spend into measurable revenue with multi-channel performance marketing across Meta Ads, Google Ads, and full-funnel conversion tracking.",
  path: "/services/performance-marketing",
});

export default function PerformanceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

