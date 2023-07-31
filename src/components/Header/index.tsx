import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
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
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <InfoContainer>
        <CityContainer>
          <MapPin size={22} weight="fill" />
          <p>São Paulo, SP</p>
        </CityContainer>
        <NavLink to="checkout" title="Checkout">
          <CartContainer>
            <ShoppingCart size={22} weight="fill" />
          </CartContainer>
        </NavLink>
      </InfoContainer>
    </HeaderContainer>
  )
}
