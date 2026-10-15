import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Info } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Subsidy data — single source of truth (all figures in INR)                */
/* -------------------------------------------------------------------------- */

const CENTRAL_SCHEME = {
  title: "PM Surya Ghar",
  subtitle: "Central Government Subsidy",
  rows: [
    { label: "First 2 kW", value: "₹30,000" },
    { label: "Additional 1 kW", value: "₹18,000" },
    { label: "Maximum Central Subsidy", value: "₹78,000" },
  ],
};

const STATE_SCHEME = {
  title: "Tamil Nadu Solar Subsidy",
  subtitle: "State Government Top-Up",
  rows: [
    { label: "1 kW", value: "₹5,000" },
    { label: "2 kW", value: "₹10,000" },
    { label: "3 kW & above", value: "₹22,000" },
  ],
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
          eyebrow="Subsidy & Guidelines"
          title="Make Your Solar Investment More Affordable"
          subtitle="Eligible residential customers in Tamil Nadu can combine the PM Surya Ghar central subsidy with the Tamil Nadu state subsidy."
        />

        {/* Two subsidy scheme summaries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {[CENTRAL_SCHEME, STATE_SCHEME].map((scheme, idx) => (
            <Reveal
              key={scheme.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-slate-200 bg-[#F6F8FA] p-6 sm:p-8"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">
                {scheme.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                {scheme.subtitle}
              </p>
              <dl className="mt-6 divide-y divide-slate-200">
                {scheme.rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-3.5">
                    <dt className="text-[15px] text-slate-600">{row.label}</dt>
                    <dd className="font-heading text-lg font-semibold text-[#003B73]">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        {/* Maximum combined benefit */}
        <Reveal
          delay={0.1}
          className="mt-6 lg:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-[#E8F5E9] px-6 py-6 sm:px-8"
        >
          <p className="text-base sm:text-lg font-medium text-ink">
            Combine both schemes for up to{" "}
            <span className="font-heading font-bold text-[#003B73]">₹1,00,000</span>{" "}
            in total assistance on eligible residential rooftop systems.
          </p>
        </Reveal>

        {/* Comparison table */}
        <div className="mt-14 lg:mt-16">
          <Reveal>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink mb-6">
              {COMPARISON.title}
            </h3>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#003B73]">
                    {COMPARISON.columns.map((col, i) => (
                      <th
                        key={col}
                        scope="col"
                        className={`px-5 py-4 text-sm font-semibold text-white sm:px-6 ${
                          i === 0 ? "text-left" : "text-center"
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.rows.map((row) => (
                    <tr
                      key={row.capacity}
                      className={`border-b border-slate-100 last:border-0 ${
                        row.featured ? "bg-[#E8F5E9]/50" : "bg-white"
                      }`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-[15px] font-semibold text-ink sm:px-6"
                      >
                        {row.capacity}
                        {row.featured && (
                          <span className="ml-2 inline-block rounded-full bg-[#5FAF35] px-2.5 py-0.5 text-xs font-semibold text-white">
                            Max
                          </span>
                        )}
                      </th>
                      <td className="px-5 py-4 text-center text-[15px] text-slate-600 sm:px-6">
                        {row.central}
                      </td>
                      <td className="px-5 py-4 text-center text-[15px] text-slate-600 sm:px-6">
                        {row.state}
                      </td>
                      <td className="px-5 py-4 text-center text-[15px] font-bold text-[#003B73] sm:px-6">
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-5 flex items-start gap-2.5">
            <Info size={16} className="mt-0.5 shrink-0 text-slate-400" />
            <div className="space-y-1.5 text-sm leading-relaxed text-slate-500">
              {DISCLAIMERS.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Benefit indicators */}
        <Reveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-slate-200 pt-8">
          {BENEFIT_INDICATORS.map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5FAF35]" />
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
