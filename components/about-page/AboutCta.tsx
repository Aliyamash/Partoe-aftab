'use client'

import { Container } from '@/components/ui/Container'
import { LevelTestButton } from '@/components/level-test/LevelTestProvider'
import { DirectionalArrow } from '@/components/ui/DirectionalArrow'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import styles from './AboutPage.module.css'

type AboutCtaProps = {
  eyebrow: string
  title: string
  description: string
  action: string
  backHome: string
}

export function AboutCta({ eyebrow, title, description, action, backHome }: AboutCtaProps) {
  const { locale } = useLanguage()
  return (
    <section className={styles.ctaSection}>
      <Container>
        <div className={styles.ctaBox}>
          <div><span>{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>
          <div className={styles.ctaActions}><LevelTestButton>{action}<DirectionalArrow locale={locale} /></LevelTestButton><a href="/">{backHome}</a></div>
        </div>
      </Container>
    </section>
  )
}
