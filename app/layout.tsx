import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Enerixa — Solar EPC, Home Automation & Security | India",
    template: "%s | Enerixa Energy Solutions",
  },
  description:
    "Enerixa is a solar EPC company delivering engineering, procurement and construction of rooftop solar for industries, businesses and homes across India, plus home automation and security.",
  icons: { icon: "/enerixa-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/studiova/assets/libs/owl.carousel/dist/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="/studiova/assets/libs/aos-master/dist/aos.css" />
        <link rel="stylesheet" href="/studiova/assets/css/styles.css" />
      </head>
      <body>
        <Header />
        <div className="page-wrapper overflow-hidden">{children}</div>
        <Footer />

        <div className="get-template">
          <button
            className="btn bg-primary p-2 round-52 rounded-circle hstack justify-content-center flex-shrink-0"
            id="scrollToTopBtn"
            aria-label="Scroll to top"
          >
            <iconify-icon icon="lucide:arrow-up" class="fs-7 text-dark"></iconify-icon>
          </button>
        </div>

        <WhatsAppButton />

        {/* jQuery + Bootstrap bundle + Owl Carousel + AOS, concatenated to guarantee load order */}
        <Script src="/studiova/vendor-bundle.js" strategy="afterInteractive" />
        <Script
          src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"
          strategy="afterInteractive"
        />
        <SiteScripts />
      </body>
    </html>
  );
}
