import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing Blog & Insights",
  description:
    "Actionable growth insights, SEO tactics, performance marketing case studies, and digital marketing news from the Promonex Media team.",
  path: "/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

