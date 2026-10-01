import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Promonex Media Pvt. Ltd. | Digital Marketing Agency",
  description:
    "Promonex Media is a full-service digital marketing agency in Patna, helping businesses grow their online presence, generate quality leads, and turn digital marketing into a consistent growth channel.",
  keywords: [
    "Promonex Media",
    "Digital Marketing Agency",
    "Patna",
    "Lead Generation",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Website Development",
  ],
  authors: [{ name: "Promonex Media Pvt. Ltd." }],
  openGraph: {
    title: "Promonex Media Pvt. Ltd. | Digital Marketing Agency",
    description:
      "Full-service digital marketing agency in Patna, helping businesses grow their online presence and turn digital marketing into a consistent growth channel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#020B35] text-white selection:bg-[#00D9FF] selection:text-[#020B35] antialiased">
        {children}
      </body>
    </html>
  );
}
