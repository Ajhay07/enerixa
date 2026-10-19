import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Sun, Home, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Rooftop Solar Solutions",
      desc: "Reliable, high-yield photovoltaic solar plants engineered for residential villas, commercial complexes, and industrial warehouses.",
      image: "/solution-solar.jpg",
      icon: Sun,
      features: [
        "Residential, Commercial & Industrial Solar",
        "Net Metering & Subsidy Support",
        "Tier 1 High-Efficiency Panels",
        "25+ Years Performance Warranty",
      ],
      href: "/services#solar",
    },
    {
      title: "Home Automation Solutions",
      desc: "Elevate your property into a synchronized smart habitat with centralized lighting, automated climate, and touchless control.",
      image: "/solution-home.jpg",
      icon: Home,
      features: [
        "Smart Lighting & Climate Control",
        "Smart Curtains & Blinds Automation",
        "Automated Scenes & Scheduling",
        "Alexa & Google Voice Integration",
      ],
      href: "/services#automation",
    },
    {
      title: "Security & Surveillance",
      desc: "Enterprise-grade surveillance infrastructure and proactive perimeter security engineered for maximum protection.",
      image: "/solution-security.jpg",
      icon: Shield,
      features: [
        "High-Definition CCTV Surveillance",
        "Network IP Cameras & Night Vision",
        "24/7 Cloud & Local NVR Recording",
        "Remote Mobile Live Streaming",
      ],
      href: "/services#security",
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-24 lg:py-28 bg-[#F6F8FA]">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Our Solutions"
          title="Complete Solutions Under One Roof"
          subtitle="From clean solar generation to intelligent living automation and fortress-grade security, we deliver end-to-end turnkey engineering."
        />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <Reveal
              key={item.title}
              delay={idx * 0.1}
              className="group flex flex-col rounded-2xl bg-white shadow-md hover:shadow-xl border border-slate-100 overflow-hidden transition-shadow duration-300"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#5FAF35]">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-heading text-2xl text-ink">{item.title}</h3>
                </div>

                <p className="text-[15px] leading-relaxed text-slate-600">{item.desc}</p>

                <ul className="mt-5 space-y-2.5">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                      <CheckCircle2 size={16} className="shrink-0 text-[#5FAF35] mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={item.href}
                  className="group/link mt-6 pt-5 border-t border-slate-100 inline-flex items-center gap-2 text-sm font-semibold text-[#003B73] hover:text-[#5FAF35] transition-colors"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
