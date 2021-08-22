import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding-top: 4px;
  ${(props) => {
    if (!props.isPc) {
      return css`
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 150px;
        padding-right: 20px;
        transition: 0.3s;
        transform: ${(props) =>
          props.isNavOpened ? "0" : "translateY(-150px)"};
      `;
    }
  }}
`;

const Header = styled.header`
  position: relative;
  background-color: transparent;
`;

const Ul = styled.ul`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Li = styled.li`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 24px;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;

const StyledNav = styled(NavLink)`
  transition: 0.2s;
  padding: 10px 40px 10px;
  color: white;
`;

export { Container, Ul, Li, Button, Header, StyledNav };
