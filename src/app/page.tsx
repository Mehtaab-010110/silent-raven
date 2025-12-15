import HeroSection from '@/components/Hero'
import MissionSection from '@/components/MissionSection'
import AboutSection from '@/components/AboutSection'
import ProductSection from '@/components/ProductSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import SlickNavbar from '@/components/SlickNavbar'
import GifWorkSection from '@/components/GifWorkSection'  

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