import { Reveal, ImageReveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { IMG } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <Solar />
      <Automation />
      <Security />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-navy/10 bg-navy-deep py-20 text-white">
      <div className="container-x text-center">
        <Reveal>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Complete Energy & Security Solutions
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Rooftop solar, smart home automation and security systems — designed
            and delivered as one integrated offering.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

type CardProps = {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
  image: string;
  alt: string;
  reverse?: boolean;
};

function Card({ id, title, subtitle, items, image, alt, reverse }: CardProps) {
  return (
    <section id={id} className="py-16">
      <div
        className={`container-x grid gap-12 lg:grid-cols-5 lg:gap-16 ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        <div className={`lg:col-span-2 ${reverse ? "lg:col-start-3" : ""}`}>
          <Reveal>
            <ImageReveal src={image} alt={alt} className="h-72 w-full rounded-xl" />
          </Reveal>
        </div>
        <div className="lg:col-span-3">
          <Reveal>
            <>
              <span className="eyebrow">{subtitle}</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy">
                {title}
              </h2>
            </>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {items.map((i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="mt-0.5 size-5 text-green-brand" />
                  <span className="text-sm text-steel">{i}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Solar() {
  return (
    <Card
      id="solar"
      title="Solar Solutions"
      subtitle="Clean Energy"
      items={[
        "Residential Solar",
        "Commercial Solar",
        "Industrial Solar",
        "Net Metering Support",
        "High Efficiency Systems",
        "25+ Years Performance",
      ]}
      image={IMG.solar}
      alt="Solar panels on rooftop"
    />
  );
}

function Automation() {
  return (
    <Card
      id="automation"
      title="Smart Home Automation"
      subtitle="Connected Living"
      items={[
        "Smart Lighting",
        "Smart AC and Fan Control",
        "Smart Plugs",
        "Curtain Automation",
        "Mobile App Control",
        "Voice Assistant Integration",
      ]}
      image={IMG.automation}
      alt="Modern smart home interior"
      reverse
    />
  );
}

function Security() {
  return (
    <Card
      id="security"
      title="Security & CCTV Solutions"
      subtitle="Secured Spaces"
      items={[
        "CCTV Surveillance",
        "HD/IP Cameras",
        "Remote Monitoring",
        "24x7 Recording",
        "Advanced Analytics",
        "AMC Support",
      ]}
      image={IMG.security}
      alt="CCTV camera system"
    />
  );
}

function Cta() {
  return (
    <section className="border-t border-navy/10 bg-mist py-16 text-center">
      <div className="container-x">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            Ready to get started?
          </h2>
          <p className="mt-3 max-w-xl text-steel">
            Book your free, no-obligation consultation and receive a detailed,
            itemized proposal tailored to your energy and automation needs.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <Button variant="primary" href="/contact">
            Contact Our Experts
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

