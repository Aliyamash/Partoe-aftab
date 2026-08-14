import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import styles from './AboutPage.module.css'

type GalleryProps = {
  eyebrow: string
  title: string
  description: string
  gallery: readonly {
    src: string
    title: string
    caption: string
    alt: string
    size: 'feature' | 'standard'
    position?: string
  }[]
}

export function InstituteGallery({ eyebrow, title, description, gallery }: GalleryProps) {
  return (
    <section className={styles.gallerySection} aria-labelledby="gallery-title">
      <Container>
        <div id="gallery-title"><SectionTitle eyebrow={eyebrow} title={title} description={description} /></div>
        <div className={styles.gallery}>
          {gallery.map((item) => (
            <figure className={styles.photoCard} key={item.src} data-size={item.size}>
              <div className={styles.institutePhoto}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={item.size === 'feature' ? '(max-width: 680px) 100vw, 90vw' : '(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw'}
                  quality={74}
                  loading="lazy"
                  style={{ objectPosition: item.position ?? 'center' }}
                />
              </div>
              <figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
