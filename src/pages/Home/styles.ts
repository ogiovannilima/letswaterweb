import styled from 'styled-components'

export const Container = styled.div`
  height: 75vh;
  width: 100vw;
  background-color: ${(props) => props.theme['background-color']};
  padding: 4rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img:nth-child(2) {
    height: 35rem;
    margin-top: 4rem;
  }
`

export const Logo = styled.div`
  img {
    position: absolute;
    height: 45rem;
    top: 6.188rem;
  }
`

export const Text = styled.p`
  font-size: 4rem;
  margin: 0 0 0 14rem;
  font-weight: 100;
  position: absolute;
  top: 49rem;
`
