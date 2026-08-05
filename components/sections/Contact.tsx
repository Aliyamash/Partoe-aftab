'use client'

import { Container } from '@/components/ui/Container'
import { LevelTestButton } from '@/components/level-test/LevelTestProvider'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import { institute } from '@/data/site'
import { instituteEn } from '@/data/site-en'
import styles from './Contact.module.css'

export function Contact() {
  const { locale } = useLanguage()
  const data = locale === 'fa' ? institute : instituteEn
  const copy = content[locale].contact
  return (
    <section className={styles.section} id="contact"><Container>
      <div className={styles.cta}>
        <div className={styles.ghost} dir="ltr">HELLO · HALLO · 안녕</div>
        <div><span>{copy.eyebrow}</span><h2>{copy.title}</h2><p>{copy.description}</p></div>
        <LevelTestButton>{copy.action}</LevelTestButton>
      </div>
      <div className={styles.info}>
        <article><span>☎</span><div><small>{copy.phone}</small>{data.phones.map((phone,index)=><a href={`tel:${data.phoneLinks[index]}`} key={phone} dir="ltr">{phone}</a>)}</div></article>
        <article><span>◷</span><div><small>{copy.hours}</small>{data.hours.map(hour=><strong key={hour}>{hour}</strong>)}</div></article>
        <article><span>⌁</span><div><small>{copy.format}</small><strong>{copy.online}</strong><p>{copy.classTypes}</p></div></article>
      </div>
    </Container></section>
  )
}
