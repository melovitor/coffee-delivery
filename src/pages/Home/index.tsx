import { CoffeeCard } from '../../components/CoffeeCard'
import { Intro } from './components/Intro'
import { Cards, CardsContainer, Title } from './styles'
import { CoffeeList } from './CoffeeList'

export function Home() {
  return (
    <>
      <Intro />
      <Title>Nossos cafés</Title>
      <CardsContainer>
        <Cards>
          {CoffeeList.map((coffee) => {
            return (
              <CoffeeCard
                id={coffee.id}
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
                tags={coffee.tags}
                src={coffee.src}
                key={coffee.id}
              />
            )
          })}
        </Cards>
      </CardsContainer>
    </>
  )
}
