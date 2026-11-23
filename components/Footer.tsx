import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer bg-dark py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 mb-8 mb-xl-0">
            <div className="d-flex flex-column gap-8 pe-xl-5">
              <h2 className="mb-0 text-white">Build something brighter together?</h2>
              <div className="d-flex flex-column gap-2">
                <a href={`mailto:${COMPANY.email}`} className="link-hover hstack gap-3 text-white fs-5">
                  <iconify-icon icon="lucide:arrow-up-right" class="fs-7 text-primary"></iconify-icon>
                  {COMPANY.email}
                </a>
                <a href={COMPANY.phoneHref} className="link-hover hstack gap-3 text-white fs-5">
                  <iconify-icon icon="lucide:phone" class="fs-7 text-primary"></iconify-icon>
                  {COMPANY.phone}
                </a>
                <span className="hstack gap-3 text-white fs-5">
                  <iconify-icon icon="lucide:map-pin" class="fs-7 text-primary"></iconify-icon>
                  Chennai, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-2 mb-8 mb-xl-0">
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li><Link className="link-hover fs-5 text-white" href="/">Home</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/about">About</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/epc">Solar EPC</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/services">Services</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/projects">Projects</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 col-xl-2 mb-8 mb-xl-0">
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li><Link className="link-hover fs-5 text-white" href="/epc#calculator">Savings estimator</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/epc#proposal">Request a proposal</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/#subsidy">Subsidy</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/#faq">FAQs</Link></li>
            </ul>
          </div>

          <div className="col-md-4 col-xl-3 mb-8 mb-xl-0">
            <p className="mb-0 text-white text-opacity-70 text-md-end">
              © {new Date().getFullYear()} Enerixa Energy Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
