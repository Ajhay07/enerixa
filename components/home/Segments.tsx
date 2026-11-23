import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import { EPC_SEGMENTS } from "@/lib/data";

const IMAGES = [
  "/studiova/assets/images/portfolio/portfolio-img-2.jpg",
  "/studiova/assets/images/portfolio/portfolio-img-3.jpg",
  "/studiova/assets/images/portfolio/portfolio-img-1.jpg",
  "/studiova/assets/images/portfolio/portfolio-img-5.jpg",
];

/** Section 06 — who we build for (uses the template's team-card layout). */
export default function Segments({ num = "06" }: { num?: string }) {
  return (
    <section className="meet-our-team py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <SectionHead
            num={num}
            label="Who we build for"
            title="Solar for homes, business and industry"
            subtitle="We size and build plants for every kind of rooftop and daytime load."
          />
          <div className="row">
            {EPC_SEGMENTS.map((s, i) => (
              <div className="col-md-6 col-xl-3 mb-7 mb-xl-0" key={s.title}>
                <div className="meet-team d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay={String(100 + i * 100)} data-aos-duration="1000">
                  <div className="meet-team-img position-relative overflow-hidden">
                    <img src={IMAGES[i]} alt={s.title} className="img-fluid w-100" />
                    <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                      <div className="hstack justify-content-end">
                        <Link
                          href="/epc"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"
                          aria-label={`${s.title} solar`}
                        >
                          <iconify-icon icon="lucide:arrow-up-right" class="fs-7 text-dark"></iconify-icon>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="meet-team-details">
                    <h4 className="mb-0">{s.title}</h4>
                    <p className="mb-0">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
