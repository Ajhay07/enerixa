import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import { PORTFOLIO } from "@/lib/data";

export default function Portfolio({ num = "02" }: { num?: string }) {
  return (
    <section className="featured-projects py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="d-flex flex-column gap-5 gap-xl-11">
        <div className="container">
          <SectionHead
            num={num}
            label="Portfolio"
            title="Representative projects"
            subtitle="The kinds of rooftop solar, automation and security projects Enerixa delivers. Case studies from completed sites will be added here."
          />
        </div>

        <div className="featured-projects-slider px-3">
          <div className="owl-carousel owl-theme">
            {PORTFOLIO.map((p) => (
              <div className="item" key={p.title}>
                <div className="portfolio d-flex flex-column gap-6">
                  <div className="portfolio-img position-relative overflow-hidden">
                    <img src={p.image} alt={p.title} className="img-fluid w-100" />
                    <div className="portfolio-overlay">
                      <Link
                        href="/projects"
                        className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center"
                        aria-label={p.title}
                      >
                        <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-details d-flex flex-column gap-3">
                    <h3 className="mb-0">{p.title}</h3>
                    <div className="hstack gap-2 flex-wrap">
                      {p.cats.map((c) => (
                        <span className="badge text-dark border" key={c}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hstack gap-3 justify-content-center mt-7">
            <button
              type="button"
              className="owl-nav-btn owl-nav-prev round-52 rounded-circle bg-dark text-white border-0 hstack justify-content-center"
              aria-label="Previous project"
            >
              <iconify-icon icon="lucide:arrow-left" class="fs-7"></iconify-icon>
            </button>
            <button
              type="button"
              className="owl-nav-btn owl-nav-next round-52 rounded-circle bg-primary text-dark border-0 hstack justify-content-center"
              aria-label="Next project"
            >
              <iconify-icon icon="lucide:arrow-right" class="fs-7"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
