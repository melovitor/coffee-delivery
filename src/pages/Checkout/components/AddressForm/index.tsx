import { useState } from 'react'
import { Input } from '../Input'
import {
  AddressContainer,
  AddressInfoContainer,
  AddressFromWrapper,
  AddressWrapper,
} from './styles'
import { MapPinLine } from 'phosphor-react'

export function AddressForm() {
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

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
              <Input
                placeholder="CEP"
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <Input
              placeholder="Rua"
              onChange={(e) => setStreet(e.target.value)}
            />
            <div className="numberAdress">
              <div>
                <Input
                  placeholder="Número"
                  type="number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <Input
                placeholder="Complemento"
                optional
                onChange={(e) => setComplement(e.target.value)}
              />
            </div>
            <div className="city">
              <Input
                placeholder="Bairro"
                onChange={(e) => setNeighborhood(e.target.value)}
              />
              <Input
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
              />
              <div>
                <Input
                  placeholder="UF"
                  onChange={(e) => setUf(e.target.value)}
                />
              </div>
            </div>
          </AddressInfoContainer>
        </AddressContainer>
      </AddressWrapper>
    </AddressFromWrapper>
  )
}
