'use client'

import { Container } from '@/components/ui/Container'
import { LevelTestButton } from '@/components/level-test/LevelTestProvider'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import styles from './Hero.module.css'

export function Hero() {
  const { locale } = useLanguage()
  const copy = content[locale].hero
  return (
    <section className={styles.hero} id="top">
      <Container className={styles.grid}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{copy.eyebrow}</span>
          <h1>{copy.title}<br/><em>{copy.accent}</em></h1>
          <p>{copy.description}</p>
          <div className={styles.actions}>
            <LevelTestButton className={styles.primary}>{copy.primary}</LevelTestButton>
            <a href="#languages">{copy.secondary}</a>
          </div>
          <div className={styles.trust}>
            {copy.stats.map((stat,index)=><div className={styles.statWrap} key={stat[1]}><div><strong>{stat[0]}</strong><span>{stat[1]}</span></div>{index < copy.stats.length-1 && <i/>}</div>)}
          </div>
        </div>
        <div className={styles.art} role="img" aria-label="تصویرسازی فضای آموزش زبان">
          <div className={styles.orangeShape}/><div className={styles.creamShape}/><span className={styles.orbit}/>
          <div className={styles.person}><i/><b/><span/></div>
          <div className={styles.book} dir="ltr">SPEAK<br/>TO THE<br/>WORLD</div>
          <div className={`${styles.float} ${styles.english}`} dir="ltr">HELLO!</div>
          <div className={`${styles.float} ${styles.german}`} dir="ltr">HALLO!</div>
          <div className={`${styles.float} ${styles.live}`}>● کلاس زنده</div>
          <div className={styles.sun}>پ</div>
          <span className={styles.spark}>✦</span>
        </div>
      </Container>
    </section>
  )
}
