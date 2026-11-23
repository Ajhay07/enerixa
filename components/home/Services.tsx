import Btn from "@/components/Btn";
import { SERVICE_TABS } from "@/lib/data";

export default function Services({ num = "03" }: { num?: string }) {
  return (
    <section className="services py-5 py-lg-11 py-xl-12 bg-dark" id="services">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">{num}</span>
                <hr className="border-line bg-white" />
                <span className="badge text-dark bg-white">Services</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <h2 className="mb-0 text-white">What we do</h2>
                    <p className="fs-5 mb-0 text-white text-opacity-70">
                      From rooftop solar EPC to smart home automation and security, delivered as one integrated offering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-tab">
            <div className="row gap-5 gap-xl-0">
              <div className="col-xl-4">
                <div className="tab-content" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                  {SERVICE_TABS.map((t, i) => (
                    <div
                      key={t.id}
                      className={`tab-pane${i === 0 ? " active" : ""}`}
                      id={t.id}
                      role="tabpanel"
                      aria-labelledby={`${t.id}-tab`}
                      tabIndex={0}
                    >
                      <img src={t.image} alt={t.title} className="img-fluid w-100" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-8">
                <div className="d-flex flex-column gap-5">
                  <ul className="nav nav-tabs" id="servicesTab" role="tablist" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    {SERVICE_TABS.map((t, i) => (
                      <li
                        key={t.id}
                        className="nav-item py-4 py-lg-8 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                        role="presentation"
                      >
                        <div className="row w-100 align-items-center gx-3">
                          <div className="col-lg-6 col-xxl-5">
                            <button
                              className={`nav-link fs-10 fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0${i === 0 ? " active" : ""}`}
                              id={`${t.id}-tab`}
                              data-bs-toggle="tab"
                              data-bs-target={`#${t.id}`}
                              type="button"
                              role="tab"
                              aria-controls={t.id}
                              aria-selected={i === 0}
                            >
                              {t.title}
                            </button>
                          </div>
                          <div className="col-lg-6 col-xxl-7">
                            <p className="text-white text-opacity-70 mb-0">{t.desc}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Btn href="/services" className="border border-white border-opacity-25">
                    See our work
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
