import { Reveal } from "@/components/ui/reveal";

const partners = [
  "NOVAGENE",
  "Meridian Health",
  "BIOSPHERE",
  "Aurelia Labs",
  "GENWELL",
  "Castella Clinic",
];

export default function LogoBar() {
  return (
    <section className="relative border-y border-white/[0.05] bg-navy-deeper py-12">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.3em] text-offwhite/30">
          Trusted by pioneering institutions worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {partners.map((name) => (
            <span
              key={name}
              className="font-heading text-sm font-semibold tracking-[0.14em] text-offwhite/25 transition-colors duration-500 hover:text-offwhite/60"
            >
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
