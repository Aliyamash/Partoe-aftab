import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutPage } from '@/components/about-page/AboutPage'

export const metadata: Metadata = {
  title: 'درباره ما',
  description: 'با تاریخچه، رسالت، اهداف، مجوزهای رسمی، تیم آموزشی و تجربه‌های زبان‌آموزان مؤسسه زبان پرتو آفتاب آشنا شوید.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'درباره مؤسسه زبان پرتو آفتاب',
    description: 'تاریخچه، مجوزهای رسمی، تیم آموزشی و زندگی در پرتو آفتاب.',
    url: '/about',
    type: 'website',
    locale: 'fa_IR',
    images: [{ url: '/og.png', width: 1536, height: 910, alt: 'درباره مؤسسه زبان پرتو آفتاب' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'درباره مؤسسه زبان پرتو آفتاب',
    description: 'تاریخچه، مجوزهای رسمی، تیم آموزشی و زندگی در پرتو آفتاب.',
    images: ['/og.png']
  }
}

export default function AboutRoute() {
  return <><Header /><main><AboutPage /></main><Footer /></>
}
