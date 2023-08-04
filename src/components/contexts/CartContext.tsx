import { createContext, ReactNode, useState } from 'react'

interface ItemData {
  id: number
  amount: number
}
// interface ItemData {
//   id: number
//   title: string
//   price: string
//   image: string
//   description: string
//   tags: string[]
// }

interface CartArray {
  amoutItems: number
  cartItems: ItemData[]
  setAddItems: () => void
  setDeleteItems: () => void
  AddCartItems: (item: ItemData) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartArray)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [amoutItems, setAmountItems] = useState(0)
  const [cartItems, setCartItems] = useState<ItemData[]>([])

  function setAddItems() {
    setAmountItems(amoutItems + 1)
  }

  function setDeleteItems() {
    setAmountItems(amoutItems - 1)
  }

  function AddCartItems(itemData: ItemData) {
    const itemsWithoutitemData = cartItems.filter(
      (item) => item.id !== itemData.id,
    )
    itemsWithoutitemData.push(itemData)
    setCartItems(itemsWithoutitemData)
  }

  return (
    <CartContext.Provider
      value={{
        setAddItems,
        amoutItems,
        setDeleteItems,
        AddCartItems,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
