# Enerixa

Premium corporate website for Enerixa — an energy solutions company delivering rooftop solar, smart home automation and security & CCTV systems across India.

Built with **Next.js 14 (App Router) + TypeScript**, styled with **Tailwind CSS**, animated with **Framer Motion**, and iconography from **Lucide React**. Design matches the Enerixa brochure identity: deep navy (#003B8F) for trust/technology, Enerixa green (#65A30D) for sustainability and CTAs, with clean white & light-grey backgrounds.

## Pages & Sections

- **Home** — full-width hero image, trust-bar indicators, animated stats, solutions preview cards, "Why Enerixa" grid, a clean step-by-step process timeline, and customer testimonials.
- **About** — Who we are, Mission & Vision panels, and core values.
- **Solutions** — three premium service sections (Solar, Smart Home Automation, Security & CCTV) with bullet lists and a lead-generation CTA.
- **Projects** — filterable, reveal-animated gallery of residential, commercial, industrial and security work.
- **Contact** — contact details (phone, email, website, head office) and a Formspree-backed enquiry form (Name, Phone, Email, Requirement).

## UX

- Sticky, transparent-on-scroll navbar with mobile hamburger menu (body-scroll lock).
- Floating WhatsApp enquiry button pinned to the viewport.
- Smooth `scroll-behavior` and hash-section anchors (`/services#solar`).
- Subtle, minimal motion: fade/slide reveals on scroll, image scale-in, smooth stat counters (triggered once via `useInView`). No parallax or neon.

## Brand Rules

- Navy blue for corporate/trust sections, green for sustainability highlights and all call-to-actions.
- Clean typography hierarchy, strong spacing, realistic renewable-energy photography via Unsplash (remote `next/image`).
- No glassmorphism, no floating neumorphic cards, no gradients-as-decor, no AI-illustration style.

## Getting Started

Requires Node 18+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build     # production build (verified passing)
npm run start
```

## Notes

- The contact form posts to a Formspree endpoint (`formspree.io/f/xqknngrn`). Replace with your own endpoint or wire up a backend to actually capture submissions; the form is otherwise fully functional client-side with validation attributes.
- Photography loads from `images.unsplash.com` (configured in `next.config.mjs`). Swap `lib/data.ts` image URLs for branded assets when available.
