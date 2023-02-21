import { useContext, useState } from 'react';
import * as S from './Header.style';
import iconLike from "../../images/like.svg";

export default function Header(){
  const [isOpen, setIsOpen] = useState(false)
  
  return(
   <S.Header>
      <S.HeaderTitle>Beer</S.HeaderTitle>
       
   </S.Header>
  )
}