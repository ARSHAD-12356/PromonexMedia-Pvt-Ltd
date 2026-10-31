import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Shopify Store Development & Design Services",
  description:
    "High-converting Shopify eCommerce storefronts, custom theme designs, payment setup, and conversion rate optimization.",
  path: "/services/shopify-development",
});

export default function ShopifyDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

