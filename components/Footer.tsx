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
            <p className="text-xs font-semibold text-slate-700 tracking-wide pt-2">
              Smart Energy | Smart Automation | Smart Security
            </p>
            <p className="text-xs text-slate-500">
              One Partner. Complete Solutions.
            </p>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Complete rooftop solar plants, cutting-edge smart home automation,
              and enterprise-grade CCTV security systems for homes, businesses and
              industries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-600">
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
            <h4 className="text-sm font-bold text-slate-900">Our Solutions</h4>
            <ul className="space-y-2 text-xs text-slate-600">
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
            <h4 className="text-sm font-bold text-slate-900">Get in Touch</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-[#003B73]">
                  <Phone size={13} className="text-[#003B73]" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-[#003B73]">
                  <Mail size={13} className="text-[#003B73]" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a href={`https://${COMPANY.website}`} className="flex items-center gap-2 hover:text-[#003B73]">
                  <Globe size={13} className="text-[#003B73]" />
                  <span>{COMPANY.website}</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 pt-2">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-[#003B73] text-white hover:bg-[#5FAF35]">
                <Facebook size={13} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-[#003B73] text-white hover:bg-[#5FAF35]">
                <Linkedin size={13} />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-[#003B73] text-white hover:bg-[#5FAF35]">
                <Instagram size={13} />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-[#003B73] text-white hover:bg-[#5FAF35]">
                <Youtube size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#003B73] text-slate-300 py-3 text-xs">
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

