import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  border: 1px solid red;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin: 10px;
    }
  }
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: red;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export { Container, LinkStyle };
