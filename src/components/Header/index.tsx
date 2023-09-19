import React from 'react'

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <strong>
        <a href="#">início</a>
      </strong>
      <strong>
        <a href="#">let&apos;s water</a>
      </strong>
      <strong>
        <a href="#">conexão</a>
      </strong>
      <strong>
        <a href="#">social</a>
      </strong>
      <strong>
        <a href="#">contato</a>
      </strong>
      <strong>
        <a href="#">pt/en</a>
      </strong>
    </Container>
  )
}

export default Header
