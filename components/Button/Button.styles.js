import styled, {css} from 'styled-components';

export const StyledButton = styled.button`
  ${({variant}) => css`
    height: 48px;
    border-radius: 50px;
    font-size: 16px;  
    font-weight: bold;
    max-width: fit-content;
    padding: 6px 24px;
    ${variant === 'primary' && css`
      background-color: #999999;
      color: #000000;
      :hover{
        background-color: #99999970;
        color: #ffffff;

      }
    `}
    ${variant === 'secondary' && css`
      background-color: #cccccc;
      border: 1px solid #000000;
      :hover{
        background-color: #888888;
        color: #ffffff;
        border: 1px solid transparent;


      }
    `}
  `}
`;
