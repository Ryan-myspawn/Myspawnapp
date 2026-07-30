import { ArrowRight } from "lucide-react";
import { Reveal, LineReveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, PRIMARY_CTA } from "@/lib/config";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-32 lg:py-44">
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
            Order in two minutes
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-teal/60" />
        </Reveal>

        <h2 className="font-heading text-5xl font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-7xl">
          <LineReveal>Your DNA is the one thing</LineReveal>
          <LineReveal delay={0.12}>
            <span className="font-serif font-normal italic text-gradient">
              you can&apos;t get back.
            </span>
          </LineReveal>
        </h2>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-offwhite/55">
            Preserve it once, and keep it safe for generations. The founder kit
            is $99 — one time, free shipping, backed by a 60-day guarantee.
          </p>
        </Reveal>

        <Reveal delay={0.45} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" href={CHECKOUT_URL}>
            {PRIMARY_CTA}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <a
            href="#pricing"
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-offwhite/55 underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
          >
            See what&apos;s included
          </a>
        </Reveal>
      </div>
    </section>
  );
}
