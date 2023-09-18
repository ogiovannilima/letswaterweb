import React from 'react'
import { ItemList } from '../ItemList'
import TaskList from '../TaskList'
import { Container, List, SubTitle, Title } from './styles'

const TodoList: React.FC = () => {
  return (
    <Container>
      <SubTitle>simple</SubTitle>
      <Title>TODOLIST</Title>
      <List>
        <ItemList />
        <TaskList />
      </List>
    </Container>
  )
}

export default TodoList
