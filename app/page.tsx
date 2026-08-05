import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { FeatureBar } from '@/components/sections/FeatureBar'
import { About } from '@/components/sections/About'
import { Programs } from '@/components/sections/Programs'
import { Books } from '@/components/sections/Books'
import { Teachers } from '@/components/sections/Teachers'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <a className="skipLink" href="#main-content">رفتن به محتوای اصلی</a>
      <Header />
      <main id="main-content">
        <Hero />
        <FeatureBar />
        <About />
        <Programs />
        <Books />
        <Teachers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
