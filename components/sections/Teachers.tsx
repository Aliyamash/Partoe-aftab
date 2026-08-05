import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { teachers } from '@/data/site'
import styles from './Teachers.module.css'

export function Teachers() {
  return (
    <section className={styles.section} id="teachers">
      <Container>
        <SectionTitle eyebrow="آدم‌های پشت مسیر" title="تیمی که کنار شما می‌ماند" description="تجربه، تخصص و اشتیاق به آموزش؛ سه ویژگی مشترک اعضای تیم پرتو آفتاب است." />
        <div className={styles.grid}>{teachers.map((teacher,index)=><article key={teacher.name}>
          <div className={styles.avatar} data-tone={index%3}><span>{teacher.initials}</span><i>EN</i></div>
          <div className={styles.info}><small>{teacher.role}</small><h3>{teacher.name}</h3><p>{teacher.education}</p><div><b>✦</b>{teacher.experience}</div></div>
        </article>)}</div>
      </Container>
    </section>
  )
}
