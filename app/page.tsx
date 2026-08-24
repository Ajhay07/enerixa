import { ImageReveal, Reveal, Counter } from "@/components/Reveal";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { IMG } from "@/lib/data";
import {
  ShieldCheck,
  Award,
  HandHelping,
  CheckCircle,
  Clock,
} from "lucide-react";

const TRUST = [
  { label: "25+ Years Performance", icon: <Clock size={20} /> },
  { label: "Certified Installation", icon: <ShieldCheck size={20} /> },
  { label: "End-to-End Solutions", icon: <HandHelping size={20} /> },
  { label: "Reliable After Sales", icon: <Award size={20} /> },
];

const STATS = [
  { value: 25, suffix: "+", label: "Years Performance" },
  { value: 1500, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Districts Served" },
];

function Hero() {
  return (
    <section className="relative flex items-center text-white min-h-[80vh]">
      <ImageReveal
        src={IMG.hero}
        alt="Rooftop solar installation overlooking city skyline"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-navy-deep/60" />
      <div className="container-x relative z-10 py-10">
        <Reveal delay={0.1}>
          <span className="inline-block rounded-full bg-green-brand/15 px-4 py-1.5 text-xs font-medium text-green-light">
            Clean • Sustainable • Indigenous
          </span>
        </Reveal>
        <Reveal delay={0.25}>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            POWERING A SUSTAINABLE FUTURE
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Complete Rooftop Solar, Home Automation & Security & CCTV
            Solutions for homes, businesses and industries.
          </p>
        </Reveal>
                <Reveal delay={0.55} className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="primary" href="/contact">
            Get Free Consultation
          </Button>
          <Button variant="outline" href="/services" className="border-slate-200 text-slate-100 hover:bg-slate-100 hover:text-navy-deep">
            Explore Solutions
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function TrustBar({ items }: { items: typeof TRUST }) {
  return (
    <section className="border-y border-navy/10 bg-mist py-6">
      <div className="container-x">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((t) => (
            <li key={t.label} className="flex items-center gap-3">
              <span className="flex-shrink-0 text-green-brand">{t.icon}</span>
              <span className="text-sm font-medium text-steel">{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stats({ stats }: { stats: typeof STATS }) {
  return (
    <section className="bg-navy-deep py-14 text-white">
      <div className="container-x">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-extrabold text-green-light">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-sm text-slate-300">{s.label}</p>
            </div>
                    ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsPreview() {
  const cards = [
    {
      title: "Solar Solutions",
      href: "/services#solar",
      image: IMG.solar,
      bullets: ["Residential", "Commercial", "Industrial", "Net Metering"],
    },
    {
      title: "Smart Home Automation",
      href: "/services#automation",
      image: IMG.automation,
      bullets: ["Lighting", "Climate", "Security", "Voice Control"],
    },
    {
      title: "Security & CCTV",
      href: "/services#security",
      image: IMG.security,
      bullets: ["HD/IP Cameras", "Remote Monitoring", "Analytics", "AMC"],
    },
  ];
  return (
    <section className="py-18">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Solutions"
          title="Energy & Security Systems Built To Last"
          subtitle="From rooftop to living room, engineered with precision."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
                        <Reveal key={c.title}>
              <Button
                variant="primary"
                href={c.href}
                className="group block overflow-hidden rounded-lg border border-navy/10 !shadow-none !bg-transparent !px-0 !py-0 flex flex-col"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <ImageReveal src={c.image} alt={c.title} className="h-52 w-full" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-deep/70 to-transparent" />
                </div>
                <div className="border-t border-navy/10 bg-mist p-5">
                  <h3 className="text-xl font-bold text-navy">{c.title}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-steel">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle className="size-3.5 text-green-brand/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    "Premium Quality Products",
    "Expert Installation",
    "End-to-End Solutions",
    "Remote Monitoring",
    "Comprehensive Warranty",
    "After Sales Service",
  ];
  const icons = [
    <Award key="q" className="size-5 text-green-brand" />,
    <ShieldCheck key="e" className="size-5 text-green-brand" />,
    <HandHelping key="s" className="size-5 text-green-brand" />,
    <ShieldCheck key="r" className="size-5 text-green-brand" />,
    <Award key="w" className="size-5 text-green-brand" />,
    <HandHelping key="a" className="size-5 text-green-brand" />,
  ];
  return (
    <section className="border-y border-navy/10 bg-white py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Enerixa"
          title="Engineered For Performance, Backed By Support"
          subtitle="Six reasons customers keep coming back."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={t} className="flex items-start gap-3.5 rounded-lg border border-navy/10 p-5">
              {icons[i]}
              <span className="text-sm font-medium text-steel">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    "Site Survey",
    "System Design & Proposal",
    "Installation",
    "Testing & Commissioning",
    "Maintenance Support",
  ];
  return (
    <section className="py-18">
      <div className="container-x">
        <SectionHeading eyebrow="Our Process" title="Simple. Transparent. Engineered." />
        <div className="mx-auto max-w-3xl">
          <div className="relative border-l-2 border-navy/10 pl-8">
            {steps.map((s, i) => (
              <Reveal key={s} delay={i * 0.12}>
                <div className="mb-10 last:mb-0">
                  <div className="absolute -left-[13px]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-brand bg-white text-sm font-bold text-navy">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-navy">{s}</h4>
                  <p className="mt-1 text-sm text-steel">
                    {s === "Site Survey"
                      ? "Structural, shading and energy audit at your location."
                      : s === "System Design & Proposal"
                      ? "Tailored system sizing with clear commercial proposal."
                      : s === "Installation"
                      ? "Clean, code-compliant installation by certified engineers."
                      : s === "Testing & Commissioning"
                      ? "Full electrical and performance testing before handover."
                      : "Annual service plans and remote monitoring."}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
                    <div className="mt-10 text-center">
            <Button variant="primary" href="/contact">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Priya R.",
      role: "Homeowner, Chennai",
      quote: "The rooftop solar plant cut our electricity bill by 85%. Installation was clean and on schedule.",
    },
    {
      name: "Kumar S.",
      role: "Facilities Manager, Coimbatore",
      quote: "Enerixa's industrial solar system pays for itself in under 4 years. Outstanding engineering support.",
    },
  ];
  return (
    <section className="bg-mist py-18">
      <div className="container-x">
        <SectionHeading
          eyebrow="What Our Customers Say"
          title="Trusted Across Industries"
          subtitle="Real outcomes from real partners."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {items.map((t) => (
            <Reveal key={t.name} className="rounded-xl border border-navy/10 bg-white p-7">
              <blockquote className="text-base italic text-steel">“{t.quote}”</blockquote>
              <div className="mt-4 flex items-center gap-3 font-medium text-navy">
                <span>{t.name}</span>
                <span className="text-green-brand">·</span>
                <span className="text-sm text-steel">{t.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar items={TRUST} />
      <Stats stats={STATS} />
      <SolutionsPreview />
      <WhyChoose />
      <Process />
      <Testimonials />
    </>
  );
}


