import HeroSection from '@/components/Hero'
import ProductSection from '@/components/ProductSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import SlickNavbar from '@/components/SlickNavbar'
import GifWorkSection from '@/components/GifWorkSection'  
import CUASVideoSection from '@/components/CUASVideoSection'

export default function Home() {
  return (
    <>
      <SlickNavbar />
      <HeroSection />
      <GifWorkSection />
      <CUASVideoSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </>
  )
}