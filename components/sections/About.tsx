import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { institute } from '@/data/site'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} id="about">
      <Container>
        <div className={styles.intro}>
          <SectionTitle eyebrow="داستان پرتو آفتاب" title="آموزش زبان، برای ساختن فرصت‌های بزرگ‌تر" description={institute.history[0]} />
          <div className={styles.date}><strong>۱۴۰۳</strong><span>آغاز یک مسیر روشن</span></div>
        </div>
        <div className={styles.story}>
          <article><span>01</span><p>{institute.history[1]}</p></article>
          <article><span>02</span><p>{institute.history[2]}</p></article>
        </div>
        <div className={styles.missionGrid}>
          <article className={styles.mission}><span>رسالت ما</span><h3>توانمند، خلاق و بااعتمادبه‌نفس</h3><p>{institute.mission}</p></article>
          <div className={styles.goals}><h3>هدف‌هایی که هر روز دنبال می‌کنیم</h3>{institute.goals.map((goal,index)=><div key={goal}><b>{String(index+1).padStart(2,'0')}</b><p>{goal}</p></div>)}</div>
        </div>
        <div className={styles.licenses}>
          <div><span>✓</span><p><strong>مجوز رسمی</strong>سازمان فنی و حرفه‌ای کشور</p></div>
          <div><span>✓</span><p><strong>مجوز رسمی</strong>وزارت آموزش و پرورش</p></div>
        </div>
      </Container>
    </section>
  )
}
