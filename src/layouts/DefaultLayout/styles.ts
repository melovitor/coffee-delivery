import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  padding: 0rem 10rem;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`
