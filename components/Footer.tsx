import { COMPANY } from "@/lib/data";
import Link from "next/link";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy-deep text-slate-300">
      <div className="container-x py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 32V14l10-6v18-6 6-10 4z" fill="#003B8F" />
                <path d="M18 8v18l12-6V8l-6-4-6 4z" fill="#65A30D" />
              </svg>
              <span className="text-xl font-extrabold text-white">
                Enerixa
              </span>
            </div>
            <p className="text-sm max-w-xs">
              {COMPANY.name} — intelligent solar, home automation and security
              solutions powering a sustainable future.
            </p>
            <p className="text-xs">© {new Date().getFullYear()} Enerxia Energy Pvt. Ltd.</p>
          </div>

          <FooterLinks
            title="Solutions"
            links={["Rooftop Solar", "Smart Home Automation", "Security & CCTV"]}
          />
          <FooterLinks
            title="Pages"
            links={["About", "Projects", "Contact"]}
          />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-100">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 text-green-brand" />{" "}
                <span>{COMPANY.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 text-green-brand" />{" "}
                <span>{COMPANY.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="mt-0.5 size-4 text-green-brand" />{" "}
                <span>{COMPANY.website}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 text-green-brand" />{" "}
                <span>Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy/10 pt-6 flex flex-col sm:justify-between sm:flex-row gap-4 text-xs text-slate-500">
          <span>All rights reserved. | CIN: UXXXXXX</span>
          <span>Registered Office: Chennai, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l}>
            <Link
              href={
                l === "Home"
                  ? "/"
                  : "/" + l.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")
              }
              className="hover:text-white transition-colors"
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
