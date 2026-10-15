import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      num: "01",
      title: "Rooftop Solar Solutions",
      desc: "Reliable, high-yield photovoltaic solar plants engineered for residential villas, commercial complexes, and industrial warehouses.",
      image: "/solution-solar.jpg",
      features: [
        "Residential, Commercial & Industrial Solar",
        "Net Metering & Subsidy Support",
        "Tier 1 High-Efficiency Mono PERC / TopCon",
        "25+ Years Performance Warranty",
      ],
      href: "/services#solar",
    },
    {
      num: "02",
      title: "Home Automation Solutions",
      desc: "Elevate your property into a synchronized smart habitat with centralized lighting, automated climate, and touchless control.",
      image: "/solution-home.jpg",
      features: [
        "Smart Ambient Lighting Control",
        "Smart AC, HVAC & Climate Control",
        "Smart Curtains & Blinds Automation",
        "Alexa & Google Voice Integration",
      ],
      href: "/services#automation",
    },
    {
      num: "03",
      title: "Security & Surveillance",
      desc: "Enterprise-grade surveillance infrastructure and proactive perimeter security engineered for maximum protection.",
      image: "/solution-security.jpg",
      features: [
        "High-Definition CCTV Surveillance",
        "Network IP Cameras & Color Night Vision",
        "24/7 Cloud & Local NVR Recording",
        "Worldwide Remote Mobile Live Streaming",
      ],
      href: "/services#security",
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Solutions"
          title="Complete solutions under one roof."
          subtitle="From clean solar generation to intelligent living automation and fortress-grade security — engineered end-to-end."
        />

        <div className="mt-2 border-t border-slate-200">
          {solutions.map((item, idx) => (
            <Reveal
              key={item.title}
              delay={idx * 0.06}
              className="border-b border-slate-200 py-12 lg:py-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] lg:aspect-[5/4] ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="font-heading text-sm font-medium text-slate-400 tracking-widest">
                    {item.num}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-semibold tracking-[-0.01em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 max-w-lg">
                    {item.desc}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="mt-2 h-1 w-1 rounded-full bg-[#5FAF35] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.href}
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#003B73] hover:text-[#5FAF35] transition-colors"
                  >
                    View System Details
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
