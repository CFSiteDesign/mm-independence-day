import HeroSection from '@/components/HeroSection'
import WavesSection from '@/components/WavesSection'
import PropertySelector from '@/components/PropertySelector'
import FaqSection from '@/components/FaqSection'
import FooterSection from '@/components/FooterSection'

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <WavesSection />
      <PropertySelector />
      <FaqSection />
      <FooterSection />
    </div>
  )
}
