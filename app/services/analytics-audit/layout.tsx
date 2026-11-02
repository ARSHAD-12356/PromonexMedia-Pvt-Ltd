import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Analytics Audit Services | GA4 & Tracking Review",
  description:
    "Get a clear review of your GA4, Google Tag Manager, event tracking, conversions and attribution so you can make decisions with reliable data.",
  path: "/services/analytics-audit",
});

export default function AnalyticsAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
