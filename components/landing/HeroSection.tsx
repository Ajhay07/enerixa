import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 lg:pt-32 bg-paper">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 lg:pb-24">
          {/* Left: editorial headline column */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#5FAF35]" />
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Solar &middot; Automation &middot; Security
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-heading text-[38px] sm:text-[50px] lg:text-[56px] font-semibold tracking-[-0.02em] leading-[1.05] text-ink">
                Powering a sustainable future
                <br />
                for Indian homes and industry.
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 max-w-md">
                Rooftop solar, intelligent automation, and enterprise-grade
                security — designed, installed, and supported by one
                engineering team.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button variant="primary" href="/contact">
                Get a Free Consultation
              </Button>
              <a
                href="#solutions"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-[#5FAF35] transition-colors"
              >
                Explore Solutions
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>

            <Reveal delay={0.26} className="mt-10 pt-6 border-t border-slate-200 max-w-md">
              <p className="text-sm text-slate-500 leading-relaxed">
                <span className="font-semibold text-ink">25+ years</span> of
                warranty-backed performance on every installation we deploy.
              </p>
            </Reveal>
          </div>

          {/* Right: large architectural photograph */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12} className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] lg:h-[540px]">
              <Image
                src="/hero-solar-home.jpg"
                alt="Residential home in India with a rooftop solar panel installation"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
