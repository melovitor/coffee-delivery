import styled from 'styled-components'

export const Title = styled.p`
  font-family: 'Baloo 2';
  font-size: 32px;
  margin-top: 32px;
  margin-bottom: 52px;
  text-align: start;
  @media (max-width: ${(props) => props.theme['small-size']}px) {
    text-align: center;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Cards = styled.div`
  display: grid;
  margin-bottom: 20px;
  gap: 40px;
  flex-direction: column;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: ${(props) => props.theme['small-size']}px) {
    grid-template-columns: 1fr;
  }
`
