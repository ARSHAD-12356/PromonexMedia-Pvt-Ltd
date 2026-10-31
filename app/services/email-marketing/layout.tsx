import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Email Marketing & Retention Funnel Services",
  description:
    "Drive repeat sales and nurture leads with automated email flows, newsletter campaigns, segmentation, and high inbox deliverability.",
  path: "/services/email-marketing",
});

export default function EmailMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

