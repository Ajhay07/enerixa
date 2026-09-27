import Image from "next/image";
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
  ArrowRight,
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
      desc: "From initial shadow analysis and CEIG approvals to net-metering commissioning and lifetime preventative maintenance.",
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
    <section id="why-us" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#041B35] text-white">
      {/* Cinematic full-width background photo with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/why-bg.jpg"
          alt="Modern luxury property at dusk with clean solar power"
          fill
          className="object-cover opacity-35 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041B35]/95 via-[#041B35]/85 to-[#003B73]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/60 pointer-events-none" />
      </div>

      <div className="container-x relative z-10">
        <SectionHeading
          center
          light
          eyebrow="WHY CHOOSE ENERIXA"
          title="A Cleaner, Safer & Smarter Future"
          subtitle="Combining tier-1 high-yield solar technology, synchronized smart home automation, and 24x7 intelligent security systems."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {reasons.map((r, idx) => (
            <Reveal
              key={r.title}
              delay={idx * 0.08}
              className="group rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md p-6 sm:p-7 hover:bg-white/[0.14] hover:border-[#5FAF35] transition-all duration-500 hover:-translate-y-1.5 shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#5FAF35] to-[#4CAF50] text-white mb-4 shadow-md shadow-[#5FAF35]/30 group-hover:scale-105 transition-transform duration-300">
                <r.icon size={24} className="stroke-[2.5]" />
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-[#5FAF35] transition-colors">
                {r.title}
              </h4>
              <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {r.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



export function ProcessSection() {
  const steps = [
    { num: "01", title: "Site Survey & Assessment", desc: "Detailed structural analysis, roof shadow 3D modeling & energy load audit.", icon: Search },
    { num: "02", title: "System Engineering Proposal", desc: "Custom plant sizing, financial ROI calculation & government subsidy assistance.", icon: FileText },
    { num: "03", title: "Precision Installation", desc: "Fast, certified installation by electrical engineers adhering to MNRE benchmarks.", icon: Wrench },
    { num: "04", title: "Testing & Grid Net-Metering", desc: "Discom liaison, bidirectional net-meter integration & safety certification.", icon: Activity },
    { num: "05", title: "Lifetime Telemetry & Support", desc: "Cloud generation telemetry, 24x7 customer support & scheduled maintenance visits.", icon: Headphones },
  ];

  return (
    <section id="process" className="py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="OUR PROCESS"
          title="From Consultation to Continuous Support"
          subtitle="A structured, transparent, and engineering-driven roadmap to deploy high-efficiency energy and security infrastructure."
        />

        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 relative">
          {steps.map((st, idx) => (
            <Reveal
              key={st.title}
              delay={idx * 0.08}
              className="flex flex-col items-center text-center relative group p-5 rounded-2xl hover:bg-[#F4F7FA] transition-all duration-300"
            >
              {/* Step Number Tag */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5FAF35] text-white text-xs font-black shadow-sm mb-3 ring-3 ring-[#5FAF35]/20">
                {st.num}
              </div>

              {/* Icon Circle */}
              <div className="flex h-18 w-18 p-4 items-center justify-center rounded-2xl bg-slate-100 border border-slate-200 text-[#003B73] group-hover:border-[#5FAF35] group-hover:bg-[#E8F5E9] group-hover:text-[#5FAF35] group-hover:scale-105 transition-all duration-300 shadow-sm">
                <st.icon size={28} className="stroke-[2.2]" />
              </div>

              <h4 className="mt-4 text-base sm:text-lg font-black text-slate-900 leading-snug tracking-tight">
                {st.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {st.desc}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-16 -right-3 text-slate-300 transform group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} className="stroke-[2]" />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


