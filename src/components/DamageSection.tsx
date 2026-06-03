import { useEffect, useRef, useState } from "react";

interface EventCard {
  id: string;
  emoji: string;
  tagline: string;
  title: string;
  description: string;
  bg: string;
  accentColor: string;
}

const events: EventCard[] = [
  {
    id: "fireworks",
    emoji: "🎆",
    tagline: "Blow It Up",
    title: "Fireworks Spectacular",
    description:
      "The sky's our canvas and we paint it loud. Our rooftop fireworks session will rattle your chest and blow your mind.",
    bg: "from-[#1B2A5C] to-[#0d1a3a]",
    accentColor: "#CC2200",
  },
  {
    id: "bbq",
    emoji: "🔥",
    tagline: "Fire It Up",
    title: "Freedom BBQ",
    description:
      "All-American cookout energy, Southeast Asia style. Burgers, dogs, and everything off the grill — we don't hold back.",
    bg: "from-[#CC2200] to-[#8a1500]",
    accentColor: "#F5EDD8",
  },
  {
    id: "freeflow",
    emoji: "🍺",
    tagline: "Pour It Up",
    title: "Stars & Stripes Free Flow",
    description:
      "Drinks flow free until the stars come out. Red, white, and brewed. Keep your cup up and your spirits higher.",
    bg: "from-[#0d1a3a] to-[#1B2A5C]",
    accentColor: "#CC2200",
  },
];

function DamageCard({ event, index }: { event: EventCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col overflow-hidden brutalist-border brutalist-shadow brutalist-shadow-hover transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Card graphic area */}
      <div className={`relative flex flex-col items-center justify-center bg-gradient-to-b ${event.bg} min-h-[220px] p-8`}>
        <span className="text-6xl mb-3 drop-shadow-lg" role="img" aria-label={event.title}>
          {event.emoji}
        </span>
        <span
          className="font-display text-3xl tracking-widest uppercase"
          style={{ color: event.accentColor }}
        >
          {event.tagline}
        </span>

        {/* Decorative bolt image scattered on cards */}
        <img
          src="/images/el-bolt.png"
          alt=""
          aria-hidden="true"
          className="absolute right-3 bottom-3 w-8 opacity-30 rotate-12 pointer-events-none"
        />
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 bg-white p-6 border-t-2 border-black">
        <h3 className="font-display text-2xl md:text-3xl text-[#1B2A5C] mb-3 uppercase tracking-wide">
          {event.title}
        </h3>
        <p className="text-gray-700 font-medium text-sm leading-relaxed mb-5 flex-1">
          {event.description}
        </p>
        <a
          href="#find-your-hostel"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#CC2200] hover:gap-4 transition-all"
        >
          FIND YOUR LOCATION <span>→</span>
        </a>
      </div>
    </div>
  );
}

export default function DamageSection() {
  return (
    <section
      id="events"
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "#1B2A5C" }}
    >
      {/* Decorative angular elements */}
      <img
        src="/images/el-angular.png"
        alt=""
        aria-hidden="true"
        className="absolute top-6 right-8 w-14 opacity-20 rotate-12 pointer-events-none"
      />
      <img
        src="/images/el-angular.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-6 left-6 w-10 opacity-20 -rotate-20 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="inline-block mb-4 px-4 py-1 bg-[#CC2200] text-white font-black text-xs tracking-[0.3em] uppercase brutalist-border" style={{ borderColor: '#fff' }}>
            THE LINEUP
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-none">
            WHAT'S THE DAMAGE
          </h2>
          <p className="mt-4 text-white/60 font-bold uppercase tracking-widest text-sm">
            Three events. One night. Zero excuses.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {events.map((event, i) => (
            <DamageCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/50 text-xs font-bold uppercase tracking-widest">
          * Not all events run at every location — check your hostel's lineup before booking.
        </p>
      </div>
    </section>
  );
}
