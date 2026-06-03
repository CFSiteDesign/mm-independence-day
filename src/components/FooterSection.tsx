import ScatteredStars from './ScatteredStars'

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-[#CC2200] border-t-4 border-black py-12 md:py-16 px-4 md:px-8">
      <ScatteredStars />

      <div className="max-w-6xl mx-auto">
        {/* Brand */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="text-2xl md:text-3xl font-bold text-white text-shadow-md">
            MAD MONKEY
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8 md:mb-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {[
            { name: 'Instagram', url: 'https://instagram.com/madmonkeyhostels' },
            { name: 'TikTok', url: 'https://tiktok.com/@madmonkeyhostels' },
            { name: 'Facebook', url: 'https://facebook.com/madmonkeyhostels' },
            { name: 'YouTube', url: 'https://youtube.com/madmonkeyhostels' },
            { name: 'Website', url: 'https://madmonkeyhostels.com' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 md:px-4 py-2 md:py-3 border-2 border-white text-white rounded-none font-semibold uppercase text-xs md:text-sm hover:text-[#CC2200] hover:bg-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm font-semibold text-white opacity-80 tracking-widest">
          © 2026 MAD MONKEY HOSTELS. 4TH OF JULY — BORN FREE, PARTY HARD.
        </div>
      </div>
    </footer>
  )
}
