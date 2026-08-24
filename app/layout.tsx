import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Enerixa — Rooftop Solar, Home Automation & Security Solutions",
    template: "%s | Enerixa",
  },
  description:
    "Enerixa delivers complete rooftop solar, smart home automation and security & CCTV solutions for homes, businesses and industries across India.",
  keywords: [
    "solar",
    "rooftop solar",
    "home automation",
    "smart home",
    "CCTV",
    "security systems",
    "net metering",
    "energy solutions",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

