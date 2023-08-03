import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background: ${(props) => props.theme.background};

  * {
    text-decoration: none;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`
export const CityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: ${(props) => props.theme['purple-light']};
  padding: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme.purple};

  p {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  position: relative;
`
export const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 11px;
`
