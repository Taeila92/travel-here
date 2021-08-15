import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: -2rem;
  bottom: 0;
  display: flex;
  height: 120px;
  ${(props)=>{
    if(!props.isPc){
      return css`
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 120px;
        padding-right: 20px;
        transition: 0.3s;
        transform: ${(props) => props.isNavOpened ? 'translateY(35px)' : 'translateY(-90px)'};
      `;
    }
  }}
  //height: ${(props) => (props.isPc ? '150px' : '55px')};
`;

const Header = styled.div`
  position: relative;
  background-color: transparent;
  height: ${(props) => (props.isPc ? '100px' : '55px')};
`;

const Ul = styled.ul`
  display: flex;
  margin: 0 auto;
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

export { Container, Ul, Li, Button,Header, StyledNav };
