import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 0 20px 20px;
`

export const CoffeeImage = styled.img`
  width: 120px;
  margin-bottom: 12px;
`

export const Tag = styled.p`
  padding: 4px 8px;
  border-radius: 100px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  line-height: 1.3;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  margin-bottom: 16px;
`
export const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  line-height: 1.3;
  gap: 8px;

  h1 {
    font-size: 20px;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
  }

  h2 {
    font-size: 14px;
    color: ${(props) => props.theme['base-label']};
    font-weight: normal;
    margin-bottom: 33px;
  }
`

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
  > div {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 8px;
  }
`

export const Counter = styled.div`
  height: 38px;
  display: flex;
  width: 4.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme['base-title']};
  background: ${(props) => props.theme['base-button']};

  span {
    color: ${(props) => props.theme.purple};
    display: flex;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
export const Cart = styled.button`
  border: none;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

export const Price = styled.p`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-text']};
  font-size: 24px;

  span {
    font-family: 'Roboto';
    font-size: 14px;
  }
`

export const CardCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['base-card']};
  padding: 4px 8px;
  height: 5rem;
  width: 23rem;

  img {
    width: 64px;
    margin: 0;
  }

  h1 {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: normal;
  }
`

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const CartPrice = styled.div`
  padding: 4px 0;
  height: 100%;
  display: flex;
  align-items: start;
  font-weight: bold;
`
export const Remove = styled.button`
  border: none;
  display: flex;
  height: 38px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  span {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hovered']};
  }
`
export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
export const Tags = styled.div`
  display: flex;
  gap: 4px;
`
