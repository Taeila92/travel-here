import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding-top: 4px;
  ${(props)=>{
    if(!props.isPc){
      return css`
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 150px;
        padding-right: 20px;
        transition: 0.3s;
        transform: ${(props) => props.isNavOpened ? '0' : 'translateY(-10rem)'};
      `;
    }
  }}

`;

const Ul = styled.ul`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
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

const StyledNav = styled(NavLink)`
  transition: 0.2s;
  padding: 10px 40px 10px;
  color: white;
`;

export { Container, Ul, Li, StyledNav };
