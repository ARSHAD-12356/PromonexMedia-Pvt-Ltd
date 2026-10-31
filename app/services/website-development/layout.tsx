import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Website Development Company in Patna",
  description:
    "Custom, responsive, lightning-fast business websites designed to build brand authority, rank on Google, and convert visitors into clients.",
  path: "/services/website-development",
});

export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

