import { Card, Imagem, Titulo, Descricao, Botao } from './styles'
import pizza from '../../assets/image/pizza.png'

export const CardCardapio = () => (
  <Card>
    <Imagem src={pizza} alt="Pizza de marguerita" />
    <Titulo>Pizza Marguerita</Titulo>
    <Descricao>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default CardCardapio
