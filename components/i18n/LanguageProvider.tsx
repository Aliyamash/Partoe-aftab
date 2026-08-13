'use client'

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

export type Locale = 'fa' | 'en'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const STORAGE_KEY = 'parto-aftab-language'
const LanguageContext = createContext<LanguageContextValue | null>(null)

function getSystemLocale(): Locale {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  return languages.some(language => /^fa(?:-|$)/i.test(language)) ? 'fa' : 'en'
}

function getSavedLocale(): Locale | null {
  try {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY)
    return savedLocale === 'fa' || savedLocale === 'en' ? savedLocale : null
  } catch {
    return null
  }
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale
  document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr'

  const route = window.location.pathname.startsWith('/about')
    ? 'about'
    : window.location.pathname.startsWith('/books') ? 'books' : 'home'
  const pageMetadata = {
    fa: {
      home: ['مؤسسه زبان پرتو آفتاب | آموزش زبان‌های خارجی', 'آموزش انگلیسی، آلمانی، کره‌ای و ترکی استانبولی با تعیین سطح رایگان حضوری و آنلاین.'],
      about: ['درباره مؤسسه زبان پرتو آفتاب', 'تاریخچه، رسالت، اهداف و مجوزهای رسمی مؤسسه زبان پرتو آفتاب.'],
      books: ['فروشگاه کتاب مؤسسه زبان پرتو آفتاب', 'فروش کتاب‌های آموزشی همراه با راهنمای انتخاب منبع و سطح مناسب.']
    },
    en: {
      home: ['Parto Aftab Language Institute | Foreign Language Courses', 'English, German, Korean and Turkish courses with free online and in-person placement.'],
      about: ['About Parto Aftab Language Institute', 'The history, mission, goals and official licenses of Parto Aftab Language Institute.'],
      books: ['Parto Aftab Language Institute Bookshop', 'Language-learning books with guidance for choosing the right resource and level.']
    }
  } as const
  const [title, description] = pageMetadata[locale][route]
  document.title = title
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fa')

  useEffect(() => {
    const initialLocale = getSavedLocale() ?? getSystemLocale()
    setLocaleState(initialLocale)
    applyDocumentLocale(initialLocale)

    const followSystemLanguage = () => {
      if (getSavedLocale()) return
      const nextLocale = getSystemLocale()
      setLocaleState(nextLocale)
      applyDocumentLocale(nextLocale)
    }

    window.addEventListener('languagechange', followSystemLanguage)
    return () => window.removeEventListener('languagechange', followSystemLanguage)
  }, [])

  const setLocale = useCallback((nextLocale: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale)
    } catch {
      // The selection still works for the current visit when storage is unavailable.
    }
    setLocaleState(nextLocale)
    applyDocumentLocale(nextLocale)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState(currentLocale => {
      const nextLocale: Locale = currentLocale === 'fa' ? 'en' : 'fa'
      try {
        window.localStorage.setItem(STORAGE_KEY, nextLocale)
      } catch {
        // The selection still works for the current visit when storage is unavailable.
      }
      applyDocumentLocale(nextLocale)
      return nextLocale
    })
  }, [])

  return <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
