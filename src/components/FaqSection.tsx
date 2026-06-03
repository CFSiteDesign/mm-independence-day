import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What's included in my 4th of July ticket?",
    a: "Your ticket gets you through the door, a welcome shot on arrival, access to all themed events at your hostel, and a night you'll actually remember — or won't. Depends how hard you go. Check your specific location for the full event lineup.",
  },
  {
    q: "Do I have to be American?",
    a: "Hell no. The 4th of July at Mad Monkey is for anyone who loves a good time, a great atmosphere, and a reason to go full send. Bring your flag, borrow ours — all nationalities welcome.",
  },
  {
    q: "How long does the party run?",
    a: "All. Night. Long. Kick-off times vary by location, but expect fireworks, BBQ, free flow, and live DJs well into the early hours. No curfew on freedom.",
  },
  {
    q: "Can I buy tickets for multiple locations?",
    a: "Absolutely — each location runs its own event on July 4th. Buy a ticket for each hostel you want to hit. Just check the timing at each spot so you're not trying to be in two places at once. (We've seen people try. It never works.)",
  },
  {
    q: "What's your refund policy?",
    a: "No refunds — but tickets are fully transferable. If you can't make it, pass it on to a mate who can. Born free means free to hand over your ticket.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 px-4 bg-white border-t-4 border-black">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block mb-4 px-4 py-1 bg-[#1B2A5C] text-white font-black text-xs tracking-[0.3em] uppercase brutalist-border">
            GOT QUESTIONS?
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-[#1B2A5C] leading-none">
            WE GOT ANSWERS
          </h2>
        </div>

        {/* Accordion */}
        <div className="brutalist-border brutalist-shadow">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className={i === 0 ? "border-t-0" : ""}
              >
                <AccordionTrigger className="px-6 text-[#1B2A5C] text-sm md:text-base hover:text-[#CC2200]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-bold text-sm mb-4 uppercase tracking-widest">
            Still have questions?
          </p>
          <a
            href="https://madmonkeyhostels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#1B2A5C] text-white font-black text-sm uppercase tracking-widest brutalist-border brutalist-shadow brutalist-shadow-hover"
          >
            HIT US UP →
          </a>
        </div>
      </div>
    </section>
  );
}
