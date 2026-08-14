import Image from 'next/image'
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
      <Image
        src={image}
        alt={`${title} book cover`}
        fill
        sizes={variant === 'store' ? '(max-width: 560px) 72vw, (max-width: 900px) 40vw, 26vw' : '(max-width: 560px) 70vw, (max-width: 900px) 38vw, 24vw'}
        quality={76}
        loading="lazy"
      />
    </div>
    <span className={styles.shadow} aria-hidden="true" />
  </div>
}
