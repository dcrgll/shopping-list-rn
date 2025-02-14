import { useState } from 'react'
import { MotiView } from 'moti'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { generateShoppingItems } from '@/lib/faker'

export default function List() {
  const [items, setItems] = useState(generateShoppingItems(40))

  const removeItemFromList = (id: string) => {
    // Mark item as "removing" to trigger animation
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, removing: true } : item))
    )

    // Wait for animation before actually removing the item
    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }, 400) // Matches animation duration
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MotiView
          from={{ opacity: 1, scale: 1, translateY: 0 }}
          animate={
            item.removing
              ? { opacity: 0, scale: 0.8, translateY: -10 }
              : { opacity: 1, scale: 1, translateY: 0 }
          }
          transition={{ type: 'timing', duration: 300 }}
        >
          <ListItem>
            <ListItemButton onPress={() => removeItemFromList(item.id)}>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        </MotiView>
      )}
    />
  )
}

// Styled Components
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

const ListItemButton = styled.TouchableOpacity``
