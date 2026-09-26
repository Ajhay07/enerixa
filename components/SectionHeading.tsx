import { Reveal } from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={`mb-14 lg:mb-16 max-w-4xl ${center ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-2.5 ${center ? "justify-center" : "justify-start"}`}>
          <span className="h-2 w-2 rounded-full bg-[#5FAF35]" />
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#5FAF35]">
            {eyebrow}
          </span>
          <span className="h-2 w-2 rounded-full bg-[#5FAF35]" />
        </div>
      )}
      {title && (
        <h2
          className={`text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg lg:text-xl leading-relaxed ${
            light ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}


