'use client'

import { useLanguage } from '@/components/i18n/LanguageProvider'
import { institute } from '@/data/site'
import { instituteEn } from '@/data/site-en'
import { aboutPageContent } from '@/data/about-page'
import { AboutHero } from './AboutHero'
import { InstituteGallery } from './InstituteGallery'
import { HistoryTimeline } from './HistoryTimeline'
import { MissionGoals } from './MissionGoals'
import { AboutCta } from './AboutCta'
import { CommunityGallery } from './CommunityGallery'
import { TeamProfiles } from './TeamProfiles'

export function AboutPage() {
  const { locale } = useLanguage()
  const copy = aboutPageContent[locale]
  const data = locale === 'fa' ? institute : instituteEn

  return (
    <>
      <AboutHero copy={copy} />
      <InstituteGallery eyebrow={copy.galleryEyebrow} title={copy.galleryTitle} description={copy.galleryDescription} gallery={copy.gallery} />
      <HistoryTimeline eyebrow={copy.historyEyebrow} title={copy.historyTitle} lead={copy.historyLead} paragraphs={data.history} />
      <TeamProfiles locale={locale} />
      <CommunityGallery eyebrow={copy.memoriesEyebrow} title={copy.memoriesTitle} description={copy.memoriesDescription} items={copy.memories} />
      <MissionGoals copy={copy} mission={data.mission} goals={data.goals} licenses={data.licenses} />
      <AboutCta eyebrow={copy.ctaEyebrow} title={copy.ctaTitle} description={copy.ctaDescription} action={copy.ctaAction} backHome={copy.backHome} />
    </>
  )
}
