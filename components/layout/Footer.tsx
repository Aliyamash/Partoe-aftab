import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { institute } from '@/data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div><Logo /><p>{institute.tagline}</p></div>
        <div><h3>دسترسی سریع</h3><a href="#about">درباره ما</a><a href="#programs">دوره‌ها</a><a href="#teachers">تیم آموزشی</a></div>
        <div><h3>دوره‌های اصلی</h3><span>انگلیسی و آزمون‌ها</span><span>آلمانی و کره‌ای</span><span>کودک و نوجوان</span></div>
        <div><h3>تماس با مؤسسه</h3>{institute.phones.map((phone,index)=><a href={`tel:${institute.phoneLinks[index]}`} key={phone} dir="ltr">{phone}</a>)}</div>
      </Container>
      <Container className={styles.bottom}><span>© ۱۴۰۵ مؤسسه زبان پرتو آفتاب</span><a href="#top">بازگشت به بالا ↑</a></Container>
    </footer>
  )
}
