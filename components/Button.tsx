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
    "inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4CAF50]/30 active:scale-[0.98] shadow-md hover:shadow-xl group";

  let styles = "bg-[#4CAF50] text-white hover:bg-[#43A047]";
  if (variant === "outline") {
    styles = "border-2 border-slate-300 bg-white/90 text-slate-800 hover:bg-white hover:border-[#003B73] hover:text-[#003B73]";
  } else if (variant === "white") {
    styles = "bg-white text-[#003B73] hover:bg-slate-50 shadow-xl hover:shadow-2xl";
  } else if (variant === "secondary") {
    styles = "bg-[#003B73] text-white hover:bg-[#062A52]";
  }

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      <span>{children}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight size={14} className="stroke-[2.5]" />
      </span>
    </a>
  );
}


