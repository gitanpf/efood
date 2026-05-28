import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  display: flex;
  max-width: 320px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${cores.fontBody};
  border: solid 1px ${cores.fontBody};
`

export const Imagem = styled.img`
  max-width: 304px;
  height: auto;
`

export const Titulo = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.backgroundFooter};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${cores.backgroundFooter};
`

export const Botao = styled.button`
  max-width: 304px;
  height: 24px;
  background-color: ${cores.backgroundFooter};
  align-text: center;
`
