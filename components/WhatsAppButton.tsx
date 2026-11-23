import { COMPANY } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="whatsapp-float">
      <iconify-icon icon="ri:whatsapp-fill" class="fs-7"></iconify-icon>
    </a>
  );
}
