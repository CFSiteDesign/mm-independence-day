import { getAsset } from '@/lib/images'
import ScatteredStars from '@/components/ScatteredStars'

const heroLogo = getAsset('hero-logo.png')
const bgImage = getAsset('bg-main.png')
const heroPhoto = getAsset('hero-photo.png')
const madMonkeyLogo = getAsset('mad-monkey-logo.svg')
const floatingEl = getAsset('el-bolt.png')

const HeroSection = () => {
  return (
    <section className="relative z-10 w-full min-h-[100svh] md:min-h-0 md:h-[85vh] flex flex-col md:flex-row border-b-4 border-divider overflow-visible">
      <ScatteredStars />

      {/* Left — text + 4th of July logo */}
      <div
        className="flex-1 px-5 pt-6 pb-8 md:px-10 md:pt-8 md:pb-6 flex flex-col justify-center md:justify-start items-start border-b-4 md:border-b-0 md:border-r-4 border-divider relative overflow-hidden"
        style={{ backgroundColor: '#1B2A5C' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 120% 80% at 10% 90%, rgba(27,42,92,0.35) 0%, transparent 60%)',
          }}
        />

        {madMonkeyLogo ? (
          <img
            src={madMonkeyLogo}
            alt="Mad Monkey"
            className="w-24 md:w-32 mb-2 md:mb-3 z-10"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        ) : (
          <div className="mb-2 md:mb-3 z-10">
            <span
              className="text-white font-black uppercase text-xl md:text-2xl tracking-widest"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            >
              MAD MONKEY
            </span>
          </div>
        )}

        <div
          className="mb-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase px-4 py-2 text-xs md:text-lg border-2 border-primary -rotate-2 z-20 rounded-sm"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          July 4th 🎆
        </div>

        {heroLogo ? (
          <img
            src={heroLogo}
            alt="4th of July"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl md:max-h-[52vh] object-contain mt-2 md:mt-2 mb-1 md:mb-8 z-10 self-center"
            style={{ mixBlendMode: 'screen' }}
          />
        ) : (
          <div className="mt-6 mb-6 z-10 select-none self-center">
            <div
              className="text-white font-black uppercase leading-none tracking-tighter"
              style={{ fontSize: 'clamp(3.5rem, 13vw, 8rem)', textShadow: '6px 6px 0 #CC2200' }}
            >
              4TH OF<br />JULY
            </div>
          </div>
        )}

        <p className="text-[13px] md:text-base font-bold mb-3 md:mb-4 max-w-xl leading-relaxed z-10 text-white/90">
          Stars, stripes, and shots across Southeast Asia.<br />
          One night. Every hostel. Zero apologies.<br />
          Mad Monkey 4th of July — All In. 🇺🇸
        </p>

        <a
          href="#selector"
          className="w-full md:w-auto text-center bg-primary text-primary-foreground text-lg md:text-xl font-black uppercase px-8 py-4 md:px-10 md:py-4 border-2 border-primary hover:brightness-110 active:translate-x-1 active:translate-y-1 z-10 transition-all"
        >
          GET EARLY ACCESS 🇺🇸
        </a>
      </div>

      {/* Right — bg-main.png behind, hero photo in the framed box */}
      <div
        className="flex-1 relative flex items-center justify-center min-h-[300px] md:min-h-0 overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Full-cover background */}
        {bgImage && (
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          />
        )}

        <div className="relative w-4/5 aspect-square md:aspect-auto md:h-4/5 flex items-center justify-center">
          {heroPhoto ? (
            <img
              src={heroPhoto}
              alt="4th of July"
              className="w-full h-full object-cover border-2 border-border brutalist-shadow rotate-3"
              style={{ objectPosition: '50% 30%' }}
            />
          ) : (
            <div
              className="w-full border-2 border-border brutalist-shadow rotate-3 flex items-center justify-center"
              style={{
                background: 'linear-gradient(160deg, #CC2200 0%, #1B2A5C 100%)',
                aspectRatio: '3/4',
                maxHeight: '80%',
              }}
            >
              <span className="text-white font-black text-8xl opacity-20">🇺🇸</span>
            </div>
          )}

          <div className="absolute top-4 right-4 md:top-10 md:right-10 bg-primary text-primary-foreground p-2 md:p-4 border-2 border-primary font-black text-sm md:text-xl uppercase rotate-12 shadow-lg z-20">
            🇺🇸 ALL IN
          </div>
          <div className="absolute top-4 left-4 md:top-10 md:left-10 bg-card text-foreground p-2 md:p-4 border-2 border-border font-black text-sm md:text-xl uppercase -rotate-6 shadow-lg z-20">
            Independence Day 2026
          </div>
        </div>

        {floatingEl && (
          <img
            src={floatingEl}
            alt=""
            className="absolute w-16 md:w-24 lg:w-32 bottom-0 right-2 md:-bottom-8 md:right-8 lg:-bottom-12 lg:right-12 z-40 animate-float pointer-events-none drop-shadow-2xl"
            style={{ '--float-rotate': '15deg' } as React.CSSProperties}
          />
        )}
      </div>
    </section>
  )
}

export default HeroSection
