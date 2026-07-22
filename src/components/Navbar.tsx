import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dna, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/lib/config";
import { cn } from "@/lib/utils";

const links = [
  { label: "Science", href: "#science" },
  { label: "Platform", href: "#features" },
  { label: "Process", href: "#how-it-works" },
  { label: "Stories", href: "#generations" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-navy-deeper/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet to-teal shadow-glow-violet">
            <Dna className="h-5 w-5 text-white" strokeWidth={2.2} />
          </span>
          <span className="font-heading text-lg font-bold tracking-[0.18em] text-white">
            {COMPANY_NAME}
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-offwhite/60 transition-colors duration-300 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button size="sm">Start Your Journey</Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-offwhite lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/[0.06] bg-navy-deeper/95 px-6 pb-6 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-4 pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-offwhite/70 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <Button className="mt-2 w-full">Start Your Journey</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
