import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path d="M8 32V14l10-6v18-6 6-10 4z" fill="#003B8F" />
        <path d="M18 8v18l12-6V8l-6-4-6 4z" fill="#65A30D" />
      </svg>
      <span className="text-2xl font-extrabold tracking-tight text-navy">
        Enerixa
      </span>
    </Link>
  );
}
