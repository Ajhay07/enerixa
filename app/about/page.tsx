import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionHead from "@/components/SectionHead";
import Segments from "@/components/home/Segments";
import GetInTouch from "@/components/home/GetInTouch";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

const VALUES = [
  ["Quality equipment", "Tier-1 modules, inverters and controllers from established manufacturers."],
  ["Expert installation", "Plants engineered and executed by experienced electrical engineers."],
  ["End-to-end delivery", "Design, procurement, installation, commissioning and after-sales with one partner."],
  ["Reliable after-sales", "AMC plans and monitoring to keep your plant performing."],
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        num="01"
        label="About Enerixa"
        title="Energising tomorrow, responsibly."
        subtitle="A solar EPC company delivering engineering, procurement and construction, with home automation and security built in."
        image="/studiova/assets/images/services/services-img-4.jpg"
      />

      <section className="py-5 py-lg-11 py-xl-12">
        <div className="container">
          <SectionHead num="02" label="Who we are" title="Intelligent energy, automated living, secured spaces." />
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <img src="/studiova/assets/images/portfolio/portfolio-img-2.jpg" alt="Rooftop solar" className="img-fluid w-100 rounded" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column gap-4 fs-5">
                <p className="mb-0">
                  Enerixa provides solar EPC along with home automation and security solutions, helping homes, businesses and
                  industries reduce costs and adopt sustainable technology.
                </p>
                <p className="mb-0">
                  Headquartered in Chennai, we design, install and maintain end-to-end systems, from rooftop solar plants and
                  net-metering-compliant designs to integrated smart-home experiences and CCTV networks.
                </p>
                <div className="hstack gap-4 flex-wrap fw-bold">
                  <a href={COMPANY.phoneHref} className="text-dark">{COMPANY.phone}</a>
                  <a href={`mailto:${COMPANY.email}`} className="text-dark">{COMPANY.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-11 py-xl-12 bg-dark">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <div className="card bg-primary h-100"><div className="card-body">
                <h3 className="mb-3">Our mission</h3>
                <p className="mb-0 fs-5">To accelerate sustainable energy adoption across India through engineered solar, automation and security solutions that are reliable and built to last.</p>
              </div></div>
            </div>
            <div className="col-md-6">
              <div className="card border border-light border-opacity-25 bg-transparent h-100"><div className="card-body">
                <h3 className="mb-3 text-white">Our vision</h3>
                <p className="mb-0 fs-5 text-white text-opacity-70">To be India&apos;s most trusted partner for clean energy, connected living and secure environments, powering the future responsibly.</p>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-11 py-xl-12">
        <div className="container">
          <SectionHead num="03" label="Our values" title="Built on engineering excellence" />
          <div className="row g-4">
            {VALUES.map(([t, d], i) => (
              <div className="col-md-6 col-xl-3" key={t}>
                <div className="card border h-100" data-aos="fade-up" data-aos-delay={String(100 + i * 100)} data-aos-duration="1000">
                  <div className="card-body d-flex flex-column gap-3">
                    <span className="round-45 rounded-circle bg-primary hstack justify-content-center">
                      <iconify-icon icon="lucide:check" class="fs-7 text-dark"></iconify-icon>
                    </span>
                    <h5 className="mb-0">{t}</h5>
                    <p className="mb-0">{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Segments num="04" />
      <GetInTouch num="05" />
    </>
  );
}
