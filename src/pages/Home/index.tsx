import React from 'react'
import TodoList from '../../components/TodoList'
import { Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  )
}
