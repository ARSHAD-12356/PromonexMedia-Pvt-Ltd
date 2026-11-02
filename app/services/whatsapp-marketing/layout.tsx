import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "WhatsApp Marketing Services",
  description:
    "Build stronger customer conversations with WhatsApp campaigns, lead nurturing and automated retention journeys tailored to your business.",
  path: "/services/whatsapp-marketing",
});

export default function WhatsAppMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
