import React from 'react'
import { Plus } from 'phosphor-react-native'
import { Switch, TextInput } from 'react-native'
import styled from 'styled-components/native'

import { getShoppingList } from '@/lib/db'
import List from '@/components/list'

import { useThemeSwitcher } from '../providers/theme-provider'

export default function HomeScreen() {
  const { isDarkMode, toggleTheme, theme } = useThemeSwitcher()

  const data = getShoppingList()

  console.log(data)
  return (
    <Container>
      <Heading>
        <HeadingText> Shopping List</HeadingText>

        <AddNewItemButton
          onPress={() => {
            console.log('Add new item')
          }}
        >
          <Icon color={theme.primaryForeground} />
        </AddNewItemButton>
      </Heading>

      <List />

      <TextInput />
      <Switch onValueChange={toggleTheme} value={isDarkMode} />
    </Container>
  )
}

const Heading = styled.View`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const HeadingText = styled.Text`
  color: ${({ theme }) => theme.foreground};
  font-weight: bold;
  font-size: 32px;
`

const Container = styled.View`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  flex: 1;
  width: 100%;
  padding: 20px;
`

const AddNewItemButton = styled.TouchableOpacity`
  border-radius: 5px;
`

const Icon = styled(Plus)`
  size: 32px;
`
