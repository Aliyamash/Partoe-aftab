import type { Metadata } from 'next'
import { LevelTestProvider } from '@/components/level-test/LevelTestProvider'
import { LanguageProvider } from '@/components/i18n/LanguageProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'مؤسسه زبان پرتو آفتاب | آموزش زبان‌های خارجی',
  description: 'دوره‌های انگلیسی، آلمانی و کره‌ای، IELTS، EPT و گردشگری با تعیین سطح رایگان حضوری و آنلاین.',
  metadataBase: new URL('https://nova-language-academy.ali2763-mar.chatgpt.site'),
  openGraph: {
    title: 'مؤسسه زبان پرتو آفتاب',
    description: 'زبان را زندگی کن، جهان را بساز.',
    type: 'website',
    locale: 'fa_IR',
    images: [{ url: '/og.png', width: 1536, height: 910, alt: 'مؤسسه زبان پرتو آفتاب' }]
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body><LanguageProvider><LevelTestProvider>{children}</LevelTestProvider></LanguageProvider></body></html>
}
