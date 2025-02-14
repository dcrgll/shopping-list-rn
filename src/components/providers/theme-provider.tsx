import { createContext, useContext, useEffect, useState } from 'react'
import { Appearance } from 'react-native'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'

import { darkTheme, lightTheme } from '@/lib/theme'

// Theme Context Type
interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

// Create Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === 'dark'
  )

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      console.log('colorScheme', colorScheme)
      setIsDarkMode(colorScheme === 'dark') // Force update
    })

    return () => subscription.remove() // Cleanup
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

// Custom Hook
export const useThemeSwitcher = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeSwitcher must be used within a ThemeProvider')
  }
  return context
}
