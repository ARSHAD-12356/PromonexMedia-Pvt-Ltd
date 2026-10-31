import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Graphic Design & Branding Services in Patna",
  description:
    "Visual identity design, logos, marketing collaterals, social media creatives, and ad banners that distinguish your brand.",
  path: "/services/graphic-design",
});

export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

