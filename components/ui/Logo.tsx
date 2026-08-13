'use client'

import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'

export function Logo() {
  const { locale } = useLanguage()
  const copy = content[locale].brand
  return (
    <span className="logo" aria-label={locale === 'fa' ? 'مؤسسه زبان پرتو آفتاب' : 'Parto Aftab Language Institute'}>
      <span className="logoMark" aria-hidden="true" />
      <span className="logoText"><strong>{copy.name}</strong><small>{copy.subtitle}</small></span>
    </span>
  )
}
