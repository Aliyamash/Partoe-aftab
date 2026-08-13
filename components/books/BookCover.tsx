import styles from './BookCover.module.css'

type BookCoverProps = {
  image: string
  title: string
  tone: number
  variant?: 'compact' | 'store'
}

export function BookCover({ image, title, tone, variant = 'compact' }: BookCoverProps) {
  return <div className={`${styles.stage} ${styles[variant]}`} data-tone={tone} data-number={`0${tone + 1}`}>
    <span className={styles.glow} aria-hidden="true" />
    <div className={styles.book}>
      <img src={image} alt={`${title} book cover`} loading="lazy" decoding="async" />
    </div>
    <span className={styles.shadow} aria-hidden="true" />
  </div>
}
