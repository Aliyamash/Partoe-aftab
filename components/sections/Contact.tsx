import { Container } from '@/components/ui/Container'
import { LevelTestButton } from '@/components/level-test/LevelTestProvider'
import { institute } from '@/data/site'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section className={styles.section} id="contact">
      <Container>
        <div className={styles.cta}>
          <div className={styles.ghost} dir="ltr">HELLO · HALLO · 안녕</div>
          <div><span>آماده‌ای شروع کنی؟</span><h2>اولین جمله، شروع یک دنیای تازه است.</h2><p>تعیین سطح رایگان به‌صورت حضوری و آنلاین انجام می‌شود.</p></div>
          <LevelTestButton>رایگان تعیین سطح کن ←</LevelTestButton>
        </div>
        <div className={styles.info}>
          <article><span>☎</span><div><small>تماس با مؤسسه</small>{institute.phones.map((phone,index)=><a href={`tel:${institute.phoneLinks[index]}`} key={phone} dir="ltr">{phone}</a>)}</div></article>
          <article><span>◷</span><div><small>ساعات کاری</small>{institute.hours.map(hour=><strong key={hour}>{hour}</strong>)}</div></article>
          <article><span>⌁</span><div><small>شیوه برگزاری</small><strong>حضوری و آنلاین</strong><p>خصوصی، نیمه‌خصوصی و گروهی</p></div></article>
        </div>
      </Container>
    </section>
  )
}
