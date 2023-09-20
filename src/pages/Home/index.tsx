import React from 'react'
import logoVertical from '../../assets/LETSWATER LOGO VERTICAL-150923-V1.png'
import twoBottles from '../../assets/AF_LETSWATHER_3D_EMBALAGEM_01_150923_V7.png'

import { Container, Content, Logo, Text } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoVertical} alt="" />
        </Logo>
        <img src={twoBottles} alt="" />
      </Content>
      <Text>
        Uma{' '}
        <strong>
          Solução
          <br /> de mídia
        </strong>{' '}
        consciente
      </Text>
    </Container>
  )
}
