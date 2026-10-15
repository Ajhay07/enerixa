"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-slate-200 py-2.5"
          : "bg-white/90 backdrop-blur-sm border-transparent py-3 lg:py-3.5"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Logo priority />

        {/* Center navigation */}
        <nav className="hidden lg:flex items-center lg:gap-7 xl:gap-9">
          {NAV_LINKS.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  href="/services"
                  className="flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-ink transition-colors py-1.5"
                >
                  {l.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                {solutionsOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-lg py-2 z-50">
                    <Link
                      href="/#solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-ink/80 hover:bg-[#F6F4EF] hover:text-[#003B73]"
                    >
                      Rooftop Solar Solutions
                    </Link>
                    <Link
                      href="/#solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-ink/80 hover:bg-[#F6F4EF] hover:text-[#003B73]"
                    >
                      Home Automation Solutions
                    </Link>
                    <Link
                      href="/#solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-ink/80 hover:bg-[#F6F4EF] hover:text-[#003B73]"
                    >
                      Security Solutions
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#003B73] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#062A52] group"
          >
            <span>Get a Quote</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-[#003B73] px-3.5 py-1.5 text-xs font-medium text-white"
          >
            Quote
            <ArrowUpRight size={13} />
          </Link>
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
            className="p-1.5 text-[#003B73] hover:bg-slate-100"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col p-5 gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink/85 hover:text-[#003B73] border-b border-slate-100 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-[#003B73] py-3 text-sm font-medium text-white"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
