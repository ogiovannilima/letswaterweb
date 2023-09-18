import React, { FormEvent, useState } from 'react'
import { BsCapslock } from 'react-icons/bs'

import { ContainerItem } from './styles'

interface ListTask {
  task: string
}

export const ItemList: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [listTask, setListTask] = useState<ListTask[]>([])
  const [task, setTask] = useState('')

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    console.log('add task=', listTask)
  }

  return (
    <ContainerItem onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit">
        <BsCapslock />
      </button>
    </ContainerItem>
  )
}
