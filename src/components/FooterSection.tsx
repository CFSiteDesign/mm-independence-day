const socials = [
  { label: "Instagram", href: "https://instagram.com/madmonkeyhostels", icon: "IG" },
  { label: "TikTok", href: "https://tiktok.com/@madmonkeyhostels", icon: "TT" },
  { label: "Facebook", href: "https://facebook.com/madmonkeyhostels", icon: "FB" },
  { label: "YouTube", href: "https://youtube.com/madmonkeyhostels", icon: "YT" },
  { label: "Website", href: "https://madmonkeyhostels.com", icon: "→" },
];

export default function FooterSection() {
  return (
    <footer
      className="relative py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#CC2200" }}
    >
      {/* Decorative stars overlay */}
      <img
        src="/images/el-stars.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-10"
      />

      {/* Scattered angular shapes */}
      <img
        src="/images/el-angular.png"
        alt=""
        aria-hidden="true"
        className="absolute top-4 left-8 w-10 opacity-20 rotate-45 pointer-events-none"
      />
      <img
        src="/images/el-bolt.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-4 right-10 w-12 opacity-20 -rotate-20 pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Mad Monkey logo text */}
        <div className="mb-8">
          <p className="font-black text-xs tracking-[0.4em] uppercase text-white/60 mb-2">
            PRESENTED BY
          </p>
          <h2
            className="font-display text-4xl md:text-5xl text-white"
            style={{ textShadow: "3px 3px 0px #000" }}
          >
            MAD MONKEY HOSTELS
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-white font-black text-xl md:text-2xl uppercase tracking-widest mb-10">
          🇺🇸 BORN FREE. PARTY HARD. 🇺🇸
        </p>

        {/* Social links */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-white text-[#CC2200] font-black text-xs uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-white/30 pt-8">
          <p className="text-white/70 font-black text-xs uppercase tracking-[0.3em]">
            © 2026 MAD MONKEY HOSTELS. 4TH OF JULY — BORN FREE, PARTY HARD.
          </p>
        </div>
      </div>
    </footer>
  );
}
