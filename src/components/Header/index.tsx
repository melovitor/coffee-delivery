import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../components/contexts/CartContext'
import {
  HeaderContainer,
  InfoContainer,
  CityContainer,
  CartContainer,
  Notification,
} from './styles'

export function Header() {
  const { amoutItems } = useContext(CartContext)

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
            <Notification>{amoutItems}</Notification>
            <ShoppingCart size={22} weight="fill" />
          </CartContainer>
        </NavLink>
      </InfoContainer>
    </HeaderContainer>
  )
}
