"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 6);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-navy/10 transition-shadow ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white/90"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-steel hover:text-navy transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="p-2 text-navy"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <a
          href={COMPANY.phoneHref}
          className="hidden md:inline-flex items-center text-sm font-semibold text-navy hover:text-green-brand transition-colors"
        >
          Call {COMPANY.phone}
        </a>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t transition-[max-height] duration-300 ${
          open ? "max-h-screen" : "max-h-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2 p-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-steel hover:text-navy"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
