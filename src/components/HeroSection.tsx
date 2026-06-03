import ScatteredElements from "./ScatteredElements";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url(/images/bg-main.png)" }}
      />

      {/* Stars overlay scattered across full section */}
      <img
        src="/images/el-stars.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
        style={{ zIndex: 1 }}
      />

      {/* Scattered bolts & angular shapes */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <ScatteredElements />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center px-6 py-24 max-w-4xl mx-auto" style={{ zIndex: 10 }}>
        {/* Date badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 bg-[#1B2A5C] text-white font-black text-xs tracking-[0.25em] uppercase brutalist-border brutalist-shadow">
          🎆 JULY 4TH, 2026 — LET'S GET IT
        </div>

        {/* Hero logo */}
        <img
          src="/images/hero-logo.png"
          alt="4th of July"
          className="w-full max-w-sm md:max-w-md mb-8 drop-shadow-2xl"
        />

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#1B2A5C] leading-none mb-4 tracking-tight">
          BORN FREE.<br />PARTY HARD.
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg font-bold text-gray-800 mb-10 max-w-2xl leading-relaxed">
          Mad Monkey lights up Southeast Asia for the biggest 4th of July blowout on the road.
          Stars, stripes, shots — and zero apologies. <span className="text-[#CC2200]">All in. 🇺🇸</span>
        </p>

        {/* CTA */}
        <a
          href="#events"
          className="inline-block px-10 py-4 bg-[#CC2200] text-white font-black text-lg uppercase tracking-[0.2em] brutalist-border brutalist-shadow brutalist-shadow-hover transition-all"
        >
          GET EARLY ACCESS 🇺🇸
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50" style={{ zIndex: 10 }}>
        <span className="text-xs font-black uppercase tracking-widest text-[#1B2A5C]">Scroll</span>
        <div className="w-px h-8 bg-[#1B2A5C]" />
      </div>
    </section>
  );
}
