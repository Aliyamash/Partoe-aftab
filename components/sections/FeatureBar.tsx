'use client'

import { Sparkles } from 'lucide-react'
import styles from './FeatureBar.module.css'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'

export function FeatureBar() {
  const { locale } = useLanguage()
  return <div className={styles.bar} data-reveal><div>{content[locale].features.map((item,index)=><span key={item}>{item}{index<content[locale].features.length-1&&<b><Sparkles aria-hidden="true" /></b>}</span>)}</div></div>
}
