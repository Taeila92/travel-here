import styled, { css } from "styled-components";

const Header = styled.header`
  position: relative;
  background-color: transparent;
  height: 100px;
  z-index: 10;
  ${(props) => {
    if (!props.isPc) {
      return css`
        height: 150px;
      `;
    }
  }}
`;

export { Header };
