'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { LevelTestButton } from '@/components/level-test/LevelTestProvider'
import styles from './Header.module.css'

const links = [
  { href: '#about', label: 'درباره ما' }, { href: '#programs', label: 'دوره‌ها' },
  { href: '#teachers', label: 'تیم آموزشی' }, { href: '#books', label: 'کتاب‌ها' }, { href: '#contact', label: 'تماس' }
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#top"><Logo /></a>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="منوی اصلی">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
        </nav>
        <div className={styles.actions}>
          <LevelTestButton className={styles.cta}>تعیین سطح رایگان <span>←</span></LevelTestButton>
          <button className={styles.menu} onClick={() => setMenuOpen(!menuOpen)} aria-label="نمایش منوی موبایل" aria-expanded={menuOpen}><i/><i/><i/></button>
        </div>
      </Container>
    </header>
  )
}
