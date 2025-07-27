// src/app/page.tsx
import HeroSection from '@/components/Hero'
import MissionSection from '@/components/MissionSection'
import GifWorkSection from '@/components/GifWorkSection'  
import ProductSection from '@/components/ProductSection'
import ProductSpecsCarousel from '@/components/ProductSpecsCarousel'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <GifWorkSection />
      <ProductSection />
      <ProductSpecsCarousel />
      <ContactSection />
      <Footer />
    </>
  )
}