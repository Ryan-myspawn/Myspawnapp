import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Discover",
    price: "$249",
    tagline: "Your essential genomic portrait",
    features: [
      "Whole-genome sequencing (30×)",
      "Core health & trait reports",
      "Secure lifetime cloud archive",
      "Physician-shareable summaries",
    ],
    featured: false,
    cta: "Choose Discover",
  },
  {
    name: "Continuum",
    price: "$499",
    tagline: "Living insight that grows with science",
    features: [
      "Everything in Discover",
      "AI variant analysis, updated quarterly",
      "Pharmacogenomic medication guide",
      "Genetic counselor session included",
      "Priority re-analysis of new findings",
    ],
    featured: true,
    cta: "Start Your Journey",
  },
  {
    name: "Legacy",
    price: "$1,190",
    tagline: "For families, across generations",
    features: [
      "Three Continuum memberships",
      "Family Continuity Reports",
      "Inherited-risk mapping across kin",
      "Dedicated family genomics advisor",
    ],
    featured: false,
    cta: "Choose Legacy",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-28 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-[-5%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet/[0.08] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="05"
          kicker="Membership"
          title={
            <>
              One genome.{" "}
              <span className="font-serif font-normal italic text-gradient">
                Priced for life.
              </span>
            </>
          }
          note="No subscriptions required. Your sequence is yours forever — choose how deep you want to go."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.12} className="h-full">
              {tier.featured ? (
                /* Gradient hairline border wrapper for the featured tier */
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  className="h-full rounded-[1.75rem] bg-gradient-to-b from-violet/60 via-teal/40 to-transparent p-px shadow-glow-violet"
                >
                  <TierCard tier={tier} />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  className="h-full rounded-[1.75rem] border border-white/[0.07] transition-colors duration-500 hover:border-white/[0.14]"
                >
                  <TierCard tier={tier} />
                </motion.div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-12 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-offwhite/30">
            HSA / FSA eligible · CLIA-certified laboratories · 60-day guarantee
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-[calc(1.75rem-1px)] p-9 ${
        tier.featured
          ? "bg-gradient-to-b from-navy-deep to-navy-deeper"
          : "bg-navy-deeper/55 backdrop-blur-md"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-teal px-4 py-1.5 text-[11px] font-semibold tracking-wide text-white shadow-glow-violet">
          <Sparkles className="h-3 w-3" />
          Most chosen
        </span>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className="font-heading text-lg font-bold tracking-tight text-white">
          {tier.name}
        </h3>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-offwhite/30">
          One-time
        </span>
      </div>
      <p className="mt-1 text-sm font-light text-offwhite/45">{tier.tagline}</p>

      <div className="mt-8 flex items-baseline gap-1 border-b border-white/[0.07] pb-8">
        <span className="font-heading text-6xl font-bold tracking-tightest text-white">
          {tier.price}
        </span>
      </div>

      <ul className="mt-8 flex-1 space-y-4">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm font-light text-offwhite/65">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            {f}
          </li>
        ))}
      </ul>

      <Button variant={tier.featured ? "primary" : "ghost"} className="mt-10 w-full">
        {tier.cta}
      </Button>
    </div>
  );
}
