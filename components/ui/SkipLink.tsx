'use client'

import { useLanguage } from '@/components/i18n/LanguageProvider'

export function SkipLink() {
  const { locale } = useLanguage()
  return <a className="skipLink" href="#main-content">
    {locale === 'fa' ? 'رفتن به محتوای اصلی' : 'Skip to main content'}
  </a>
}
