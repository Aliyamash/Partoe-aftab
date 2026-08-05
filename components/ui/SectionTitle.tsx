type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'start' | 'center'
  light?: boolean
}

export function SectionTitle({ eyebrow, title, description, align = 'start', light = false }: SectionTitleProps) {
  return (
    <div className={`sectionTitle sectionTitle--${align}${light ? ' sectionTitle--light' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
