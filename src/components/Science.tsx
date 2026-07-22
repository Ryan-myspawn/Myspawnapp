import { CheckCircle2 } from "lucide-react";
import { Reveal, SectionKicker } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import DnaScene from "@/components/three/DnaScene";

const points = [
  {
    title: "30× coverage, clinical-grade",
    body: "Every position on your genome is read an average of thirty times for research-quality confidence.",
  },
  {
    title: "AI trained on 4M+ genomes",
    body: "Variant interpretation refined against one of the largest curated genomic knowledge bases on Earth.",
  },
  {
    title: "Living reports, updated quarterly",
    body: "As peer-reviewed science advances, your existing data yields new insight — no new sample required.",
  },
];

export default function Science() {
  return (
    <section id="science" className="relative overflow-hidden bg-navy-deeper py-28 lg:py-36">
      <div className="pointer-events-none absolute left-[-10%] top-[30%] h-[480px] w-[480px] rounded-full bg-violet/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">
        {/* Smaller companion helix */}
        <Reveal className="relative order-2 h-[360px] lg:order-1 lg:h-[560px]">
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.05] bg-white/[0.02]" />
          <DnaScene
            className="absolute inset-0 h-full w-full"
            scale={0.72}
            particleCount={260}
            interactive
            rotationSpeed={-0.1}
            detail={0.85}
          />
          <div className="pointer-events-none absolute bottom-5 left-5 rounded-xl border border-white/10 bg-navy-deeper/70 px-4 py-3 backdrop-blur-md">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal">
              Live sequencing preview
            </div>
            <div className="mt-1 font-mono text-xs text-offwhite/60">
              ATCG·GCTA·TTAG·CGAT — 99.99% confidence
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2 lg:pl-8">
          <Reveal>
            <SectionKicker>The Science</SectionKicker>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Rigorous science,{" "}
              <span className="text-gradient">beautifully human</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg font-light leading-relaxed text-offwhite/60">
              Behind every elegant report is uncompromising laboratory science —
              the same standards trusted by leading research hospitals.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.12}>
                <div className="group flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-heading text-base font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-offwhite/55">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5} className="mt-10">
            <Button variant="ghost">Read the methodology</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
