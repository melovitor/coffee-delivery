import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { NavLink } from 'react-router-dom'
import {
  ButtonCheckout,
  CartContainer,
  CartWrapper,
  CheckoutContainer,
  TotalAmountContainer,
} from './styles'
import { CoffeeCard } from '../../components/CoffeeCard'
import { CartContext } from '../../components/contexts/CartContext'
import { useContext, useState } from 'react'
import { CoffeeList } from '../Home/CoffeeList'

export function Checkout() {
  const { cartItems } = useContext(CartContext)
  const [amount, setAmount] = useState(0)

  return (
    <CheckoutContainer>
      <div className="AddressAndPaymentForm">
        <AddressForm />
        <PaymentForm />
      </div>
      <CartWrapper>
        <h1>Cafés selecionados</h1>
        <CartContainer>
          {cartItems.map((item) => {
            let calculatedTotal = 0

            for (let i = 0; i < CoffeeList.length; i++) {
              if (CoffeeList[i].id === item.id) {
                const price = CoffeeList[i].price.replace(',', '.')
                const total = Number(price) * item.amount
                const totalFotmated = new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total)
                calculatedTotal = calculatedTotal + total
                return (
                  <CoffeeCard
                    key={item.id}
                    id={item.id}
                    name={CoffeeList[i].name}
                    price={totalFotmated}
                    cardType="CART"
                    src={CoffeeList[i].src}
                    amount={item.amount}
                  />
                )
              }
            }
            return null
          })}

          <TotalAmountContainer>
            <div className="values">
              <p>Total de itens</p>
              <p>{amount}</p>
            </div>
            <div className="values">
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>

            <NavLink to={'/success'} title="Confirmar pedido">
              <ButtonCheckout>Confirmar pedido</ButtonCheckout>
            </NavLink>
          </TotalAmountContainer>
        </CartContainer>
      </CartWrapper>
    </CheckoutContainer>
  )
}
