import styled from 'styled-components'

export const PaymentFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
  gap: 32px;
  color: ${(props) => props.theme.purple};

  > div {
    display: flex;
    line-height: 1.3;
    gap: 8px;
  }

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
  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    width: 20rem;
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .selected {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const ButtonCard = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
  border: none;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  gap: 12px;
  cursor: pointer;

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto';
    font-size: 11px;
    text-transform: uppercase;
    line-height: 1.3;
  }

  &:hover {
    background: ${(props) => props.theme['base-hovered']};
  }
`
