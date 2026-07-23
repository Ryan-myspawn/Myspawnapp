import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import DnaScene from "@/components/three/DnaScene";

const stats = [
  {
    value: "30×",
    title: "Clinical-grade coverage",
    body: "Every position on your genome read an average of thirty times for research-quality confidence.",
  },
  {
    value: "4M+",
    title: "Genomes behind the AI",
    body: "Variant interpretation refined against one of the largest curated genomic knowledge bases on Earth.",
  },
  {
    value: "4/yr",
    title: "Living report updates",
    body: "As peer-reviewed science advances, your existing data yields new insight — no new sample required.",
  },
];

export default function Science() {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="science" className="relative overflow-hidden bg-navy-deeper py-28 lg:py-40">
      <div className="pointer-events-none absolute left-[-10%] top-[30%] h-[480px] w-[480px] rounded-full bg-violet/[0.08] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="03"
          kicker="The Science"
          title={
            <>
              Rigorous science,{" "}
              <span className="font-serif font-normal italic text-gradient">
                beautifully human
              </span>
            </>
          }
          note="Behind every elegant report is uncompromising laboratory science — the standards trusted by leading research hospitals."
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Companion helix in a framed panel with scroll parallax */}
          <Reveal className="relative order-2 lg:order-1">
            <div
              ref={panelRef}
              className="relative h-[400px] overflow-hidden rounded-[2rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent lg:h-[580px]"
            >
              <motion.div style={{ y }} className="absolute inset-[-60px]">
                <DnaScene
                  className="h-full w-full"
                  scale={0.7}
                  particleCount={320}
                  interactive
                  rotationSpeed={-0.08}
                  detail={0.85}
                  lean={-0.25}
                  dof={false}
                />
              </motion.div>

              <div className="pointer-events-none absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-navy-deeper/70 px-5 py-4 backdrop-blur-md">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-teal">
                  Live sequencing preview
                </div>
                <div className="mt-1.5 font-mono text-xs text-offwhite/55">
                  ATCG·GCTA·TTAG·CGAT — 99.99% confidence
                </div>
              </div>
              <div className="pointer-events-none absolute right-5 top-5 rounded-full border border-white/10 bg-navy-deeper/70 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-offwhite/45 backdrop-blur-md">
                Fig. 01 — Double Helix
              </div>
            </div>
          </Reveal>

          {/* Editorial stat rows */}
          <div className="order-1 lg:order-2">
            {stats.map((s, i) => (
              <Reveal key={s.title} delay={0.1 + i * 0.12}>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-8 border-b border-white/[0.07] py-9 first:border-t">
                  <span className="w-24 font-heading text-4xl font-bold tracking-tightest text-white transition-colors duration-500 group-hover:text-gradient lg:text-5xl">
                    {s.value}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-[15px] font-light leading-relaxed text-offwhite/50">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.5} className="mt-10">
              <Button variant="ghost">
                Read the methodology
                <ArrowUpRight className="h-4 w-4 text-teal" />
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
