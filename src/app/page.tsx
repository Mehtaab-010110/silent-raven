// src/app/page.tsx
import Hero from '@/components/Hero'
import MissionSection from '@/components/MissionSection'
import GifWorkSection from '@/components/GifWorkSection'  

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <GifWorkSection />
    </>
  )
}