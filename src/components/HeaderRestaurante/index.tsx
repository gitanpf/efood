import { NavLink } from 'react-router-dom'
import { Container, Links } from './styles'
import logo from '../../assets/image/logo.png'

const HeaderRestaurante = () => (
  <Container>
    <Links>
      <NavLink to="/">Restaurante</NavLink>
    </Links>
    <img src={logo} alt="Logo efood" />
    <Links>
      <NavLink to="/carrinho">0 produto(s) no carrinho</NavLink>
    </Links>
  </Container>
)

export default HeaderRestaurante
