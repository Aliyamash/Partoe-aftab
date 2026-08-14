'use client'

import { Camera, MessagesSquare, Send } from 'lucide-react'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import styles from './SocialLinks.module.css'

type SocialLinksProps = {
  tone?: 'default' | 'dark'
}

const socialLinks = [
  { id: 'telegram', href: 'https://t.me/parto_aftab_language_academy', icon: Send },
  { id: 'instagram', href: 'https://instagram.com/partoe_aftab_academy', icon: Camera },
  { id: 'rubika', href: 'https://rubika.ir/partoe_aftab', icon: MessagesSquare }
] as const

export function SocialLinks({ tone = 'default' }: SocialLinksProps) {
  const { locale } = useLanguage()
  const copy = locale === 'fa'
    ? { title: 'ما را دنبال کنید', subtitle: 'خبرها، رویدادها و حال‌وهوای پرتو آفتاب', labels: { telegram: 'تلگرام', instagram: 'اینستاگرام', rubika: 'روبیکا' } }
    : { title: 'Follow Parto Aftab', subtitle: 'News, events and life at our institute', labels: { telegram: 'Telegram', instagram: 'Instagram', rubika: 'Rubika' } }

  return (
    <section className={`${styles.socials} ${tone === 'dark' ? styles.dark : ''}`} aria-label={copy.title}>
      <div className={styles.heading}><strong>{copy.title}</strong><span>{copy.subtitle}</span></div>
      <div className={styles.links}>
        {socialLinks.map(({ id, href, icon: Icon }) => (
          <a key={id} className={styles.link} data-network={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={copy.labels[id]}>
            <span><Icon aria-hidden="true" /></span>
            <b>{copy.labels[id]}</b>
          </a>
        ))}
      </div>
    </section>
  )
}
