import { Input } from '../Input'
import {
  AddressContainer,
  AddressInfoContainer,
  AddressFromWrapper,
  AddressWrapper,
} from './styles'
import { MapPinLine } from 'phosphor-react'

export function AddressForm() {
  return (
    <AddressFromWrapper>
      <h1>Complete seu pedido</h1>
      <AddressWrapper>
        <AddressContainer>
          <div>
            <MapPinLine size={22} />
            <div>
              <h1>Endereço de Entrega</h1>
              <h2>Informe o endereço onde deseja receber seu pedido</h2>
            </div>
          </div>
          <AddressInfoContainer>
            <div className="CEP">
              <Input placeholder="CEP" />
            </div>
            <Input placeholder="Rua" />
            <div className="numberAdress">
              <div>
                <Input placeholder="Número" />
              </div>
              <Input placeholder="Complemento" optional />
            </div>
            <div className="city">
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <div>
                <Input placeholder="UF" />
              </div>
            </div>
          </AddressInfoContainer>
        </AddressContainer>
      </AddressWrapper>
    </AddressFromWrapper>
  )
}
