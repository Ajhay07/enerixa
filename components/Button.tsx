import { ArrowRight } from "lucide-react";

type BtnProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline";
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
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-brand/40";
  const styles =
    variant === "primary"
      ? "bg-green-brand text-white hover:bg-green-dark shadow-sm hover:shadow-md"
      : "border border-navy-deep bg-white text-navy-deep hover:bg-navy-deep hover:text-white";
  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
      <ArrowRight size={16} />
    </a>
  );
}
