'use client'

import styles from './FeatureBar.module.css'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { content } from '@/data/content'

export function FeatureBar() {
  const { locale } = useLanguage()
  return <div className={styles.bar}><div>{content[locale].features.map((item,index)=><span key={item}>{item}{index<content[locale].features.length-1&&<b>✦</b>}</span>)}</div></div>
}
