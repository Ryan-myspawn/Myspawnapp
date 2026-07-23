import { Package, Microscope, LineChart } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/reveal";

const steps = [
  {
    icon: Package,
    number: "01",
    title: "Collect at Home",
    body: "A beautifully simple saliva kit arrives at your door. Five minutes, zero needles, prepaid return — a quiet moment at your kitchen table.",
    meta: "Day 0 · 5 minutes",
  },
  {
    icon: Microscope,
    number: "02",
    title: "We Sequence & Decode",
    body: "Your sample is sequenced in our CLIA-certified labs at 30× depth, then decoded by AI trained on millions of genomes.",
    meta: "Day 2–12 · CLIA-certified",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Insights for Life",
    body: "Explore living reports that evolve as science advances — your genome keeps teaching you, forever. No new sample required.",
    meta: "Forever · Updated quarterly",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-28 lg:py-40">
      <div className="pointer-events-none absolute right-[-12%] top-[15%] h-[460px] w-[460px] rounded-full bg-teal/[0.05] blur-[150px]" />
      <div className="pointer-events-none absolute left-[-8%] bottom-[10%] h-[380px] w-[380px] rounded-full bg-violet/[0.1] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="02"
          kicker="The Process"
          title={
            <>
              Three steps to{" "}
              <span className="font-serif font-normal italic text-gradient-gold">
                yourself
              </span>
            </>
          }
          note="From a swab at your kitchen table to the deepest map of who you are."
        />

        <div className="mt-4">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.12}>
              <div className="group grid grid-cols-1 gap-6 py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-14">
                {/* Ghost numeral */}
                <div className="lg:col-span-3">
                  <span className="font-heading text-7xl font-bold leading-none text-stroke transition-all duration-700 group-hover:[-webkit-text-stroke-color:rgba(0,201,167,0.4)] lg:text-8xl">
                    {s.number}
                  </span>
                </div>

                <div className="flex items-center gap-5 lg:col-span-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-teal/40 group-hover:shadow-glow-teal">
                    <s.icon className="h-6 w-6 text-violet-pale transition-colors duration-500 group-hover:text-teal" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
                      {s.title}
                    </h3>
                    <div className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-offwhite/35">
                      {s.meta}
                    </div>
                  </div>
                </div>

                <p className="max-w-md text-[15px] font-light leading-relaxed text-offwhite/50 lg:col-span-5">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
