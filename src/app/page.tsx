import HeroSection from '@/components/Hero'
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
      <GifWorkSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </>
  )
}