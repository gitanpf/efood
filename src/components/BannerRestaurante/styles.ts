import styled from 'styled-components'
import banner from '../../assets/image/banner.png'

export const Container = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-color: #00000079;
  color: #ffffff;
  font-size: 32px;
`

export const TipoRestaurante = styled.span`
  font-weight: 100;
`

export const NomeRestaurante = styled.h1`
  font-weight: 900;
`
