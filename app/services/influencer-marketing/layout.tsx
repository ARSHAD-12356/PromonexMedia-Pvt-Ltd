import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Influencer Marketing Agency in Patna | Promonex Media",
  description:
    "Connect your brand with relevant creators through influencer discovery, campaign planning and creator content support from Promonex Media in Patna and across India.",
  path: "/services/influencer-marketing",
});

export default function InfluencerMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
