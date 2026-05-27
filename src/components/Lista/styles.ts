import styled from 'styled-components'

export const ContainerLista = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px; 
  row-gap: 48px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
    padding: 0 16px;
  }
`