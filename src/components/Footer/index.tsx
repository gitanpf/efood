import { Rodape, Links, Logo, Texto } from './styles'
import logo from '../../assets/image/logo.png'
import instagram from '../../assets/image/icons/instagram.svg'
import facebook from '../../assets/image/icons/facebook.svg'
import twitter from '../../assets/image/icons/twitter.svg'

const Footer = () => (
  <Rodape>
    <Logo>
      <img src={logo} />
    </Logo>
    <Links>
      <a href="#">
        <img src={instagram} alt="Logo do Instagram" />
      </a>
      <a href="#">
        <img src={facebook} alt="Logo do Facebook" />
      </a>
      <a href="#">
        <img src={twitter} alt="Logo do Twitter" />
      </a>
    </Links>
    <Texto>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </Texto>
  </Rodape>
)

export default Footer
