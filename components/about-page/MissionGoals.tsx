import { Container } from '@/components/ui/Container'
import { BadgeCheck } from 'lucide-react'
import styles from './AboutPage.module.css'

type MissionGoalsProps = {
  copy: {
    missionEyebrow: string
    missionTitle: string
    goalsEyebrow: string
    goalsTitle: string
    licensesTitle: string
  }
  mission: string
  goals: readonly string[]
  licenses: readonly string[]
}

export function MissionGoals({ copy, mission, goals, licenses }: MissionGoalsProps) {
  return (
    <section className={styles.valuesSection}>
      <Container>
        <div className={styles.valuesGrid}>
          <article className={styles.missionCard}>
            <span>{copy.missionEyebrow}</span><h2>{copy.missionTitle}</h2><p>{mission}</p>
          </article>
          <article className={styles.goalsCard}>
            <span>{copy.goalsEyebrow}</span><h2>{copy.goalsTitle}</h2>
            <ol>{goals.map((goal) => <li key={goal}>{goal}</li>)}</ol>
          </article>
        </div>
        <div className={styles.licenseBlock}>
          <h2>{copy.licensesTitle}</h2>
          <div>{licenses.map((license) => <article key={license}><span aria-hidden="true"><BadgeCheck /></span><strong>{license}</strong></article>)}</div>
        </div>
      </Container>
    </section>
  )
}
