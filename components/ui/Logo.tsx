'use client'

import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'

export function Logo() {
  const { locale } = useLanguage()
  const copy = content[locale].brand
  return (
    <span className="logo" aria-label="مؤسسه زبان پرتو آفتاب">
      <i aria-hidden="true">{locale === 'fa' ? 'پ' : 'P'}</i>
      <span><strong>{copy.name}</strong><small>{copy.subtitle}</small></span>
    </span>
  )
}
