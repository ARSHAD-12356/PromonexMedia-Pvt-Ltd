import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "SEM & Google Ads Company in Patna | PPC Experts",
  description:
    "Scale qualified clicks into high-converting sales with Google Ads, Shopping, Display, and YouTube advertising managed by certified SEM specialists.",
  path: "/services/sem-expert",
});

export default function SemExpertLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

