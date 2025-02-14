import { faker } from '@faker-js/faker'

export function generateShoppingItems(count = 10) {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    removing: false
  }))
}
