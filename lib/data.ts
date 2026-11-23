export const COMPANY = {
  name: "Enerixa Energy Solutions",
  tagline: "Powering a Sustainable Future",
  phone: "+91 97102 94225",
  phoneHref: "tel:+919710294225",
  email: "sales@enerixa.in",
  website: "www.enerixa.in",
  whatsapp:
    "https://wa.me/919710294225?text=Hi%20Enerixa%2C%20I%20would%20like%20a%20free%20consultation.",
};

export const IMG = {
  hero: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
  heroHouse: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  heroModernSolarVilla: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
  aboutSolarField: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
  about: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
  solar: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
  automation: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  security: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
  whyChooseBg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
  benefitSolar: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
};

export const PROJECTS = [
  {
    title: "Independent Villa Rooftop Plant",
    category: "Residential Solar",
    location: "Chennai, TN",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=80",
    detail: "8 kWp · On-grid · Net metered",
  },
  {
    title: "Textile Manufacturing Facility",
    category: "Industrial Solar",
    location: "Coimbatore, TN",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    detail: "250 kWp · High-efficiency mono PERC",
  },
  {
    title: "Integrated Smart Villa Automation",
    category: "Smart Home",
    location: "Bengaluru, KA",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    detail: "Lighting · Climate · Curtains · Voice",
  },
  {
    title: "Retail Chain CCTV Deployment",
    category: "Security & CCTV",
    location: "Madurai, TN",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    detail: "48 IP cameras · Remote monitoring · AMC",
  },
  {
    title: "Commercial Office Rooftop",
    category: "Commercial Solar",
    location: "Hyderabad, TS",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    detail: "120 kWp · Zero-export control",
  },
  {
    title: "Apartment Common-Area Solar",
    category: "Residential Solar",
    location: "Trichy, TN",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    detail: "40 kWp · Shared infrastructure",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/epc", label: "Solar EPC" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];


export const EPC_STAGES = [
  {
    key: "engineering",
    letter: "E",
    title: "Engineering",
    desc: "Site survey, shadow and yield analysis, load study, system sizing, electrical and structural design, and DISCOM / net-metering documentation.",
    points: ["Site survey & feasibility", "Yield simulation & sizing", "Electrical & structural design", "Statutory approvals support"],
  },
  {
    key: "procurement",
    letter: "P",
    title: "Procurement",
    desc: "Sourcing of modules, inverters, mounting structures, cables and protection equipment against a defined bill of materials and quality plan.",
    points: ["Tier-1 modules & bankable inverters", "Vendor and quality checks", "Transparent bill of materials", "Logistics to site"],
  },
  {
    key: "construction",
    letter: "C",
    title: "Construction",
    desc: "Installation, testing, commissioning and handover under one project team, with safety and quality controls on site.",
    points: ["Structure, module & AC/DC works", "Testing & commissioning", "Grid synchronisation", "Documentation & handover"],
  },
];

export const EPC_MODELS = [
  {
    name: "CAPEX",
    tag: "You own the plant",
    desc: "You fund the project and own the asset from day one. Highest lifetime savings and access to depreciation benefits.",
    best: "Businesses with capital and a long-term site",
  },
  {
    name: "OPEX / RESCO",
    tag: "Pay per unit",
    desc: "A third party funds and owns the plant; you buy the solar power at an agreed per-unit tariff. No upfront cost.",
    best: "Companies who prefer zero upfront investment",
  },
  {
    name: "Group captive",
    tag: "Shared ownership",
    desc: "Several consumers co-own a larger plant to offset grid power, usually for high-consumption industrial users.",
    best: "High-load industrial consumers",
  },
];

export const EPC_SEGMENTS = [
  { title: "Industrial", desc: "Factories, warehouses and processing units with high daytime load." },
  { title: "Commercial", desc: "Offices, malls, hotels, hospitals and retail with large rooftops." },
  { title: "Institutional", desc: "Schools, colleges and public buildings that run long daytime hours." },
  { title: "Housing societies", desc: "Apartment common areas, lifts, pumps and street lighting." },
];

export const STATS = [
  { target: 4, suffix: " kWh", unit: "/kWp daily", label: "Typical generation per kWp installed in India" },
  { target: 25, suffix: "+", unit: "years", label: "Design life of a quality rooftop solar plant" },
  { target: 100, suffix: "%", unit: "turnkey", label: "Engineering, procurement and construction in-house" },
];

export const PORTFOLIO = [
  { title: "Independent Villa Rooftop", cats: ["Residential", "On-grid"], image: "/studiova/assets/images/portfolio/portfolio-img-1.jpg" },
  { title: "Textile Manufacturing Facility", cats: ["Industrial", "EPC"], image: "/studiova/assets/images/portfolio/portfolio-img-2.jpg" },
  { title: "Commercial Office Rooftop", cats: ["Commercial", "Net metered"], image: "/studiova/assets/images/portfolio/portfolio-img-3.jpg" },
  { title: "Solar Carport Structure", cats: ["Commercial", "Carport"], image: "/studiova/assets/images/portfolio/portfolio-img-4.jpg" },
  { title: "Housing Society Common Area", cats: ["Residential", "Shared"], image: "/studiova/assets/images/portfolio/portfolio-img-5.jpg" },
  { title: "Rooftop O&M Programme", cats: ["Service", "AMC"], image: "/studiova/assets/images/portfolio/portfolio-img-6.jpg" },
];

export const SERVICE_TABS = [
  { id: "solar", title: "Rooftop Solar EPC", image: "/studiova/assets/images/services/services-img-1.jpg", desc: "Engineering, procurement and construction of on-grid rooftop plants for industry, commerce and homes, with net-metering support." },
  { id: "automation", title: "Home Automation", image: "/studiova/assets/images/services/services-img-2.jpg", desc: "Centralised lighting, climate and curtain control with mobile app and voice assistant integration for modern homes." },
  { id: "security", title: "Security & CCTV", image: "/studiova/assets/images/services/services-img-3.jpg", desc: "HD and IP surveillance with remote mobile viewing, night vision and local or cloud recording for homes and businesses." },
  { id: "om", title: "Monitoring & O&M", image: "/studiova/assets/images/services/services-img-4.jpg", desc: "Generation monitoring, panel cleaning and scheduled maintenance under annual maintenance contracts." },
];

export const TESTIMONIALS = [
  { quote: "Enerixa handled the survey, approvals and install end to end. The plant has run without a hitch.", name: "Operations Manager", org: "Manufacturing unit, Coimbatore", stars: 5 },
  { quote: "Clear proposal, honest numbers and a clean installation. Our electricity bill dropped sharply from the first month.", name: "Facility Head", org: "Commercial office, Chennai", stars: 5 },
  { quote: "Professional team and responsive after-sales support. Highly recommend for rooftop solar.", name: "Home Owner", org: "Residential villa, Trichy", stars: 5 },
];

export const FAQS = [
  ["What does solar EPC mean?", "EPC stands for Engineering, Procurement and Construction. Enerixa designs the plant, sources the equipment and builds and commissions it under a single contract, so you deal with one accountable team."],
  ["Who is EPC suited for?", "Factories, commercial buildings, institutions and housing societies with high daytime consumption and usable roof or land area. We also install residential rooftop systems."],
  ["What commercial models are available?", "Typically CAPEX (you own the plant), OPEX / RESCO (you pay per unit generated) and group captive for larger industrial users. Availability depends on project size and structure."],
  ["How long does a project take?", "Timelines depend on capacity, approvals and equipment lead times. We share a schedule in the proposal after the site survey."],
  ["Do you handle approvals and net metering?", "Yes. We prepare the documentation and coordinate with the DISCOM for net-metering and commissioning."],
];

export const NEWS = [
  { date: "Guide", title: "How rooftop solar EPC works, from survey to commissioning", image: "/studiova/assets/images/resources/resources-1.jpg" },
  { date: "Explainer", title: "CAPEX vs OPEX: choosing a commercial solar model", image: "/studiova/assets/images/resources/resources-2.jpg" },
  { date: "Checklist", title: "Preparing your roof for a solar installation", image: "/studiova/assets/images/resources/resources-3.jpg" },
];
