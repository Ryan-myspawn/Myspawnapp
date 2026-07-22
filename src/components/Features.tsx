import { motion } from "framer-motion";
import { Dna, BrainCircuit, ShieldCheck, Users } from "lucide-react";
import { Reveal, SectionKicker } from "@/components/ui/reveal";

const features = [
  {
    icon: Dna,
    title: "Whole-Genome Sequencing",
    body: "Every one of your 3.2 billion base pairs, read with clinical-grade accuracy — not a fragment, the full story.",
    accent: "from-violet/25 to-violet/0",
    iconColor: "text-violet-soft",
    glow: "group-hover:shadow-glow-violet",
  },
  {
    icon: BrainCircuit,
    title: "AI Variant Analysis",
    body: "Our models surface the variants that matter, translating raw sequence into clear, physician-ready insight.",
    accent: "from-teal/20 to-teal/0",
    iconColor: "text-teal",
    glow: "group-hover:shadow-glow-teal",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud Archive",
    body: "Your genome, encrypted end-to-end and stored for life. You decide who sees it — always, and only you.",
    accent: "from-emerald/20 to-emerald/0",
    iconColor: "text-emerald",
    glow: "group-hover:shadow-glow-teal",
  },
  {
    icon: Users,
    title: "Family Continuity Reports",
    body: "Inherited insights that travel across generations, so the people you love inherit knowledge — not questions.",
    accent: "from-gold/20 to-gold/0",
    iconColor: "text-gold",
    glow: "group-hover:shadow-glow-violet",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-navy-deeper py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[720px] -translate-x-1/2 rounded-full bg-violet/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionKicker>The Platform</SectionKicker>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything your genome{" "}
            <span className="text-gradient">has to say</span>
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-offwhite/60">
            One sample. A lifetime of understanding. Four pillars of precision
            genomics, engineered for clarity.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 backdrop-blur-sm transition-shadow duration-500 ${f.glow}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${f.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-navy-deep">
                    <f.icon
                      className={`h-6 w-6 ${f.iconColor} transition-transform duration-500 group-hover:scale-110`}
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-offwhite/55">
                    {f.body}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
