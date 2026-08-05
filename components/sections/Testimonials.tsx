'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import styles from './Testimonials.module.css'

export function Testimonials() {
  const { locale } = useLanguage()
  const copy = content[locale].testimonials
  return (
    <section className={styles.section} id="testimonials"><Container>
      <div className={styles.heading}><SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description}/><div className={styles.score}><strong>۴.۹</strong><span>★★★★★</span><small>{locale==='fa'?'میانگین رضایت':'Average rating'}</small></div></div>
      <div className={styles.grid}>{copy.items.map((item,index)=><article key={item.name}>
        <div className={styles.quote}>“</div><div className={styles.stars}>★★★★★</div><p>{item.text}</p>
        <div className={styles.person}><span>{index===0?'م ک':index===1?'آ م':'ن ح'}</span><div><strong>{item.name}</strong><small>{item.course}</small></div></div>
      </article>)}</div>
    </Container></section>
  )
}
