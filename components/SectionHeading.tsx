import { Reveal } from "@/components/Reveal";

export default function SectionHeading({
  badge,
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: {
  badge?: React.ReactNode;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  const label = badge ?? eyebrow;

  return (
    <Reveal className={`mb-12 lg:mb-14 max-w-3xl ${center ? "mx-auto text-center" : "text-left"}`}>
      {label && (
        <div
          className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : "justify-start"}`}
        >
          <span className={`h-px w-8 shrink-0 ${light ? "bg-white/40" : "bg-[#5FAF35]"}`} />
          <span
            className={`inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] ${
              light ? "text-white/65" : "text-slate-500"
            }`}
          >
            {label}
          </span>
        </div>
      )}
      {title && (
        <h2
          className={`font-heading text-[28px] sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.015em] leading-[1.15] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-slate-600"
          } ${center ? "mx-auto max-w-2xl" : "max-w-xl"}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
