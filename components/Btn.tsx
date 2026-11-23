import Link from "next/link";

/** The template's signature pill button with a sliding circular arrow. */
export default function Btn({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn ${className}`}>
      <span className="btn-text">{children}</span>
      <iconify-icon
        icon="lucide:arrow-up-right"
        class="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
      ></iconify-icon>
    </Link>
  );
}
