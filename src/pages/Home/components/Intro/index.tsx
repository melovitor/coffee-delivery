import Cup from '../../../../assets/coffee-cup.png'
import {
  IntroContainer,
  IntroWrapper,
  Items,
  ItemBase,
  CartContainer,
  PackageContainer,
  TimerContainer,
  CoffeeContainer,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <IntroWrapper>
      <IntroContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <Items>
          <ItemBase>
            <CartContainer>
              <ShoppingCart size={16} weight="fill" />
            </CartContainer>
            <p>Compra simples e segura</p>
          </ItemBase>
          <ItemBase>
            <PackageContainer>
              <Package size={16} weight="fill" />
            </PackageContainer>
            <p>Embalagem mantém o café intacto</p>
          </ItemBase>
          <ItemBase>
            <TimerContainer>
              <Timer size={16} weight="fill" />
            </TimerContainer>
            <p>Entrega rápida e rastreada</p>
          </ItemBase>
          <ItemBase>
            <CoffeeContainer>
              <Coffee size={16} weight="fill" />
            </CoffeeContainer>
            <p>O café chega fresquinho até você</p>
          </ItemBase>
        </Items>
      </IntroContainer>
      <img src={Cup} alt="Copo de café descartavel" srcSet="" />
    </IntroWrapper>
  )
}
