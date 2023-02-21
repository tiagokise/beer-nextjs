import { useCallback } from 'react';
import { useState, useEffect } from "react";
import * as S from './BeerCard.style';
import iconLike from "../../images/like.svg";
import iconLike2 from "../../images/liked.svg";
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function BeerCard({loading, isOpen, setIsOpen, i, ...props}){

  return(
    <S.BeerCard loading={loading} {...props}>
      <S.BeerImage src={props.image_url} alt="Foto" />
      <S.Descriptions>
        <S.BeerName>{props.name}</S.BeerName>
      </S.Descriptions>
    </S.BeerCard>
  )
}