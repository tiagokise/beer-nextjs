import * as S from './Button.styles'

export default function Button({label, children, ...props}){
  return(
    <S.StyledButton {...props}>
      {label}
      {children}
    </S.StyledButton>
  )
}