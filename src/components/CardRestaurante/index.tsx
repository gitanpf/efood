import { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import {
  Card,
  ImagemContainer,
  InfoContainer,
  LinhaTitulo,
  Titulo,
  Nota,
  Descricao,
  Botao,
  BotaoFavoritar
} from './styles'

import restaurante from '../../assets/image/restaurante.png'

const CardRestaurante = () => {
  const [favorito, setFavorito] = useState(false)
  const alternaFavorito = () => {
    setFavorito(!favorito)
  }
  return (
    <Card>
      <ImagemContainer>
        <img src={restaurante} alt="Foto do restaurante" />
      </ImagemContainer>
      <InfoContainer>
        <LinhaTitulo>
          <Titulo>Hioki Sushi</Titulo>
          <Nota>
            4.9{' '}
            <BotaoFavoritar onClick={alternaFavorito} type="button">
              {favorito ? (
                <><AiFillStar /></> ) : ( <><AiOutlineStar /></>)}
            </BotaoFavoritar>
          </Nota>
        </LinhaTitulo>
        <Descricao>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis.
        </Descricao>
        <Botao href="#">Saiba mais</Botao>
      </InfoContainer>
    </Card>
  )
}

export default CardRestaurante
