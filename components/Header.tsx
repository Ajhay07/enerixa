"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header border-4 border-primary border-top position-fixed start-0 top-0 w-100">
      <div className="container">
        <div className="header-wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link href="/" className="logo-white">
              <img src="/enerixa-logo.png" alt="Enerixa Energy Solutions" className="img-fluid" />
            </Link>
            <Link href="/" className="logo-dark">
              <img src="/enerixa-logo.png" alt="Enerixa Energy Solutions" className="img-fluid" />
            </Link>
          </div>

          <div className="d-flex align-items-center gap-4">
            <div className="btn-group">
              <button
                className="btn btn-secondary toggle-menu round-45 p-2 d-flex align-items-center justify-content-center bg-white rounded-circle"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
                aria-label="Open menu"
              >
                <iconify-icon icon="solar:hamburger-menu-line-duotone" class="menu-icon fs-8 text-dark"></iconify-icon>
              </button>
              <ul className="dropdown-menu dropdown-menu-end p-4">
                <div className="d-flex flex-column gap-6">
                  <div className="hstack justify-content-between border-bottom pb-6">
                    <p className="mb-0 fs-5 text-dark">Menu</p>
                    <button type="button" className="btn-close opacity-75" aria-label="Close"></button>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <ul className="header-menu list-unstyled mb-0 d-flex flex-column gap-2">
                      {NAV_LINKS.map((l) => {
                        const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href.split("#")[0]);
                        return (
                          <li className="header-item" key={l.href}>
                            <Link
                              href={l.href}
                              className={`header-link hstack gap-2 fs-7 fw-bold text-dark${active ? " active" : ""}`}
                            >
                              <img
                                src="/studiova/assets/images/svgs/secondary-leaf.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="img-fluid animate-spin"
                              />
                              {l.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="hstack gap-3">
                      <Link
                        href="/epc#proposal"
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
                  <div>
                    <a className="text-dark d-block" href={COMPANY.phoneHref}>
                      {COMPANY.phone}
                    </a>
                    <a className="fs-8 text-dark fw-bold" href={`mailto:${COMPANY.email}`}>
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
