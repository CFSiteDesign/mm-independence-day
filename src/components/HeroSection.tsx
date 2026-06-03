import { useState, useEffect } from 'react'
import { getAsset } from '@/lib/images'
import ScatteredStars from './ScatteredStars'

export default function HeroSection() {
  const [heroLogo, setHeroLogo] = useState<string | undefined>(undefined)
  const [bgImage, setBgImage] = useState<string | undefined>(undefined)
  const [mmLogo, setMmLogo] = useState<string | undefined>(undefined)

  useEffect(() => {
    setHeroLogo(getAsset('hero-logo.png'))
    setBgImage(getAsset('bg-main.png'))
    setMmLogo(getAsset('mad-monkey-logo.svg'))
  }, [])

  return (
    <section className="relative w-full bg-white min-h-screen">
      <ScatteredStars />

      <div className="flex h-screen">
        {/* Left column */}
        <div className="w-full md:w-1/2 bg-[#1B2A5C] flex flex-col justify-center px-4 md:px-8 py-8 md:py-0 border-r-4 border-black">
          <div className="space-y-4">
            {/* Brand */}
            {mmLogo ? (
              <img src={mmLogo} alt="Mad Monkey" className="h-8 md:h-10 invert" />
            ) : (
              <div className="text-2xl md:text-4xl font-bold text-white">MAD MONKEY</div>
            )}

            {/* Date badge */}
            <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black rounded-none w-fit font-bold">
              <span>July 4th</span>
              <span>🎆</span>
            </div>

            {/* Hero logo */}
            <div className="pt-4">
              {heroLogo ? (
                <img
                  src={heroLogo}
                  alt="4th of July"
                  className="w-full max-w-xs"
                />
              ) : (
                <div className="text-4xl md:text-5xl font-bold text-white text-shadow-md">
                  4TH OF JULY
                </div>
              )}
            </div>

            {/* Tagline */}
            <p className="text-white text-shadow-xs text-base md:text-lg max-w-sm font-semibold">
              Stars, stripes, and shots across Southeast Asia. One night. Every hostel. Zero apologies.
            </p>

            {/* CTA button */}
            <button className="mt-6 px-6 py-3 bg-white text-[#CC2200] font-bold border-2 border-black rounded-none shadow-sm hover:shadow-md transition-all duration-200">
              GET EARLY ACCESS 🇺🇸
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="hidden md:flex w-1/2 bg-white relative overflow-hidden border-l-4 border-black">
          {bgImage ? (
            <img
              src={bgImage}
              alt="4th of July background"
              className="w-full h-full object-cover object-bottom"
            />
          ) : (
            <div className="absolute inset-0 radial-gradient-light" />
          )}

          {/* Badge 1 */}
          <div className="absolute top-12 right-12 bg-[#1B2A5C] text-white px-4 py-2 border-2 border-black rounded-none shadow-sm transform rotate-12 font-bold">
            🇺🇸 ALL IN
          </div>

          {/* Badge 2 */}
          <div className="absolute bottom-32 left-8 bg-[#1B2A5C] text-white px-4 py-2 border-2 border-black rounded-none shadow-sm transform -rotate-6 font-bold">
            Independence Day 2026
          </div>
        </div>
      </div>
    </section>
  )
}
