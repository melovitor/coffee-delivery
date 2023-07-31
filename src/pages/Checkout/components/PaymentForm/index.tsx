import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ButtonCard, PaymentFormWrapper, PaymentMethods } from './styles'
import { useState } from 'react'

export function PaymentForm() {
  const [credit, setCredit] = useState('')
  const [debit, setDebit] = useState('')
  const [money, setMoney] = useState('')

  function handleSelected(e: any) {
    const buttonId = e.target.id
    if (buttonId === 'credit') {
      setCredit('selected')
      setDebit('')
      setMoney('')
    }
    if (buttonId === 'debit') {
      setDebit('selected')
      setCredit('')
      setMoney('')
    }
    if (buttonId === 'money') {
      setMoney('selected')
      setDebit('')
      setCredit('')
    }
  }

  return (
    <PaymentFormWrapper>
      <div>
        <CurrencyDollar size={22} />
        <div>
          <h1>Pagamento</h1>
          <h2>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </h2>
        </div>
      </div>
      <PaymentMethods>
        <ButtonCard
          onClick={(e) => handleSelected(e)}
          className={credit}
          id="credit"
        >
          <CreditCard size={16} />
          <p>Cartão de crédito</p>
        </ButtonCard>
        <ButtonCard
          onClick={(e) => handleSelected(e)}
          className={debit}
          id="debit"
        >
          <Bank size={16} />
          <p>Cartão de débito</p>
        </ButtonCard>
        <ButtonCard
          onClick={(e) => handleSelected(e)}
          className={money}
          id="money"
        >
          <Money size={16} />
          <p>Dinheiro</p>
        </ButtonCard>
      </PaymentMethods>
    </PaymentFormWrapper>
  )
}
