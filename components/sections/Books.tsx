'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { books } from '@/data/site'
import { booksEn } from '@/data/site-en'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import styles from './Books.module.css'

export function Books() {
  const { locale } = useLanguage()
  const items = locale === 'fa' ? books : booksEn
  const copy = content[locale].books
  return (
    <section className={styles.section} id="books">
      <Container className={styles.grid}>
        <SectionTitle light eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className={styles.books}>
          {items.map((book,index)=><article key={book.title} style={{ transform: `rotate(${index===0 ? 4 : index===2 ? -4 : 0}deg)` }}>
            <span>{book.code}</span><div><small dir="ltr">COURSE BOOK</small><h3 dir="ltr">{book.title}</h3><p>{book.audience}</p></div><b>{content[locale].brand.name}</b>
          </article>)}
        </div>
      </Container>
    </section>
  )
}
