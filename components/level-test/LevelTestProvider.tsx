'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import styles from './LevelTest.module.css'

type LevelTestContextValue = { openLevelTest: () => void }
const LevelTestContext = createContext<LevelTestContextValue | null>(null)

const questions = [
  { title: 'هدفت از یادگیری زبان چیه؟', options: ['مکالمه روزمره', 'مهاجرت یا تحصیل', 'آمادگی آزمون', 'رشد شغلی'] },
  { title: 'الان چقدر می‌تونی صحبت کنی؟', options: ['تازه شروع کردم', 'جمله‌های ساده می‌سازم', 'مکالمه می‌کنم', 'تقریباً روان هستم'] }
]

export function LevelTestProvider({ children }: { children: ReactNode }) {
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
            <button className={styles.close} onClick={closeLevelTest} aria-label="بستن تعیین سطح">×</button>
            {step < questions.length ? (
              <>
                <div className={styles.progress}><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
                <small>مرحله {step + 1} از {questions.length}</small>
                <h2 id="level-test-title">{questions[step].title}</h2>
                <div className={styles.options}>
                  {questions[step].options.map((option) => <button key={option} onClick={() => setStep(step + 1)}>{option}<span>←</span></button>)}
                </div>
              </>
            ) : (
              <div className={styles.result}>
                <span>پیشنهاد پرتو آفتاب برای شما</span>
                <h2 id="level-test-title">مشاوره و تعیین مسیر اختصاصی</h2>
                <p>برای مشخص شدن سطح دقیق و انتخاب بهترین کلاس، یک جلسه تعیین سطح رایگان حضوری یا آنلاین رزرو کنید.</p>
                <a href="tel:03152230045">رزرو تعیین سطح رایگان ←</a>
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
