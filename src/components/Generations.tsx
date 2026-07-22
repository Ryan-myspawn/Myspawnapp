import { motion } from "framer-motion";
import { Quote, HeartHandshake } from "lucide-react";
import { Reveal, SectionKicker } from "@/components/ui/reveal";

const stories = [
  {
    quote:
      "My grandmother never knew why heart disease ran through our family. Now my daughter will never have to wonder.",
    name: "Amara Osei",
    role: "Member since 2024",
    accent: "border-t-violet",
  },
  {
    quote:
      "The report didn't just show me risk — it showed my cardiologist exactly what to watch. That changed everything.",
    name: "Daniel Reyes",
    role: "Member since 2023",
    accent: "border-t-teal",
  },
  {
    quote:
      "We sequenced three generations together. It felt less like a lab test and more like writing our family's story down.",
    name: "Ingrid Solberg",
    role: "Family plan member",
    accent: "border-t-gold",
  },
];

export default function Generations() {
  return (
    <section id="generations" className="relative overflow-hidden bg-navy py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-30" />
      <div className="pointer-events-none absolute bottom-[-10%] left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionKicker>Generations</SectionKicker>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Knowledge that <span className="text-gradient-gold">outlives us</span>
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-offwhite/60">
            A genome is the oldest letter your family ever wrote. We help you
            read it — and pass it on.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.15}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`group relative h-full rounded-2xl border border-white/[0.07] ${s.accent} border-t-2 bg-white/[0.03] p-8 backdrop-blur-sm transition-shadow duration-500 hover:shadow-glow-card`}
              >
                <Quote className="h-6 w-6 text-violet-soft/50" />
                <blockquote className="mt-5 text-[15px] font-light leading-relaxed text-offwhite/75">
                  “{s.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet/40 to-teal/30 font-heading text-sm font-bold text-white">
                    {s.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-heading text-sm font-bold text-white">
                      {s.name}
                    </div>
                    <div className="text-xs text-offwhite/40">{s.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-offwhite/60 backdrop-blur-sm">
            <HeartHandshake className="h-4 w-4 text-gold" />
            Over 40,000 families sequenced across three generations
          </div>
        </Reveal>
      </div>
    </section>
  );
}
