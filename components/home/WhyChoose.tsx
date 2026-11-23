export default function WhyChoose({ num = "04" }: { num?: string }) {
  return (
    <section className="why-choose-us py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="row justify-content-between gap-5 gap-xl-0">
          <div className="col-xl-3 col-xxl-3">
            <div className="d-flex flex-column gap-7">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">{num}</span>
                <hr className="border-line" />
                <span className="badge text-bg-dark">Why us</span>
              </div>
              <h2 className="mb-0" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                Why choose us
              </h2>
              <p className="mb-0 fs-5" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                Engineering discipline, quality equipment and one accountable team from design to commissioning.
              </p>
            </div>
          </div>

          <div className="col-xl-9 col-xxl-8">
            <div className="row">
              {/* Card 1 — accountability */}
              <div className="col-lg-4 mb-7 mb-lg-0">
                <div className="card position-relative overflow-hidden bg-primary h-100" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column gap-3 position-relative z-1">
                      <ul className="list-unstyled mb-0 hstack gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <li key={i}>
                            <iconify-icon icon="solar:star-bold" class="fs-6 text-dark"></iconify-icon>
                          </li>
                        ))}
                      </ul>
                      <p className="mb-0 fs-6 text-dark">
                        One contract and one project team, accountable from the first site visit to a plant that is generating.
                      </p>
                    </div>
                    <div className="position-relative z-1">
                      <div className="pb-6 border-bottom">
                        <h2 className="mb-0">Single</h2>
                        <p className="mb-0">point of accountability</p>
                      </div>
                      <div className="pt-6">
                        <h5 className="mb-0">Engineering · Procurement · Construction</h5>
                      </div>
                    </div>
                    <div className="position-absolute bottom-0 end-0">
                      <img src="/studiova/assets/images/backgrounds/customer-satisfaction-bg.svg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 — image + dark stat */}
              <div className="col-lg-4 mb-7 mb-lg-0">
                <div className="d-flex flex-column gap-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <div className="position-relative">
                    <img src="/studiova/assets/images/services/services-img-1.jpg" alt="Rooftop solar" className="img-fluid w-100" />
                  </div>
                  <div className="card bg-dark">
                    <div className="card-body d-flex flex-column gap-7">
                      <div>
                        <h2 className="mb-0 text-white">100%</h2>
                        <p className="mb-0 text-white text-opacity-70">Turnkey EPC delivered in-house</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 — bordered, with logo */}
              <div className="col-lg-4 mb-7 mb-lg-0">
                <div className="card border h-100 position-relative overflow-hidden" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                  <span className="border rounded-circle round-490 d-block position-absolute top-0 start-50 translate-middle"></span>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h2 className="mb-0">25+ yr</h2>
                      <p className="mb-0 text-dark">Plant design life</p>
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <img src="/enerixa-logo.png" alt="Enerixa" className="img-fluid" style={{ maxWidth: "150px" }} />
                      <p className="mb-0 fs-5 text-dark">
                        Tier-1 modules and bankable inverters, installed by certified engineers and backed by after-sales support.
                      </p>
                    </div>
                  </div>
                  <span className="border rounded-circle round-490 d-block position-absolute top-100 start-50 translate-middle"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
