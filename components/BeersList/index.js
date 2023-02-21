import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BeerCard from '../BeerCard';
import Jumbotron from '../Jumbotron';
import * as S from './BeersList.style'

export default function BeersList(props) {
  console.log(props)
  const router = useRouter();
  const [beer, setBeer] = useState(0)
  const beers  = Object.values(props).filter((beer) => beer.image_url !== "https://images.punkapi.com/v2/keg.png");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1900 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 1900, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  const handleClick = useCallback((id) => setBeer(id), [setBeer])
  
  return (
    <>
      {beers.length && <Jumbotron beer={beers[beer]}/>}
      <S.BeersListWrapper>
        <Carousel responsive={responsive}>
          {beers?.length && beers.map((beer, i) => (
            <BeerCard key={beer.id} {...beer} onClick={() => handleClick(i)}/>
          ))}
        </Carousel>
      </S.BeersListWrapper>
    </>

  )
}
