'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import styles from './Languages.module.css'

export function Languages() {
  const { locale } = useLanguage()
  const copy = content[locale].languages
  return (
    <section className={styles.section} id="languages">
      <Container>
        <SectionTitle align="center" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className={styles.grid}>
          {copy.items.map((language,index)=><article key={language.code} className={styles.card}>
            <div className={styles.top}><span>{language.code}</span><b>۰{index+1}</b></div>
            <div className={styles.symbol} dir="ltr">{language.phrase}</div>
            <small dir="ltr">{language.native}</small><h3>{language.name}</h3><p>{language.description}</p>
            <div className={styles.bottom}><span>{language.levels}</span><a href="#contact">{copy.action}</a></div>
          </article>)}
        </div>
      </Container>
    </section>
  )
}
