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
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F4F7FA]">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Benefit Card */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between rounded-[2rem] bg-white p-7 sm:p-10 shadow-xl border border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5FAF35]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#5FAF35]">
                  BENEFITS YOU GET
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#5FAF35]" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 leading-[1.15] tracking-tight">
                Invest in Clean Energy, Reap Decades of Savings
              </h3>

              <ul className="mt-7 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35] mt-0.5 shadow-xs">
                      <CheckCircle2 size={16} className="stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 text-xs text-slate-400 font-medium leading-relaxed">
              *Subject to Central Government PM Surya Ghar guidelines, state DISCOM approvals and load sanctions.
            </div>
          </Reveal>

          {/* Right Large Image Showcase */}
          <Reveal delay={0.15} className="lg:col-span-7 relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white min-h-[380px] lg:min-h-[460px]">
            <Image
              src="/benefits-solar.jpg"
              alt="High efficiency rooftop solar installation under bright blue sky"
              fill
              className="object-cover scale-[1.01] hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block rounded-full bg-[#5FAF35] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white mb-2.5 shadow-sm">
                Engineered for Maximum Yield
              </span>
              <h4 className="text-xl sm:text-2xl font-black tracking-tight">
                Tier-1 Monocrystalline Bifacial PERC Modules
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-1.5 max-w-xl font-normal leading-relaxed">
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
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container-x">
        <Reveal className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#003B73] via-[#063970] to-[#041B35] p-8 sm:p-12 lg:p-16 text-white shadow-[0_20px_50px_-15px_rgba(0,59,115,0.35)] border border-white/20">
          {/* Ambient Glow Orbs */}
          <div className="absolute -top-32 -right-32 h-[350px] w-[350px] rounded-full bg-[#5FAF35]/25 blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-[#003B73]/60 blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white mb-4 backdrop-blur-md">
              <Leaf size={15} className="text-[#5FAF35]" />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08]">
              Let's Build a Smarter, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FAF35] to-[#81C784]">
                Greener & Secure
              </span>{" "}
              Tomorrow Together!
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              Get in touch with our certified engineering team for an on-site feasibility survey,
              exact ROI solar yield simulation, and complete turnkey execution estimate.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5">
              <Button variant="white" href="/contact" className="!px-8 !py-4 !text-sm sm:!text-base">
                Get a Free Consultation
              </Button>
              <a
                href="tel:+919710294225"
                className="inline-flex items-center gap-3 text-sm sm:text-base font-bold text-white hover:text-[#5FAF35] transition-colors group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/20 group-hover:bg-[#5FAF35] group-hover:text-white transition-all shadow-sm">
                  <Phone size={17} className="stroke-[2.5]" />
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


