import { motion } from "framer-motion";
import { Dna, BrainCircuit, ShieldCheck, Users, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/reveal";

const features = [
  {
    icon: Dna,
    title: "Whole-Genome Sequencing",
    body: "Every one of your 3.2 billion base pairs, read at 30× clinical-grade depth — not a fragment of the story, the whole manuscript.",
    stat: { value: "30×", label: "Sequencing depth" },
    span: "lg:col-span-7",
    orb: "from-violet/25",
  },
  {
    icon: BrainCircuit,
    title: "AI Variant Analysis",
    body: "Models trained on millions of genomes surface the variants that matter, translated into physician-ready insight.",
    span: "lg:col-span-5",
    orb: "from-teal/20",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud Archive",
    body: "Encrypted end-to-end and stored for life. You decide who sees it — always, and only you.",
    span: "lg:col-span-5",
    orb: "from-emerald/20",
  },
  {
    icon: Users,
    title: "Family Continuity Reports",
    body: "Inherited insights that travel across generations, so the people you love inherit knowledge — not questions. One genome becomes a family's compass.",
    stat: { value: "3", label: "Generations mapped" },
    span: "lg:col-span-7",
    orb: "from-gold/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-navy-deeper/35 py-28 backdrop-blur-[2px] lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[720px] -translate-x-1/2 rounded-full bg-violet/[0.08] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="01"
          kicker="The Platform"
          title={
            <>
              Everything your genome{" "}
              <span className="font-serif font-normal italic text-gradient">
                has to say
              </span>
            </>
          }
          note="One sample. A lifetime of understanding. Four pillars of precision genomics, engineered for clarity."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1} className={f.span}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-navy-deeper/45 p-8 backdrop-blur-md transition-colors duration-500 hover:border-white/[0.14] lg:p-10"
              >
                {/* Gradient orb bloom on hover */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-b ${f.orb} to-transparent opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100`}
                />
                {/* Sheen sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.03]">
                      <f.icon
                        className="h-5 w-5 text-violet-pale transition-colors duration-500 group-hover:text-teal"
                        strokeWidth={1.7}
                      />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-offwhite/20 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal" />
                  </div>

                  <div className="mt-auto pt-12">
                    {f.stat && (
                      <div className="mb-6 flex items-baseline gap-3">
                        <span className="font-heading text-5xl font-bold tracking-tightest text-white/90">
                          {f.stat.value}
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-offwhite/35">
                          {f.stat.label}
                        </span>
                      </div>
                    )}
                    <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                      {f.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] font-light leading-relaxed text-offwhite/50">
                      {f.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
