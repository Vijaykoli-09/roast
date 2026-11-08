import { CafeExperience } from '@/components/site/cafe-experience'
import { CoffeeProcess } from '@/components/site/coffee-process'
import { Footer } from '@/components/site/footer'
import { GallerySection } from '@/components/site/gallery-section'
import { HeroSection } from '@/components/site/hero-section'
import { MenuSection } from '@/components/site/menu-section'
import { Navbar } from '@/components/site/navbar'
import { NewsletterSection } from '@/components/site/newsletter-section'
import { StorySection } from '@/components/site/story-section'
import { Testimonials } from '@/components/site/testimonials'
import { VisitSection } from '@/components/site/visit-section'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <CafeExperience />
        <StorySection />
        <CoffeeProcess />
        <GallerySection />
        <Testimonials />
        <VisitSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
