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
      z-index: 1;
      p {
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
        margin: 0.5rem;
      }
      div {
      }
    }
  }
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export { Container, LinkStyle };
