import { useState } from 'react'

const FAQS = [
  {
    q: "What's included in the ticket?",
    a: "Entry to the main event at your chosen Mad Monkey. Just a heads up: check the specific event details for your location before you buy. Every Mad Monkey does things a little differently — fireworks, BBQ, and free flow vary depending on the local setup.",
  },
  {
    q: "What if I'm already staying at Mad Monkey?",
    a: "Love that for you — shortest commute to the party. But your bed doesn't get you in. You'll still need a ticket to get your wristband for the free flow and all the 4th of July highlights. Don't be that person sitting in a quiet dorm while the rest of the hostel is going mental downstairs.",
  },
  {
    q: "How long does the party run?",
    a: "All. Night. Long. Our DJs will be dropping sets right up until the bar closes. We're packing all that independence energy into one massive session — make sure you're front and centre early.",
  },
  {
    q: "Can I book multiple locations?",
    a: "We love the energy, but physics is a hater. These parties all happen on the same night, so you can't be in two places at once. Pick the Mad Monkey you want to be at on July 4th and commit!",
  },
  {
    q: "Refund policy?",
    a: "No refunds, but the tickets are fully transferable. If you can't make it, pass your ticket to a mate and let them have the night of their life instead. Born free means free to hand it over.",
  },
]

const FaqItem = ({ item, index }: { item: (typeof FAQS)[number]; index: number }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-card border-2 border-border px-4 md:px-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left gap-4 py-4 md:py-5 hover:no-underline"
        aria-expanded={open}
        aria-controls={`faq-${index}`}
      >
        <span className="font-black uppercase text-base md:text-2xl leading-snug">{item.q}</span>
        <span
          className="text-2xl font-black shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      {open && (
        <div id={`faq-${index}`} className="text-base md:text-lg font-bold leading-snug pb-4 md:pb-5">
          {item.a}
        </div>
      )}
    </div>
  )
}

const FaqSection = () => {
  return (
    <section
      className="relative py-12 md:py-24 px-4 md:px-16 border-b-4 border-divider"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <h2 className="text-4xl md:text-8xl font-black uppercase text-center mb-8 md:mb-16 text-foreground leading-none tracking-tighter">
        Need to Know 🇺🇸
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 md:space-y-4">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} item={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
