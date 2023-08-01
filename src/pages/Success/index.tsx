import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Delivery from '../../assets/Delivery.png'
import {
  IconContainer,
  InfoCardContainer,
  InfoCardWrapper,
  MoneyColor,
  PinColor,
  SuccessContainer,
  SuccessWrapper,
  TimerColor,
} from './styles'

export function Seccess() {
  return (
    <SuccessWrapper>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <SuccessContainer>
        <InfoCardWrapper>
          <InfoCardContainer>
            <IconContainer>
              <PinColor>
                <MapPin size={16} weight="fill" />
              </PinColor>
              <div>
                <p>
                  Entraga em <strong>Rua Dr. Rene Fernandes, 08</strong>
                </p>
                <p>Jd Lourdes - São Paulo, SP</p>
              </div>
            </IconContainer>
            <IconContainer>
              <TimerColor>
                <Timer size={16} weight="fill" />
              </TimerColor>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </IconContainer>
            <IconContainer>
              <MoneyColor color="RED">
                <CurrencyDollar size={16} weight="bold" />
              </MoneyColor>
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </IconContainer>
          </InfoCardContainer>
        </InfoCardWrapper>
        <img src={Delivery} alt="" srcSet="" />
      </SuccessContainer>
    </SuccessWrapper>
  )
}
