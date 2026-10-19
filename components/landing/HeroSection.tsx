import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Button from "@/components/Button";
import { Sun, Home, ShieldCheck, Zap, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Soft ambient green/blue wash behind the hero */}
      <div className="absolute inset-0 bg-[#F4F7FA]" />
      <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-[#5FAF35]/15 blur-[110px] pointer-events-none" />
      <div className="absolute top-10 right-0 h-[420px] w-[420px] rounded-full bg-[#0D9488]/10 blur-[110px] pointer-events-none" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: headline column */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 shadow-sm mb-7">
                <span className="h-2 w-2 rounded-full bg-[#5FAF35]" />
                <span className="text-sm font-semibold uppercase tracking-wide text-[#003B73]">
                  Clean Energy &middot; Smart Living
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-heading text-[48px] sm:text-[68px] lg:text-[84px] leading-[0.95] text-[#041B35]">
                Powering a
                <br />
                <span className="bg-gradient-to-r from-[#5FAF35] via-[#2E9E6B] to-[#0D9488] bg-clip-text text-transparent">
                  Sustainable
                </span>
                <br />
                Future
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-7 text-lg leading-relaxed text-slate-600 max-w-xl">
                Complete rooftop solar installations, intelligent home
                automation, and enterprise-grade security — engineered for
                modern homes, businesses, and industries across India.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center gap-4">
              <Button variant="secondary" href="/contact">
                Get a Free Consultation
              </Button>
              <Button variant="outline" href="#solutions">
                Explore Solutions
              </Button>
            </Reveal>

            <Reveal delay={0.26} className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35]">
                    <Sun size={18} />
                  </div>
                  <span className="text-sm font-medium text-ink/80">Rooftop Solar</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35]">
                    <Home size={18} />
                  </div>
                  <span className="text-sm font-medium text-ink/80">Home Automation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35]">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-sm font-medium text-ink/80">Security Systems</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35]">
                    <Zap size={18} />
                  </div>
                  <span className="text-sm font-medium text-ink/80">Lower Bills</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: photograph with floating performance badge */}
          <div className="lg:col-span-6">
            <Reveal delay={0.12} className="relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/hero-solar-home.jpg"
                  alt="Residential home in India with a rooftop solar panel installation"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating performance badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex flex-col items-center text-center">
                <div className="flex items-center gap-0.5 text-amber-400 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <div className="font-heading text-[28px] leading-none text-[#5FAF35]">25+</div>
                <div className="mt-1.5 text-[11px] font-bold uppercase tracking-wide text-[#003B73]">
                  Years
                </div>
                <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                  Performance
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
