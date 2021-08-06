import styled from "styled-components";

const Header = styled.header`
  position: relative;
  background-color: transparent;
  height: ${(props) => (props.active ? "150px" : "55px")};
  z-index: 10;
`;

export { Header };
