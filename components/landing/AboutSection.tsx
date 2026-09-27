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
    <section className="bg-gradient-to-r from-[#003B73] via-[#063970] to-[#041B35] py-8 text-white relative shadow-xl">
      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-[#5FAF35] group-hover:scale-105 group-hover:bg-[#5FAF35] group-hover:text-white transition-all duration-300 shadow-sm">
                  <item.icon size={22} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{item.desc}</p>
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
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Story & Big Stats */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5FAF35]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#5FAF35]">
                  ABOUT ENERIXA
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#5FAF35]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.12]">
                Smart Energy. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B73] to-[#5FAF35]">
                  Smart Living.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Enerixa delivers integrated rooftop solar systems, intelligent home automation,
                and round-the-clock enterprise security solutions. We transform residences,
                commercial hubs, and industrial facilities into energy-independent, highly secure,
                and future-proof properties.
              </p>
            </Reveal>

            {/* Large Visual Statistics */}
            <Reveal delay={0.15} className="mt-8 grid grid-cols-3 gap-5 sm:gap-6 border-y border-slate-100 py-6">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003B73] tracking-tight">
                  <Counter to={25} suffix="+" />
                </div>
                <div className="mt-1 text-sm font-bold text-slate-800">
                  Years Lifespan
                </div>
                <div className="text-xs text-slate-500 font-medium">Warranty backed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#5FAF35] tracking-tight">
                  <Counter to={500} suffix="+" />
                </div>
                <div className="mt-1 text-sm font-bold text-slate-800">
                  Projects Done
                </div>
                <div className="text-xs text-slate-500 font-medium">Pan-India footprints</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003B73] tracking-tight">
                  <Counter to={100} suffix="%" />
                </div>
                <div className="mt-1 text-sm font-bold text-slate-800">
                  Satisfaction
                </div>
                <div className="text-xs text-slate-500 font-medium">Guaranteed support</div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-7 flex items-center gap-4">
              <Button variant="primary" href="/about" className="!px-7 !py-3.5 !text-sm sm:!text-base">
                Learn More About Us
              </Button>
            </Reveal>
          </div>

          {/* Right Column: Image + Floating Feature Card */}
          <div className="lg:col-span-6 relative">
            <Reveal delay={0.15} className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#5FAF35]/20 to-[#003B73]/20 blur-xl opacity-60" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-[16/11]">
                <Image
                  src="/about-solar-field.jpg"
                  alt="Vast rooftop solar panels field at sunset"
                  fill
                  className="object-cover scale-[1.01] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Strong Floating Feature Card */}
              <div className="absolute -bottom-6 sm:-bottom-7 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white p-4 sm:p-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5FAF35] to-[#4CAF50] text-white shadow-md shadow-[#5FAF35]/30">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    Powering Sustainable Communities
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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


