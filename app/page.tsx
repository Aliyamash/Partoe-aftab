import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { FeatureBar } from '@/components/sections/FeatureBar'
import { Languages } from '@/components/sections/Languages'
import { About } from '@/components/sections/About'
import { Programs } from '@/components/sections/Programs'
import { Books } from '@/components/sections/Books'
import { Teachers } from '@/components/sections/Teachers'
import { Testimonials } from '@/components/sections/Testimonials'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'
import { SkipLink } from '@/components/ui/SkipLink'

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <FeatureBar />
        <Languages />
        <About />
        <Programs />
        <Books />
        <Teachers />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
