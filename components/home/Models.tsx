import Btn from "@/components/Btn";
import SectionHead from "@/components/SectionHead";
import { EPC_MODELS } from "@/lib/data";

const POINTS: Record<string, string[]> = {
  CAPEX: ["Own the asset from day one", "Highest lifetime savings", "Accelerated depreciation benefit", "All generation is yours"],
  "OPEX / RESCO": ["Zero upfront investment", "Pay only for units generated", "Enerixa owns and maintains the plant", "Lower, predictable tariff"],
  "Group captive": ["Shared ownership of a larger plant", "Suited to high-load industry", "Offset grid power at scale", "Compliance handled for you"],
};

const MARQUEE = [
  "Tier-1 PV modules",
  "Bankable inverters",
  "Galvanised structures",
  "Net metering",
  "Monitoring & O&M",
  "Certified engineers",
];

export default function Models({ num = "07", marquee = true }: { num?: string; marquee?: boolean }) {
  const tags = [...MARQUEE, ...MARQUEE];
  return (
    <section className="pricing-section py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <div className="d-flex flex-column gap-5 gap-xl-11">
            <SectionHead
              num={num}
              label="Engagement models"
              title="Choose how you go solar"
              subtitle="Models differ in who funds and owns the plant. Availability depends on project size and structure."
            />
            <div className="row">
              {EPC_MODELS.map((m, i) => (
                <div className="col-lg-6 col-xl-4 mb-7 mb-xl-0 d-flex align-items-stretch" key={m.name}>
                  <div className="card w-100" data-aos="fade-up" data-aos-delay={String(100 + i * 100)} data-aos-duration="1000">
                    <div className="card-body p-7 p-xxl-5 d-flex flex-column gap-8">
                      <div className="d-flex flex-column gap-6">
                        <div className="hstack gap-3">
                          <h5 className="mb-0 fw-medium">{m.name}</h5>
                          {i === 1 && (
                            <span className="badge text-bg-dark hstack gap-2">
                              <iconify-icon icon="lucide:flame" class="fs-5"></iconify-icon>Most popular
                            </span>
                          )}
                        </div>
                        <div className="hstack gap-2">
                          <h3 className="mb-0">{m.tag}</h3>
                        </div>
                        <p className="mb-0">{m.desc}</p>
                      </div>
                      <div className="pt-8 border-top d-flex flex-column gap-6">
                        <h6 className="mb-0 fw-normal">What&apos;s included:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                          {(POINTS[m.name] || []).map((li) => (
                            <li className="hstack gap-3" key={li}>
                              <span className="round-32 rounded-circle bg-primary flex-shrink-0 hstack justify-content-center">
                                <iconify-icon icon="lucide:check" class="fs-6 text-dark"></iconify-icon>
                              </span>
                              <h6 className="mb-0 fw-normal">{li}</h6>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Btn href="/epc#proposal" className="w-100 justify-content-center">
                        Request a proposal
                      </Btn>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {marquee && (
            <div className="d-flex flex-column gap-8" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <p className="fs-5 mb-0 text-center text-dark">Built with bankable, Tier-1 equipment</p>
              <div className="marquee w-100 d-flex align-items-center overflow-hidden">
                <div className="marquee-content d-flex align-items-center gap-8">
                  {tags.map((t, i) => (
                    <div className="marquee-tag hstack justify-content-center" key={i}>
                      <span className="fs-5 fw-semibold text-dark text-nowrap">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
