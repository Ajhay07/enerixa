import Btn from "@/components/Btn";
import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="stats-facts py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
      <div className="container">
        <div className="row gap-7 gap-xl-0">
          <div className="col-xl-4 col-xxl-4">
            <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
              <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">01</span>
              <hr className="border-line" />
              <span className="badge text-bg-dark">Stats &amp; facts</span>
            </div>
          </div>
          <div className="col-xl-8 col-xxl-7">
            <div className="d-flex flex-column gap-9">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <h2 className="mb-0">Clean solar power, engineered end to end.</h2>
                    <p className="fs-5 mb-0">
                      Enerixa takes single-point responsibility for your rooftop solar project, from the first site survey to
                      commissioning and ongoing maintenance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {STATS.map((s, i) => (
                  <div className="col-md-6 col-lg-4 mb-7 mb-lg-0" key={s.label}>
                    <div
                      className="d-flex flex-column gap-6 pt-9 border-top"
                      data-aos="fade-up"
                      data-aos-delay={String(200 + i * 100)}
                      data-aos-duration="1000"
                    >
                      <h2 className="mb-0 fs-14">
                        <span className="count" data-target={String(s.target)}>
                          {s.target}
                        </span>
                        {s.suffix} <span className="fs-5 fw-normal">{s.unit}</span>
                      </h2>
                      <p className="mb-0">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Btn href="/about">Who we are</Btn>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-0 start-0" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
        <img src="/studiova/assets/images/backgrounds/stats-facts-bg.svg" alt="" className="img-fluid" />
      </div>
    </section>
  );
}
