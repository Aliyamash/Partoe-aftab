import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutPage } from '@/components/about-page/AboutPage'

export const metadata: Metadata = {
  title: 'درباره مؤسسه زبان پرتو آفتاب',
  description: 'تاریخچه، رسالت، اهداف و مجوزهای رسمی مؤسسه زبان پرتو آفتاب.'
}

export default function AboutRoute() {
  return <><Header /><main><AboutPage /></main><Footer /></>
}
