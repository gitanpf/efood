import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;
`

export const Links = styled.a`
  color: ${cores.fontBody};
  text-decoration: none;
`
