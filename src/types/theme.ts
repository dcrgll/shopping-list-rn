import 'styled-components'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    foreground: string
    card: string
    cardForeground: string
    popover: string
    popoverForeground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    muted: string
    mutedForeground: string
    accent: string
    accentForeground: string
    destructive: string
    destructiveForeground: string
    border: string
    input: string
    ring: string
    radius: string
  }
}
