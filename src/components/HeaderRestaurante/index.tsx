import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/image/logo.png'

const HeaderRestaurante = () => (
  <HeaderContainer>
    <div className="container">
      <NavLink to="/">Restaurantes</NavLink>
      <img src={logo} alt="Logo efood" />
      <NavLink to="/carrinho">0 produto(s) no carrinho</NavLink>
    </div>
  </HeaderContainer>
)

export default HeaderRestaurante
