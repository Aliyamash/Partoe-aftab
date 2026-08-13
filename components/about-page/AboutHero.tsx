import { Container } from '@/components/ui/Container'
import styles from './AboutPage.module.css'

type AboutHeroProps = {
  copy: {
    breadcrumbHome: string
    breadcrumbCurrent: string
    eyebrow: string
    title: string
    intro: string
    stats: readonly (readonly [string, string])[]
  }
}

export function AboutHero({ copy }: AboutHeroProps) {
  return (
    <section className={styles.hero} id="top">
      <Container>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">{copy.breadcrumbHome}</a><span aria-hidden="true">/</span><span>{copy.breadcrumbCurrent}</span>
        </nav>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{copy.eyebrow}</span>
            <h1>{copy.title}</h1>
            <p>{copy.intro}</p>
          </div>
          <div className={styles.sunMark} aria-hidden="true"><span>پ</span></div>
        </div>
        <div className={styles.stats}>
          {copy.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </Container>
    </section>
  )
}
