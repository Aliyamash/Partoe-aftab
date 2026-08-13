'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { DirectionalArrow } from '@/components/ui/DirectionalArrow'
import { programs } from '@/data/site'
import { programsEn } from '@/data/site-en'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import styles from './Programs.module.css'

export function Programs() {
  const { locale } = useLanguage()
  const items = locale === 'fa' ? programs : programsEn
  const copy = content[locale].programs
  return (
    <section className={styles.section} id="programs">
      <Container>
        <SectionTitle align="center" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className={styles.grid}>
          {items.map((program,index)=><article className={styles.card} key={program.title}>
            <div><span dir="ltr">{program.badge}</span><b>0{index+1}</b></div><h3>{program.title}</h3><p>{program.description}</p><a href="#contact" aria-label={`${locale === 'fa' ? 'اطلاعات دوره' : 'Course details'} ${program.title}`}><DirectionalArrow locale={locale} /></a>
          </article>)}
        </div>
      </Container>
    </section>
  )
}
