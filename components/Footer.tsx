import { COMPANY } from "@/lib/data";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Phone, Mail, Globe, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-x py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-sm font-medium text-slate-700 pt-2">
              Smart Energy &middot; Smart Automation &middot; Smart Security
            </p>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Complete rooftop solar plants, cutting-edge smart home automation,
              and enterprise-grade CCTV security systems for homes, businesses and
              industries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-base font-semibold text-ink">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-[#003B73]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#003B73]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#003B73]">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-[#003B73]">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-[#003B73]">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#003B73]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-semibold text-ink">Our Solutions</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/services#solar" className="hover:text-[#003B73]">
                  Rooftop Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="hover:text-[#003B73]">
                  Home Automation Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="hover:text-[#003B73]">
                  Security Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-semibold text-ink">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href={COMPANY.phoneHref} className="flex items-center gap-2.5 hover:text-[#003B73]">
                  <Phone size={15} className="text-[#003B73]" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 hover:text-[#003B73]">
                  <Mail size={15} className="text-[#003B73]" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a href={`https://${COMPANY.website}`} className="flex items-center gap-2.5 hover:text-[#003B73]">
                  <Globe size={15} className="text-[#003B73]" />
                  <span>{COMPANY.website}</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-[#003B73]">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-[#003B73]">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-[#003B73]">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="text-slate-400 hover:text-[#003B73]">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#003B73] text-slate-300 py-4 text-sm">
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Enerixa. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-300">
            <Link href="/contact" className="hover:text-white">Privacy Policy</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

