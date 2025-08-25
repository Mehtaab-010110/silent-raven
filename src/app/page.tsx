// src/app/page.tsx
import HeroSection from '@/components/Hero'
import MissionSection from '@/components/MissionSection'
import GifWorkSection from '@/components/GifWorkSection'  
import ProductSection from '@/components/ProductSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import SlickNavbar from '@/components/SlickNavbar'

export default function Home() {
  return (
    <>
      <SlickNavbar />
      <HeroSection />
      <MissionSection />
      <GifWorkSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </>
  )
}