import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHead from "@/components/SectionHead";
import GetInTouch from "@/components/home/GetInTouch";
import { PORTFOLIO } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        num="01"
        label="Projects"
        title="What we build."
        subtitle="Rooftop solar, automation and security across homes, businesses and industry."
        image="/studiova/assets/images/portfolio/portfolio-img-5.jpg"
      />

      <section className="py-5 py-lg-11 py-xl-12 bg-light-gray">
        <div className="container">
          <div className="d-flex flex-column gap-5 gap-xl-11">
            <SectionHead
              num="02"
              label="Portfolio"
              title="Representative projects"
              subtitle="The kinds of projects Enerixa delivers, with indicative scope. Case studies from completed sites will be published here."
            />
            <div className="row g-5">
              {PORTFOLIO.map((p, i) => (
                <div className="col-md-6 col-xl-4" key={p.title}>
                  <div className="portfolio d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay={String(100 + (i % 3) * 100)} data-aos-duration="1000">
                    <div className="portfolio-img position-relative overflow-hidden">
                      <img src={p.image} alt={p.title} className="img-fluid w-100" />
                      <div className="portfolio-overlay">
                        <Link href="/contact" className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center" aria-label={p.title}>
                          <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
                        </Link>
                      </div>
                    </div>
                    <div className="portfolio-details d-flex flex-column gap-3">
                      <h3 className="mb-0">{p.title}</h3>
                      <div className="hstack gap-2 flex-wrap">
                        {p.cats.map((c) => (
                          <span className="badge text-dark border" key={c}>{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GetInTouch num="03" />
    </>
  );
}
