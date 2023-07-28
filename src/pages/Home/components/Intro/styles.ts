import styled from 'styled-components'

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 92px 0;
  gap: 56px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;

    div {
      text-align: center;
    }

    img {
      width: 90%;
    }
  }
`
export const IntroContainer = styled.div`
  width: 100%;
  text-align: left;
  line-height: 1.3;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2';
    font-size: 48px;
  }
  h2 {
    margin-top: 1rem;
    font-size: 20px;
    font-weight: normal;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 16px;
  }
`

export const Items = styled.div`
  margin-top: 4.125rem;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 231px 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const ItemBase = styled.div`
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
`

const IconBase = styled.div`
  padding: 8px;
  border-radius: 50%;
  display: flex;
`

export const CartContainer = styled(IconBase)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const PackageContainer = styled(IconBase)`
  background: ${(props) => props.theme['base-text']};
`
export const TimerContainer = styled(IconBase)`
  background: ${(props) => props.theme.yellow};
`
export const CoffeeContainer = styled(IconBase)`
  background: ${(props) => props.theme.purple};
`
