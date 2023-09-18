import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 720px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  width: 100%;
`
export const Title = styled.h1`
  color: ${(props) => props.theme['font-color']};
  margin-bottom: 1rem;
  letter-spacing: 0.3rem;
`
export const SubTitle = styled.h3`
  color: ${(props) => props.theme['font-color']};
  font-weight: 100;
  letter-spacing: 0.5rem;
`

export const List = styled.div`
  width: 100%;
  input {
    border: 0;
    height: 3.5rem;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    font-size: 1.5rem;
  }
`
