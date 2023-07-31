import { InputHTMLAttributes } from 'react'
import { InputContainer, InputWrapper } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: true | false
}

export function Input({ optional = false, ...props }: InputProps) {
  return (
    <InputWrapper>
      <InputContainer {...props} />
      <p>{optional ? 'Opcional' : ''}</p>
    </InputWrapper>
  )
}
