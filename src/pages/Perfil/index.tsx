import Footer from '../../components/Footer'
import HeaderRestaurante from '../../components/HeaderRestaurante'
import Cardapio from '../../components/Cardapio'
import BannerRestaurante from '../../components/BannerRestaurante'
import { GlobalCSS } from '../../styles'

const Perfil = () => (
  <>
    <GlobalCSS />
    <HeaderRestaurante />
    <BannerRestaurante />
    <Cardapio />
    <Footer />
  </>
)

export default Perfil
