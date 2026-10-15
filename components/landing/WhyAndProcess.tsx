import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export function WhyChooseSection() {
  const reasons = [
    {
      title: "Tier 1 Quality Hardware",
      desc: "Top-tier monocrystalline PV panels, microinverters, and industrial-grade automation controllers built to last decades.",
    },
    {
      title: "Certified Engineering Teams",
      desc: "Every installation is planned and executed by certified electrical engineers following strict national safety codes.",
    },
    {
      title: "Complete Turnkey Solutions",
      desc: "From initial shadow analysis and CEIG approvals to net-metering commissioning and lifetime preventative maintenance.",
    },
    {
      title: "Remote Telemetry & Analytics",
      desc: "Real-time smartphone generation tracking, instant fault detection, and energy savings optimization reports.",
    },
    {
      title: "25-Year Linear Warranty",
      desc: "Uncompromising manufacturer warranties with guaranteed 80%+ output at Year 25 and rapid inverter replacement.",
    },
    {
      title: "Dedicated After-Sales AMC",
      desc: "Priority 24-hour on-site service support, panel deep cleaning, and automated quarterly health inspections.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 lg:py-32 bg-[#041B35] text-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#5FAF35]" />
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                  Why Choose Enerixa
                </span>
              </div>
              <h2 className="font-heading text-[28px] sm:text-[34px] font-semibold tracking-[-0.015em] leading-[1.15]">
                A cleaner, safer, and smarter future.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 max-w-sm">
                Combining tier-1 solar technology, synchronized home
                automation, and 24&times;7 intelligent security systems.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10 border-t border-white/10">
              {reasons.map((r, idx) => (
                <Reveal
                  key={r.title}
                  delay={idx * 0.05}
                  className="flex items-start gap-6 py-6"
                >
                  <span className="font-heading text-sm text-white/40 pt-1 w-6 shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-white">
                      {r.title}
                    </h4>
                    <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-white/65">
                      {r.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
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
      desc: "Detailed structural analysis, roof shadow 3D modeling & energy load audit.",
    },
    {
      num: "02",
      title: "System Engineering Proposal",
      desc: "Custom plant sizing, financial ROI calculation & government subsidy assistance.",
    },
    {
      num: "03",
      title: "Precision Installation",
      desc: "Fast, certified installation by electrical engineers adhering to MNRE benchmarks.",
    },
    {
      num: "04",
      title: "Testing & Grid Net-Metering",
      desc: "Discom liaison, bidirectional net-meter integration & safety certification.",
    },
    {
      num: "05",
      title: "Lifetime Telemetry & Support",
      desc: "Cloud generation telemetry, 24x7 customer support & scheduled maintenance visits.",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Process"
          title="From consultation to continuous support."
          subtitle="A structured, transparent, and engineering-driven roadmap to deploy high-efficiency energy and security infrastructure."
        />

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 border-t border-slate-200 pt-10">
          {steps.map((st, idx) => (
            <Reveal key={st.title} delay={idx * 0.06}>
              <span className="font-heading text-2xl font-semibold text-slate-300">
                {st.num}
              </span>
              <h4 className="mt-3 font-heading text-base font-semibold text-ink leading-snug">
                {st.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{st.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
