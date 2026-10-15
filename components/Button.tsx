import { ArrowRight } from "lucide-react";

type BtnProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline" | "white" | "secondary";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-lg px-7 py-3.5 text-[15px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5FAF35] shadow-sm hover:shadow-md group";

  let styles = "bg-[#003B73] text-white hover:bg-[#062A52]";
  if (variant === "outline") {
    styles = "border border-slate-300 bg-white text-ink hover:border-[#003B73] hover:text-[#003B73] shadow-none";
  } else if (variant === "white") {
    styles = "bg-white text-[#003B73] hover:bg-slate-50";
  } else if (variant === "secondary") {
    styles = "bg-[#5FAF35] text-white hover:bg-[#4f9a2c]";
  }

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowRight
        size={17}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  );
}
