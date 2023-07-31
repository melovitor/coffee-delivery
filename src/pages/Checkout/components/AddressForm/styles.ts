import styled from 'styled-components'

export const AddressFromWrapper = styled.form`
  width: 37.5rem;
  gap: 15px;
  display: flex;
  flex-direction: column;
`

export const AddressWrapper = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 37.5rem;
  border-radius: 6px;
  padding: 40px;
  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    width: 20rem;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme['yellow-dark']};
  gap: 32px;

  > div {
    display: flex;
    line-height: 1.3;
    gap: 8px;

    h1 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 16px;
      font-weight: normal;
      font-family: 'Roboto', sans-serif;
    }
    h2 {
      color: ${(props) => props.theme['base-text']};
      font-size: 14px;
      font-weight: normal;
    }
  }

  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    div {
      flex-direction: column;
    }
  }
`

export const AddressInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  .CEP {
    width: 40%;
  }

  .numberAdress,
  .city {
    display: flex;
    gap: 12px;
  }
`
