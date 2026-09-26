import Image from "next/image";
import { Reveal, Counter } from "@/components/Reveal";
import Button from "@/components/Button";
import { Sun, Zap, Leaf, ShieldCheck } from "lucide-react";

export function TrustFeatureStrip() {
  const items = [
    { title: "Generate Clean Energy", desc: "Tier 1 high-efficiency solar cells", icon: Sun },
    { title: "Reduce Electricity Bills", desc: "Save up to 80-90% monthly costs", icon: Zap },
    { title: "Go Green Live Better", desc: "Smart automated connected spaces", icon: Leaf },
    { title: "Safe & Secure Premises", desc: "24/7 HD remote CCTV surveillance", icon: ShieldCheck },
  ];

  return (
    <section className="bg-gradient-to-r from-[#003B73] via-[#063970] to-[#041B35] py-12 text-white relative shadow-2xl">
      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <div className="flex items-center gap-5 group">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-[#5FAF35] group-hover:scale-110 group-hover:bg-[#5FAF35] group-hover:text-white transition-all duration-300 shadow-md">
                  <item.icon size={28} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-sm text-slate-300 mt-1">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


export function AboutSection() {
  return (
    <section id="about" className="py-28 sm:py-36 lg:py-40 bg-white overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Left Column: Story & Big Stats */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-2 w-2 rounded-full bg-[#5FAF35]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#5FAF35]">
                  ABOUT ENERIXA
                </span>
                <span className="h-2 w-2 rounded-full bg-[#5FAF35]" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-[1.12]">
                Smart Energy. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B73] to-[#5FAF35]">
                  Smart Living.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                Enerixa delivers integrated rooftop solar systems, intelligent home automation,
                and round-the-clock enterprise security solutions. We transform residences,
                commercial hubs, and industrial facilities into energy-independent, highly secure,
                and future-proof properties.
              </p>
            </Reveal>

            {/* Large Visual Statistics */}
            <Reveal delay={0.25} className="mt-12 grid grid-cols-3 gap-6 sm:gap-8 border-y-2 border-slate-100 py-8">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#003B73] tracking-tight">
                  <Counter to={25} suffix="+" />
                </div>
                <div className="mt-2 text-sm sm:text-base font-bold text-slate-800">
                  Years Lifespan
                </div>
                <div className="text-xs text-slate-500 font-medium">Warranty backed</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#5FAF35] tracking-tight">
                  <Counter to={500} suffix="+" />
                </div>
                <div className="mt-2 text-sm sm:text-base font-bold text-slate-800">
                  Projects Done
                </div>
                <div className="text-xs text-slate-500 font-medium">Pan-India footprints</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#003B73] tracking-tight">
                  <Counter to={100} suffix="%" />
                </div>
                <div className="mt-2 text-sm sm:text-base font-bold text-slate-800">
                  Satisfaction
                </div>
                <div className="text-xs text-slate-500 font-medium">Guaranteed support</div>
              </div>
            </Reveal>

            <Reveal delay={0.35} className="mt-10 flex items-center gap-5">
              <Button variant="primary" href="/about">
                Learn More About Us
              </Button>
            </Reveal>
          </div>

          {/* Right Column: Massive Image + Strong Floating Feature Card */}
          <div className="lg:col-span-6 relative">
            <Reveal delay={0.2} className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#5FAF35]/20 to-[#003B73]/20 blur-2xl opacity-60" />

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-slate-100 aspect-[4/3] lg:aspect-[16/13]">
                <Image
                  src="/about-solar-field.jpg"
                  alt="Vast rooftop solar panels field at sunset"
                  fill
                  className="object-cover scale-[1.02] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Strong Floating Feature Card */}
              <div className="absolute -bottom-8 sm:-bottom-10 left-4 right-4 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white p-6 sm:p-7 flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5FAF35] to-[#4CAF50] text-white shadow-lg shadow-[#5FAF35]/30">
                  <Leaf size={32} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    Powering Sustainable Communities
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Precision engineering for reliable green power, lowered utility bills,
                    and intelligent home defense systems.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

