import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "SEO Agency in Patna | Search Engine Optimization Services",
  description:
    "Dominate Google search results with Promonex Media's data-driven SEO services: technical audits, on-page optimization, local maps ranking, and authority building.",
  path: "/services/seo",
});

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

