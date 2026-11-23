import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import { NEWS } from "@/lib/data";

/** Section 09 — resources / recent guides. */
export default function News({ num = "09" }: { num?: string }) {
  const [first, ...rest] = NEWS;
  return (
    <section className="Recent-news bg-light-gray py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <SectionHead
            num={num}
            label="Resources"
            title="Guides & insights"
            subtitle="Plain-English explainers on going solar, choosing a model and preparing your site."
          />
          <div className="row">
            <div className="col-xl-6 mb-7 mb-xl-0">
              <div className="resources d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <Link href="/epc" className="resources-img resources-img-first position-relative overflow-hidden d-block">
                  <img src={first.image} alt={first.title} className="img-fluid w-100" />
                </Link>
                <div className="resources-details">
                  <p className="mb-0">{first.date}</p>
                  <h4 className="mb-0">{first.title}</h4>
                </div>
              </div>
            </div>
            {rest.map((n, i) => (
              <div className="col-md-6 col-xl-3 mb-7 mb-xl-0" key={n.title}>
                <div className="resources d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay={String(200 + i * 100)} data-aos-duration="1000">
                  <Link href="/epc" className="resources-img position-relative overflow-hidden d-block">
                    <img src={n.image} alt={n.title} className="img-fluid w-100" />
                  </Link>
                  <div className="resources-details">
                    <p className="mb-0">{n.date}</p>
                    <h4 className="mb-0">{n.title}</h4>
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
