import { getAsset } from '@/lib/images'

const madMonkeyLogo = getAsset('mad-monkey-logo.svg')

const FooterSection = () => {
  return (
    <footer
      className="text-white py-8 md:py-12 px-4 md:px-16 border-t-4 border-divider"
      style={{ backgroundColor: '#CC2200' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-8">
        {madMonkeyLogo ? (
          <img
            src={madMonkeyLogo}
            alt="Mad Monkey"
            className="w-48 md:w-64"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        ) : (
          <div
            className="font-black uppercase text-3xl md:text-4xl tracking-widest"
            style={{ textShadow: '3px 3px 0 #8a1500' }}
          >
            MAD MONKEY
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {[
            { name: 'INSTAGRAM', url: 'https://www.instagram.com/madmonkeyhostels/' },
            { name: 'TIKTOK', url: 'https://www.tiktok.com/@madmonkeyhostels' },
            { name: 'FACEBOOK', url: 'https://www.facebook.com/MadMonkeyHostels' },
            { name: 'YOUTUBE', url: 'https://www.youtube.com/channel/UCkUGlFdhp5Ndk68j_QRS1kw' },
            { name: 'WEBSITE', url: 'https://madmonkeyhostels.com' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black uppercase text-xs md:text-sm hover:text-red-200 transition-colors border-2 border-white/40 px-3 md:px-4 py-1.5 hover:border-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/50">
          © 2026 MAD MONKEY HOSTELS. 4TH OF JULY — BORN FREE, PARTY HARD.
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
