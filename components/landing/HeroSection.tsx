import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Button from "@/components/Button";
import { Sun, Home, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#F6F8FA] overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: headline column */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 shadow-sm mb-6">
                <span className="h-2 w-2 rounded-full bg-[#5FAF35]" />
                <span className="text-sm font-semibold text-[#003B73]">
                  Clean Energy &amp; Smart Living
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] font-extrabold leading-[1.1] text-ink">
                Powering a{" "}
                <span className="text-[#5FAF35]">Sustainable</span> Future
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
                Complete rooftop solar installations, intelligent home
                automation, and enterprise-grade security — engineered for
                modern homes, businesses, and industries across India.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/contact">
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
                  <span className="text-sm font-semibold text-ink/80">Rooftop Solar</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35]">
                    <Home size={18} />
                  </div>
                  <span className="text-sm font-semibold text-ink/80">Home Automation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35]">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-sm font-semibold text-ink/80">Security Systems</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: photograph */}
          <div className="lg:col-span-6">
            <Reveal delay={0.12} className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero-solar-home.jpg"
                alt="Residential home in India with a rooftop solar panel installation"
                fill
                priority
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
