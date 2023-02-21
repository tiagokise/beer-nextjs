import BeersList from "../../components/BeersList";
import * as S from '../../styles/Beers.style'

export default function Cervejas({beers}) {

  return (
    <S.Beers>
      <BeersList {...beers}/>
    </S.Beers>
  )
}
