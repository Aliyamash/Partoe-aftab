'use client'

import { useEffect, useRef } from 'react'
import { BadgeCheck, Quote, Sparkles, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'
import { studentTestimonials } from '@/data/testimonials'
import styles from './Testimonials.module.css'

type Testimonial = { name: string; course: string; text: string }

function Stars({ locale }: { locale: 'fa' | 'en' }) {
  return <span className={styles.stars} aria-label={locale === 'fa' ? '۵ از ۵ ستاره' : '5 out of 5 stars'}>
    {Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" />)}
  </span>
}

function TestimonialCard({ item, index, locale }: { item: Testimonial; index: number; locale: 'fa' | 'en' }) {
  const initials = item.name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]).join(' ')
  return <article className={styles.card} dir="auto">
    <div className={styles.cardTop}>
      <span className={styles.verified}><BadgeCheck aria-hidden="true" />{locale === 'fa' ? 'تجربه واقعی' : 'Verified story'}</span>
      <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
    </div>
    <Quote className={styles.quote} aria-hidden="true" />
    <p>{item.text}</p>
    <div className={styles.person}>
      <span className={styles.avatar} aria-hidden="true">{initials}</span>
      <div><strong>{item.name}</strong><small>{item.course}</small></div>
      <Stars locale={locale} />
    </div>
  </article>
}

export function Testimonials() {
  const { locale } = useLanguage()
  const copy = content[locale].testimonials
  const items = studentTestimonials[locale]
  const viewportRef = useRef<HTMLDivElement>(null)
  const firstGroupRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const viewport = viewportRef.current
    const firstGroup = firstGroupRef.current
    if (!viewport || !firstGroup) return

    let groupWidth = firstGroup.getBoundingClientRect().width
    let position = 0
    let frame = 0
    let previousTime = performance.now()
    const resizeObserver = new ResizeObserver(() => {
      groupWidth = firstGroup.getBoundingClientRect().width
      if (groupWidth && position >= groupWidth) position %= groupWidth
    })
    resizeObserver.observe(firstGroup)
    viewport.scrollLeft = 0

    const move = (time: number) => {
      const elapsed = Math.min(time - previousTime, 50)
      previousTime = time
      if (!pausedRef.current && groupWidth > 0) {
        position += (window.innerWidth < 600 ? 34 : 44) * elapsed / 1000
        if (position >= groupWidth) position %= groupWidth
        viewport.scrollLeft = position
      }
      frame = window.requestAnimationFrame(move)
    }
    frame = window.requestAnimationFrame(move)

    return () => {
      window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
    }
  }, [locale])

  const pause = () => { pausedRef.current = true }
  const resume = () => { pausedRef.current = false }

  return <section className={styles.section} id="testimonials">
    <Container><div className={styles.heading}>
      <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} align="center" light/>
      <div className={styles.score}><Sparkles aria-hidden="true" /><strong>{locale === 'fa' ? '۴.۹' : '4.9'}</strong><Stars locale={locale} /><small>{locale === 'fa' ? 'از زبان‌آموزان پرتو آفتاب' : 'from Parto Aftab students'}</small></div>
    </div></Container>
    <div className={styles.cinemaRail} aria-label={copy.title}>
      <div
        className={styles.viewport}
        ref={viewportRef}
        onPointerDown={pause}
        onPointerUp={resume}
        onPointerCancel={resume}
        onFocusCapture={pause}
        onBlurCapture={resume}
      >
        <div className={styles.track}>
          {[0, 1, 2].map(copyIndex => <div className={styles.group} ref={copyIndex === 0 ? firstGroupRef : undefined} aria-hidden={copyIndex > 0} key={copyIndex}>
            {items.map((item, index) => <TestimonialCard item={item} index={index} locale={locale} key={`${copyIndex}-${item.name}`} />)}
          </div>)}
        </div>
      </div>
    </div>
  </section>
}
