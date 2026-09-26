import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Button from "@/components/Button";
import { CheckCircle2, Phone, Leaf } from "lucide-react";

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
    <section className="py-28 sm:py-36 lg:py-40 bg-[#F4F7FA]">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Benefit Card */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between rounded-[2.5rem] bg-white p-10 sm:p-12 lg:p-14 shadow-2xl border border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-[#5FAF35]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#5FAF35]">
                  BENEFITS YOU GET
                </span>
                <span className="h-2 w-2 rounded-full bg-[#5FAF35]" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-[1.15] tracking-tight">
                Invest in Clean Energy, Reap Decades of Savings
              </h3>

              <ul className="mt-10 space-y-5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#5FAF35] mt-0.5 shadow-sm">
                      <CheckCircle2 size={18} className="stroke-[2.5]" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-6 border-t border-slate-100 text-xs text-slate-400 font-medium leading-relaxed">
              *Subject to Central Government PM Surya Ghar guidelines, state DISCOM approvals and load sanctions.
            </div>
          </Reveal>

          {/* Right Large Image Showcase */}
          <Reveal delay={0.2} className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white min-h-[460px] lg:min-h-[580px]">
            <Image
              src="/benefits-solar.jpg"
              alt="High efficiency rooftop solar installation under bright blue sky"
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="inline-block rounded-full bg-[#5FAF35] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white mb-3 shadow-md">
                Engineered for Maximum Yield
              </span>
              <h4 className="text-2xl sm:text-3xl font-black tracking-tight">
                Tier-1 Monocrystalline Bifacial PERC Modules
              </h4>
              <p className="text-sm sm:text-base text-slate-200 mt-2 max-w-xl font-normal leading-relaxed">
                Generates electricity even under extreme tropical heat, low-light dawn/dusk,
                and overcast monsoon conditions with guaranteed 25-year linear power warranty.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


export function CtaSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-white overflow-hidden">
      <div className="container-x">
        <Reveal className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-gradient-to-r from-[#003B73] via-[#063970] to-[#041B35] p-12 sm:p-16 lg:p-24 text-white shadow-[0_30px_70px_-15px_rgba(0,59,115,0.4)] border border-white/20">
          {/* Ambient Glow Orbs */}
          <div className="absolute -top-32 -right-32 h-[450px] w-[450px] rounded-full bg-[#5FAF35]/25 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-[#003B73]/60 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/20 px-5 py-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white mb-6 backdrop-blur-md">
              <Leaf size={16} className="text-[#5FAF35]" />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black tracking-tight leading-[1.08]">
              Let's Build a Smarter, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FAF35] to-[#81C784]">
                Greener & Secure
              </span>{" "}
              Tomorrow Together!
            </h2>

            <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-slate-200 leading-relaxed font-normal max-w-3xl">
              Get in touch with our certified engineering team for an on-site feasibility survey,
              exact ROI solar yield simulation, and complete turnkey execution estimate.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Button variant="white" href="/contact" className="!px-10 !py-5 sm:!text-lg">
                Get a Free Consultation
              </Button>
              <a
                href="tel:+919710294225"
                className="inline-flex items-center gap-3.5 text-base sm:text-lg font-bold text-white hover:text-[#5FAF35] transition-colors group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20 group-hover:bg-[#5FAF35] group-hover:text-white transition-all shadow-md">
                  <Phone size={20} className="stroke-[2.5]" />
                </div>
                <span>Call +91 97102 94225</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

