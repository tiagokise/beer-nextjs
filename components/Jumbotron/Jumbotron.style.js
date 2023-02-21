import Image from 'next/image';
import styled from 'styled-components';

export const Jumbotron = styled.div`
  background: #260700;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  height: 70vh;
  padding: 0 20vw 0 0;
  gap: 25%;
  overflow: hidden;
`;
export const BeerLogo = styled(Image)`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 10vw;
  height: auto;
`

export const BeerInfoWrapper = styled.div`
  height: auto;
  width: 30vw;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  

`;
export const BeerDescriptionWrapper = styled.div`
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

`;

export const BeerDescription = styled.h3`
  color: #999999;
  line-height: 1.8;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 100;

`;

export const BeerName = styled.p`
  color: #999999;
  line-height: 1.6;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  display: block;
  text-transform: uppercase;

`
export const BeerImage = styled(Image)`
  width: 11vw;
  height: auto;
  object-fit: contain;
  min-height: 53vh;
  max-height: 53vh;
  box-shadow:
    0 0 60px 30px #d1981b,  /* inner white */
    0 0 80px 130px #d1981b, /* middle magenta */
    0 0 400px 200px #260700; /* outer cyan */
  background-color: #d1981b;
  z-index: 1;
`;

export const BeerDataWrapper = styled.div`
  color: #999999;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  ::before{
    position: absolute;
    display: block;
    top: -5px;
    content: '';
    width: 100%;
    height: 1px;
    background: #FFFFFF;  
  }

  ::after{
    position: absolute;
    display: block;
    bottom: -5px;

    content: '';
    width: 100%;
    height: 1px;
    background: #FFFFFF;
  }
  >span{

    display: flex;
    justify-content: space-between;
  }
  >span:last-child{
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    >p:first-child{
      margin-bottom: 8px;
    }
  }
`
export const DataLabel = styled.p`
  font-weight: 600;
`
export const DataValue = styled.p`
  font-weight: 100;
  line-height: 1.4;

`