import styled from 'styled-components'

export const SuccessWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  line-height: 1.3;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 32px;
    font-family: 'Baloo 2';
  }
  p {
    color: ${(props) => props.theme['base-subtilte']};
    font-size: 20px;
  }

  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    align-items: center;
  }
`

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 102px;
  margin-top: 40px;
  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`
export const InfoCardWrapper = styled.div`
  width: 32.875rem;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
  padding: 2px;
  border-radius: 6px 36px;

  @media (max-width: ${(props) => props.theme['medium-size']}px) {
    width: 20rem;
  }
`
export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.background};
  border-radius: 4px 34px;
  padding: 40px;
  gap: 32px;

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    font-size: 16px;
  }
`
export const IconContainer = styled.div`
  display: flex;
  gap: 12px;
`
export const IconBase = styled.div`
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 50%;
  color: ${(props) => props.theme.background};
`
export const PinColor = styled(IconBase)`
  background: ${(props) => props.theme.purple};
`
export const TimerColor = styled(IconBase)`
  background: ${(props) => props.theme.yellow};
`
export const MoneyColor = styled(IconBase)`
  background: ${(props) => props.theme['yellow-dark']};
`
