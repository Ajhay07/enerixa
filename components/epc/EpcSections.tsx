import SectionHead from "@/components/SectionHead";
import { EPC_STAGES } from "@/lib/data";

export function EpcStages({ num = "01" }: { num?: string }) {
  return (
    <section className="py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <SectionHead
            num={num}
            label="Solar EPC"
            title="One contract. One team. A working plant."
            subtitle="Enerixa takes single-point responsibility for your solar project, from the first site survey to commissioning and beyond."
          />
          <div className="row">
            {EPC_STAGES.map((s, i) => (
              <div className="col-lg-4 mb-7 mb-lg-0 d-flex align-items-stretch" key={s.key}>
                <div
                  className={`card w-100 ${i === 1 ? "bg-primary" : "border"}`}
                  data-aos="fade-up"
                  data-aos-delay={String(100 + i * 100)}
                  data-aos-duration="1000"
                >
                  <div className="card-body p-7 d-flex flex-column gap-6">
                    <span
                      className={`round-64 rounded-circle hstack justify-content-center fw-bold fs-6 flex-shrink-0 ${
                        i === 1 ? "bg-dark text-white" : "bg-primary text-dark"
                      }`}
                    >
                      {s.letter}
                    </span>
                    <div className="d-flex flex-column gap-3">
                      <h3 className="mb-0">{s.title}</h3>
                      <p className="mb-0">{s.desc}</p>
                    </div>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0 pt-3 border-top">
                      {s.points.map((p) => (
                        <li className="hstack gap-3" key={p}>
                          <span
                            className={`round-32 rounded-circle flex-shrink-0 hstack justify-content-center ${
                              i === 1 ? "bg-dark" : "bg-primary"
                            }`}
                          >
                            <iconify-icon icon="lucide:check" class={`fs-6 ${i === 1 ? "text-white" : "text-dark"}`}></iconify-icon>
                          </span>
                          <h6 className="mb-0 fw-normal">{p}</h6>
                        </li>
                      ))}
                    </ul>
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
