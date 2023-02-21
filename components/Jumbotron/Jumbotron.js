import { useMemo } from 'react'
import Button from '../Button'
import * as S from './Jumbotron.style'
import logo from '../../images/logo.png'

export default function Jumbotron({beer}){
  console.log(beer)
  //   abv
  //   ibu
  //   first_brewed
  //   attenuation_level
  //   ingredients{
  //     malt
  //     hops
  //     yeast
  //   }
  //   method{
  //     mash_temp
  //     fermentation
  //     twist
  //   }
  //   brewers_tips
  //   food_pairing
 

  return(
    <S.Jumbotron>
      <S.BeerLogo alt='ĺogo' src={logo} width={400} height={400} className="logo"/>
      <S.BeerInfoWrapper>
        <S.BeerDescriptionWrapper>
          <S.BeerDescription>{beer?.tagline}</S.BeerDescription>
        </S.BeerDescriptionWrapper>
        <S.BeerName>{beer?.name}</S.BeerName>
        <S.BeerDataWrapper>
          <span>
            <S.DataLabel>ABV</S.DataLabel>
            <S.DataValue>{beer.abv}</S.DataValue>
          </span>
          <span>
            <S.DataLabel>IBU</S.DataLabel>
            <S.DataValue>{beer.ibu}</S.DataValue>
          </span>
          <span>
            <S.DataLabel>First brewed</S.DataLabel>
            <S.DataValue>{beer.first_brewed}</S.DataValue>
          </span>
          <span>
            <S.DataLabel>Attenuation level</S.DataLabel>
            <S.DataValue>{beer.attenuation_level}</S.DataValue>
          </span>
          {/* <span>
            <S.DataLabel>Ingredients</S.DataLabel>
          </span>
          <span>
            <S.DataLabel>Malt</S.DataLabel>
            {beer?.ingredients.malt.map((ingredient) => {
              return <S.DataValue>{ingredient.name} - {ingredient.amount.value}</S.DataValue>

            })}
          </span>
          <span>
            <S.DataLabel>Hops</S.DataLabel>
            {beer?.ingredients.hops.map((ingredient) => {
              return <S.DataValue>{ingredient.name} - {ingredient.amount.value}</S.DataValue>

            })}
          </span>*/}
          <span>
            <S.DataLabel>Food pairing</S.DataLabel>
            <S.DataValue>{beer.food_pairing}</S.DataValue>
          </span> 
        </S.BeerDataWrapper>

      </S.BeerInfoWrapper>
      <S.BeerImage alt={beer?.name} src={beer?.image_url} width={300} height={1000} className="shadowfilter"/>
    </S.Jumbotron>
  )
}