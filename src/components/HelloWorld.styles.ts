import styled from 'styled-components'

// EXAMPLE STYLE COMPONENT
export const HelloWorld = styled.h1`
  color: ${(props) => props.theme['teste-color']};
`
