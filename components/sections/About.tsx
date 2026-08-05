'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { institute } from '@/data/site'
import { instituteEn } from '@/data/site-en'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import styles from './About.module.css'

export function About() {
  const { locale } = useLanguage()
  const data = locale === 'fa' ? institute : instituteEn
  const copy = content[locale].about
  return (
    <section className={styles.about} id="about">
      <Container>
        <div className={styles.intro}>
          <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={data.history[0]} />
          <div className={styles.date}><strong>{locale === 'fa' ? '۱۴۰۳' : '2024'}</strong><span>{copy.date}</span></div>
        </div>
        <div className={styles.story}>
          <article><span>01</span><p>{data.history[1]}</p></article>
          <article><span>02</span><p>{data.history[2]}</p></article>
        </div>
        <div className={styles.missionGrid}>
          <article className={styles.mission}><span>{copy.missionLabel}</span><h3>{copy.missionTitle}</h3><p>{data.mission}</p></article>
          <div className={styles.goals}><h3>{copy.goalsTitle}</h3>{data.goals.map((goal,index)=><div key={goal}><b>{String(index+1).padStart(2,'0')}</b><p>{goal}</p></div>)}</div>
        </div>
        <div className={styles.licenses}>
          {data.licenses.map(license=><div key={license}><span>✓</span><p><strong>{copy.license}</strong>{license}</p></div>)}
        </div>
      </Container>
    </section>
  )
}
