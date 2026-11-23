import SectionHead from "@/components/SectionHead";
import { TESTIMONIALS } from "@/lib/data";

/** Section 05 — three testimonial cards (primary, dark, white). */
export default function Testimonials({ num = "05" }: { num?: string }) {
  const [a, b, c] = TESTIMONIALS;
  return (
    <section className="testimonial py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <SectionHead
            num={num}
            label="Testimonial"
            title="Stories from clients"
            subtitle="Real experiences from the homes and businesses we have powered with rooftop solar."
          />
          <div className="row gap-7 gap-lg-0">
            <div className="col-lg-4 col-xl-3 d-flex align-items-stretch">
              <div className="card bg-primary w-100" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className="card-body d-flex flex-column gap-5 gap-xl-11 justify-content-between">
                  <div className="d-flex flex-column gap-4">
                    <p className="mb-0">Hear from them</p>
                    <h4 className="mb-0">{a.quote}</h4>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-normal">{a.name}</h5>
                    <p className="mb-0">{a.org}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-xl-6 d-flex align-items-stretch">
              <div className="card bg-dark w-100" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="card-body d-flex flex-column gap-5 gap-xl-11 justify-content-between">
                  <div className="d-flex flex-column gap-4">
                    <p className="mb-0 text-white text-opacity-70">Hear from them</p>
                    <h4 className="mb-0 text-white pe-xl-2">{b.quote}</h4>
                    <ul className="list-unstyled mb-0 hstack gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <li key={i}>
                          <iconify-icon icon="solar:star-bold" class="fs-6 text-white"></iconify-icon>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h5 className="mb-1 fw-normal text-white">{b.name}</h5>
                      <p className="mb-0 text-white text-opacity-70">{b.org}</p>
                    </div>
                    <span>
                      <img src="/studiova/assets/images/testimonial/quete.svg" alt="" className="img-fluid flex-shrink-0" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3 d-flex align-items-stretch">
              <div className="card w-100" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <div className="card-body d-flex flex-column gap-5 gap-xl-11 justify-content-between">
                  <div className="d-flex flex-column gap-4">
                    <p className="mb-0">Hear from them</p>
                    <h4 className="mb-0">{c.quote}</h4>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-normal">{c.name}</h5>
                    <p className="mb-0">{c.org}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
