import Image from "next/image";
import { Reveal, Counter } from "@/components/Reveal";
import Button from "@/components/Button";

export function TrustFeatureStrip() {
  const items = [
    "Generate clean energy",
    "Reduce electricity bills",
    "Go green, live better",
    "24/7 secure premises",
  ];

  return (
    <section className="bg-[#003B73] py-5">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
          {items.map((item) => (
            <span
              key={item}
              className="text-xs sm:text-sm font-medium tracking-wide text-white/85"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image — left, larger */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal className="relative aspect-[4/3] lg:aspect-[5/4] lg:h-[500px]">
              <Image
                src="/about-solar-field.jpg"
                alt="Commercial building rooftop fitted with a large solar panel array"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </Reveal>
          </div>

          {/* Text — right, narrower */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#5FAF35]" />
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  About Enerixa
                </span>
              </div>
              <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[38px] font-semibold tracking-[-0.015em] leading-[1.15] text-ink">
                Smart energy, smart automation, smart security.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Enerixa delivers integrated rooftop solar systems, intelligent
                home automation, and round-the-clock enterprise security. We
                transform residences, commercial hubs, and industrial
                facilities into energy-independent, highly secure, and
                future-proof properties.
              </p>
            </Reveal>

            <Reveal
              delay={0.14}
              className="mt-9 flex items-stretch gap-6 sm:gap-8 border-t border-slate-200 pt-7"
            >
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-semibold text-[#003B73] tracking-tight">
                  <Counter to={25} suffix="+" />
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                  Years lifespan
                </div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-semibold text-[#5FAF35] tracking-tight">
                  <Counter to={500} suffix="+" />
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                  Projects done
                </div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-semibold text-[#003B73] tracking-tight">
                  <Counter to={100} suffix="%" />
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                  Satisfaction
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-9">
              <Button variant="outline" href="/about">
                Learn More About Us
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
