"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile panel on route change, and lock scroll while it's open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]));

  return (
    <header className="header border-4 border-primary border-top position-fixed start-0 top-0 w-100">
      <div className="container">
        <div className="header-wrapper d-flex align-items-center justify-content-between gap-4">
          <div className="logo">
            <Link href="/" className="logo-white">
              <img src="/enerixa-logo.png" alt="Enerixa Energy Solutions" className="img-fluid" />
            </Link>
          </div>

          {/* Horizontal nav — desktop and up */}
          <nav className="d-none d-lg-flex" aria-label="Primary">
            <ul className="list-unstyled mb-0 d-flex align-items-center gap-6">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`nav-h-link light-dark text-white fs-6 fw-bold text-decoration-none${
                      isActive(l.href) ? " active" : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="d-none d-lg-flex align-items-center gap-5">
            <a href={COMPANY.phoneHref} className="light-dark text-white fs-6 fw-bold text-decoration-none">
              {COMPANY.phone}
            </a>
            <Link href="/epc#proposal" className="btn btn-dark text-white fs-6 bg-dark px-4 py-2 hstack gap-2">
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="d-lg-none toggle-menu round-45 p-2 d-flex align-items-center justify-content-center bg-white rounded-circle border-0"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <iconify-icon
              icon={open ? "lucide:x" : "solar:hamburger-menu-line-duotone"}
              class="menu-icon fs-8 text-dark"
            ></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`mobile-nav-panel d-lg-none${open ? " open" : ""}`}>
        <div className="container py-6">
          <ul className="list-unstyled d-flex flex-column gap-1 mb-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`d-block fs-6 fw-bold py-3 border-bottom${isActive(l.href) ? " text-primary" : " text-dark"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hstack gap-3">
            <Link
              href="/epc#proposal"
              onClick={() => setOpen(false)}
              className="btn btn-dark text-white fs-6 bg-dark px-3 py-2 w-50 hstack justify-content-center"
            >
              Get a Quote
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="btn btn-outline-light fs-6 bg-primary px-3 py-2 text-dark w-50 hstack justify-content-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
