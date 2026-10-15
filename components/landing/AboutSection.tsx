import Image from "next/image";
import { Reveal, Counter } from "@/components/Reveal";
import Button from "@/components/Button";
import { Sun, Zap, Leaf, ShieldCheck } from "lucide-react";

export function TrustFeatureStrip() {
  const items = [
    { title: "Generate Clean Energy", icon: Sun },
    { title: "Reduce Electricity Bills", icon: Zap },
    { title: "Go Green, Live Better", icon: Leaf },
    { title: "24/7 Secure Premises", icon: ShieldCheck },
  ];

  return (
    <section className="bg-[#003B73] py-7">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#5FAF35]">
                <item.icon size={19} />
              </div>
              <span className="text-sm font-medium text-white">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Image */}
          <div className="lg:col-span-6">
            <Reveal className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about-solar-field.jpg"
                alt="Commercial building rooftop fitted with a large solar panel array"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>

          {/* Text */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="text-sm font-medium uppercase tracking-wide text-[#5FAF35] mb-3">
                About Enerixa
              </div>
              <h2 className="font-heading text-[32px] sm:text-[38px] font-bold leading-[1.2] text-ink">
                Smart Energy. Smart Automation. Smart Security.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                Enerixa delivers integrated rooftop solar systems, intelligent
                home automation, and round-the-clock enterprise security. We
                transform residences, commercial hubs, and industrial
                facilities into energy-independent, highly secure, and
                future-proof properties.
              </p>
            </Reveal>

            <Reveal delay={0.14} className="mt-8 grid grid-cols-3 gap-6 rounded-xl bg-[#F6F8FA] p-6">
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#003B73]">
                  <Counter to={25} suffix="+" />
                </div>
                <div className="mt-1 text-sm font-medium text-slate-600">Years Lifespan</div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#5FAF35]">
                  <Counter to={500} suffix="+" />
                </div>
                <div className="mt-1 text-sm font-medium text-slate-600">Projects Done</div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#003B73]">
                  <Counter to={100} suffix="%" />
                </div>
                <div className="mt-1 text-sm font-medium text-slate-600">Satisfaction</div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-8">
              <Button variant="primary" href="/about">
                Learn More About Us
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
