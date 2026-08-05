import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { books } from '@/data/site'
import styles from './Books.module.css'

export function Books() {
  return (
    <section className={styles.section} id="books">
      <Container className={styles.grid}>
        <SectionTitle light eyebrow="منابع آموزشی روز دنیا" title="کتاب‌هایی که با آن‌ها یاد می‌گیریم" description="منابع هر دوره با توجه به سن، سطح و هدف زبان‌آموز انتخاب می‌شوند تا یادگیری منسجم و قابل اندازه‌گیری باشد." />
        <div className={styles.books}>
          {books.map((book,index)=><article key={book.title} style={{ transform: `rotate(${index===0 ? 4 : index===2 ? -4 : 0}deg)` }}>
            <span>{book.code}</span><div><small dir="ltr">COURSE BOOK</small><h3 dir="ltr">{book.title}</h3><p>{book.audience}</p></div><b>پرتو آفتاب</b>
          </article>)}
        </div>
      </Container>
    </section>
  )
}
