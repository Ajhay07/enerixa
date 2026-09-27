import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Button from "@/components/Button";
import { Sun, Zap, Leaf, ShieldCheck, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-24 lg:pb-16 lg:min-h-[calc(100vh-68px)] flex items-center overflow-hidden bg-gradient-to-b from-[#F4F7FA] via-white to-white">
      {/* Cinematic radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#5FAF35]/15 via-[#003B73]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#003B73]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative w-full py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 flex flex-col justify-center">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
                <span className="h-2 w-2 rounded-full bg-[#5FAF35] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.22em] text-[#003B73] uppercase">
                  CLEAN ENERGY • SMART LIVING
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] font-black tracking-[-0.04em] text-slate-900 leading-[0.95] sm:leading-[0.95]">
                Powering A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FAF35] via-[#4CAF50] to-[#003B73]">
                  Sustainable
                </span>{" "}
                <br />
                Future
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                Complete rooftop solar installations, intelligent home automation, and 
                enterprise-grade security engineered for modern villas, estates, and industries.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-6 sm:mt-7 flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/contact" className="!px-7 !py-3.5 !text-sm sm:!text-base">
                Get a Free Consultation
              </Button>
              <Button variant="outline" href="#solutions" className="!px-6 !py-3.5 !text-sm sm:!text-base">
                Explore Solutions
              </Button>
            </Reveal>

            {/* Feature Badges Strip (Trust Indicators in First Screen) */}
            <Reveal delay={0.25} className="mt-8 pt-5 border-t border-slate-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35] shadow-xs">
                    <Sun size={17} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-tight">Generate Clean Energy</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 shadow-xs">
                    <Zap size={17} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-tight">Slash Power Bills</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35] shadow-xs">
                    <Leaf size={17} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-tight">Eco Living</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#003B73] shadow-xs">
                    <ShieldCheck size={17} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-tight">24/7 Security</span>
                </div>
              </div>
            </Reveal>
          </div>



          <div className="lg:col-span-6 xl:col-span-6 relative">
            <Reveal delay={0.15} className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Backing ambient gradient */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-[2rem] bg-gradient-to-tr from-[#5FAF35]/25 via-transparent to-[#003B73]/25 blur-xl opacity-60" />

              {/* Main Solar House Showcase Image */}
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-4 sm:border-6 border-white bg-slate-900 aspect-[16/11] lg:aspect-[16/11] xl:aspect-[16/11]">
                <Image
                  src="/hero-solar-home.jpg"
                  alt="Modern luxury villa with solar panels and smart lighting"
                  fill
                  priority
                  className="object-cover scale-[1.01] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Glassmorphism Floating Stat Card 1: 25+ Years */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white p-3.5 sm:p-4 text-center min-w-[130px] sm:min-w-[150px] transform hover:scale-105 transition-all">
                <div className="flex items-center justify-center gap-1 mb-0.5 text-amber-500">
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#5FAF35] tracking-tight leading-none">25+</div>
                <div className="text-[10px] sm:text-xs font-black uppercase text-slate-900 tracking-wider mt-1">
                  YEARS
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  PERFORMANCE
                </div>
              </div>

              {/* Glassmorphism Floating Stat Card 2: Clean Energy */}
              <div className="absolute -bottom-5 left-3 sm:-bottom-6 sm:left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white p-3.5 sm:p-4 flex items-center gap-3 max-w-[280px] sm:max-w-xs transform hover:scale-105 transition-all">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5FAF35] to-[#4CAF50] text-white shadow-md shadow-[#5FAF35]/30">
                  <Leaf size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#003B73]">
                    Tier 1 Solar Tech
                  </div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                    Clean Energy & Smart Living
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


