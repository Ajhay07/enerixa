import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { COMPANY } from "@/lib/data";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-navy/10 bg-navy-deep py-20 text-white">
      <div className="container-x text-center">
        <Reveal>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let's Talk About Your Project
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-xl text-slate-300">
            Reach out for a free consultation, detailed proposal, and reliable
            post-installation support.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Get In Touch"
                center={false}
              />
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-sm">
              <div className="flex gap-3.5">
                <Phone className="mt-0.5 size-5 text-green-brand" />
                <div>
                  <p className="font-semibold text-navy">Phone</p>
                  <a
                    href={COMPANY.phoneHref}
                    className="text-steel hover:text-navy"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Mail className="mt-0.5 size-5 text-green-brand" />
                <div>
                  <p className="font-semibold text-navy">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-steel hover:text-navy"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-3.5">
                <MapPin className="mt-0.5 size-5 text-green-brand" />
                <div>
                  <p className="font-semibold text-navy">Head Office</p>
                  <span className="text-steel">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-3">
            <form
              action="https://formspree.io/f/xqknngrn"
              method="POST"
              className="grid gap-5 rounded-xl border border-navy/10 bg-white p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-navy">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full rounded-md border border-navy/20 px-3.5 py-2 text-sm text-navy placeholder-steel focus:border-green-brand focus:ring-1 focus:ring-green-brand/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-1 w-full rounded-md border border-navy/20 px-3.5 py-2 text-sm text-navy placeholder-steel focus:border-green-brand focus:ring-1 focus:ring-green-brand/30"
                    placeholder="+91 97102 94225"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-md border border-navy/20 px-3.5 py-2 text-sm text-navy placeholder-steel focus:border-green-brand focus:ring-1 focus:ring-green-brand/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy">
                  Requirement
                </label>
                <select
                  name="requirement"
                  required
                  className="mt-1 w-full appearance-none rounded-md border border-navy/20 bg-white px-3.5 py-2 text-sm text-navy focus:border-green-brand focus:ring-1 focus:ring-green-brand/30"
                >
                  <option value="">Select a solution</option>
                  <option>Rooftop Solar</option>
                  <option>Smart Home Automation</option>
                  <option>Security & CCTV</option>
                  <option>Maintenance / AMC</option>
                  <option>Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-green-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-brand/40"
              >
                Send Enquiry
                <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
