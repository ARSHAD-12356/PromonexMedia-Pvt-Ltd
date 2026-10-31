import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "WordPress Development Services in Patna",
  description:
    "Custom WordPress websites, WooCommerce stores, speed optimization, and secure theme development by expert developers.",
  path: "/services/wordpress-development",
});

export default function WordpressDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

