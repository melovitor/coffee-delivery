import { Minus, Plus, ShoppingCartSimple, Trash } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Expresso from '../../assets/coffee/Expresso.png'
import {
  Actions,
  Buy,
  CardCartContainer,
  CardContainer,
  Cart,
  CartPrice,
  CoffeeImage,
  Counter,
  Details,
  InfoCard,
  Price,
  Remove,
  Separator,
  Tag,
  Tags,
  Titles,
} from './styles'
import { useState, useContext } from 'react'
import { CartContext } from '../../components/contexts/CartContext'

interface CardType {
  cardType?: 'CATALOG' | 'CART'
  id: number
  src: string
  name: string
  description: string
  tags?: string[]
  price: string
  amount: number
}

export function CoffeeCard({
  cardType = 'CATALOG',
  id,
  name,
  description,
  tags,
  price,
  src,
  amount,
}: CardType) {
  const [quantity, setQuantity] = useState(0)
  const { setAddItems, setDeleteItems } = useContext(CartContext)

  function handleAddItem() {
    setQuantity(quantity + 1)
    amount = quantity + 1
    setAddItems()
  }
  function handleDeleteItem() {
    setQuantity(quantity > 0 ? quantity - 1 : 0)
    amount = quantity > 0 ? quantity - 1 : 0
    if (quantity === 0) return
    setDeleteItems()
  }

  return (
    <>
      {cardType === 'CATALOG' ? (
        <CardContainer>
          <CoffeeImage src={src} alt="" />
          <Tags>
            {tags
              ? tags.map((tag) => {
                  return <Tag key={tag}>{tag}</Tag>
                })
              : []}
          </Tags>

          <Titles>
            <h1>{name}</h1>
            <h2>{description}</h2>
          </Titles>

          <Buy>
            <Price>
              <span>R$ </span>
              {price}
            </Price>
            <div>
              <Counter>
                <span onClick={handleDeleteItem}>
                  <Minus size={14} weight="bold" />
                </span>
                <p>{quantity}</p>
                <span onClick={handleAddItem}>
                  <Plus size={14} weight="bold" />
                </span>
              </Counter>
              <NavLink to="checkout" title="Checkout">
                <Cart>
                  <ShoppingCartSimple size={22} weight="fill" />
                </Cart>
              </NavLink>
            </div>
          </Buy>
        </CardContainer>
      ) : (
        <>
          <CardCartContainer>
            <InfoCard>
              <CoffeeImage src={Expresso} alt="" />
              <Details>
                <h1>Expresso Tradicional</h1>
                <Actions>
                  <Counter>
                    <span onClick={handleDeleteItem}>
                      <Minus size={14} weight="bold" />
                    </span>
                    <p>{quantity}</p>
                    <span onClick={handleAddItem}>
                      <Plus size={14} weight="bold" />
                    </span>
                  </Counter>
                  <Remove>
                    <span>
                      <Trash size={16} weight="bold" />
                    </span>
                    REMOVER
                  </Remove>
                </Actions>
              </Details>
            </InfoCard>

            <CartPrice>R$9,99</CartPrice>
          </CardCartContainer>
          <Separator></Separator>
        </>
      )}
    </>
  )
}
