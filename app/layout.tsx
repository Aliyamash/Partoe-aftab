import type { Metadata } from 'next'
import { LevelTestProvider } from '@/components/level-test/LevelTestProvider'
import { LanguageProvider } from '@/components/i18n/LanguageProvider'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { RevealProvider } from '@/components/motion/RevealProvider'
import './globals.css'

const themeScript = `(function(){try{var key='parto-aftab-theme';var theme=localStorage.getItem(key);if(theme!=='light'&&theme!=='dark'){theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(error){document.documentElement.dataset.theme='light'}})()`
const languageScript = `(function(){try{var key='parto-aftab-language';var saved=localStorage.getItem(key);var languages=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];var system=languages.some(function(language){return /^fa(?:-|$)/i.test(language)})?'fa':'en';var locale=saved==='fa'||saved==='en'?saved:system;document.documentElement.lang=locale;document.documentElement.dir=locale==='fa'?'rtl':'ltr'}catch(error){document.documentElement.lang='fa';document.documentElement.dir='rtl'}})()`

export const metadata: Metadata = {
  title: 'مؤسسه زبان پرتو آفتاب | آموزش زبان‌های خارجی',
  description: 'دوره‌های انگلیسی، آلمانی، کره‌ای و ترکی استانبولی، IELTS، EPT و گردشگری با تعیین سطح رایگان حضوری و آنلاین.',
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
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider><LevelTestProvider><RevealProvider>{children}</RevealProvider></LevelTestProvider></LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
