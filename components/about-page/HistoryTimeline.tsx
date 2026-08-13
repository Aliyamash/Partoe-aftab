import { Container } from '@/components/ui/Container'
import styles from './AboutPage.module.css'

type HistoryTimelineProps = {
  eyebrow: string
  title: string
  lead: string
  paragraphs: readonly string[]
}

export function HistoryTimeline({ eyebrow, title, lead, paragraphs }: HistoryTimelineProps) {
  return (
    <section className={styles.historySection}>
      <Container className={styles.historyGrid}>
        <div className={styles.historyHeading}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{lead}</p>
        </div>
        <div className={styles.timeline}>
          {paragraphs.map((paragraph, index) => (
            <article key={paragraph}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{index === 0 ? '۱۴۰۳ / 2024' : index === 1 ? '02' : '03'}</h3><p>{paragraph}</p></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
