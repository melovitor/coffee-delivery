import { ShoppingCart, MapPin } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import {
  HeaderContainer,
  InfoContainer,
  CityContainer,
  CartContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />
      <InfoContainer>
        <CityContainer>
          <MapPin size={22} weight="fill" />
          <p>São Paulo, SP</p>
        </CityContainer>
        <CartContainer>
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </InfoContainer>
    </HeaderContainer>
  )
}
