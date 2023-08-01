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

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="AddressAndPaymentForm">
        <AddressForm />
        <PaymentForm />
      </div>
      <CartWrapper>
        <h1>Cafés selecionados</h1>

        <CartContainer>
          <CoffeeCard
            description="teste"
            id={0}
            name="teste"
            price="99"
            cardType="CART"
            src="teste"
          />
          <CoffeeCard
            description="teste"
            id={0}
            name="teste"
            price="99"
            cardType="CART"
            src="teste"
          />

          <TotalAmountContainer>
            <div className="values">
              <p>Total de itens</p>
              <p>R$ 29,70</p>
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
