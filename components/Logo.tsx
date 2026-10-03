import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  /** Load the logo eagerly — use for the above-the-fold header instance. */
  priority?: boolean;
};

/**
 * Enerixa brand logo.
 *
 * Renders the official artwork at /public/enerixa-logo.png exactly as supplied:
 * no recolouring, cropping, stretching or re-typing of the wordmark, the
 * "ENERGY SOLUTIONS" subtitle, its decorative rules or the ™ mark.
 *
 * The source PNG is 2172x724 (3:1) but carries ~22% empty white margin above and
 * below the artwork (the visible mark only occupies y=159..567). The small negative
 * vertical margins below stop that built-in padding from inflating the header and
 * footer height — the artwork itself is never clipped, scaled unevenly or altered.
 */
export default function Logo({ priority = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src="/enerixa-logo.png"
        alt="Enerixa Energy Solutions"
        width={2172}
        height={724}
        priority={priority}
        sizes="(min-width: 1024px) 220px, (min-width: 640px) 180px, 150px"
        className="-my-2 h-auto w-[150px] sm:-my-2.5 sm:w-[180px] lg:-my-[13px] lg:w-[220px]"
      />
    </Link>
  );
}