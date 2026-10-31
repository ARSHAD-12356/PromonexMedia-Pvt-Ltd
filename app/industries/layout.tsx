import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Industry-Specific Digital Marketing Solutions",
  description:
    "Custom digital marketing strategies tailored for healthcare, real estate, education, eCommerce, hospitality, and B2B sectors in Patna and India.",
  path: "/industries",
});

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

