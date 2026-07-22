import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Reveal, SectionKicker } from "@/components/ui/reveal";
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
    <section id="pricing" className="relative overflow-hidden bg-navy-deeper py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-[-5%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionKicker>Membership</SectionKicker>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            One genome. <span className="text-gradient">Priced for life.</span>
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-offwhite/60">
            No subscriptions required. Your sequence is yours forever — choose
            how deep you want to go.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.12} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`relative flex h-full flex-col rounded-3xl border p-8 backdrop-blur-sm transition-shadow duration-500 ${
                  tier.featured
                    ? "border-violet/50 bg-gradient-to-b from-violet/[0.14] to-teal/[0.05] shadow-glow-violet"
                    : "border-white/[0.07] bg-white/[0.03] hover:shadow-glow-card"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-teal px-4 py-1.5 text-xs font-semibold text-white shadow-glow-violet">
                    <Sparkles className="h-3 w-3" />
                    Most chosen
                  </span>
                )}

                <h3 className="font-heading text-lg font-bold text-white">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm font-light text-offwhite/50">
                  {tier.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-offwhite/40">once</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light text-offwhite/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.featured ? "primary" : "ghost"}
                  className="mt-9 w-full"
                >
                  {tier.cta}
                </Button>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-10 text-center text-xs text-offwhite/35">
            HSA/FSA eligible · CLIA-certified laboratories · 60-day satisfaction
            guarantee
          </p>
        </Reveal>
      </div>
    </section>
  );
}
