import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { Reveal, SectionHeader, LineReveal } from "@/components/ui/reveal";

const stories = [
  {
    quote:
      "The report didn't just show me risk — it showed my cardiologist exactly what to watch. That changed everything.",
    name: "Daniel Reyes",
    role: "Member since 2023",
  },
  {
    quote:
      "We sequenced three generations together. It felt less like a lab test and more like writing our family's story down.",
    name: "Ingrid Solberg",
    role: "Family plan member",
  },
  {
    quote:
      "Five minutes with a kit. A lifetime of knowing. It's the calmest medical decision I've ever made.",
    name: "Amara Osei",
    role: "Member since 2024",
  },
];

export default function Generations() {
  return (
    <section id="generations" className="relative overflow-hidden bg-navy py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-30" />
      <div className="pointer-events-none absolute bottom-[-15%] left-1/2 h-96 w-[820px] -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="04"
          kicker="Generations"
          title={
            <>
              Knowledge that{" "}
              <span className="font-serif font-normal italic text-gradient-gold">
                outlives us
              </span>
            </>
          }
          note="A genome is the oldest letter your family ever wrote. We help you read it — and pass it on."
        />

        {/* Featured pull-quote — large editorial serif */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <blockquote className="font-serif text-3xl italic leading-snug text-offwhite/85 sm:text-4xl lg:text-[2.75rem]">
            <LineReveal>“My grandmother never knew why heart disease</LineReveal>
            <LineReveal delay={0.1}>ran through our family. Now my daughter</LineReveal>
            <LineReveal delay={0.2}>
              will never have to{" "}
              <span className="text-gradient not-italic font-serif italic">wonder.”</span>
            </LineReveal>
          </blockquote>
          <Reveal delay={0.35} className="mt-8">
            <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-offwhite/40">
              Elena Marchetti — Three-generation member
            </div>
          </Reveal>
        </div>

        {/* Supporting voices */}
        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.12}>
              <motion.figure
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="group h-full rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-transparent p-8 transition-colors duration-500 hover:border-white/[0.14]"
              >
                <blockquote className="text-[15px] font-light leading-relaxed text-offwhite/65">
                  “{s.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-white/[0.07] pt-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] font-heading text-sm font-bold text-violet-pale">
                    {s.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-heading text-sm font-bold text-white">
                      {s.name}
                    </div>
                    <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-offwhite/35">
                      {s.role}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-light text-offwhite/55 backdrop-blur-sm">
            <HeartHandshake className="h-4 w-4 text-gold" />
            Over 40,000 families sequenced across three generations
          </div>
        </Reveal>
      </div>
    </section>
  );
}
