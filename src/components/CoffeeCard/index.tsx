import { Minus, Plus, ShoppingCartSimple, Trash } from 'phosphor-react'
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
  Tag,
  Tags,
  Titles,
} from './styles'
import { useState } from 'react'

interface CardType {
  cardType?: 'CATALOG' | 'CART'
  id: number
  src: string
  name: string
  description: string
  tags: string[]
  price: string
}

export function CoffeeCard({
  cardType = 'CATALOG',
  id,
  name,
  description,
  tags,
  price,
  src,
}: CardType) {
  const [quantity, setQuantity] = useState(0)
  console.log(tags)

  return (
    <>
      {cardType === 'CATALOG' ? (
        <CardContainer>
          <CoffeeImage src={src} alt="" />
          <Tags>
            {tags.map((tag) => {
              return <Tag key={id}>{tag}</Tag>
            })}
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
                <span onClick={() => setQuantity(quantity - 1)}>
                  <Minus size={14} weight="bold" />
                </span>
                <p>{quantity}</p>
                <span onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={14} weight="bold" />
                </span>
              </Counter>
              <Cart>
                <ShoppingCartSimple size={22} weight="fill" />
              </Cart>
            </div>
          </Buy>
        </CardContainer>
      ) : (
        <CardCartContainer>
          <InfoCard>
            <CoffeeImage src={Expresso} alt="" />
            <Details>
              <h1>Expresso Tradicional</h1>
              <Actions>
                <Counter>
                  <span onClick={() => setQuantity(quantity - 1)}>
                    <Minus size={14} weight="bold" />
                  </span>
                  <p>{quantity}</p>
                  <span onClick={() => setQuantity(quantity + 1)}>
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
      )}
    </>
  )
}
