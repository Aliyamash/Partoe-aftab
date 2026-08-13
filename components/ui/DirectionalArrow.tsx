import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Locale } from '@/components/i18n/LanguageProvider'

export function DirectionalArrow({ locale, size = 16 }: { locale: Locale; size?: number }) {
  const Icon = locale === 'fa' ? ArrowLeft : ArrowRight
  return <Icon size={size} strokeWidth={2.4} aria-hidden="true" />
}
