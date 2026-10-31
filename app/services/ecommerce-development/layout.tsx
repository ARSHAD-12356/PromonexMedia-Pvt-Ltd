import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "eCommerce Website Development Services",
  description:
    "Scalable online stores with seamless checkout, inventory management, secure payments, and mobile-first shopping UX.",
  path: "/services/ecommerce-development",
});

export default function EcommerceDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

