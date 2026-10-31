import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "UI/UX Design Agency in Patna",
  description:
    "User-centric interface and experience design for web and mobile apps that enhance user engagement and streamline conversion flows.",
  path: "/services/ui-ux-design",
});

export default function UiUxDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

