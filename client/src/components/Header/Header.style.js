import styled, { css } from "styled-components";

const Header = styled.header`
  position: relative;
  background-color: transparent;
  ${(props)=>{
    if(props.isPc){
      return css`
        height : 5rem;
      `;
    } else {
      return css`
        height : 2rem;
      `;
    }
  }}
  z-index: 10;
`;

export { Header };
