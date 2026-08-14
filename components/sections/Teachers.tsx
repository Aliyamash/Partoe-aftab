'use client'

import Link from 'next/link'
import { ArrowUpLeft, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import { teamMembers } from '@/data/team'
import styles from './Teachers.module.css'

export function Teachers() {
  const { locale } = useLanguage()
  const items = teamMembers[locale]
  const copy = content[locale].teachers
  return (
    <section className={styles.section} id="teachers"><Container>
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className={styles.grid}>{items.map((teacher,index)=><article key={teacher.id}>
        <div className={styles.avatar} data-tone={index%3}>
          <img src={teacher.image} alt={teacher.name} loading="lazy" />
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className={styles.info}>
          <small>{teacher.role}</small>
          <h3>{teacher.name}</h3>
          <p>{teacher.highlights[0]}</p>
          <Link href={`/about#${teacher.id}`}><Sparkles aria-hidden="true" />{locale === 'fa' ? 'مشاهده تخصص و سوابق' : 'View expertise & profile'}<ArrowUpLeft aria-hidden="true" /></Link>
        </div>
      </article>)}</div>
    </Container></section>
  )
}
