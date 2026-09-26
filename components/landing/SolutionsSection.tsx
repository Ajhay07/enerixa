import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Sun, Home, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      num: "01",
      title: "Rooftop Solar Solutions",
      desc: "Reliable, high-yield photovoltaic solar plants engineered for residential villas, commercial complexes, and industrial warehouses.",
      image: "/solution-solar.jpg",
      badgeIcon: Sun,
      badgeBg: "bg-[#5FAF35]",
      features: [
        "Residential Rooftop Solar",
        "Commercial & Industrial Solar",
        "Net Metering & Subsidy Support",
        "Tier 1 High-Efficiency Mono PERC / TopCon",
        "25+ Years Performance Warranty",
        "Remote Solar Plant Monitoring",
      ],
      href: "/services#solar",
    },
    {
      num: "02",
      title: "Home Automation Solutions",
      desc: "Elevate your property into a synchronized smart habitat with centralized lighting, automated climate, and touchless control.",
      image: "/solution-home.jpg",
      badgeIcon: Home,
      badgeBg: "bg-[#003B73]",
      features: [
        "Smart Ambient Lighting Control",
        "Smart AC, HVAC & Climate Control",
        "Smart Curtains & Blinds Automation",
        "Automated Scenes & Scheduling",
        "Smartphone & Tablet Central Hub",
        "Alexa & Google Voice Integration",
      ],
      href: "/services#automation",
    },
    {
      num: "03",
      title: "Security & Surveillance",
      desc: "Enterprise-grade surveillance infrastructure and proactive perimeter security engineered for maximum protection.",
      image: "/solution-security.jpg",
      badgeIcon: Shield,
      badgeBg: "bg-[#5FAF35]",
      features: [
        "High-Definition CCTV Surveillance",
        "Network IP Cameras & Color Night Vision",
        "24/7 Cloud & Local NVR Recording",
        "AI Motion & Intrusion Alerts",
        "Worldwide Remote Mobile Live Streaming",
        "Turnkey Installation & Comprehensive AMC",
      ],
      href: "/services#security",
    },
  ];


  return (
    <section id="solutions" className="py-28 sm:py-36 lg:py-40 bg-[#F4F7FA]/80">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="OUR SOLUTIONS"
          title="Complete Solutions Under One Roof"
          subtitle="From clean solar energy generation to intelligent living automation and fortress-grade security, we deliver end-to-end turnkey engineering."
        />

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-10 xl:gap-12">
          {solutions.map((item, idx) => (
            <Reveal
              key={item.title}
              delay={idx * 0.15}
              className="group flex flex-col rounded-[2.5rem] bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,59,115,0.2)] border border-slate-200/80 overflow-hidden transition-all duration-500 hover:-translate-y-2.5"
            >
              {/* Massive Image Header occupying ~45-50% */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Floating Badge Icon */}
                <div
                  className={`absolute -bottom-7 left-8 flex h-16 w-16 items-center justify-center rounded-2xl ${item.badgeBg} text-white shadow-2xl border-4 border-white transition-transform group-hover:scale-110 duration-300`}
                >
                  <item.badgeIcon size={28} className="stroke-[2.5]" />
                </div>

                <span className="absolute top-5 right-5 text-sm font-black text-white bg-black/50 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/20">
                  {item.num}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 pt-12 sm:pt-14 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight group-hover:text-[#003B73] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="text-xs font-black uppercase tracking-wider text-[#003B73] mb-4">
                      Key Highlights:
                    </div>
                    <ul className="space-y-3.5">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-700">
                          <CheckCircle2 size={19} className="shrink-0 text-[#5FAF35] stroke-[2.5]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-base font-bold text-[#003B73] group-hover:text-[#5FAF35] transition-colors"
                  >
                    <span>View System Details</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
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

