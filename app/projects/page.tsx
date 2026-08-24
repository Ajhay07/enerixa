"use client";

import { Reveal, ImageReveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { PROJECTS } from "@/lib/data";
import { useState } from "react";

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
    const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects We're Proud Of"
          subtitle="Solar plants, smart homes and secured facilities across India."
        />
        <div className="mb-8 flex flex-wrap items-center gap-3" role="group">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                active === c
                  ? "border-green-brand bg-green-brand text-white"
                  : "border-navy/20 text-steel hover:border-green-brand hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Reveal key={p.title} className="group rounded-xl border border-navy/10 bg-white shadow-sm overflow-hidden">
              <div className="relative h-52 w-full overflow-hidden">
                <ImageReveal src={p.image} alt={p.title} className="h-52 w-full" />
                <span className="absolute left-3 top-3 rounded-full bg-navy/70 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-steel">{p.location}</p>
                <p className="mt-2 text-sm text-steel">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
