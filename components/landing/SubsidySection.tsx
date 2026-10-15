import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Sun, Landmark, CheckCircle2, Info, type LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Subsidy data — single source of truth (all figures in INR)                */
/* -------------------------------------------------------------------------- */

type SubsidyStat = { value: string; label: string };
type CardTheme = "navy" | "green";

type SubsidyCardData = {
  title: string;
  subtitle: string;
  stats: SubsidyStat[];
  icon: LucideIcon;
  theme: CardTheme;
};

const CENTRAL_SCHEME: SubsidyCardData = {
  title: "PM Surya Ghar",
  subtitle: "Central Government Subsidy",
  icon: Landmark,
  theme: "navy",
  stats: [
    { value: "₹30,000", label: "First 2 kW" },
    { value: "₹18,000", label: "Additional 1 kW" },
    { value: "₹78,000", label: "Maximum Central Subsidy" },
  ],
};

const STATE_SCHEME: SubsidyCardData = {
  title: "Tamil Nadu Solar Subsidy",
  subtitle: "State Government Top-Up",
  icon: Sun,
  theme: "green",
  stats: [
    { value: "₹5,000", label: "1 kW" },
    { value: "₹10,000", label: "2 kW" },
    { value: "₹22,000", label: "3 kW & above" },
  ],
};

const SUBSIDY_CARDS: SubsidyCardData[] = [CENTRAL_SCHEME, STATE_SCHEME];

const MAX_BENEFIT = {
  eyebrow: "MAXIMUM BENEFIT",
  headline: "Up to ₹1,00,000 Total Subsidy",
  note: "For eligible residential rooftop solar systems in Tamil Nadu.",
  parts: [
    { value: "₹78,000", label: "Central Subsidy" },
    { value: "₹22,000", label: "Tamil Nadu State Subsidy" },
  ],
  total: { value: "₹1,00,000", label: "Total Assistance" },
};

const COMPARISON = {
  title: "Central + Tamil Nadu Subsidy — What Your Home Gets",
  columns: [
    "Rooftop System Capacity",
    "Central Subsidy",
    "Tamil Nadu State Subsidy",
    "Total Assistance",
  ],
  rows: [
    { capacity: "1 kW", central: "₹30,000", state: "₹5,000", total: "₹35,000", featured: false },
    { capacity: "2 kW", central: "₹60,000", state: "₹10,000", total: "₹70,000", featured: false },
    { capacity: "3 kW", central: "₹78,000", state: "₹22,000", total: "₹1,00,000", featured: true },
    { capacity: "Above 3 kW", central: "₹78,000 max", state: "₹22,000 max", total: "₹1,00,000", featured: false },
  ],
};

const BENEFIT_INDICATORS = [
  "Reduce upfront solar investment",
  "Lower electricity costs",
  "Government-backed subsidy support",
  "Clean and sustainable energy",
];

const DISCLAIMERS = [
  "*Subsidy is subject to applicable government scheme guidelines, eligibility requirements, installation, metering/commissioning and other applicable conditions.",
  "Eligibility and subsidy disbursement are subject to the applicable PM Surya Ghar and Tamil Nadu scheme guidelines.",
];

/* Per-theme class maps keep the two cards visually distinct without
   duplicating their entire markup. */
const CARD_THEMES: Record<
  CardTheme,
  {
    shell: string;
    glow: string;
    iconWrap: string;
    title: string;
    subtitle: string;
    tile: string;
    tileValue: string;
    tileLabel: string;
  }
> = {
  navy: {
    shell:
      "bg-gradient-to-br from-[#003B73] via-[#04305E] to-[#041B35] border-white/10 text-white shadow-[0_18px_45px_-18px_rgba(0,59,115,0.45)]",
    glow: "bg-[#5FAF35]/20",
    iconWrap: "border-white/15 bg-white/10 text-white",
    title: "text-white",
    subtitle: "text-[#8FD16A]",
    tile: "border-white/15 bg-white/[0.07] backdrop-blur-sm",
    tileValue: "text-white",
    tileLabel: "text-slate-300",
  },
  green: {
    shell:
      "bg-white border-slate-200/80 text-slate-900 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,59,115,0.18)]",
    glow: "bg-[#5FAF35]/10",
    iconWrap: "border-[#5FAF35]/25 bg-[#E8F5E9] text-[#388E3C]",
    title: "text-slate-900",
    subtitle: "text-[#5FAF35]",
    tile: "border-[#5FAF35]/20 bg-[#E8F5E9]/60",
    tileValue: "text-[#2E7D32]",
    tileLabel: "text-slate-600",
  },
};


export function SubsidySection() {
  return (
    <section
      id="subsidy"
      aria-label="Solar Subsidy & Benefits"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28 bg-white"
    >
      <div className="container-x">
        <SectionHeading
          center
          badge={
            <>
              <Sun size={14} className="text-[#5FAF35]" />
              <span>Solar Subsidy &amp; Benefits</span>
            </>
          }
          eyebrow="SUBSIDY & GUIDELINES"
          title="Make Your Solar Investment More Affordable"
          subtitle="Eligible residential customers in Tamil Nadu can benefit from the PM Surya Ghar central subsidy together with the Tamil Nadu state subsidy."
        />

        {/* ---------------- Two subsidy scheme cards ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {SUBSIDY_CARDS.map((card, idx) => {
            const t = CARD_THEMES[card.theme];
            return (
              <Reveal
                key={card.title}
                delay={idx * 0.12}
                className={`group relative overflow-hidden rounded-[2rem] border p-7 sm:p-9 transition-all duration-500 ${t.shell}`}
              >
                <div
                  className={`pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full blur-[80px] ${t.glow}`}
                />
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${t.iconWrap}`}
                    >
                      <card.icon size={22} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${t.title}`}>
                        {card.title}
                      </h3>
                      <p
                        className={`mt-1 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] ${t.subtitle}`}
                      >
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2.5 sm:gap-4">
                    {card.stats.map((s) => (
                      <div
                        key={s.label}
                        className={`rounded-2xl border px-2 py-4 text-center sm:px-4 sm:py-5 ${t.tile}`}
                      >
                        <div className={`text-lg sm:text-2xl font-black tracking-tight ${t.tileValue}`}>
                          {s.value}
                        </div>
                        <div
                          className={`mt-1.5 text-[10px] sm:text-xs font-semibold leading-snug ${t.tileLabel}`}
                        >
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ---------------- Maximum combined benefit callout ---------------- */}
        <Reveal delay={0.05} className="mt-6 lg:mt-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-r from-[#041B35] via-[#003B73] to-[#1F6D3A] p-7 text-white shadow-[0_20px_50px_-15px_rgba(0,59,115,0.35)] sm:p-11 lg:p-12">
            <div className="pointer-events-none absolute -top-28 -right-24 h-[300px] w-[300px] rounded-full bg-[#5FAF35]/25 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-28 -left-24 h-[300px] w-[300px] rounded-full bg-[#003B73]/60 blur-[90px]" />

            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#5FAF35]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#8FD16A]">
                  {MAX_BENEFIT.eyebrow}
                </span>
              </div>

              <h3 className="max-w-2xl text-2xl font-black leading-[1.15] tracking-tight sm:text-3xl lg:text-[36px]">
                {MAX_BENEFIT.headline}
              </h3>

              <div className="mt-8 grid grid-cols-1 items-stretch gap-3 sm:gap-4 md:grid-cols-[1fr_auto_1fr_auto_1.4fr] md:items-center">
                <div className="rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-5 text-center backdrop-blur-sm">
                  <div className="text-2xl font-black tracking-tight sm:text-3xl">
                    {MAX_BENEFIT.parts[0].value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-300 sm:text-sm">
                    {MAX_BENEFIT.parts[0].label}
                  </div>
                </div>

                <div className="flex items-center justify-center text-2xl font-black text-white/60 sm:text-3xl">
                  +
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-5 text-center backdrop-blur-sm">
                  <div className="text-2xl font-black tracking-tight sm:text-3xl">
                    {MAX_BENEFIT.parts[1].value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-300 sm:text-sm">
                    {MAX_BENEFIT.parts[1].label}
                  </div>
                </div>

                <div className="flex items-center justify-center text-2xl font-black text-white/60 sm:text-3xl">
                  =
                </div>

                <div className="rounded-2xl bg-white px-5 py-6 text-center shadow-2xl ring-1 ring-[#5FAF35]/30">
                  <div className="text-4xl font-black tracking-tight text-[#2E7D32] sm:text-5xl">
                    {MAX_BENEFIT.total.value}
                  </div>
                  <div className="mt-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#003B73] sm:text-sm">
                    {MAX_BENEFIT.total.label}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs font-medium text-slate-300 sm:text-sm">
                {MAX_BENEFIT.note}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ---------------- Comparison table ---------------- */}
        <div className="mt-14 lg:mt-16">
          <Reveal className="mb-5 max-w-3xl">
            <h3 className="text-lg font-black tracking-tight text-slate-900 sm:text-xl lg:text-2xl">
              {COMPARISON.title}
            </h3>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 shadow-[0_10px_30px_-12px_rgba(0,59,115,0.18)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[#003B73] text-white">
                      {COMPARISON.columns.map((col, i) => (
                        <th
                          key={col}
                          scope="col"
                          className={`px-5 py-4 text-xs font-extrabold uppercase tracking-wider sm:px-6 sm:text-sm ${
                            i === 0 ? "text-left" : "text-center"
                          }`}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {COMPARISON.rows.map((row) => (
                      <tr
                        key={row.capacity}
                        className={`border-t border-slate-100 transition-colors duration-200 ${
                          row.featured
                            ? "bg-[#E8F5E9]/60 hover:bg-[#E8F5E9]"
                            : "hover:bg-[#F4F7FA]"
                        }`}
                      >
                        <th
                          scope="row"
                          className="whitespace-nowrap px-5 py-4 text-sm font-bold text-slate-900 sm:px-6 sm:text-base"
                        >
                          {row.capacity}
                          {row.featured && (
                            <span className="ml-2 inline-block rounded-full bg-[#5FAF35] px-2 py-0.5 align-middle text-[10px] font-black uppercase tracking-wider text-white">
                              Maximum
                            </span>
                          )}
                        </th>
                        <td className="px-5 py-4 text-center text-sm font-semibold text-slate-700 sm:px-6 sm:text-base">
                          {row.central}
                        </td>
                        <td className="px-5 py-4 text-center text-sm font-semibold text-slate-700 sm:px-6 sm:text-base">
                          {row.state}
                        </td>
                        <td className="px-5 py-4 text-center text-sm font-black text-[#2E7D32] sm:px-6 sm:text-base">
                          {row.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Disclaimer */}
          <Reveal delay={0.1} className="mt-5 flex items-start gap-2.5">
            <Info size={15} className="mt-0.5 shrink-0 text-slate-400" />
            <div className="space-y-1.5 text-xs font-medium leading-relaxed text-slate-500 sm:text-[13px]">
              {DISCLAIMERS.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---------------- Benefit indicators ---------------- */}
        <Reveal delay={0.12} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-2xl border border-slate-200/80 bg-[#F4F7FA]/70 px-6 py-5">
            {BENEFIT_INDICATORS.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="shrink-0 text-[#5FAF35] stroke-[2.5]" />
                <span className="text-xs font-semibold text-slate-700 sm:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}