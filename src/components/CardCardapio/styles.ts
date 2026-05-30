import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  background-color: ${cores.fontBody};
  padding: 8px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const Imagem = styled.img`
  width: 100%;  
  height: 167px;  
  object-fit: cover; 
`

export const Titulo = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: ${cores.backgroundFooter}; 
  margin: 8px 0;              
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${cores.backgroundFooter};
  margin-bottom: 8px;
`

export const Botao = styled.button`
  width: 100%;      
  padding: 4px 0;   
  background-color: ${cores.backgroundFooter};
  color: ${cores.fontBody};
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9; 
  }
`