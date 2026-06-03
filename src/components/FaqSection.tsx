import { useState } from 'react'
import ScatteredStars from './ScatteredStars'

interface FaqItem {
  id: string
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'tickets-included',
    question: 'What does the ticket include?',
    answer:
      'Your ticket gets you through the door, a welcome shot on arrival, and access to all themed events at your hostel. Check your specific location for the full lineup — fireworks, BBQ, and free flow vary by spot.',
  },
  {
    id: 'accommodation-tickets',
    question: "I'm staying at Mad Monkey. Do I still need a ticket?",
    answer:
      "Yes. Even if you're sleeping here, the 4th of July party is a ticketed event. It guarantees you're part of the madness — not watching from the dorm.",
  },
  {
    id: 'non-americans',
    question: "Do I have to be American?",
    answer:
      "Hell no. The 4th of July at Mad Monkey is for anyone who loves a good time. Bring your flag, borrow ours — all nationalities welcome. Freedom has no passport.",
  },
  {
    id: 'multiple-locations',
    question: 'Can I attend multiple locations?',
    answer:
      "Each ticket is for a single location on July 4th. You can't be in two places at once — so pick your hostel, commit, and go full send.",
  },
  {
    id: 'transfer-policy',
    question: 'Can I transfer my ticket?',
    answer:
      "Tickets are fully transferable — no refunds. If you can't make it, pass it to a friend. Born free means free to hand it over.",
  },
]

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b-2 border-black py-4 md:py-6">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 text-left hover:opacity-80 transition-opacity"
      >
        <h3 className="text-lg md:text-xl font-bold uppercase flex-1">
          {item.question}
        </h3>
        <span
          className={`text-2xl md:text-3xl font-bold transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 md:mt-6 text-base md:text-lg font-medium text-gray-700">
          {item.answer}
        </div>
      )}
    </div>
  )
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="relative w-full bg-white py-12 md:py-24 px-4 md:px-8">
      <ScatteredStars />

      <div className="max-w-3xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Got Questions?
          </h2>
          <p className="text-lg md:text-xl font-semibold">
            Answers to the most common questions about tickets and events
          </p>
        </div>

        <div className="border-t-4 border-black">
          {FAQ_ITEMS.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
