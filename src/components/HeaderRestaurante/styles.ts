import styled from 'styled-components'
import { cores } from '../../styles'
import hero from '../../assets/image/hero.png'

export const HeaderContainer = styled.header`
  background-image: url(${hero});
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center;
  padding: 40px 0;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  a {
    text-decoration: none;
    color: ${cores.fontBody};
    font-weight: 900;
    font-size: 18px;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    height: auto;
  }
`
