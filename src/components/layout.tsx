import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

import { useThemeSwitcher } from './providers/theme-provider'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useThemeSwitcher()

  return (
    <Container>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      {children}
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`
