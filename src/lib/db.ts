import { collection, getDocs, getFirestore } from 'firebase/firestore'

import { app } from './firebase'

export const db = getFirestore(app)

export const getShoppingList = async () => {
  const querySnapshot = await getDocs(collection(db, 'shoppingList'))
  const shoppingList = querySnapshot.docs.map((doc) => doc.data())
  return shoppingList
}
