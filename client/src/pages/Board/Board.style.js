import styled, { css } from "styled-components";

const Container = styled.div`
  margin : 5vh 5vw;
  margin-top: 0;
  padding : 3rem;
  padding-top: 0;
  display: flex;
  flex-direction : row;
  flex-wrap: wrap;
  ${(props) => {
    if (props.isNavOpened) {
      return css`
        transform: ${(props) =>
          props.isNavOpened ? "translateY(110px)" : "translateY(0)"};
        transition: all 300ms ease-in-out;
      `;
    }
  }} 
`;

export {
  Container
}