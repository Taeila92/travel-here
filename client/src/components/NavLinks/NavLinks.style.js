import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.div`
  width: 100vw;
  padding-bottom: 1rem;
  `;


const Container = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  ${(props) => {
    if (!props.isPc) {
      return css`
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 250px;
        transition: 0.3s;
        transform: ${(props) =>
          props.isNavOpened ? "0" : "translateY(-240px)"};
        align-items: ${(props) =>
          props.isNavOpened && "flex-start"};
      `;
    }
  }} 
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  font-weight: bold;
  ${(props) => {
    if (!props.isPc) {
      return css`
        flex-direction: ${(props) =>
          props.isNavOpened ? "row" : "column"};
        justify-content: ${(props) =>
          props.isNavOpened ? "flex-end" : "center"};
        margin-bottom: ${(props) =>
          props.isNavOpened ? "0" : "2rem"};
      `;
    }
  }} 
  li {
    ${(props) => {
    if (!props.isPc) {
      return css`
        margin: ${(props) =>
          props.isNavOpened ? "0 0 0 5rem" : "0.2rem 0 1.5rem 0"};
      `;
      }
    }} 
  }
`;

const Li = styled.li`
  margin-left: 5rem;
  font-size: 1.5rem;
  a {
    color: white;
  }
  
`;

const Button = styled.button`
  padding: 0;
  font-weight: bold;
  margin-right: 3rem;
  font-size: 1.5rem;
  color: white;
  border: none;
  background: transparent;
  ${(props) => {
  if (!props.isPc) {
    return css`
      margin-right: ${(props) =>
        props.isNavOpened || "0"};
    `;
  }
  }} 
`;

const StyledNav = styled(NavLink)`

`;

export { Container, Ul, Li, Button, Header, StyledNav };
