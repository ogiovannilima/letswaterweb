import React from 'react'

import { BsSun, BsTrash, BsListCheck } from 'react-icons/bs'
import {
  CleanTaskButton,
  Container,
  ContainerButtons,
  DarkModeButton,
  Logo,
} from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <BsListCheck />
      </Logo>
      <ContainerButtons>
        <DarkModeButton>
          <BsSun />
        </DarkModeButton>
        <CleanTaskButton>
          <BsTrash />
        </CleanTaskButton>
      </ContainerButtons>
    </Container>
  )
}

export default Header
