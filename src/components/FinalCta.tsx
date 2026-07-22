import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/lib/config";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 lg:py-36">
      {/* Cinematic closing light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[160px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-40" />

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your story is already{" "}
          <span className="text-gradient">written inside you.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-offwhite/60">
          {COMPANY_NAME} helps you read it — with precision, privacy, and hope.
          Begin in five minutes, understand for a lifetime.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group w-full sm:w-auto">
            Start Your Journey
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button variant="ghost" size="lg" className="w-full sm:w-auto">
            Talk to a genomic counselor
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
