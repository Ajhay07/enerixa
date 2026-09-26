import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${sora.variable}`}>
      <body className="overflow-x-hidden antialiased bg-white text-slate-800 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}



