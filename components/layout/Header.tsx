'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { LevelTestButton } from '@/components/level-test/LevelTestProvider'
import styles from './Header.module.css'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'

const hrefs = ['#about','#languages','#programs','#teachers','#testimonials','#faq','#contact']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale, toggleLocale } = useLanguage()
  const copy = content[locale]
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#top"><Logo /></a>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="منوی اصلی">
          {copy.nav.map((label,index) => <a key={hrefs[index]} href={hrefs[index]} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className={styles.actions}>
          <button className={styles.language} onClick={toggleLocale} aria-label={locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}>{locale === 'fa' ? 'EN' : 'فا'}</button>
          <LevelTestButton className={styles.cta}>{locale === 'fa' ? 'تعیین سطح رایگان' : 'Free placement'} <span>←</span></LevelTestButton>
          <button className={styles.menu} onClick={() => setMenuOpen(!menuOpen)} aria-label="نمایش منوی موبایل" aria-expanded={menuOpen}><i/><i/><i/></button>
        </div>
      </Container>
    </header>
  )
}
