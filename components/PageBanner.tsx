import Btn from "@/components/Btn";

/** Shorter dark photo banner used at the top of inner pages. */
export default function PageBanner({
  num,
  label,
  title,
  subtitle,
  image = "/studiova/assets/images/services/services-img-1.jpg",
  cta,
}: {
  num: string;
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  cta?: { href: string; text: string }[];
}) {
  return (
    <section className="banner-section position-relative d-flex align-items-end" style={{ minHeight: "80vh" }}>
      <img src={image} alt="" className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" />
      <div className="container">
        <div className="d-flex flex-column gap-5 pb-8 position-relative z-1">
          <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
            <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">
              {num}
            </span>
            <hr className="border-line bg-white" />
            <span className="badge text-dark bg-white">{label}</span>
          </div>
          <h1 className="mb-0 fs-14 text-white lh-1" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
            {title}
          </h1>
          {subtitle && (
            <p className="mb-0 fs-5 text-white text-opacity-70 col-xl-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="hstack gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
              {cta.map((c, i) => (
                <Btn key={c.href} href={c.href} className={i > 0 ? "border border-white border-opacity-25" : ""}>
                  {c.text}
                </Btn>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
