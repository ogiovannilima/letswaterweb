import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['background-color']};
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
`

export const Logo = styled.div`
  color: ${(props) => props.theme.logo};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;

  svg {
    width: 2rem;
    height: 2rem;
  }
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.7);
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
`

export const DarkModeButton = styled.div`
  svg {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.logo};
  }
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.7);
  }
`
export const CleanTaskButton = styled.div`
  svg {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.logo};
  }
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.7);
  }
`
