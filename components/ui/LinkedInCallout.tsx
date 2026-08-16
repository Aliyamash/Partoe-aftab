'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import styles from './LinkedInCallout.module.css'

export function LinkedInCallout() {
  const { locale } = useLanguage()
  const copy = locale === 'fa'
    ? {
        eyebrow: 'شبکه حرفه‌ای پرتو آفتاب',
        title: 'همراه مسیر رشد ما در لینکدین باشید',
        description: 'تجربه‌های آموزشی، رویدادهای مؤسسه و تازه‌های حرفه‌ای پرتو آفتاب را در لینکدین دنبال کنید.',
        action: 'مشاهده صفحه لینکدین'
      }
    : {
        eyebrow: 'Parto Aftab professional network',
        title: 'Follow our journey on LinkedIn',
        description: 'Discover our educational stories, institute events and professional updates on LinkedIn.',
        action: 'Visit our LinkedIn page'
      }

  return (
    <aside className={styles.callout} aria-labelledby="linkedin-title">
      <span className={styles.icon}><b aria-hidden="true">in</b></span>
      <div className={styles.copy}>
        <small>{copy.eyebrow}</small>
        <h3 id="linkedin-title">{copy.title}</h3>
        <p>{copy.description}</p>
      </div>
      <a href="https://www.linkedin.com/company/parto-aftab/" target="_blank" rel="noopener noreferrer">
        {copy.action}<ArrowUpRight aria-hidden="true" />
      </a>
    </aside>
  )
}
