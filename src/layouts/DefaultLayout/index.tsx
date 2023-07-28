import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer, LayoutWrapper } from './styles'

export function DefaultLayout() {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </LayoutWrapper>
  )
}
