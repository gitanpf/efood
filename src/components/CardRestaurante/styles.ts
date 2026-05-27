import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: ${cores.backgroundCard};
  display: flex;
  flex-direction: column;
`

export const ImagemContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  padding: 8px;
  border-right: 1px solid ${cores.fontBody};
  border-bottom: 1px solid ${cores.fontBody};
  border-left: 1px solid ${cores.fontBody};
  display: flex;
  flex-direction: column;
`

export const LinhaTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.fontBody};
`

export const Nota = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.fontBody};
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BotaoFavoritar = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  color: ${cores.fontBody};
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.15);
  }
  &:focus {
    outline: none;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.fontBody};
  margin-bottom: 16px;
`

export const Botao = styled.a`
  background-color: ${cores.fontBody};
  color: ${cores.backgroundCard};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  align-self: flex-start;
  display: inline-block;
`
