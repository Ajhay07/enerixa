import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionHead from "@/components/SectionHead";
import { EpcStages } from "@/components/epc/EpcSections";
import Models from "@/components/home/Models";
import SavingsCalculator from "@/components/epc/SavingsCalculator";

export const metadata: Metadata = {
  title: "Solar EPC for Industry & Commercial",
  description:
    "Enerixa provides turnkey solar EPC: engineering, procurement and construction of rooftop solar plants for industries, commercial buildings and institutions.",
};

const field = "form-control border-bottom border-dark";

export default function EpcPage() {
  return (
    <>
      <PageBanner
        num="01"
        label="Solar EPC"
        title="Turnkey solar, built by one team."
        subtitle="Enerixa designs, procures and constructs rooftop solar for factories, commercial buildings, institutions and homes across India."
        image="/studiova/assets/images/services/services-img-1.jpg"
        cta={[
          { href: "#proposal", text: "Request a proposal" },
          { href: "#calculator", text: "Estimate savings" },
        ]}
      />

      <EpcStages num="02" />

      <Models num="03" marquee={false} />

      <section className="py-5 py-lg-11 py-xl-12 bg-light-gray" id="calculator">
        <div className="container">
          <div className="d-flex flex-column gap-5 gap-xl-10">
            <SectionHead num="04" label="Savings estimator" title="What could solar save you?" />
            <SavingsCalculator />
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-11 py-xl-12" id="proposal">
        <div className="container">
          <div className="d-flex flex-column gap-5 gap-xl-10">
            <SectionHead
              num="05"
              label="Get started"
              title="Request a site survey and proposal"
              subtitle="Tell us about your site and we will respond with next steps."
            />
            <form action="https://formspree.io/f/xqknngrn" method="POST" className="d-flex flex-column gap-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <input type="hidden" name="form" value="EPC proposal request" />
              <div className="row g-5">
                <div className="col-md-6"><input name="name" required className={field} placeholder="Name" /></div>
                <div className="col-md-6"><input name="company" required className={field} placeholder="Company / organisation" /></div>
                <div className="col-md-6"><input type="tel" name="phone" required className={field} placeholder="Phone" /></div>
                <div className="col-md-6"><input type="email" name="email" required className={field} placeholder="Email" /></div>
                <div className="col-md-6"><input name="location" required className={field} placeholder="Site location (city, state)" /></div>
                <div className="col-md-6"><input type="number" name="monthly_bill" className={field} placeholder="Average monthly bill (₹)" /></div>
                <div className="col-md-6">
                  <select name="customer_type" defaultValue="" className="form-select border-bottom border-dark">
                    <option value="" disabled>Customer type</option>
                    <option>Industrial</option>
                    <option>Commercial</option>
                    <option>Institutional</option>
                    <option>Housing society</option>
                    <option>Residential</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select name="model" defaultValue="" className="form-select border-bottom border-dark">
                    <option value="" disabled>Preferred model</option>
                    <option>CAPEX (own the plant)</option>
                    <option>OPEX / RESCO (pay per unit)</option>
                    <option>Group captive</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <textarea name="notes" rows={3} className={field} placeholder="Notes (roof type, area, timeline)"></textarea>
              <button type="submit" className="btn justify-content-center" style={{ maxWidth: "280px" }}>
                <span className="btn-text">Request proposal</span>
                <iconify-icon icon="lucide:arrow-up-right" class="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
