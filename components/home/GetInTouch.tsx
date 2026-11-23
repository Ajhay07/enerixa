import { COMPANY } from "@/lib/data";

/** Section 10 — get in touch form (posts to Formspree). */
export default function GetInTouch({ num = "10" }: { num?: string }) {
  return (
    <section className="get-in-touch py-5 py-lg-11 py-xl-12" id="contact">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">{num}</span>
                <hr className="border-line" />
                <span className="badge text-bg-dark">Contact us</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <h2 className="mb-0">Get in touch</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between gap-7 gap-xl-0">
            <div className="col-xl-3">
              <p className="mb-0 fs-5" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                Tell us about your site and we will come back with a survey plan and a proposal.
              </p>
              <div className="d-flex flex-column gap-2 mt-6">
                <a className="hstack gap-2 text-dark fw-bold" href={COMPANY.phoneHref}>
                  <iconify-icon icon="lucide:phone" class="fs-7 text-primary"></iconify-icon>
                  {COMPANY.phone}
                </a>
                <a className="hstack gap-2 text-dark" href={`mailto:${COMPANY.email}`}>
                  <iconify-icon icon="lucide:mail" class="fs-7 text-primary"></iconify-icon>
                  {COMPANY.email}
                </a>
              </div>
            </div>
            <div className="col-xl-8">
              <form
                action="https://formspree.io/f/xqknngrn"
                method="POST"
                className="d-flex flex-column gap-7"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <input type="hidden" name="form" value="Home contact" />
                <div className="row g-5">
                  <div className="col-md-6">
                    <input type="text" name="name" required className="form-control border-bottom border-dark" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="tel" name="phone" required className="form-control border-bottom border-dark" placeholder="Phone" />
                  </div>
                </div>
                <div>
                  <input type="email" name="email" required className="form-control border-bottom border-dark" placeholder="Email" />
                </div>
                <div>
                  <select name="requirement" required defaultValue="" className="form-select border-bottom border-dark">
                    <option value="" disabled>
                      What do you need?
                    </option>
                    <option>Solar EPC (Industrial / Commercial)</option>
                    <option>Rooftop Solar (Home)</option>
                    <option>Home Automation</option>
                    <option>Security &amp; CCTV</option>
                    <option>Maintenance / AMC</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={3}
                    className="form-control border-bottom border-dark"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <button type="submit" className="btn w-100 justify-content-center">
                  <span className="btn-text">Submit message</span>
                  <iconify-icon
                    icon="lucide:arrow-up-right"
                    class="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                  ></iconify-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
