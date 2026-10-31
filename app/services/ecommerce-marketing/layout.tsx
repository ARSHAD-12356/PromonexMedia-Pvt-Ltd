import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "eCommerce Marketing Services | Grow Online Store Sales",
  description:
    "Grow your online store with connected Google Shopping and Meta campaigns, eCommerce SEO, conversion optimisation and customer retention strategies.",
  path: "/services/ecommerce-marketing",
});

export default function EcommerceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
