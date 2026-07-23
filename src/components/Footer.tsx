import { Dna, ArrowUpRight } from "lucide-react";
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
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-navy-deeper/55 backdrop-blur-sm">
      <div className="relative mx-auto max-w-7xl px-6 pt-20 lg:px-10">
        <div className="grid grid-cols-2 gap-10 pb-16 md:grid-cols-6">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
                <Dna className="h-[18px] w-[18px] text-violet-pale" strokeWidth={2} />
              </span>
              <span className="font-heading text-[15px] font-bold tracking-[0.22em] text-white">
                {COMPANY_NAME}
              </span>
            </a>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-offwhite/40">
              Precision genomics for a new era of personalized medicine — warm,
              rigorous, and built for generations.
            </p>
            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-teal transition-colors hover:text-white"
            >
              Start Your Journey
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-offwhite/60">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3.5">
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

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 sm:flex-row">
          <p className="text-xs font-light text-offwhite/30">
            © {new Date().getFullYear()} {COMPANY_NAME}, Inc. All rights reserved.
          </p>
          <p className="text-xs font-light text-offwhite/30">
            Sequenced with care · CLIA-certified · HIPAA-aligned
          </p>
        </div>

        {/* Monumental closing wordmark */}
        <div aria-hidden className="select-none pb-2 pt-6">
          <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.01] bg-clip-text text-center font-heading text-[17.5vw] font-extrabold leading-[0.8] tracking-tightest text-transparent lg:text-[15.5rem]">
            {COMPANY_NAME}
          </div>
        </div>
      </div>
    </footer>
  );
}
