const partners = [
  "NOVAGENE",
  "MERIDIAN HEALTH",
  "BIOSPHERE",
  "AURELIA LABS",
  "GENWELL",
  "CASTELLA CLINIC",
  "HELIX FOUNDATION",
  "VITALIS",
];

export default function LogoBar() {
  const row = [...partners, ...partners];
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-navy-deeper/45 py-10 backdrop-blur-sm">
      <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-offwhite/30">
        Trusted by pioneering institutions worldwide
      </p>
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-navy-deeper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-navy-deeper to-transparent" />

        <div className="flex w-max animate-marquee items-center">
          {row.map((name, i) => (
            <span key={i} className="flex items-center">
              <span className="font-heading text-sm font-semibold tracking-[0.22em] text-offwhite/25 transition-colors duration-500 hover:text-offwhite/60">
                {name}
              </span>
              <span className="mx-10 h-1 w-1 rounded-full bg-teal/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
