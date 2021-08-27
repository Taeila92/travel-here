import styled, { css } from "styled-components";

const Header = styled.header`
  position: relative;
  background-color: transparent;
  height: 100px;
  z-index: 10;
  width: 100vw;
  display: flex;
  justify-content: center;
  ${(props) => {
    if (props.isNavOpened) {
      return css`
        height: 250px;
      `;
    }
  }}
`;

export { Header };
