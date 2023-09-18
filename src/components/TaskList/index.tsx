import React from 'react'

import { ActionButton, Container, Task } from './styles'
import { BsCheckLg } from 'react-icons/bs'

const TaskList: React.FC = () => {
  return (
    <Container>
      <Task>task ummmmmmmmmmcmcmcmcmcmcmcmcmcmcmmccmcmcmcmcmcmcmcmcmcm</Task>
      <ActionButton>
        <BsCheckLg />
      </ActionButton>
    </Container>
  )
}

export default TaskList
