import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Social Media Marketing Agency in Patna | Promonex Media",
  description:
    "Build a consistent social presence with social media strategy, platform-first content, creative planning and community management from Promonex Media.",
  path: "/services/social-media",
});

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
