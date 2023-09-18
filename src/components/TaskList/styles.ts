import styled from 'styled-components'

export const Container = styled.div`
  color: ${(props) => props.theme['font-color']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`
export const Task = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  max-width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ActionButton = styled.button`
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme['font-color']};
  transition: filter 0.2s;
  border-radius: 0 10px 10px 0;
  &:hover {
    filter: brightness(0.9);
  }

  svg {
    width: 3rem;
    height: 3rem;
  }
`
