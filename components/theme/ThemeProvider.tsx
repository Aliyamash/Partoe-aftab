'use client'

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

export type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const STORAGE_KEY = 'parto-aftab-theme'
const ThemeContext = createContext<ThemeContextValue | null>(null)

function setDocumentTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = window.localStorage.getItem(STORAGE_KEY)
    const initialTheme: Theme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : media.matches ? 'dark' : 'light'

    setTheme(initialTheme)
    setDocumentTheme(initialTheme)

    const followSystemTheme = (event: MediaQueryListEvent) => {
      if (window.localStorage.getItem(STORAGE_KEY)) return
      const nextTheme: Theme = event.matches ? 'dark' : 'light'
      setTheme(nextTheme)
      setDocumentTheme(nextTheme)
    }

    media.addEventListener('change', followSystemTheme)
    return () => media.removeEventListener('change', followSystemTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const nextTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem(STORAGE_KEY, nextTheme)
      setDocumentTheme(nextTheme)
      return nextTheme
    })
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}
