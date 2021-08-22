import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  span {
    margin-top: 120px;
    border-radius: 1rem;
    z-index: 1;
    h3 {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 700;
      font-size: 2rem;
      margin: 0.5rem;
      text-align: center;
      @media screen and (max-width: 820px) {
        font-size: 1rem;
      }
    }
    div {
      position: relative;

      max-height: 17vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin: 10px;
      border-radius: 10px;
      img {
        width: 120%;
      }
    }
  }
`;

const ArrowStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  top: 50%;
  transition: 0.5s;
  :hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  ${(props) => {
    if (props.right) {
      return css`
        right: 0;
      `;
    } else {
      return css`
        left: 0;
      `;
    }
  }}
`;
const Relative = {
  position: "relative",
};
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

export { Container, LinkStyle, ArrowStyle, Relative };
