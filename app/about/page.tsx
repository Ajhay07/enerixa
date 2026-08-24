import Image from "next/image";
import { Reveal, ImageReveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IMG, COMPANY } from "@/lib/data";
import { Award, ShieldCheck, HandHelping, Building } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <MissionVision />
      <WhyChoose />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex items-center text-white min-h-[55vh]">
      <Image src={IMG.about} alt="Enerixa engineering team" fill className="object-cover" />
      <div className="absolute inset-0 bg-navy-deep/65" />
      <div className="container-x relative z-10 py-12">
        <Reveal>
          <span className="inline-block rounded-full bg-green-brand/15 px-4 py-1.5 text-xs font-medium text-green-light">
            About Enerixa
          </span>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Energizing Tomorrow, Responsibly.
          </h1>
        </Reveal>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <ImageReveal src={IMG.about} alt="Engineering site" className="h-full w-full rounded-lg" />
            </Reveal>
          </div>
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="Who We Are"
              title="Intelligent Energy, Automated Living, Secured Spaces."
            />
            <Reveal delay={0.15} className="mt-2">
              <p className="text-lg text-steel">
                Enerixa provides intelligent solar, automation, and security
                solutions helping homes, businesses, and industries reduce costs
                and adopt sustainable technology.
              </p>
              <p className="mt-5 text-lg text-steel">
                Headquartered in Chennai with a pan-India project footprint, we
                design, install, and maintain end-to-end systems — from
                rooftop solar plants and net-metering-compliant designs to fully
                integrated smart-home experiences and enterprise-grade CCTV
                networks. We partner with certified product manufacturers to
                ensure every kilowatt-hour and every automation command meets
                rigorous performance and reliability standards.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8 flex gap-4">
              <a
                href={COMPANY.phoneHref}
                className="text-sm font-semibold text-navy hover:text-green-brand"
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-sm font-semibold text-navy hover:text-green-brand"
              >
                {COMPANY.email}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const MISSION = "To accelerate sustainable energy adoption across India through engineered solar, automation, and security solutions that are reliable, intelligent and built to last.";
const VISION = "To be India's most trusted partner for clean energy, connected living, and secure environments — powering the future responsibly.";

function MissionVision() {
  return (
    <section className="border-y border-navy/10 bg-navy-deep py-14 text-white">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-navy/20 bg-navy p-8">
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="mt-3 text-slate-300">{MISSION}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-xl border border-navy/20 bg-navy p-8">
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="mt-3 text-slate-300">{VISION}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    title: "Premium Quality Products",
    desc: "Tier-1 modules, inverters and controllers sourced from global manufacturers.",
    icon: <Award className="size-6 text-green-brand" />,
  },
  {
    title: "Expert Installation",
    desc: "Engineers certified across solar, automation and physical security domains.",
    icon: <ShieldCheck className="size-6 text-green-brand" />,
  },
  {
    title: "End-to-End Solutions",
    desc: "Design, procurement, installation, commissioning and after-sales in one partner.",
    icon: <Building className="size-6 text-green-brand" />,
  },
  {
    title: "Reliable After Sales",
    desc: "AMC plans and 24×7 remote monitoring to maximize uptime.",
    icon: <HandHelping className="size-6 text-green-brand" />,
  },
];

function WhyChoose() {
  return (
    <section className="py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Enerixa"
          title="Built On Engineering Excellence"
          subtitle="The same standards we apply to every kilowatt and every connection."
        />
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <Reveal key={v.title} className="rounded-xl border border-navy/10 bg-white p-6 text-center">
              <div className="mb-4 flex justify-center">{v.icon}</div>
              <h4 className="text-base font-bold text-navy">{v.title}</h4>
              <p className="mt-2 text-sm text-steel">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

