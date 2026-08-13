'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { books } from '@/data/site'
import { booksEn } from '@/data/site-en'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import { BookOpenCheck, ShoppingBag } from 'lucide-react'
import { DirectionalArrow } from '@/components/ui/DirectionalArrow'
import { BookCover } from '@/components/books/BookCover'
import styles from './Books.module.css'

export function Books() {
  const { locale } = useLanguage()
  const items = locale === 'fa' ? books : booksEn
  const copy = content[locale].books
  return (
    <section className={styles.section} id="books">
      <Container>
        <div className={styles.intro}>
          <SectionTitle align="center" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
          <div className={styles.actions}><div className={styles.storeNote}><ShoppingBag aria-hidden="true" /><span>{copy.storeNote}</span></div>
          <a className={styles.shopButton} href="/books">{copy.shopAction}<DirectionalArrow locale={locale} /></a></div>
        </div>
        <div className={styles.books}>
          {items.map((book,index)=><article key={book.title} data-tone={index}>
            <BookCover image={book.image} title={book.title} tone={index} />
            <div className={styles.bookInfo}><span><small dir="ltr">PARTO AFTAB SELECTION</small><em>0{index + 1}</em></span><h3 dir="ltr">{book.title}</h3><p>{book.audience}</p>
            <div className={styles.cardFooter}><b><BookOpenCheck aria-hidden="true" />{copy.available}</b><a href="/books" aria-label={copy.shopAction}><DirectionalArrow locale={locale} /></a></div></div>
          </article>)}
        </div>
      </Container>
    </section>
  )
}
