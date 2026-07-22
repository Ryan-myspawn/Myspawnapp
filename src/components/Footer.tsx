import { Dna } from "lucide-react";
import { COMPANY_NAME } from "@/lib/config";

const columns = [
  {
    title: "Platform",
    links: ["Whole-Genome Sequencing", "AI Variant Analysis", "Secure Archive", "Family Reports"],
  },
  {
    title: "Company",
    links: ["About", "Science", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Methodology", "Privacy & Ethics", "For Clinicians", "Support"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Consent Framework", "Accessibility"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-deeper">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet to-teal">
                <Dna className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="font-heading text-lg font-bold tracking-[0.18em] text-white">
                {COMPANY_NAME}
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-offwhite/45">
              Precision genomics for a new era of personalized medicine — warm,
              rigorous, and built for generations.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-offwhite/70">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light text-offwhite/40 transition-colors duration-300 hover:text-teal"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-offwhite/30">
            © {new Date().getFullYear()} {COMPANY_NAME}, Inc. All rights reserved.
          </p>
          <p className="text-xs text-offwhite/30">
            Sequenced with care · CLIA-certified · HIPAA-aligned
          </p>
        </div>
      </div>
    </footer>
  );
}
