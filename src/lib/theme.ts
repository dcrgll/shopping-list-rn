import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  background: 'hsl(48, 100%, 97%)',
  foreground: 'hsl(0, 3%, 6%)',
  card: 'hsl(48, 100%, 97%)',
  cardForeground: 'hsl(0, 3%, 6%)',
  popover: 'hsl(48, 100%, 97%)',
  popoverForeground: 'hsl(0, 3%, 6%)',
  primary: 'hsl(0, 3%, 6%)',
  primaryForeground: 'hsl(208, 49%, 50%)',
  secondary: 'hsl(50, 14%, 83%)',
  secondaryForeground: 'hsl(50, 3%, 42%)',
  muted: 'hsl(51, 33%, 92%)',
  mutedForeground: 'hsl(49, 7%, 70%)',
  accent: 'hsl(51, 21%, 88%)',
  accentForeground: 'hsl(50, 3%, 42%)',
  destructive: 'hsl(3, 62%, 42%)',
  destructiveForeground: 'hsl(48, 100%, 97%)',
  border: 'hsl(50, 14%, 83%)',
  input: 'hsl(50, 14%, 83%)',
  ring: 'hsl(55, 10%, 79%)',
  radius: '0.5rem'
}

const darkTheme: DefaultTheme = {
  background: 'hsl(0, 3%, 6%)',
  foreground: 'hsl(55, 10%, 79%)',
  card: 'hsl(0, 3%, 6%)',
  cardForeground: 'hsl(55, 10%, 79%)',
  popover: 'hsl(0, 3%, 6%)',
  popoverForeground: 'hsl(55, 10%, 79%)',
  primary: 'hsl(55, 10%, 79%)',
  primaryForeground: 'hsl(212, 68%, 39%)',
  secondary: 'hsl(40, 3%, 20%)',
  secondaryForeground: 'hsl(43, 3%, 52%)',
  muted: 'hsl(30, 4%, 11%)',
  mutedForeground: 'hsl(45, 2%, 33%)',
  accent: 'hsl(30, 3%, 15%)',
  accentForeground: 'hsl(43, 3%, 52%)',
  destructive: 'hsl(5, 61%, 54%)',
  destructiveForeground: 'hsl(0, 3%, 6%)',
  border: 'hsl(40, 3%, 20%)',
  input: 'hsl(40, 3%, 20%)',
  ring: 'hsl(30, 3%, 24%)',
  radius: '0.5rem'
}

export { darkTheme, lightTheme }
