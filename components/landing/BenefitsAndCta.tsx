import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Button from "@/components/Button";
import { CheckCircle2, Phone } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    "Save up to 80-90% on Monthly Electricity Bills",
    "Virtually Zero Maintenance with High Performance Inverters",
    "Environment Friendly, 100% Sustainable Green Footprint",
    "Substantially Increase Property Valuation & Resale Equity",
    "Full Government Subsidy & Discom Net-Metering Approval",
    "Rapid 3-4 Year Payback Period with 25+ Years of Free Power",
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-paper">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#5FAF35]" />
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Benefits
                </span>
              </div>
              <h3 className="font-heading text-[28px] sm:text-[32px] font-semibold tracking-[-0.015em] leading-[1.15] text-ink">
                Invest in clean energy, reap decades of savings.
              </h3>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 py-4">
                    <CheckCircle2 size={17} className="shrink-0 text-[#5FAF35] mt-0.5" />
                    <span className="text-sm sm:text-base text-ink/80 leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-xs text-slate-500 leading-relaxed">
                *Subject to Central Government PM Surya Ghar guidelines, state
                DISCOM approvals and load sanctions.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15} className="relative aspect-[4/3] lg:aspect-[16/11] lg:h-[460px]">
              <Image
                src="/benefits-solar.jpg"
                alt="Solar panel carport shading parked cars at a residential property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </Reveal>
            <p className="mt-4 text-sm text-slate-500 max-w-md">
              Tier-1 monocrystalline bifacial PERC modules, engineered for
              maximum yield under tropical heat, low-light dawn/dusk, and
              overcast monsoon conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#003B73]">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[42px] font-semibold tracking-[-0.015em] leading-[1.1] text-white">
                Let&apos;s build a smarter, greener, and more secure tomorrow.
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/75 max-w-xl">
                Get in touch with our certified engineering team for an
                on-site feasibility survey, ROI solar yield simulation, and
                complete turnkey execution estimate.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-5">
            <Reveal delay={0.08}>
              <Button variant="white" href="/contact">
                Get a Free Consultation
              </Button>
            </Reveal>
            <Reveal delay={0.12}>
              <a
                href="tel:+919710294225"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-white/85 hover:text-white transition-colors"
              >
                <Phone size={15} />
                <span>Call +91 97102 94225</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
