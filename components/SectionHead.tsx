/** The template's numbered section header: "NN ——— [Label]" + heading + intro. */
export default function SectionHead({
  num,
  label,
  title,
  subtitle,
  dark = false,
}: {
  num: string;
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="row gap-7 gap-xl-0">
      <div className="col-xl-4 col-xxl-4">
        <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
          <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">
            {num}
          </span>
          <hr className={`border-line${dark ? " bg-white" : ""}`} />
          <span className={`badge ${dark ? "text-dark bg-white" : "text-bg-dark"}`}>{label}</span>
        </div>
      </div>
      <div className="col-xl-8 col-xxl-7">
        <div className="row">
          <div className="col-xxl-8">
            <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <h2 className={`mb-0${dark ? " text-white" : ""}`}>{title}</h2>
              {subtitle && <p className={`fs-5 mb-0${dark ? " text-white text-opacity-70" : ""}`}>{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
