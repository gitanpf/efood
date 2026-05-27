import styled from 'styled-components'
import { cores } from '../../styles'

export const Rodape = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  background-color: ${cores.backgroundFooter};
  max-height: 298px;
`

export const Logo = styled.div`
  margin-top: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Links = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  img {
    width: 24px;
    height: 24px;
    gap: 8px;
    margin-top: 32px;
  }
`

export const Texto = styled.div`
  font-size: 10px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
`
