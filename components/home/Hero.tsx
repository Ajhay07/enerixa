import Link from "next/link";

export default function Hero() {
  return (
    <section className="banner-section position-relative d-flex align-items-end min-vh-100">
      <img
        src="/hero-solar-home.jpg"
        alt="Rooftop solar installation"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />
      <div className="container">
        <div className="d-flex flex-column gap-4 pb-8 position-relative z-1">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="d-flex align-items-center gap-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <img src="/studiova/assets/images/svgs/primary-leaf.svg" alt="" className="img-fluid animate-spin" />
                <p className="mb-0 text-white fs-5 text-opacity-70">
                  We engineer, procure and build <span className="text-primary">high-performing</span> solar plants across India.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h1 className="mb-0 fs-16 text-white lh-1">Enerixa</h1>
            <Link href="/epc#proposal" className="p-1 ps-7 bg-primary rounded-pill" aria-label="Request a proposal">
              <span className="bg-white round-52 rounded-circle d-flex align-items-center justify-content-center">
                <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
