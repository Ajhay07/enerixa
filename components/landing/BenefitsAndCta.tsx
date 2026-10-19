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
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="text-sm font-medium uppercase tracking-wide text-[#5FAF35] mb-3">
                Benefits You Get
              </div>
              <h3 className="font-heading text-[34px] sm:text-[42px] leading-[1.1] text-ink">
                Invest in Clean Energy, Reap Decades of Savings
              </h3>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-7 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-[#5FAF35] mt-0.5">
                      <CheckCircle2 size={15} />
                    </div>
                    <span className="text-base font-medium text-slate-700 leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-7 text-sm text-slate-500 leading-relaxed">
                *Subject to Central Government PM Surya Ghar guidelines, state
                DISCOM approvals and load sanctions.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.15} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/benefits-solar.jpg"
                alt="Solar panel carport shading parked cars at a residential property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-x">
        <Reveal className="rounded-2xl bg-[#003B73] px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.1] text-white">
                Let&apos;s Build a Smarter,{" "}
                <span className="text-[#5FAF35]">Greener</span> Tomorrow
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/75 max-w-xl">
                Get in touch with our certified engineering team for an
                on-site feasibility survey, ROI solar yield simulation, and
                complete turnkey execution estimate.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-5">
              <Button variant="white" href="/contact">
                Get a Free Consultation
              </Button>
              <a
                href="tel:+919710294225"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>Call +91 97102 94225</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
