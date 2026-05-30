import styled from 'styled-components'
import banner from '../../assets/image/banner.png'

export const BannerImage = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 280px;
  position: relative;
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 32px 0;
  box-sizing: border-box;

  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    height: calc(100% - 0px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 216px;
  }
`

export const TipoRestaurante = styled.span`
  color: #ffffff;
  font-weight: 100;
  font-size: 32px;
  opacity: 0.8;
`

export const NomeRestaurante = styled.h1`
  color: #ffffff;
  font-weight: 900;
  font-size: 32px;
  margin: 0;
`
