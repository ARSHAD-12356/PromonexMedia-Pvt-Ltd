import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing Services in Patna",
  description:
    "Explore full-service digital marketing solutions by Promonex Media: Performance Marketing, SEO, SEM, Lead Generation, Social Media, and Web Development.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

