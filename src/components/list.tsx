import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { generateShoppingItems } from '@/lib/faker'

export default function List() {
  const items = generateShoppingItems(40)

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ListItem>
          <ListItemText>{item.name}</ListItemText>
        </ListItem>
      )}
    />
  )
}

const ListItem = styled.View`
  padding: 20px 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.foreground};
`

const ListItemText = styled.Text`
  color: ${({ theme }) => theme.foreground};
  font-size: 16px;
  font-weight: 500;
`
