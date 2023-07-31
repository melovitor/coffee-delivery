import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 40px;
  gap: 32px;
  background: ${(props) => props.theme.background};
  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 18px;
    line-height: 1.3;
  }

  .AddressAndPaymentForm {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const CartWrapper = styled.div`
  width: 28rem;
  gap: 15px;
  display: flex;
  flex-direction: column;
`

export const CartContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 28rem;
  border-radius: 6px 36px;
  padding: 40px;

  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    width: 20rem;
    padding: 20px;
  }
`

export const TotalAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .values {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
    font-size: 14px;
    line-height: 1.3;
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 20px;
    line-height: 1.3;
  }
`

export const ButtonCheckout = styled.button`
  border: none;
  height: 46px;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
  padding: 8px 12px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.6;
  font-weight: bold;
`
