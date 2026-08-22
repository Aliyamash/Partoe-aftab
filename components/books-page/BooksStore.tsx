'use client'

import { BookOpen, GraduationCap, PackageCheck, PhoneCall, ShoppingBag } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { books } from '@/data/site'
import { booksEn } from '@/data/site-en'
import styles from './BooksStore.module.css'
import { BookCover } from '@/components/books/BookCover'

const copy = {
  fa: {
    breadcrumb: 'صفحه اصلی / فروشگاه کتاب', eyebrow: 'فروشگاه کتاب پرتو آفتاب', title: 'منبع درست، شروع یک یادگیری ماندگار', description: 'کتاب‌های اصلی دوره‌های کودک، نوجوان و بزرگسال را متناسب با سطح خود تهیه کنید. برای اطلاع از موجودی، قیمت و انتخاب ویرایش مناسب با مؤسسه تماس بگیرید.', call: 'استعلام موجودی و قیمت', productsEyebrow: 'کتاب‌های آموزشی', productsTitle: 'منابعی که می‌فروشیم و تدریس می‌کنیم', available: 'فروش و تدریس در مؤسسه', order: 'برای سفارش تماس بگیرید', stepsTitle: 'خرید کتاب چطور انجام می‌شود؟', steps: [['انتخاب سطح مناسب','کارشناس آموزش، کتاب و ویرایش مناسب سن و سطح شما را مشخص می‌کند.'],['بررسی موجودی','موجودی و قیمت روز کتاب پیش از خرید به شما اعلام می‌شود.'],['تحویل از مؤسسه','کتاب را از مؤسسه دریافت می‌کنید و می‌توانید آموزش را با همان منبع ادامه دهید.']]
  },
  en: {
    breadcrumb: 'Home / Bookshop', eyebrow: 'Parto Aftab Bookshop', title: 'The right resource for lasting progress', description: 'Purchase the original course books used in our children, teen and adult programs. Contact the institute for availability, current prices and help choosing the right edition.', call: 'Check price & availability', productsEyebrow: 'Learning resources', productsTitle: 'Books we sell and teach', available: 'Sold and taught at the institute', order: 'Call to order', stepsTitle: 'How to buy your book', steps: [['Choose the right level','Our education team helps you select the right book and edition for your age and level.'],['Check availability','We confirm current stock and pricing before your purchase.'],['Collect at the institute','Pick up your book at the institute and continue learning with the same resource.']]
  }
} as const

export function BooksStore() {
  const { locale } = useLanguage()
  const text = copy[locale]
  const items = locale === 'fa' ? books : booksEn
  const stepIcons = [GraduationCap, PackageCheck, ShoppingBag]

  return (
    <>
      <section className={styles.hero} id="top">
        <Container>
          <a className={styles.breadcrumb} href="/">{text.breadcrumb}</a>
          <div className={styles.heroGrid}>
            <div><span className={styles.eyebrow}>{text.eyebrow}</span><h1>{text.title}</h1><p>{text.description}</p><a className={styles.callButton} href="tel:03152230945"><PhoneCall aria-hidden="true" />{text.call}</a></div>
            <div className={styles.heroIcon} aria-hidden="true"><BookOpen /></div>
          </div>
        </Container>
      </section>
      <section className={styles.products}>
        <Container>
          <div className={styles.sectionHeading}><span>{text.productsEyebrow}</span><h2>{text.productsTitle}</h2></div>
          <div className={styles.productGrid}>
            {items.map((book,index) => <article key={book.title} data-tone={index}>
              <div className={styles.productNumber}><span>PARTO AFTAB COLLECTION</span><b>0{index + 1}</b></div>
              <BookCover image={book.image} title={book.title} tone={index} variant="store" />
              <div className={styles.productInfo}><span><PackageCheck aria-hidden="true" />{text.available}</span><h3 dir="ltr">{book.title}</h3><p>{book.audience}</p><a href="tel:03152230945">{text.order}<PhoneCall aria-hidden="true" /></a></div>
            </article>)}
          </div>
        </Container>
      </section>
      <section className={styles.steps}>
        <Container><h2>{text.stepsTitle}</h2><div>{text.steps.map(([title, description], index) => { const Icon = stepIcons[index]; return <article key={title}><span><Icon aria-hidden="true" /></span><strong>{title}</strong><p>{description}</p></article> })}</div></Container>
      </section>
    </>
  )
}
