import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BooksStore } from '@/components/books-page/BooksStore'

export const metadata: Metadata = {
  title: 'فروشگاه کتاب مؤسسه زبان پرتو آفتاب',
  description: 'فروش کتاب‌های آموزشی Family and Friends، Teen2Teen و Evolve همراه با راهنمای انتخاب سطح.'
}

export default function BooksPage() {
  return <><Header /><main><BooksStore /></main><Footer /></>
}
