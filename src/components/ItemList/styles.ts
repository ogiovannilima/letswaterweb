import styled from 'styled-components'

export const ContainerItem = styled.form`
  display: flex;

  input {
    border-radius: 10px 0 0 10px;
  }

  button {
    border: 0;
    background-color: #fff;
    transition: filter 0.2s;
    border-radius: 0 10px 10px 0;
    &:hover {
      filter: brightness(0.9);
    }
  }

  svg {
    margin-right: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    transform: rotate(180deg);
  }
`
