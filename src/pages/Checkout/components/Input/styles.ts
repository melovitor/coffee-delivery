import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 12px;
  p {
    color: ${(props) => props.theme['base-label']};
    font-style: italic;
    font-size: 12px;
  }

  &:focus-within {
    border: 2px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const InputContainer = styled.input`
  width: 100%;
  height: 100%;
  border-style: none;
  background: ${(props) => props.theme['base-input']};
`
