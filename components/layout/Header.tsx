'use client'

import { useState } from 'react'
import { Menu, Moon, Sun, UserRound, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { DirectionalArrow } from '@/components/ui/DirectionalArrow'
import { LevelTestButton } from '@/components/level-test/LevelTestProvider'
import styles from './Header.module.css'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { useTheme } from '@/components/theme/ThemeProvider'
import { content } from '@/data/content'

const hrefs = ['/','/about','/#languages','/#programs','/#teachers','/#testimonials','/#contact']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale, toggleLocale } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const copy = content[locale]
  const themeLabel = locale === 'fa'
    ? (theme === 'dark' ? 'فعال‌کردن حالت روشن' : 'فعال‌کردن حالت تاریک')
    : (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="/" aria-label={locale === 'fa' ? 'صفحه اصلی پرتو آفتاب' : 'Parto Aftab home'}><Logo /></a>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label={locale === 'fa' ? 'منوی اصلی' : 'Main navigation'}>
          {copy.nav.map((label,index) => <a key={hrefs[index]} href={hrefs[index]} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className={styles.actions}>
          <button className={styles.theme} onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
            {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
          <button className={styles.language} onClick={toggleLocale} aria-label={locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}>{locale === 'fa' ? 'EN' : 'فا'}</button>
          <a
            className={styles.panel}
            href="https://ems.partoe-aftab.ir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={locale === 'fa' ? 'ورود به پنل کاربری' : 'Open user panel'}
          >
            <UserRound aria-hidden="true" />
            <span>{locale === 'fa' ? 'پنل کاربری' : 'User panel'}</span>
          </a>
          <LevelTestButton className={styles.cta}>{locale === 'fa' ? 'تعیین سطح رایگان' : 'Free placement'} <DirectionalArrow locale={locale} /></LevelTestButton>
          <button className={styles.menu} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? (locale === 'fa' ? 'بستن منوی موبایل' : 'Close mobile menu') : (locale === 'fa' ? 'نمایش منوی موبایل' : 'Open mobile menu')} aria-expanded={menuOpen}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
      </Container>
    </header>
  )
}
