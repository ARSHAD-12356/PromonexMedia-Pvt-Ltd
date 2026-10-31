import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us | Schedule Your Free Growth Strategy Session",
  description:
    "Get in touch with Promonex Media in Patna. Call, email, or visit our office to discuss your digital marketing, SEO, paid ads, or web development needs.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

