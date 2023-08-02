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
  cartItems: number
  setItems: (items: ItemData[]) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartArray)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ItemData[]>([])
  const [cartItems, setCartItems] = useState(0)

  function setItems(item: ItemData[]) {
    setCart((state) => [...state, item])
    setCartItems(cart.length)
  }

  return (
    <CartContext.Provider value={{ setItems, cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
