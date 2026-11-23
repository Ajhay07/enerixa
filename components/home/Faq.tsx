import SectionHead from "@/components/SectionHead";
import { FAQS } from "@/lib/data";

export default function Faq({ num = "08" }: { num?: string }) {
  return (
    <section className="faq py-5 py-lg-11 py-xl-12" id="faq">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <SectionHead
            num={num}
            label="FAQs"
            title="Frequently asked questions"
            subtitle="Quick answers about solar EPC with Enerixa. Can't find yours? Get in touch."
          />
          <div className="row justify-content-end">
            <div className="col-xl-8">
              <div className="accordion accordion-flush" id="faqAccordion" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                {FAQS.map(([q, a], i) => (
                  <div className="accordion-item" key={q}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed fs-8 fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-${i}`}
                        aria-expanded="false"
                        aria-controls={`faq-${i}`}
                      >
                        {q}
                      </button>
                    </h2>
                    <div id={`faq-${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0 fs-5 text-dark">{a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
