import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Archivo_Black } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Enerixa — Powering a Sustainable Future | Solar, Automation & Security",
    template: "%s | Enerixa Energy Solutions",
  },
  description:
    "Enerixa delivers complete rooftop solar, home automation, and advanced security solutions for homes, businesses, and industries across India.",
  keywords: [
    "solar",
    "rooftop solar",
    "home automation",
    "smart home",
    "CCTV",
    "security systems",
    "net metering",
    "clean energy",
    "renewable energy",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${archivoBlack.variable}`}>
      <body className="overflow-x-hidden antialiased bg-white text-ink font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}



