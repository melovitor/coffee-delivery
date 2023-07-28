import { CoffeeCard } from '../../components/CoffeeCard'
import { Intro } from './components/Intro'
import { Cards } from './styles'

export function Home() {
  return (
    <>
      <Intro />
      <Cards>
        <CoffeeCard cardType="CATALOG" />
        <CoffeeCard cardType="CART" />
      </Cards>
    </>
  )
}
