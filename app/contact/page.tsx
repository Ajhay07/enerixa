import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import GetInTouch from "@/components/home/GetInTouch";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageBanner
        num="01"
        label="Contact"
        title="Let's talk about your project."
        subtitle="Reach out for a free consultation, a detailed proposal and reliable post-installation support."
        image="/studiova/assets/images/services/services-img-3.jpg"
      />
      <GetInTouch num="02" />
    </>
  );
}
