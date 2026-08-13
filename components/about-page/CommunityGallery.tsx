import Image from 'next/image'
import { Camera } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import styles from './AboutPage.module.css'

type CommunityGalleryProps = {
  eyebrow: string
  title: string
  description: string
  items: readonly {
    src: string
    title: string
    caption: string
    alt: string
    shape: 'wide' | 'portrait' | 'standard'
    position?: string
  }[]
}

export function CommunityGallery({ eyebrow, title, description, items }: CommunityGalleryProps) {
  return (
    <section className={styles.memoriesSection}>
      <Container>
        <div className={styles.memoriesHeading}><SectionTitle eyebrow={eyebrow} title={title} description={description} /><span aria-hidden="true"><Camera /></span></div>
        <div className={styles.memoriesGrid}>
          {items.map((item, index) => (
            <figure key={item.src} data-shape={item.shape}>
              <div className={styles.memoryPhoto}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={item.shape === 'wide' ? '(max-width: 680px) 100vw, (max-width: 900px) 100vw, 66vw' : '(max-width: 680px) 100vw, (max-width: 900px) 50vw, 34vw'}
                  style={{ objectPosition: item.position ?? 'center' }}
                />
                <span className={styles.memoryNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
