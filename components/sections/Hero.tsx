'use client'

import { BadgeCheck, HeartHandshake, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { DirectionalArrow } from '@/components/ui/DirectionalArrow'
import { LevelTestButton } from '@/components/level-test/LevelTestProvider'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import styles from './Hero.module.css'

export function Hero() {
  const { locale } = useLanguage()
  const copy = content[locale].hero

  const scrollToLanguages = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const languagesSection = document.getElementById('languages')
    if (!languagesSection) return
    window.history.replaceState(null, '', '#languages')
    languagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <section className={styles.hero} id="top">
    <Container className={styles.intro}>
      <span className={styles.eyebrow}><HeartHandshake aria-hidden="true" />{copy.eyebrow}</span>
      <h1>{copy.title}<br/><em>{copy.accent}</em></h1>
      <p>{copy.description}</p>
    </Container>

    <figure className={styles.photo}>
      <Image
        src="/images/parto-aftab-community.webp"
        alt={locale === 'fa' ? 'زبان‌آموزان و تیم آموزشی مؤسسه زبان پرتو آفتاب' : 'Students and teaching team at Parto Aftab Language Institute'}
        width={1920}
        height={1280}
        sizes="100vw"
        quality={82}
        priority
      />
      <figcaption><BadgeCheck aria-hidden="true" />{locale === 'fa' ? 'یک قاب واقعی از خانواده پرتو آفتاب' : 'A real moment from the Parto Aftab community'}</figcaption>
    </figure>

    <Container className={styles.future}>
      <div className={styles.futureCopy}>
        <span><Sparkles aria-hidden="true" />{copy.futureEyebrow}</span>
        <h2>{copy.futureTitle}<br/><em>{copy.futureAccent}</em></h2>
        <p>{copy.futureDescription}</p>
      </div>
      <div className={styles.futureSide}>
        <div className={styles.actions}>
          <LevelTestButton className={styles.primary}>{copy.primary}<DirectionalArrow locale={locale} /></LevelTestButton>
          <a href="/#languages" onClick={scrollToLanguages}>{copy.secondary}<DirectionalArrow locale={locale} /></a>
        </div>
        <div className={styles.trust}>
          {copy.stats.map((stat, index) => <div className={styles.statWrap} key={stat[1]}>
            <strong>{stat[0]}</strong><span>{stat[1]}</span>
            {index < copy.stats.length - 1 && <i aria-hidden="true" />}
          </div>)}
        </div>
      </div>
    </Container>
  </section>
}
