import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/home/Services";
import Segments from "@/components/home/Segments";
import GetInTouch from "@/components/home/GetInTouch";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        num="01"
        label="Services"
        title="Energy & security, done together."
        subtitle="Rooftop solar EPC, smart home automation and security systems, designed and delivered as one integrated offering."
        image="/studiova/assets/images/services/services-img-2.jpg"
        cta={[{ href: "/epc", text: "Explore Solar EPC" }]}
      />
      <Services />
      <Segments num="04" />
      <GetInTouch num="05" />
    </>
  );
}
