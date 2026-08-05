'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import { teachers } from '@/data/site'
import { teachersEn } from '@/data/site-en'
import styles from './Teachers.module.css'

export function Teachers() {
  const { locale } = useLanguage()
  const items = locale === 'fa' ? teachers : teachersEn
  const copy = content[locale].teachers
  return (
    <section className={styles.section} id="teachers"><Container>
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className={styles.grid}>{items.map((teacher,index)=><article key={teacher.name}>
        <div className={styles.avatar} data-tone={index%3}><span>{teacher.initials}</span><i>EN</i></div>
        <div className={styles.info}><small>{teacher.role}</small><h3>{teacher.name}</h3><p>{teacher.education}</p><div><b>✦</b>{teacher.experience}</div></div>
      </article>)}</div>
    </Container></section>
  )
}
