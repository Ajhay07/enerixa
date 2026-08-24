import { Reveal } from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <div className="mb-4 flex justify-center">
        <span className="eyebrow">{eyebrow}</span>
      </div>
      {title && (
        <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-5 text-lg text-steel">{subtitle}</p>
      )}
    </Reveal>
  );
}
