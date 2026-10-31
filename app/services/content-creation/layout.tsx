import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Content Creation & Video Production Agency in Patna",
  description:
    "Professional photography, video shoots, short-form reels, and copywriting that connect with audiences and elevate brand authority.",
  path: "/services/content-creation",
});

export default function ContentCreationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

