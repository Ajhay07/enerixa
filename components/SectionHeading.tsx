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
    <Reveal className={`mb-10 lg:mb-12 max-w-3xl ${center ? "mx-auto text-center" : "text-left"}`}>
      {label && (
        <div
          className={`mb-3 inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase ${
            light ? "text-[#8FD16A]" : "text-[#5FAF35]"
          }`}
        >
          {label}
        </div>
      )}
      {title && (
        <h2
          className={`font-heading text-[32px] sm:text-[38px] lg:text-[42px] font-bold leading-[1.2] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-slate-600"
          } ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
