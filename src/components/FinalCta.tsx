import { ArrowRight } from "lucide-react";
import { Reveal, LineReveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/lib/config";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      {/* Cinematic closing light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[960px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.12] blur-[170px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/[0.08] blur-[130px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal className="mb-10 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-teal/60" />
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-offwhite/45">
            Begin in five minutes
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-teal/60" />
        </Reveal>

        <h2 className="font-heading text-5xl font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-7xl">
          <LineReveal>Your story is already</LineReveal>
          <LineReveal delay={0.12}>
            <span className="font-serif font-normal italic text-gradient">
              written inside you.
            </span>
          </LineReveal>
        </h2>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-offwhite/55">
            {COMPANY_NAME} helps you read it — with precision, privacy, and
            hope. Sequenced once, understood for a lifetime.
          </p>
        </Reveal>

        <Reveal delay={0.45} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">
            Start Your Journey
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <Button variant="ghost" size="lg">
            Talk to a genomic counselor
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
