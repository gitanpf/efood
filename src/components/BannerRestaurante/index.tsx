import {
  BannerImage,
  Overlay,
  TipoRestaurante,
  NomeRestaurante
} from './styles'

const BannerRestaurante = () => (
  <BannerImage>
    <Overlay>
      <div className="container">
        <TipoRestaurante>Italiana</TipoRestaurante>
        <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
      </div>
    </Overlay>
  </BannerImage>
)

export default BannerRestaurante
