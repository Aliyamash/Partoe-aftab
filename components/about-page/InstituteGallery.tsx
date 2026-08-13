import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ImagePlus } from 'lucide-react'
import styles from './AboutPage.module.css'

type GalleryProps = {
  eyebrow: string
  title: string
  description: string
  photoPlaceholder: string
  gallery: readonly (readonly [string, string])[]
}

export function InstituteGallery({ eyebrow, title, description, photoPlaceholder, gallery }: GalleryProps) {
  return (
    <section className={styles.gallerySection} aria-labelledby="gallery-title">
      <Container>
        <div id="gallery-title"><SectionTitle eyebrow={eyebrow} title={title} description={description} /></div>
        <div className={styles.gallery}>
          {gallery.map(([label, caption], index) => (
            <figure className={styles.photoCard} key={label} data-size={index === 0 ? 'large' : 'small'}>
              <div className={styles.photoPlaceholder} role="img" aria-label={`${photoPlaceholder}: ${caption}`}>
                <span aria-hidden="true"><ImagePlus /></span><strong>{photoPlaceholder}</strong>
              </div>
              <figcaption><strong>{label}</strong><span>{caption}</span></figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
