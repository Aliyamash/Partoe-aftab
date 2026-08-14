'use client'

import { BadgeCheck, BookOpenCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { teamMembers } from '@/data/team'
import styles from './TeamProfiles.module.css'

type TeamProfilesProps = { locale: 'fa' | 'en' }

export function TeamProfiles({ locale }: TeamProfilesProps) {
  const items = teamMembers[locale]
  const copy = locale === 'fa'
    ? {
        eyebrow: 'تیم آموزشی و اجرایی',
        title: 'آدم‌هایی که مسیر یادگیری شما را می‌سازند',
        description: 'پشت هر کلاس خوب، یک انسان حرفه‌ای و دلسوز ایستاده است. با تخصص، تجربه و نقش هر یک از اعضای تیم پرتو آفتاب بیشتر آشنا شوید.',
        verified: 'پروفایل تیم پرتو آفتاب'
      }
    : {
        eyebrow: 'Teaching & executive team',
        title: 'The people shaping your learning journey',
        description: 'Behind every strong class is a skilled, caring person. Meet the experience, expertise and role of each Parto Aftab team member.',
        verified: 'Parto Aftab team profile'
      }

  return (
    <section className={styles.section} id="team-profiles">
      <Container>
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className={styles.list}>
          {items.map((member, index) => (
            <article className={styles.profile} id={member.id} key={member.id}>
              <figure className={styles.photo}>
                <img src={member.image} alt={member.name} loading="lazy" />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </figure>
              <div className={styles.copy}>
                <span className={styles.role}><BookOpenCheck aria-hidden="true" />{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.summary}</p>
                <ul>
                  {member.highlights.map((highlight) => <li key={highlight}><BadgeCheck aria-hidden="true" />{highlight}</li>)}
                </ul>
                <small data-pending={member.pending || undefined}>{copy.verified}</small>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
