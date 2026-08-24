import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BooksStore } from '@/components/books-page/BooksStore'

export const metadata: Metadata = {
  title: 'فروشگاه کتاب زبان',
  description: 'خرید کتاب‌های آموزشی Family and Friends، Teen2Teen و Evolve از مؤسسه زبان پرتو آفتاب همراه با راهنمای انتخاب سطح و ویرایش مناسب.',
  alternates: { canonical: '/books' },
  openGraph: {
    title: 'فروشگاه کتاب مؤسسه زبان پرتو آفتاب',
    description: 'منابع اصلی دوره‌های کودک، نوجوان و بزرگسال همراه با راهنمای انتخاب سطح.',
    url: '/books',
    type: 'website',
    locale: 'fa_IR',
    images: [{ url: '/og.png', width: 1536, height: 910, alt: 'فروشگاه کتاب مؤسسه زبان پرتو آفتاب' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فروشگاه کتاب مؤسسه زبان پرتو آفتاب',
    description: 'منابع اصلی دوره‌های کودک، نوجوان و بزرگسال همراه با راهنمای انتخاب سطح.',
    images: ['/og.png']
  }
}

export default function BooksPage() {
  return <><Header /><main><BooksStore /></main><Footer /></>
}
