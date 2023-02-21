import { useRouter } from "next/router";
import Button from "../../components/Button";
import * as S from './Home.style'
import logo from '../../images/logo.png'

export default function Home() {
  const router = useRouter()
  return (
    <S.Home>
      <S.BeerLogo alt='ĺogo' src={logo} width={400} height={400} className="logo"/>
      <S.HomeButton onClick={() => router.push('/cervejas')} variant='primary' label="Conheça nossas cervejas!!"/>
    </S.Home>
  )
}
