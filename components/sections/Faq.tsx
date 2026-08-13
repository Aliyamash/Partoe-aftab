'use client'

import { CircleHelp, Plus } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import styles from './Faq.module.css'

export function Faq() {
  const { locale } = useLanguage()
  const copy = content[locale].faq
  return (
    <section className={styles.section} id="faq"><Container className={styles.grid}>
      <div><SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description}/><div className={styles.help}><span><CircleHelp aria-hidden="true" /></span><p>{locale==='fa'?'هنوز سؤال دارید؟ با ما تماس بگیرید.':'Still have questions? Call our team.'}</p><a href="tel:03152230045" dir="ltr">031 5223 0045</a></div></div>
      <div className={styles.list}>{copy.items.map(([question,answer],index)=><details key={question} open={index===0}>
        <summary><span>{question}</span><b><Plus aria-hidden="true" /></b></summary><p>{answer}</p>
      </details>)}</div>
    </Container></section>
  )
}
