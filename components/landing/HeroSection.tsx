import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Button from "@/components/Button";
import { Sun, Zap, Leaf, ShieldCheck, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden bg-gradient-to-b from-[#F4F7FA] via-white to-white">
      {/* Cinematic radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#5FAF35]/15 via-[#003B73]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#003B73]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-[#5FAF35] animate-pulse" />
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#003B73] uppercase">
                  CLEAN ENERGY • SMART LIVING
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] font-black tracking-tight text-slate-900 leading-[1.04]">
                Powering A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FAF35] via-[#4CAF50] to-[#003B73]">
                  Sustainable
                </span>{" "}
                <br />
                Future
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed font-normal">
                Complete rooftop solar installations, intelligent home automation, and 
                enterprise-grade security engineered for modern villas, estates, and industries.
              </p>
            </Reveal>

            <Reveal delay={0.4} className="mt-10 sm:mt-12 flex flex-wrap items-center gap-5">
              <Button variant="primary" href="/contact" className="!px-9 !py-4 sm:!text-lg">
                Get a Free Consultation
              </Button>
              <Button variant="outline" href="#solutions" className="!px-8 !py-4 sm:!text-lg">
                Explore Solutions
              </Button>
            </Reveal>

            <Reveal delay={0.5} className="mt-14 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-sm font-bold text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#5FAF35] shadow-sm">
                    <Sun size={20} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Generate Clean Energy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shadow-sm">
                    <Zap size={20} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Slash Power Bills</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#5FAF35] shadow-sm">
                    <Leaf size={20} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Eco-Friendly Living</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#003B73] shadow-sm">
                    <ShieldCheck size={20} className="stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">24/7 Smart Security</span>
                </div>
              </div>
            </Reveal>
          </div>


          <div className="lg:col-span-6 xl:col-span-6 relative">
            <Reveal delay={0.25} className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              {/* Backing ambient gradient */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-tr from-[#5FAF35]/30 via-transparent to-[#003B73]/30 blur-2xl opacity-70" />

              {/* Main Solar House Showcase Image */}
              <div className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border-4 sm:border-8 border-white bg-slate-900 aspect-[4/3] lg:aspect-[16/13] xl:aspect-[16/12]">
                <Image
                  src="/hero-solar-home.jpg"
                  alt="Modern luxury villa with solar panels and smart lighting"
                  fill
                  priority
                  className="object-cover scale-[1.02] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Glassmorphism Floating Stat Card 1: 25+ Years */}
              <div className="absolute -top-6 -right-3 sm:-top-8 sm:-right-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white p-5 sm:p-7 text-center min-w-[160px] sm:min-w-[190px] transform hover:scale-105 transition-all">
                <div className="flex items-center justify-center gap-1.5 mb-1 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-[#5FAF35] tracking-tight">25+</div>
                <div className="text-xs sm:text-sm font-black uppercase text-slate-900 tracking-wider mt-1">
                  YEARS
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                  PERFORMANCE
                </div>
              </div>

              {/* Glassmorphism Floating Stat Card 2: Clean Energy */}
              <div className="absolute -bottom-8 left-4 sm:-bottom-10 sm:left-8 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white p-5 sm:p-6 flex items-center gap-4 max-w-sm transform hover:scale-105 transition-all">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5FAF35] to-[#4CAF50] text-white shadow-lg shadow-[#5FAF35]/30">
                  <Leaf size={28} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#003B73]">
                    Tier 1 Solar Tech
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900 leading-snug mt-0.5">
                    Clean Energy & Smart Living
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    Engineered for maximum reliability
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

