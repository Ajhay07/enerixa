import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import { EpcStages } from "@/components/epc/EpcSections";
import Models from "@/components/home/Models";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import Segments from "@/components/home/Segments";
import Faq from "@/components/home/Faq";
import News from "@/components/home/News";
import GetInTouch from "@/components/home/GetInTouch";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      {/* EPC is the core of the business — foregrounded right after the intro */}
      <EpcStages num="02" />
      <Models num="03" marquee />
      <Segments num="04" />
      <Portfolio num="05" />
      <Services num="06" />
      <WhyChoose num="07" />
      <Testimonials num="08" />
      <Faq num="09" />
      <News num="10" />
      <GetInTouch num="11" />
    </>
  );
}
