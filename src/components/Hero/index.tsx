import { Container, Paragrafo, Titulo } from './styles'
import logo from '../../assets/image/logo.png'

const Hero = () => (
  <>
    <Container>
      <Titulo>
        <img src={logo} alt="Logo do efood" />
      </Titulo>
      <div>
        <Paragrafo>
          Viva experiências gastronômicas no conforto da sua casa
        </Paragrafo>
      </div>
    </Container>
  </>
)

export default Hero
