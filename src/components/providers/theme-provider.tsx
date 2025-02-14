import { createContext, useContext, useEffect, useState } from 'react'
import { Appearance } from 'react-native'
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider
} from 'styled-components/native'

import { darkTheme, lightTheme } from '@/lib/theme'

// Theme Context Type
interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
  theme: DefaultTheme
}

// Create Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === 'dark'
  )

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark') // Force update
    })

    return () => subscription.remove() // Cleanup
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  const whichTheme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        theme: whichTheme
      }}
    >
      <StyledThemeProvider theme={whichTheme}>{children}</StyledThemeProvider>
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
