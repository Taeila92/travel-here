import { NavLink } from "react-router-dom";
import * as S from "./NavLinks.style";
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  transition: 0.2s;
  padding: 10px 40px 10px;
  color: white;
`;

const activeStyle = { color: "red" };
export default function NavLinks({ active }) {
  return (
    <S.Container active={active}>
      <S.Ul>
        <S.Li>
          <StyledNav to="/" activeStyle={activeStyle} exact>
            Home
          </StyledNav>
        </S.Li>
        <S.Li>
          <StyledNav to="/CategoryList" activeStyle={activeStyle} exact>
            Blog
          </StyledNav>
        </S.Li>
        <S.Li>
          <StyledNav to="/Login" activeStyle={activeStyle} exact>
            Login
          </StyledNav>
        </S.Li>
      </S.Ul>
    </S.Container>
  );
}
