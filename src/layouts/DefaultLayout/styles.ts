import styled from 'styled-components'
import Background from '../../assets/Background.png'

export const LayoutWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background};
  /* background-image: url(${Background});
  background-repeat: repeat-x; */
`
export const LayoutContainer = styled.div`
  max-width: 90rem;
  padding: 0rem 10rem;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    padding: 2rem 1.5rem;
  }
`
