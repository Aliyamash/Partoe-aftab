'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { BadgeCheck, X } from 'lucide-react'
import styles from './LevelTest.module.css'
import { useLanguage } from '@/components/i18n/LanguageProvider'
import { DirectionalArrow } from '@/components/ui/DirectionalArrow'
import { content } from '@/data/content'

type LevelTestContextValue = { openLevelTest: () => void }
const LevelTestContext = createContext<LevelTestContextValue | null>(null)

export function LevelTestProvider({ children }: { children: ReactNode }) {
  const { locale } = useLanguage()
  const copy = content[locale].levelTest
  const questions = copy.questions.map(([title,options])=>({title,options}))
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(0)

  const openLevelTest = () => { setStep(0); setIsOpen(true) }
  const closeLevelTest = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && closeLevelTest()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown) }
  }, [isOpen])

  return (
    <LevelTestContext.Provider value={{ openLevelTest }}>
      {children}
      {isOpen && (
        <div className={styles.overlay} onMouseDown={closeLevelTest}>
          <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="level-test-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className={styles.close} onClick={closeLevelTest} aria-label={copy.close}><X aria-hidden="true" /></button>
            {step < questions.length ? (
              <>
                <div className={styles.progress}><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
                <small>{copy.stage} {step + 1} {copy.of} {questions.length}</small>
                <h2 id="level-test-title">{questions[step].title}</h2>
                <div className={styles.options}>
                  {questions[step].options.map((option) => <button key={option} onClick={() => setStep(step + 1)}>{option}<span><DirectionalArrow locale={locale} /></span></button>)}
                </div>
              </>
            ) : (
              <div className={styles.result}>
                <span><BadgeCheck aria-hidden="true" />{copy.resultLabel}</span>
                <h2 id="level-test-title">{copy.resultTitle}</h2>
                <p>{copy.resultText}</p>
                <a href="tel:03152230045">{copy.resultAction}<DirectionalArrow locale={locale} /></a>
              </div>
            )}
          </section>
        </div>
      )}
    </LevelTestContext.Provider>
  )
}

export function LevelTestButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  const context = useContext(LevelTestContext)
  if (!context) throw new Error('LevelTestButton must be used inside LevelTestProvider')
  return <button className={className} onClick={context.openLevelTest}>{children}</button>
}
