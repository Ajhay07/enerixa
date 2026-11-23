"use client";

import { useState, useMemo } from "react";

// Indicative planning assumptions only. Real figures come from a site survey.
const UNITS_PER_KWP_MONTH = 120;
const SQM_PER_KWP = 10;
const COST_PER_KWP = 50000;
const DEGRADATION = 0.007;

const inr = (n: number) =>
  n >= 1e7 ? `₹${(n / 1e7).toFixed(2)} Cr` : n >= 1e5 ? `₹${(n / 1e5).toFixed(2)} L` : `₹${Math.round(n).toLocaleString("en-IN")}`;

export default function SavingsCalculator() {
  const [bill, setBill] = useState(100000);
  const [tariff, setTariff] = useState(8);
  const [area, setArea] = useState(2000);

  const r = useMemo(() => {
    const monthlyUnits = bill / Math.max(tariff, 1);
    const sizeByLoad = monthlyUnits / UNITS_PER_KWP_MONTH;
    const sizeByRoof = area / SQM_PER_KWP;
    const kwp = Math.max(0, Math.min(sizeByLoad, sizeByRoof));
    const yearUnits = kwp * UNITS_PER_KWP_MONTH * 12;
    const yearSaving = yearUnits * tariff;
    const cost = kwp * COST_PER_KWP;
    let life = 0;
    for (let y = 0; y < 25; y++) life += yearSaving * Math.pow(1 - DEGRADATION, y);
    return { kwp, yearUnits, yearSaving, cost, payback: yearSaving ? cost / yearSaving : 0, life, roofLimited: sizeByRoof < sizeByLoad };
  }, [bill, tariff, area]);

  return (
    <div className="row g-5 align-items-stretch">
      <div className="col-lg-6 d-flex align-items-stretch">
        <div className="card border w-100">
          <div className="card-body p-7 d-flex flex-column gap-6">
            <label className="d-flex flex-column gap-2">
              <span className="fw-bold text-dark">Monthly electricity bill (₹)</span>
              <input type="number" min={0} value={bill} onChange={(e) => setBill(+e.target.value)} className="form-control border-bottom border-dark" />
            </label>
            <label className="d-flex flex-column gap-2">
              <span className="fw-bold text-dark">Grid tariff (₹ per unit)</span>
              <input type="number" min={1} step={0.5} value={tariff} onChange={(e) => setTariff(+e.target.value)} className="form-control border-bottom border-dark" />
            </label>
            <label className="d-flex flex-column gap-2">
              <span className="fw-bold text-dark">Usable shadow-free roof area (sq m)</span>
              <input type="number" min={0} value={area} onChange={(e) => setArea(+e.target.value)} className="form-control border-bottom border-dark" />
            </label>
            <p className="mb-0 small text-muted">
              Indicative estimate (~{UNITS_PER_KWP_MONTH} units/kWp/month, ~{SQM_PER_KWP} sq m/kWp, ~₹{COST_PER_KWP.toLocaleString("en-IN")}/kWp,
              {" "}{(DEGRADATION * 100).toFixed(1)}% yearly degradation, no subsidy). Actual results depend on the site survey and design.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-6 d-flex align-items-stretch">
        <div className="calc-result w-100">
          <div className="p-7 d-flex flex-column gap-6">
            <div>
              <p className="mb-1 text-primary fw-bold">Estimated plant</p>
              <h2 className="mb-0 text-white">{r.kwp.toFixed(1)} kWp</h2>
              {r.roofLimited && <p className="mb-0 small text-white text-opacity-70">Limited by roof area; your load could support more.</p>}
            </div>
            <div className="row g-4">
              {[
                ["Annual generation", `${Math.round(r.yearUnits).toLocaleString("en-IN")} units`],
                ["Annual savings", inr(r.yearSaving)],
                ["Indicative cost", inr(r.cost)],
                ["Simple payback", r.payback ? `${r.payback.toFixed(1)} years` : "-"],
              ].map(([k, v]) => (
                <div className="col-6" key={k}>
                  <p className="mb-1 small text-white text-opacity-70 text-uppercase">{k}</p>
                  <h5 className="mb-0 text-white">{v}</h5>
                </div>
              ))}
            </div>
            <div className="pt-5 border-top border-light border-opacity-25">
              <p className="mb-1 small text-white text-opacity-70 text-uppercase">25-year savings (approx.)</p>
              <h4 className="mb-0 text-white">{inr(r.life)}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
