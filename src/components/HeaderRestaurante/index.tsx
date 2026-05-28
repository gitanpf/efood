import { Container } from './styles'
import logo from '../../assets/image/logo.png'

export const HeaderRestaurante = () => (
  <Container>
    <a href="#">Restaurante</a>
    <img src={logo} alt="Logo efood" />
    <a href="#">0 produto(s) no carrinho</a>
  </Container>
)

export default HeaderRestaurante
