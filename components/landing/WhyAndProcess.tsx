import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  Sparkles,
  Wrench,
  Sliders,
  Activity,
  ShieldCheck,
  Headphones,
  Search,
  FileText,
  HardHat,
  Settings2,
} from "lucide-react";

export function WhyChooseSection() {
  const reasons = [
    {
      title: "Tier 1 Quality Hardware",
      desc: "Top-tier monocrystalline PV panels, microinverters, and industrial-grade automation controllers built to last decades.",
      icon: Sparkles,
    },
    {
      title: "Certified Engineering Teams",
      desc: "Every installation is planned and executed by certified electrical engineers following strict national safety codes.",
      icon: Wrench,
    },
    {
      title: "Complete Turnkey Solutions",
      desc: "From initial shadow analysis and approvals to net-metering commissioning and lifetime preventative maintenance.",
      icon: Sliders,
    },
    {
      title: "Remote Telemetry & Analytics",
      desc: "Real-time smartphone generation tracking, instant fault detection, and energy savings optimization reports.",
      icon: Activity,
    },
    {
      title: "25-Year Linear Warranty",
      desc: "Uncompromising manufacturer warranties with guaranteed 80%+ output at Year 25 and rapid inverter replacement.",
      icon: ShieldCheck,
    },
    {
      title: "Dedicated After-Sales AMC",
      desc: "Priority 24-hour on-site service support, panel deep cleaning, and automated quarterly health inspections.",
      icon: Headphones,
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 lg:py-28 bg-[#003B73]">
      <div className="container-x">
        <SectionHeading
          center
          light
          eyebrow="Why Choose Enerixa"
          title="A Cleaner, Safer & Smarter Future"
          subtitle="Combining tier-1 high-yield solar technology, synchronized smart home automation, and 24x7 intelligent security systems."
        />

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => (
            <Reveal
              key={r.title}
              delay={idx * 0.06}
              className="rounded-xl bg-white/[0.06] border border-white/10 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#5FAF35]/20 text-[#5FAF35] mb-4">
                <r.icon size={22} />
              </div>
              <h4 className="font-heading text-lg font-semibold text-white">{r.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Site Survey & Assessment",
      desc: "Detailed structural analysis, roof shadow modeling & energy load audit.",
      icon: Search,
    },
    {
      num: "02",
      title: "System Design & Proposal",
      desc: "Custom plant sizing, ROI calculation & government subsidy assistance.",
      icon: FileText,
    },
    {
      num: "03",
      title: "Installation by Experts",
      desc: "Fast, certified installation by electrical engineers adhering to industry benchmarks.",
      icon: HardHat,
    },
    {
      num: "04",
      title: "Testing & Commissioning",
      desc: "Discom liaison, net-meter integration, and complete safety certification.",
      icon: Settings2,
    },
    {
      num: "05",
      title: "Ongoing Support & Maintenance",
      desc: "Cloud generation telemetry, 24x7 customer support & scheduled maintenance.",
      icon: Headphones,
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Our Process"
          title="From Consultation to Continuous Support"
          subtitle="A structured, transparent, and engineering-driven roadmap to deploy high-efficiency energy and security infrastructure."
        />

        <div className="mt-6 relative">
          {/* connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-slate-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((st, idx) => (
              <Reveal key={st.title} delay={idx * 0.08} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#003B73] text-white shadow-md mb-5">
                  <st.icon size={24} />
                </div>
                <span className="text-xs font-medium text-[#5FAF35] uppercase tracking-wide">
                  Step {st.num}
                </span>
                <h4 className="mt-2 font-heading text-base font-semibold text-ink leading-snug">
                  {st.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{st.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
