import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Us | Leading Digital Marketing Agency in Patna",
  description:
    "Learn about Promonex Media, our leadership, our story, and how we help businesses in Patna and across India accelerate their online growth.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

