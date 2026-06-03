import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { getAsset } from '@/lib/images'
import ScatteredStars from './ScatteredStars'

interface Card {
  id: string
  title: string
  description: string
  image: string
  badge: string
}

const CARDS: Card[] = [
  {
    id: 'fireworks',
    title: 'Fireworks Spectacular',
    description: "The sky's our canvas and we paint it loud. Our rooftop finale will rattle your chest.",
    image: 'card-fireworks.png',
    badge: '🎆 FIREWORKS',
  },
  {
    id: 'bbq',
    title: 'Freedom BBQ',
    description: 'All-American cookout energy, Southeast Asia style. Burgers, dogs, everything off the grill.',
    image: 'card-bbq.png',
    badge: '🔥 BBQ',
  },
  {
    id: 'freeflow',
    title: 'Stars & Stripes Free Flow',
    description: 'Drinks flow free until the stars come out. Red, white, and brewed.',
    image: 'card-freeflow.png',
    badge: '🍺 FREE FLOW',
  },
]

function EventCard({ card }: { card: Card }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  })

  const [cardImage, setCardImage] = useState<string | undefined>(undefined)

  useEffect(() => {
    setCardImage(getAsset(card.image))
  }, [card.image])

  return (
    <div
      ref={ref}
      className={`bg-[#1B2A5C] border-4 border-black rounded-none overflow-hidden shadow-md card-hover transition-all duration-300 ${
        inView ? 'opacity-100' : 'opacity-50'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-black">
        {cardImage ? (
          <img
            src={cardImage}
            alt={card.title}
            className={`w-full h-full object-cover transition-all duration-300 ${
              inView ? 'grayscale-0' : 'grayscale'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1B2A5C] to-black flex items-center justify-center text-3xl">
            {card.badge.split(' ')[0]}
          </div>
        )}

        {/* Badge overlay */}
        <div className="absolute top-3 right-3 bg-[#CC2200] text-white px-3 py-1 border-2 border-black rounded-none transform rotate-6 text-xs font-bold uppercase">
          {card.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-2">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
          {card.title}
        </h3>
        <p className="text-sm md:text-base font-medium opacity-90 text-white">
          {card.description}
        </p>
      </div>
    </div>
  )
}

export default function WavesSection() {
  return (
    <section className="relative w-full bg-[#F5EDD8] py-12 md:py-24 px-4 md:px-8">
      <ScatteredStars />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            What's the Damage
          </h2>
          <p className="text-lg md:text-xl font-semibold max-w-2xl">
            Three events. One night. Zero excuses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card) => (
            <EventCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
