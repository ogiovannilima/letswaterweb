import styled from 'styled-components'

export const Container = styled.div`
  /* @media (min-width: 1024px) { */
  height: 75vh;
  width: 100vw;
  background-color: ${(props) => props.theme['background-color']};
  padding: 4rem;
  /* } */
`

export const Content = styled.div`
  /* @media (min-width: 1024px) { */
  display: flex;
  align-items: center;
  justify-content: space-between;

  img:nth-child(2) {
    height: 35rem;
    margin-top: 4rem;
  }
  /* } */
`

export const Logo = styled.div`
  /* @media (min-width: 1024px) { */
  img {
    position: absolute;
    height: 45rem;
    top: 6.188rem;
    /* } */
  }
`

export const Title = styled.p`
  /* @media (min-width: 1024px) { */
  font-size: 4rem;
  margin: 0 0 0 14rem;
  font-weight: 100;
  position: absolute;
  top: 49rem;
  /* } */
`

export const GoalsContent = styled.div`
  width: 100%;
  justify-content: center;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  padding: 4rem;

  img {
    height: 18rem;
  }
`
export const ImageCombo = styled.div`
  display: flex;
  justify-content: space-between;

  img:nth-child(2) {
    height: 16rem;
    margin-top: 4rem;
    position: absolute;
    margin-left: 23rem;
    top: 82.5rem;
  }
`

export const SmallText = styled.p`
  width: 18rem;
  text-align: right;
  font-size: 20px;
  font-weight: 300;
  margin: 5rem 0 0 8rem;
`

export const BigText = styled.p`
  width: 21rem;
  font-size: 20px;
  font-weight: 300;
  margin-left: 10rem;
`
