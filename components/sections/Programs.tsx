import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { programs } from '@/data/site'
import styles from './Programs.module.css'

export function Programs() {
  return (
    <section className={styles.section} id="programs">
      <Container>
        <SectionTitle align="center" eyebrow="مسیر مناسب شما" title="هر هدفی، یک مسیر یادگیری" description="دوره‌ها از سطح مبتدی تا پیشرفته و در قالب کلاس‌های خصوصی، نیمه‌خصوصی و گروهی برگزار می‌شوند." />
        <div className={styles.grid}>
          {programs.map((program,index)=><article className={styles.card} key={program.title}>
            <div><span dir="ltr">{program.badge}</span><b>۰{index+1}</b></div><h3>{program.title}</h3><p>{program.description}</p><a href="#contact" aria-label={`اطلاعات دوره ${program.title}`}>←</a>
          </article>)}
        </div>
      </Container>
    </section>
  )
}
