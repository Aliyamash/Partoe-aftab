import { Container } from '@/components/ui/Container'
import { LevelTestButton } from '@/components/level-test/LevelTestProvider'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Container className={styles.grid}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>✦ از اولین کلمه تا یک دنیای تازه</span>
          <h1>یاد بگیر، حرف بزن،<br/><em>آینده‌ات را بساز.</em></h1>
          <p>آموزش زبان‌های انگلیسی، آلمانی و کره‌ای با مدرس‌های متخصص، متدهای نوین و مسیری متناسب با هدف واقعی شما.</p>
          <div className={styles.actions}>
            <LevelTestButton className={styles.primary}>شروع تعیین سطح رایگان ←</LevelTestButton>
            <a href="#programs">مشاهده دوره‌ها</a>
          </div>
          <div className={styles.trust}>
            <div><strong>۱۲+</strong><span>سال تجربه آموزشی</span></div>
            <i/>
            <div><strong>۳</strong><span>زبان تخصصی</span></div>
            <i/>
            <div><strong>۶</strong><span>عضو تیم آموزشی</span></div>
          </div>
        </div>
        <div className={styles.art} role="img" aria-label="تصویرسازی فضای آموزش زبان">
          <div className={styles.orangeShape}/><div className={styles.creamShape}/><span className={styles.orbit}/>
          <div className={styles.person}><i/><b/><span/></div>
          <div className={styles.book} dir="ltr">SPEAK<br/>TO THE<br/>WORLD</div>
          <div className={`${styles.float} ${styles.english}`} dir="ltr">HELLO!</div>
          <div className={`${styles.float} ${styles.german}`} dir="ltr">HALLO!</div>
          <div className={`${styles.float} ${styles.live}`}>● کلاس زنده</div>
          <div className={styles.sun}>پ</div>
          <span className={styles.spark}>✦</span>
        </div>
      </Container>
    </section>
  )
}
