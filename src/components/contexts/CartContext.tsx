import { createContext, ReactNode, useState } from 'react'

interface ItemData {
  id: number
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
  setAddItems: () => void
  setDeleteItems: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartArray)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [amoutItems, setAmountItems] = useState(0)

  function setAddItems() {
    setAmountItems(amoutItems + 1)
    console.log(amoutItems)
  }
  function setDeleteItems() {
    setAmountItems(amoutItems - 1)
    console.log(amoutItems)
  }

  return (
    <CartContext.Provider value={{ setAddItems, amoutItems, setDeleteItems }}>
      {children}
    </CartContext.Provider>
  )
}
