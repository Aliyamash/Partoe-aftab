'use client'

import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import { institute } from '@/data/site'
import { instituteEn } from '@/data/site-en'
import styles from './Footer.module.css'

export function Footer() {
  const { locale } = useLanguage()
  const data = locale === 'fa' ? institute : instituteEn
  const copy = content[locale]
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div><Logo /><p>{copy.brand.tagline}</p></div>
        <div><h3>{locale==='fa'?'دسترسی سریع':'Quick links'}</h3><a href="#about">{copy.nav[0]}</a><a href="#languages">{copy.nav[1]}</a><a href="#teachers">{copy.nav[3]}</a></div>
        <div><h3>{locale==='fa'?'زبان‌های آموزشی':'Languages'}</h3><span>{locale==='fa'?'انگلیسی':'English'}</span><span>{locale==='fa'?'آلمانی':'German'}</span><span>{locale==='fa'?'کره‌ای':'Korean'}</span></div>
        <div><h3>{copy.contact.phone}</h3>{data.phones.map((phone,index)=><a href={`tel:${data.phoneLinks[index]}`} key={phone} dir="ltr">{phone}</a>)}</div>
      </Container>
      <Container className={styles.bottom}><span>{locale==='fa'?'© ۱۴۰۵ مؤسسه زبان پرتو آفتاب':'© 2026 Parto Aftab Language Institute'}</span><a href="#top">{locale==='fa'?'بازگشت به بالا ↑':'Back to top ↑'}</a></Container>
    </footer>
  )
}
