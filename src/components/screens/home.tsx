import { Switch } from 'react-native'
import styled from 'styled-components/native'

import { useThemeSwitcher } from '../providers/theme-provider'

export default function HomeScreen() {
  const { isDarkMode, toggleTheme } = useThemeSwitcher()
  return (
    <Container>
      <Heading>Lets use dark mode</Heading>
      <Switch onValueChange={toggleTheme} value={isDarkMode} />
    </Container>
  )
}

const Heading = styled.Text`
  color: ${({ theme }) => theme.foreground};
`

const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  flex: 1;
  justify-content: center;
`
